"use client";

import { useState } from "react";
import Link from "next/link";

// =============================================================================
// DIAGNÓSTICO DE AUTOMATIZACIÓN — 12 preguntas, 3 minutos
// =============================================================================
// Imán de leads: el visitante responde, ve su puntuación, y para llevarse el
// plan por áreas deja nombre y email. El envío crea un lead en el panel
// (flow_name 'diagnostico') con la puntuación y el detalle de respuestas.
// Vive en el hero de /diagnostico, así que viste la misma ropa que la tarjeta
// de "Pide información": tinta translúcida, filetes y melocotón.
// =============================================================================

type Area = "comercial" | "administracion" | "atencion" | "datos" | "ia";

type Pregunta = {
    area: Area | null;          // null = no puntúa (perfil)
    texto: string;
    opciones: { texto: string; puntos: number }[];
};

const PREGUNTAS: Pregunta[] = [
    {
        area: "comercial",
        texto: "Cuando entra un contacto nuevo (web, WhatsApp, una llamada)…",
        opciones: [
            { texto: "Queda apuntado en un CRM y tiene su seguimiento", puntos: 0 },
            { texto: "Lo apunto donde puedo: Excel, libreta o la cabeza", puntos: 1 },
            { texto: "Se me han escapado contactos por no contestar a tiempo", puntos: 2 },
        ],
    },
    {
        area: "comercial",
        texto: "Los presupuestos para clientes…",
        opciones: [
            { texto: "Salen en el día, con plantilla", puntos: 0 },
            { texto: "Tardo varios días en prepararlos", puntos: 1 },
            { texto: "Los hago a mano cada vez, y alguno se queda sin enviar", puntos: 2 },
        ],
    },
    {
        area: "administracion",
        texto: "Las facturas y los cobros…",
        opciones: [
            { texto: "Se generan casi solos desde mi programa", puntos: 0 },
            { texto: "Las hago una a una, pero voy al día", puntos: 1 },
            { texto: "Voy siempre tarde y persigo los cobros a mano", puntos: 2 },
        ],
    },
    {
        area: "administracion",
        texto: "Los datos que llegan en PDFs o correos (facturas de proveedor, pedidos, formularios)…",
        opciones: [
            { texto: "Se procesan solos", puntos: 0 },
            { texto: "Los copio a mano al Excel o al programa", puntos: 1 },
            { texto: "Se acumulan sin procesar hasta que no queda otra", puntos: 2 },
        ],
    },
    {
        area: "atencion",
        texto: "Las preguntas repetidas de clientes (horarios, precios, estado de un pedido)…",
        opciones: [
            { texto: "Las contesta la web o un bot", puntos: 0 },
            { texto: "Las contesto yo, una a una, por WhatsApp o email", puntos: 1 },
            { texto: "Fuera de horario se quedan sin contestar", puntos: 2 },
        ],
    },
    {
        area: "atencion",
        texto: "Las citas y reuniones…",
        opciones: [
            { texto: "Se reservan solas online", puntos: 0 },
            { texto: "Cruce de mensajes hasta cuadrar la hora", puntos: 1 },
            { texto: "Se me han solapado u olvidado citas", puntos: 2 },
        ],
    },
    {
        area: "datos",
        texto: "Para saber cómo va el negocio (ventas del mes, pendiente de cobro)…",
        opciones: [
            { texto: "Tengo un panel al día", puntos: 0 },
            { texto: "Monto un Excel cuando lo necesito", puntos: 1 },
            { texto: "Lo llevo a ojo", puntos: 2 },
        ],
    },
    {
        area: "datos",
        texto: "Tus herramientas (CRM, facturación, correo, Excel)…",
        opciones: [
            { texto: "Se pasan los datos entre ellas", puntos: 0 },
            { texto: "Copio datos de una a otra a mano", puntos: 1 },
            { texto: "Cada una va por su lado", puntos: 2 },
        ],
    },
    {
        area: "ia",
        texto: "Tu equipo y la IA (ChatGPT y similares)…",
        opciones: [
            { texto: "La usamos con criterio y cuentas de empresa", puntos: 0 },
            { texto: "Todavía no la usamos", puntos: 1 },
            { texto: "Cada uno la usa por su cuenta — incluso con datos de clientes", puntos: 2 },
        ],
    },
    {
        area: "ia",
        texto: "El Art. 4 del Reglamento de IA obliga desde febrero de 2025 a tomar medidas para que quien usa IA sepa usarla…",
        opciones: [
            { texto: "Lo sé: tenemos formación hecha y papeles", puntos: 0 },
            { texto: "Me suena, pero no hemos hecho nada", puntos: 1 },
            { texto: "Primera noticia", puntos: 2 },
        ],
    },
    {
        area: null,
        texto: "Entre todos, ¿cuántas horas a la semana se van en tareas repetitivas?",
        opciones: [
            { texto: "Menos de 2", puntos: 0 },
            { texto: "Entre 2 y 10", puntos: 1 },
            { texto: "Más de 10", puntos: 2 },
        ],
    },
    {
        area: null,
        texto: "¿Cuántas personas sois?",
        opciones: [
            { texto: "Solo yo", puntos: 0 },
            { texto: "Entre 2 y 10", puntos: 0 },
            { texto: "Más de 10", puntos: 0 },
        ],
    },
];

const AREAS: Record<Area, { nombre: string; consejo: string; href: string; enlace: string }> = {
    comercial: {
        nombre: "Captación y ventas",
        consejo: "Cada contacto sin contestar es dinero que se va a otro. Un CRM conectado a tu web y presupuestos con plantilla lo arreglan en semanas.",
        href: "/sistemas/ventas",
        enlace: "Automatización de ventas",
    },
    administracion: {
        nombre: "Administración y papeleo",
        consejo: "Facturas, cobros y documentos que se procesan solos: es la automatización que antes se nota, porque el ahorro se ve en la mesa de alguien.",
        href: "/sistemas/documentos",
        enlace: "Facturas y documentos",
    },
    atencion: {
        nombre: "Atención al cliente",
        consejo: "Las preguntas repetidas y las citas no necesitan tu tiempo: un chatbot bien conectado responde 24/7 y agenda solo.",
        href: "/sistemas/chatbots-whatsapp",
        enlace: "Chatbots de WhatsApp y web",
    },
    datos: {
        nombre: "Datos y herramientas",
        consejo: "Si copias datos de un programa a otro, te falta integración; si decides a ojo, te falta un panel. Las dos cosas se montan sobre lo que ya usas.",
        href: "/sistemas/integracion",
        enlace: "Integración de sistemas",
    },
    ia: {
        nombre: "IA y cumplimiento",
        consejo: "El Reglamento de IA ya aplica, y desde agosto de 2026 las autoridades nacionales lo supervisan. La formación del Art. 4 con certificados te pone en regla — y de paso el equipo aprende a usarla bien.",
        href: "/formacion/ai-act",
        enlace: "Alfabetización del Art. 4",
    },
};

const MAX_PUNTOS = PREGUNTAS.reduce((s, p) => s + Math.max(...p.opciones.map(o => o.puntos)), 0);

export default function QuizDiagnostico() {
    const [paso, setPaso] = useState(0);                       // índice de pregunta
    const [respuestas, setRespuestas] = useState<number[]>([]); // índice de opción elegida
    const [fase, setFase] = useState<"preguntas" | "datos" | "resultado">("preguntas");
    const [form, setForm] = useState({ nombre: "", email: "", acepto: false });
    const [enviando, setEnviando] = useState(false);
    const [error, setError] = useState("");

    const responder = (opcion: number) => {
        const nuevas = [...respuestas];
        nuevas[paso] = opcion;
        setRespuestas(nuevas);
        if (paso + 1 < PREGUNTAS.length) setPaso(paso + 1);
        else setFase("datos");
    };

    const puntos = respuestas.reduce((s, opcion, i) => s + (PREGUNTAS[i]?.opciones[opcion]?.puntos ?? 0), 0);
    const porcentaje = Math.round((puntos / MAX_PUNTOS) * 100);

    const porArea = (Object.keys(AREAS) as Area[]).map((a) => {
        const idx = PREGUNTAS.map((p, i) => (p.area === a ? i : -1)).filter(i => i >= 0);
        const suma = idx.reduce((s, i) => s + (PREGUNTAS[i].opciones[respuestas[i]]?.puntos ?? 0), 0);
        const max = idx.reduce((s, i) => s + Math.max(...PREGUNTAS[i].opciones.map(o => o.puntos)), 0);
        return { area: a, suma, max };
    }).sort((x, y) => y.suma - x.suma);

    const principales = porArea.filter(x => x.suma > 0).slice(0, 2);

    const titular = porcentaje >= 60
        ? "Tu semana está llena de trabajo que una máquina haría"
        : porcentaje >= 30
            ? "Hay horas encima de la mesa"
            : "Vas mejor que la mayoría — quedan flecos";

    const enviar = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.nombre.trim() || !form.email.trim()) return setError("Nombre y email son obligatorios");
        if (!form.acepto) return setError("Necesito tu consentimiento para enviarte el plan");
        setError("");
        setEnviando(true);
        try {
            const res = await fetch("/api/diagnostico", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nombre: form.nombre,
                    email: form.email,
                    acepto: form.acepto,
                    puntuacion: porcentaje,
                    tamano: PREGUNTAS[11].opciones[respuestas[11]]?.texto || null,
                    area_principal: principales[0] ? AREAS[principales[0].area].nombre : null,
                    respuestas: PREGUNTAS.map((p, i) => ({
                        pregunta: p.texto,
                        respuesta: p.opciones[respuestas[i]]?.texto,
                    })),
                }),
            });
            if (!res.ok) throw new Error("No se pudo guardar");
            setFase("resultado");
        } catch {
            setError("Algo ha fallado al enviar. Prueba otra vez, o escríbeme por WhatsApp.");
        } finally {
            setEnviando(false);
        }
    };

    const estilos = (
        <style>{`
            .qz-caja {
                background: rgba(28, 25, 23, 0.92);
                border: 1px solid rgba(250, 246, 239, 0.12);
                border-radius: 18px;
                padding: 1.8rem 1.8rem 2rem;
                width: 100%;
                max-width: 560px;
                justify-self: end;
            }
            @media (max-width: 960px) { .qz-caja { justify-self: start; } }
            .qz-cabecera {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;
            }
            .qz-paso { color: #f6c39c; }
            .qz-atras {
                background: none;
                border: none;
                cursor: pointer;
                font-family: var(--font-mono, monospace);
                font-size: 0.72rem;
                font-weight: 600;
                letter-spacing: 0.06em;
                text-transform: uppercase;
                color: rgba(250, 246, 239, 0.55);
                padding: 0;
                transition: color 0.2s ease;
            }
            .qz-atras:hover { color: #f6c39c; }
            .qz-barra {
                height: 2px;
                background: rgba(250, 246, 239, 0.16);
                margin-bottom: 1.8rem;
            }
            .qz-barra-avance {
                height: 2px;
                background: #f6c39c;
                transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1);
            }
            .qz-pregunta {
                font-family: var(--font-display, serif);
                font-size: clamp(1.2rem, 2.4vw, 1.55rem);
                font-weight: 600;
                color: #faf6ef;
                line-height: 1.25;
                margin: 0 0 1.4rem;
            }
            /* Las respuestas, como filas de índice: filete arriba y nada más */
            .qz-opciones { display: flex; flex-direction: column; }
            .qz-opcion {
                display: flex;
                align-items: baseline;
                gap: 0.9rem;
                width: 100%;
                text-align: left;
                background: none;
                border: none;
                border-top: 1px solid rgba(250, 246, 239, 0.14);
                padding: 0.95rem 0.3rem;
                font-family: inherit;
                font-size: 0.95rem;
                line-height: 1.5;
                color: rgba(250, 246, 239, 0.85);
                cursor: pointer;
                transition: color 0.2s ease, padding-left 0.3s cubic-bezier(0.22, 1, 0.36, 1), background 0.2s ease;
            }
            .qz-opcion:last-child { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
            .qz-opcion:hover, .qz-opcion:focus-visible {
                color: #faf6ef;
                background: rgba(250, 246, 239, 0.05);
                padding-left: 0.9rem;
                outline: none;
            }
            .qz-opcion-letra {
                font-family: var(--font-mono, monospace);
                font-size: 0.72rem;
                font-weight: 700;
                color: rgba(246, 195, 156, 0.65);
                flex-shrink: 0;
            }
            .qz-opcion-elegida .qz-opcion-letra { color: #f6c39c; }
            .qz-opcion-elegida { color: #f6c39c; }

            .qz-titulo {
                font-family: var(--font-display, serif);
                font-size: clamp(1.35rem, 2.8vw, 1.9rem);
                font-weight: 600;
                color: #faf6ef;
                line-height: 1.2;
                margin: 0.8rem 0 0.6rem;
            }
            .qz-texto {
                color: rgba(250, 246, 239, 0.78);
                line-height: 1.7;
                font-size: 0.93rem;
                margin: 0 0 1.4rem;
            }
            .qz-campo {
                width: 100%;
                background: transparent;
                border: none;
                border-bottom: 1px solid rgba(250, 246, 239, 0.3);
                border-radius: 0;
                padding: 0.6rem 0;
                font-size: 0.9rem;
                font-family: inherit;
                color: #faf6ef;
                outline: none;
                transition: border-color 0.2s ease;
            }
            .qz-campo:focus { border-bottom-color: #f6c39c; }
            .qz-campo::placeholder { color: rgba(250, 246, 239, 0.45); }
            .qz-consent {
                display: flex;
                gap: 0.6rem;
                align-items: flex-start;
                font-size: 0.76rem;
                color: rgba(250, 246, 239, 0.68);
                line-height: 1.5;
            }
            .qz-consent a { color: #f6c39c; }
            .qz-boton {
                background: #f6c39c;
                color: #1c1917;
                border: none;
                border-radius: 50px;
                padding: 0.85rem 1rem;
                width: 100%;
                font-size: 0.95rem;
                font-weight: 700;
                font-family: inherit;
                cursor: pointer;
                transition: background 0.2s ease, transform 0.2s ease;
            }
            .qz-boton:hover { background: #faf6ef; transform: translateY(-1px); }
            .qz-error { color: #fca5a5; font-size: 0.82rem; margin: 0; }

            .qz-marcador {
                font-family: var(--font-display, serif);
                font-size: clamp(2.6rem, 7vw, 4rem);
                font-weight: 700;
                color: #f6c39c;
                line-height: 1;
                display: block;
            }
            .qz-area {
                border-top: 1px solid rgba(250, 246, 239, 0.14);
                padding: 1.2rem 0 0;
                margin-top: 1.2rem;
            }
            .qz-area-nombre { color: #f6c39c; }
            .qz-area p {
                color: rgba(250, 246, 239, 0.78);
                line-height: 1.65;
                font-size: 0.92rem;
                margin: 0.5rem 0 0.7rem;
            }
            .qz-area a {
                color: #f6c39c;
                font-weight: 600;
                font-size: 0.9rem;
                display: inline-block;
                transition: transform 0.25s ease, color 0.2s ease;
            }
            .qz-area a:hover { color: #faf6ef; transform: translateX(6px); }
            .qz-cierre {
                margin-top: 1.6rem;
                padding-top: 1.4rem;
                border-top: 1px solid rgba(250, 246, 239, 0.14);
            }
            .qz-cierre p {
                color: rgba(250, 246, 239, 0.78);
                line-height: 1.65;
                font-size: 0.92rem;
                margin: 0 0 1rem;
            }
            .qz-cta {
                display: inline-block;
                background: #f6c39c;
                color: #1c1917;
                font-weight: 700;
                font-size: 0.92rem;
                border-radius: 50px;
                padding: 0.8rem 1.6rem;
                transition: background 0.2s ease, transform 0.2s ease;
            }
            .qz-cta:hover { background: #faf6ef; transform: translateY(-2px); }
        `}</style>
    );

    // ── Fase 1: preguntas ─────────────────────────────────────────────────────
    if (fase === "preguntas") {
        const p = PREGUNTAS[paso];
        return (
            <div className="qz-caja">
                <div className="qz-cabecera">
                    <span className="mono-label qz-paso">
                        {String(paso + 1).padStart(2, "0")} / {PREGUNTAS.length}
                    </span>
                    {paso > 0 && (
                        <button type="button" onClick={() => setPaso(paso - 1)} className="qz-atras">
                            ← Anterior
                        </button>
                    )}
                </div>
                <div className="qz-barra">
                    <div className="qz-barra-avance" style={{ width: `${(paso / PREGUNTAS.length) * 100}%` }} />
                </div>
                <p className="qz-pregunta">{p.texto}</p>
                <div className="qz-opciones">
                    {p.opciones.map((o, i) => (
                        <button
                            key={o.texto}
                            type="button"
                            onClick={() => responder(i)}
                            className={`qz-opcion ${respuestas[paso] === i ? "qz-opcion-elegida" : ""}`}
                        >
                            <span className="qz-opcion-letra" aria-hidden="true">
                                {String.fromCharCode(65 + i)}
                            </span>
                            {o.texto}
                        </button>
                    ))}
                </div>
                {estilos}
            </div>
        );
    }

    // ── Fase 2: datos para el plan ────────────────────────────────────────────
    if (fase === "datos") {
        return (
            <div className="qz-caja">
                <span className="mono-label qz-paso">Resultado listo</span>
                <span className="qz-marcador">{porcentaje}%</span>
                <p className="qz-titulo" style={{ marginTop: "0.4rem" }}>
                    de tu semana es automatizable
                </p>
                <p className="qz-texto">
                    Dime dónde te mando el plan por áreas — qué automatizaría primero en tu caso
                    y por qué — y lo ves aquí mismo, sin esperar a ningún correo.
                </p>
                <form onSubmit={enviar} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <input
                        value={form.nombre}
                        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                        placeholder="Tu nombre*"
                        className="qz-campo"
                    />
                    <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="tu@empresa.com*"
                        className="qz-campo"
                    />
                    <label className="qz-consent">
                        <input
                            type="checkbox"
                            checked={form.acepto}
                            onChange={(e) => setForm({ ...form, acepto: e.target.checked })}
                            style={{ marginTop: "0.2rem" }}
                        />
                        <span>
                            Acepto la <Link href="/proteccion-datos">política de privacidad</Link>.
                            Usaré tu email para enviarte el plan y, como mucho, algún consejo útil — nada de spam.
                        </span>
                    </label>
                    {error && <p className="qz-error">{error}</p>}
                    <button type="submit" disabled={enviando} className="qz-boton" style={{ opacity: enviando ? 0.6 : 1 }}>
                        {enviando ? "Guardando…" : "Ver mi plan de automatización"}
                    </button>
                </form>
                {estilos}
            </div>
        );
    }

    // ── Fase 3: resultado ─────────────────────────────────────────────────────
    return (
        <div className="qz-caja">
            <span className="mono-label qz-paso">Tu diagnóstico</span>
            <span className="qz-marcador">{porcentaje}%</span>
            <p className="qz-titulo" style={{ marginTop: "0.4rem" }}>{titular}</p>
            <p className="qz-texto">
                {porcentaje >= 30
                    ? "La buena noticia: casi todo lo que puntúa alto se resuelve con automatizaciones pequeñas, de precio cerrado, sobre las herramientas que ya usas."
                    : "Tienes la base bien montada. Lo que queda son mejoras puntuales — y probablemente el cumplimiento del Reglamento de IA, que casi nadie tiene."}
            </p>

            {principales.map(({ area }) => (
                <div key={area} className="qz-area">
                    <span className="mono-label qz-area-nombre">
                        Dónde empezaría — {AREAS[area].nombre}
                    </span>
                    <p>{AREAS[area].consejo}</p>
                    <Link href={AREAS[area].href}>{AREAS[area].enlace} →</Link>
                </div>
            ))}

            <div className="qz-cierre">
                <p>
                    ¿Lo vemos sobre tu caso real? Media hora gratis: repasamos tu resultado y te
                    digo qué automatizaría primero, qué costaría y qué no te compensa tocar.
                </p>
                <Link href="/#contact" className="qz-cta">Pedir mis 30 minutos →</Link>
                <p style={{ marginTop: "1rem", marginBottom: 0 }}>
                    O mira antes <Link href="/precios" style={{ color: "#f6c39c", fontWeight: 600 }}>lo que cuesta cada pieza</Link>.
                </p>
            </div>
            {estilos}
        </div>
    );
}
