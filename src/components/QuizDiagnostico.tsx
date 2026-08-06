"use client";

import { useState } from "react";
import Link from "next/link";

// =============================================================================
// DIAGNÓSTICO DE AUTOMATIZACIÓN — 12 preguntas, 3 minutos
// =============================================================================
// Imán de leads: el visitante responde, ve su puntuación, y para llevarse el
// plan por áreas deja nombre y email. El envío crea un lead en el panel
// (flow_name 'diagnostico') con la puntuación y el detalle de respuestas.
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
        texto: "El Art. 4 del Reglamento de IA obliga a formar al personal que usa IA desde febrero de 2025…",
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
        href: "/servicios/automatizacion-ventas",
        enlace: "Automatización de ventas",
    },
    administracion: {
        nombre: "Administración y papeleo",
        consejo: "Facturas, cobros y documentos que se procesan solos: es la automatización con el retorno más rápido y medible.",
        href: "/servicios/automatizacion",
        enlace: "Automatización de procesos",
    },
    atencion: {
        nombre: "Atención al cliente",
        consejo: "Las preguntas repetidas y las citas no necesitan tu tiempo: un chatbot bien conectado responde 24/7 y agenda solo.",
        href: "/servicios/chatbots",
        enlace: "Chatbots",
    },
    datos: {
        nombre: "Datos y herramientas",
        consejo: "Si copias datos de un programa a otro, te falta integración; si decides a ojo, te falta un panel. Las dos cosas se montan sobre lo que ya usas.",
        href: "/servicios/integracion-sistemas",
        enlace: "Integración de sistemas",
    },
    ia: {
        nombre: "IA y cumplimiento",
        consejo: "El Reglamento de IA ya aplica y sanciona desde agosto de 2026. La formación del Art. 4 con certificados te pone en regla — y de paso el equipo aprende a usarla bien.",
        href: "/servicios/formacion-ia-empresas",
        enlace: "Formación en IA",
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

    const cajaEstilo = {
        background: "var(--color-card-bg, #fff)",
        border: "1px solid var(--color-border)",
        borderRadius: "18px",
        padding: "2rem",
    } as const;

    // ── Fase 1: preguntas ─────────────────────────────────────────────────────
    if (fase === "preguntas") {
        const p = PREGUNTAS[paso];
        return (
            <div style={cajaEstilo}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem" }}>
                    <span className="mono-label" style={{ color: "var(--color-primary)" }}>
                        {String(paso + 1).padStart(2, "0")} / {PREGUNTAS.length}
                    </span>
                    {paso > 0 && (
                        <button onClick={() => setPaso(paso - 1)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-muted)", fontSize: "0.85rem" }}>
                            ← Anterior
                        </button>
                    )}
                </div>
                <div style={{ height: 4, background: "var(--color-border)", borderRadius: 2, marginBottom: "1.8rem" }}>
                    <div style={{ height: 4, width: `${(paso / PREGUNTAS.length) * 100}%`, background: "var(--color-primary)", borderRadius: 2, transition: "width 0.3s ease" }} />
                </div>
                <p style={{
                    fontFamily: "var(--font-display, serif)",
                    fontSize: "clamp(1.25rem, 2.6vw, 1.7rem)",
                    fontWeight: 600,
                    color: "var(--color-text-main)",
                    lineHeight: 1.3,
                    margin: "0 0 1.6rem",
                }}>
                    {p.texto}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                    {p.opciones.map((o, i) => (
                        <button
                            key={o.texto}
                            onClick={() => responder(i)}
                            className="quiz-opcion"
                            style={{
                                textAlign: "left",
                                padding: "1rem 1.2rem",
                                borderRadius: "12px",
                                border: respuestas[paso] === i ? "1.5px solid var(--color-primary)" : "1px solid var(--color-border)",
                                background: respuestas[paso] === i ? "rgba(234,88,12,0.06)" : "transparent",
                                color: "var(--color-text-main)",
                                fontSize: "0.98rem",
                                lineHeight: 1.5,
                                cursor: "pointer",
                            }}
                        >
                            {o.texto}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    // ── Fase 2: datos para el plan ────────────────────────────────────────────
    if (fase === "datos") {
        return (
            <div style={cajaEstilo}>
                <span className="mono-label" style={{ color: "var(--color-primary)" }}>Resultado listo</span>
                <p style={{
                    fontFamily: "var(--font-display, serif)",
                    fontSize: "clamp(1.4rem, 3vw, 2rem)",
                    fontWeight: 600,
                    color: "var(--color-text-main)",
                    lineHeight: 1.25,
                    margin: "0.8rem 0 0.6rem",
                }}>
                    Tu potencial de automatización: {porcentaje}%
                </p>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.6rem" }}>
                    Dime dónde te mando el plan por áreas — qué automatizaría primero en tu caso y por qué — y lo ves aquí mismo.
                </p>
                <form onSubmit={enviar} style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                    <input
                        value={form.nombre}
                        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                        placeholder="Tu nombre"
                        style={{ padding: "0.9rem 1.1rem", borderRadius: "12px", border: "1px solid var(--color-border)", fontSize: "0.95rem", background: "transparent", color: "var(--color-text-main)" }}
                    />
                    <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="tu@email.com"
                        style={{ padding: "0.9rem 1.1rem", borderRadius: "12px", border: "1px solid var(--color-border)", fontSize: "0.95rem", background: "transparent", color: "var(--color-text-main)" }}
                    />
                    <label style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", fontSize: "0.82rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                        <input
                            type="checkbox"
                            checked={form.acepto}
                            onChange={(e) => setForm({ ...form, acepto: e.target.checked })}
                            style={{ marginTop: "0.2rem" }}
                        />
                        <span>
                            Acepto la <Link href="/proteccion-datos" style={{ color: "var(--color-primary)" }}>política de privacidad</Link>.
                            Usaré tu email para enviarte el plan y, como mucho, algún consejo útil — nada de spam.
                        </span>
                    </label>
                    {error && <p style={{ color: "#b91c1c", fontSize: "0.88rem", margin: 0 }}>{error}</p>}
                    <button type="submit" disabled={enviando} className="btn btn-primary" style={{ padding: "1rem 2rem", fontSize: "1rem", opacity: enviando ? 0.6 : 1 }}>
                        {enviando ? "Guardando…" : "Ver mi plan de automatización"}
                    </button>
                </form>
            </div>
        );
    }

    // ── Fase 3: resultado ─────────────────────────────────────────────────────
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={cajaEstilo}>
                <span className="mono-label" style={{ color: "var(--color-primary)" }}>Tu diagnóstico</span>
                <p style={{
                    fontFamily: "var(--font-display, serif)",
                    fontSize: "clamp(1.5rem, 3.2vw, 2.2rem)",
                    fontWeight: 600,
                    color: "var(--color-text-main)",
                    lineHeight: 1.25,
                    margin: "0.8rem 0 0.4rem",
                }}>
                    {porcentaje}% — {titular}
                </p>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
                    {porcentaje >= 30
                        ? "La buena noticia: casi todo lo que puntúa alto se resuelve con automatizaciones pequeñas, de precio cerrado, sobre las herramientas que ya usas."
                        : "Tienes la base bien montada. Lo que queda son mejoras puntuales — y probablemente el cumplimiento del Reglamento de IA, que casi nadie tiene."}
                </p>
            </div>

            {principales.map(({ area }) => (
                <div key={area} style={cajaEstilo}>
                    <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: "0.6rem" }}>
                        Dónde empezaría — {AREAS[area].nombre}
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: "0 0 1rem" }}>
                        {AREAS[area].consejo}
                    </p>
                    <Link href={AREAS[area].href} style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                        {AREAS[area].enlace} →
                    </Link>
                </div>
            ))}

            <div style={{ ...cajaEstilo, background: "#f8dfc6", border: "none", textAlign: "center" }}>
                <p style={{
                    fontFamily: "var(--font-display, serif)",
                    fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                    fontWeight: 600,
                    color: "#1c1917",
                    margin: "0 0 0.8rem",
                }}>
                    ¿Lo vemos sobre tu caso real?
                </p>
                <p style={{ color: "rgba(28,25,23,0.7)", marginBottom: "1.4rem", fontSize: "0.98rem" }}>
                    30 minutos gratis: repasamos tu resultado y te digo qué automatizaría primero y qué costaría.
                </p>
                <Link href="/#contact" className="btn btn-primary" style={{ padding: "0.95rem 2.2rem" }}>
                    Pedir mis 30 minutos
                </Link>
            </div>
        </div>
    );
}
