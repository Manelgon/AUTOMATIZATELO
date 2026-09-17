-- =============================================================================
-- DEMO DEL CURSO "IA PARA LA PYME" — registro de accesos
-- =============================================================================
-- Una fila por entrada concedida en /demo-curso. Sirve para saber qué cliente
-- y qué persona han abierto la demo, y para dar seguimiento comercial.
-- Solo escribe y lee el service role desde /api/demo-acceso: RLS activado y
-- sin ninguna política, así que anon y authenticated no ven nada.
-- =============================================================================

CREATE TABLE IF NOT EXISTS demo_accesos (
    id uuid primary key default gen_random_uuid(),
    email text not null,
    cliente text not null,
    user_agent text,
    created_at timestamptz not null default now()
);

ALTER TABLE demo_accesos ENABLE ROW LEVEL SECURITY;

-- Sin políticas a propósito: con RLS activo y cero políticas, anon y
-- authenticated no pueden leer ni escribir. El service role salta RLS.
REVOKE ALL ON demo_accesos FROM anon, authenticated;
GRANT ALL ON demo_accesos TO service_role;

CREATE INDEX IF NOT EXISTS demo_accesos_created_at_idx ON demo_accesos (created_at DESC);
CREATE INDEX IF NOT EXISTS demo_accesos_cliente_idx ON demo_accesos (cliente);
