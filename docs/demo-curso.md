# Demo del curso "IA para la pyme"

Demo de la unidad 1 servida detrás de una puerta de correo + clave, para
enseñarla a clientes concretos sin publicarla en internet.

## Cómo funciona

- Los archivos del curso están en `private/demo-curso/u1/` — **fuera de `public/`**,
  así que no se sirven solos. `next.config.ts` los mete en el bundle de Vercel con
  `outputFileTracingIncludes`.
- `/demo/ia-para-la-pyme` es la página de entrada: correo, clave y casilla de
  consentimiento.
- `POST /api/demo-acceso` comprueba la clave, registra el acceso en Supabase y
  emite la cookie firmada `demo_acceso` (HttpOnly, Secure, SameSite=Lax,
  `Path=/demo/ia-para-la-pyme`, 7 días).
- `GET /demo/ia-para-la-pyme/curso/<ruta>` sirve cada archivo solo si la cookie
  es válida. Sin cookie, redirige a `/demo/ia-para-la-pyme`.
- La página no se indexa (`robots: index:false`), `/demo` está excluido en
  `src/app/robots.ts` y no aparece en el sitemap.
- La demo nació en `/demo-curso` y se mudó a `/demo/ia-para-la-pyme`: las dos
  rutas viejas (la página y `/demo-curso/curso/...`) redirigen con 301 desde
  `next.config.ts`, así que los enlaces ya enviados siguen valiendo.

## Claves por cliente

Todas las claves viven en una sola variable, `DEMO_CLAVES`, con el formato:

```
clave:nombre-cliente,otraclave:otro-cliente
```

Ejemplo (tres clientes):

```
k7fq2m9x:asesoria-lopez,r4tz8v1p:talleres-gomez,h3nd6w2y:clinica-sur
```

Reglas de la casa:

- **Una clave por cliente**, no por persona. El nombre del cliente es lo que se
  guarda en Supabase junto al correo de quien entra.
- Genera claves largas y aleatorias, nunca palabras. Por ejemplo:
  `openssl rand -base64 18 | tr -d '/+=' | cut -c1-16`
- Sin espacios, sin comas y sin dos puntos dentro de la clave ni del nombre del
  cliente: esos dos caracteres son los separadores.
- El nombre del cliente, en minúsculas y con guiones (`asesoria-lopez`).

## Variables en Vercel

En **Project → Settings → Environment Variables**, entorno *Production*
(y *Preview* si quieres probar antes de publicar):

| Variable      | Qué es                                                                 |
| ------------- | ---------------------------------------------------------------------- |
| `DEMO_CLAVES` | Lista de claves y clientes, formato `clave:cliente,clave2:cliente2`     |
| `DEMO_SECRET` | Secreto largo y aleatorio para firmar la cookie. No se comparte nunca.  |

Para `DEMO_SECRET` vale cualquier cadena larga aleatoria, por ejemplo
`openssl rand -base64 32`. Si lo cambias, todas las cookies emitidas dejan de
valer y los clientes tienen que volver a entrar con su clave (que sigue siendo
la misma).

Si falta cualquiera de las dos, `/api/demo-acceso` responde **503 "Demo no
configurada"**: nadie entra, pero tampoco se rompe el resto de la web.

En local, las mismas dos líneas están en `.env.local` (vacías por defecto).

## Ver los accesos en Supabase

La tabla es `demo_accesos` (`supabase/demo_accesos.sql`, añadida también al final
de `supabase_schema.sql`). Tiene RLS activado y **cero políticas**: solo el
service role escribe y lee, así que hay que mirarla desde el panel de Supabase.

1. Supabase → **Table Editor** → tabla `demo_accesos`.
2. O en **SQL Editor**, los últimos accesos:

```sql
select created_at, cliente, email, user_agent
from demo_accesos
order by created_at desc
limit 50;
```

Accesos por cliente:

```sql
select cliente, count(*) as entradas, max(created_at) as ultima
from demo_accesos
group by cliente
order by ultima desc;
```

El registro es informativo, no una condición de entrada: si Supabase falla, el
acceso se concede igual y el error queda en los logs de Vercel.

## Revocar una clave

1. Entra en Vercel → Settings → Environment Variables → `DEMO_CLAVES`.
2. Borra el par `clave:cliente` de ese cliente (y la coma que sobre).
3. Guarda y **redespliega** (Deployments → último deployment → Redeploy). Las
   variables de entorno solo se leen al arrancar: sin redesplegar, la clave vieja
   sigue funcionando.

Ojo: quitar la clave impide **nuevos** accesos, pero las cookies ya emitidas
siguen valiendo hasta 7 días. Si necesitas cortar el acceso de inmediato, cambia
también `DEMO_SECRET`: eso invalida todas las cookies de golpe (y obliga a todos
los clientes a volver a introducir su clave).

## Añadir más unidades

Copia la carpeta nueva dentro de `private/demo-curso/` (por ejemplo `u2/`) y ya
se sirve: el route handler es genérico, no hay nada que tocar en el código.
