import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkTables() {
    const { data: d1, error: e1 } = await supabase.from('service_segmentation').select('*').limit(1);
    console.log("service_segmentation fetch:", e1 ? e1 : 'OK, table exists');

    const { data: d2, error: e2 } = await supabase.from('funnel_flows').select('*').limit(1);
    console.log("funnel_flows fetch:", e2 ? e2 : 'OK, table exists');
}

checkTables();
