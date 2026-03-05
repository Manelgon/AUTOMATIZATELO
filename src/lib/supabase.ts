import { createClient } from '@supabase/supabase-js';

const isBrowser = typeof window !== 'undefined';
const supabaseUrl = isBrowser
    ? `${window.location.origin}/api/supabase`
    : (process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co');
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!isBrowser && (!supabaseUrl || !supabaseAnonKey)) {
    console.warn('Supabase credentials missing in environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

