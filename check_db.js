const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ssdbss.automatizatelo.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogInNlcnZpY2Vfcm9sZSIsCiAgImlzcyI6ICJzdXBhYmFzZSIsCiAgImlhdCI6IDE3MTUwNTA4MDAsCiAgImV4cCI6IDE4NzI4MTcyMDAKfQ.7YZU1q85SJ-kW4ciHa-PqQz_N7DPid4YcIHDHc4PNHw';
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkServices() {
    console.log('Querying Supabase...');
    const { data, error } = await supabase
        .from('services')
        .select('*');

    if (error) {
        console.error('Error:', error);
        return;
    }

    console.log('Total services in DB:', data.length);
    data.forEach(s => {
        console.log(`- [${s.is_active ? 'ACTIVE' : 'INACTIVE'}] ${s.name}`);
    });
}

checkServices();
