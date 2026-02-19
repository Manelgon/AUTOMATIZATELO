-- SUPABASE DATABASE SCHEMA
-- Project: Automatízalo
-- Last Updated: 2026-02-19

-- 1. EXTENSIONS
-- Required for uuid_generate_v4() or gen_random_uuid()
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. TABLES

-- Users Table: Stores user profile information and roles
-- This table is automatically populated when a user signs up via Supabase Auth
CREATE TYPE user_role AS ENUM ('admin', 'user', 'editor');

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    role user_role DEFAULT 'user',
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Leads Table: Stores form submissions from the contact page
CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Contact Information
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    
    -- Business Details
    client_type TEXT NOT NULL, -- 'empresa' or 'particular'
    service_interest TEXT NOT NULL, -- e.g., 'software_medida', 'ia_chatbots', etc.
    
    -- Additional Content
    message TEXT,
    
    -- Consent and Metadata
    privacy_accepted BOOLEAN NOT NULL DEFAULT FALSE,
    source TEXT DEFAULT 'web_form',
    score INTEGER DEFAULT 0,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. FUNCTIONS & TRIGGERS

-- Function to handle new user registration from Supabase Auth
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.users (id, email, full_name, role)
    VALUES (
        NEW.id, 
        NEW.email, 
        NEW.raw_user_meta_data->>'full_name',
        COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'user')
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to call handle_new_user on sign up
CREATE OR REPLACE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to automatically update the 'updated_at' timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for 'updated_at'
DROP TRIGGER IF EXISTS update_leads_updated_at ON leads;
CREATE TRIGGER update_leads_updated_at
    BEFORE UPDATE ON leads
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_users_updated_at ON users;
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- 4. POLICIES (RLS)

-- A. LEADS POLICIES
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist to avoid errors on re-run
DROP POLICY IF EXISTS "Allow authenticated users to view leads" ON leads;
CREATE POLICY "Allow authenticated users to view leads" 
ON leads FOR SELECT 
TO authenticated 
USING (true);

DROP POLICY IF EXISTS "Allow authenticated users to update leads" ON leads;
CREATE POLICY "Allow authenticated users to update leads" 
ON leads FOR UPDATE 
TO authenticated 
USING (true)
WITH CHECK (true);

-- B. USERS POLICIES
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Users can view their own profile
DROP POLICY IF EXISTS "Users can view their own profile" ON users;
CREATE POLICY "Users can view their own profile" 
ON users FOR SELECT 
USING (auth.uid() = id);

-- Admins can view all profiles
DROP POLICY IF EXISTS "Admins can view all profiles" ON users;
CREATE POLICY "Admins can view all profiles" 
ON users FOR SELECT 
USING (
    EXISTS (
        SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
    )
);

-- Users can update their own profile (but not their role)
DROP POLICY IF EXISTS "Users can update their own data" ON users;
CREATE POLICY "Users can update their own data" 
ON users FOR UPDATE 
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Only admins can change roles
DROP POLICY IF EXISTS "Admins can update any profile" ON users;
CREATE POLICY "Admins can update any profile" 
ON users FOR UPDATE 
USING (
    EXISTS (
        SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
    )
);



