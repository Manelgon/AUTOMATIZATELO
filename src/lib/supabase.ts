import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-key';

// This client is for public operations (Services deck, etc.) and is safe for the browser
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// This client is for server-side operations only (API routes) and uses the service role key
// to bypass RLS policies if necessary.
export const getSupabaseServer = () => {
    return createClient(supabaseUrl, supabaseServiceKey);
};

