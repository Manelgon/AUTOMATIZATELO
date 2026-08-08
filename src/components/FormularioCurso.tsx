"use client";

import { useState } from "react";
import Link from "next/link";

// =============================================================================
// FORMULARIO DE CURSO — la tarjeta "Pide información" del hero (idea iActa)
// =============================================================================
// Vive en el hero de todas las páginas de formación. Crea el lead en el panel
// vía /api/contact con el curso como interés y origen: en el panel se ve qué
// curso pidió cada lead sin abrir el mensaje.
// - `origen` fija el curso de la página (p. ej. "Curso de ChatGPT")
// - `opciones` (hub): muestra selector de curso en vez de fijarlo
// - `etiquetaOpciones` / `etiquetaPersonas`: renombran los dos selectores
//   cuando la pagina no vende un curso (p. ej. /sobre-mi)
// =============================================================================

const TAMANOS = ["1-5 personas", "6-15 personas", "16-50 personas", "Más de 50"];

export default function FormularioCurso({ origen, opciones, etiquetaOpciones, etiquetaPersonas }: {
    origen: string;
    opciones?: string[];
    etiquetaOpciones?: string;
    etiquetaPersonas?: string;
}) {
    const [form, setForm] = useState({ nombre: "", email: "", empresa: "", telefono: "", personas: "", curso: "", mensaje: "", acepto: false });
    const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">("idle");

    const cursoFinal = opciones ? form.curso : origen;

    const enviar = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.nombre.trim() || !form.email.trim()) return setEstado("error");
        if (opciones && !form.curso) return setEstado("error");
        if (!form.acepto) return setEstado("error");
        setEstado("enviando");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nombre: form.nombre,
                    email: form.email,
                    telefono: form.telefono,
                    tipo_cliente: "empresa",
                    servicio: cursoFinal,
                    tamano_empresa: form.personas || null,
                    mensaje: [form.empresa && `Empresa/centro: ${form.empresa}`, form.mensaje].filter(Boolean).join("\n"),
                    acepto: form.acepto,
                    source: "formulario-curso",
                    flow_name: "formacion",
                }),
            });
            if (!res.ok) throw new Error();
            setEstado("ok");
        } catch {
            setEstado("error");
        }
    };

    if (estado === "ok") {
        return (
            <div className="fc-card">
                <p className="fc-titulo">Recibido ✓</p>
                <p style={{ color: "rgba(250,246,239,0.75)", lineHeight: 1.6, fontSize: "0.92rem", margin: 0 }}>
                    Te respondo en menos de 24 h laborables con la propuesta
                    de <strong style={{ color: "#f6c39c" }}>{cursoFinal}</strong> para tu equipo.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={enviar} className="fc-card">
            <p className="fc-titulo">Pide información</p>
            <p style={{ color: "rgba(250,246,239,0.65)", fontSize: "0.82rem", margin: "0 0 0.9rem" }}>
                Te respondo en menos de 24 h laborables.
            </p>
            <div className="fc-fila">
                <input value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} placeholder="Tu nombre*" className="fc-input" />
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tu@empresa.com*" className="fc-input" />
            </div>
            <div className="fc-fila">
                <input value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} placeholder="Tu empresa o centro" className="fc-input" />
                <input value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} placeholder="600 000 000" className="fc-input" />
            </div>
            <select value={form.personas} onChange={(e) => setForm({ ...form, personas: e.target.value })} className="fc-input" style={{ color: form.personas ? "#faf6ef" : "rgba(250,246,239,0.45)" }}>
                <option value="">{etiquetaPersonas ?? "Nº de personas a formar"}</option>
                {TAMANOS.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            {opciones && (
                <select value={form.curso} onChange={(e) => setForm({ ...form, curso: e.target.value })} className="fc-input" style={{ color: form.curso ? "#faf6ef" : "rgba(250,246,239,0.45)" }}>
                    <option value="">{etiquetaOpciones ?? "Curso de interés*"}</option>
                    {opciones.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
            )}
            <textarea value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} placeholder="Cuéntame cualquier detalle…" rows={2} className="fc-input" style={{ resize: "vertical" }} />
            <label style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", fontSize: "0.75rem", color: "rgba(250,246,239,0.7)", lineHeight: 1.45, margin: "0.2rem 0 0.7rem" }}>
                <input type="checkbox" checked={form.acepto} onChange={(e) => setForm({ ...form, acepto: e.target.checked })} style={{ marginTop: "0.15rem" }} />
                <span>Acepto la <Link href="/proteccion-datos" style={{ color: "#f6c39c" }}>política de privacidad</Link>.</span>
            </label>
            {estado === "error" && (
                <p style={{ color: "#fca5a5", fontSize: "0.8rem", margin: "0 0 0.6rem" }}>
                    Revisa nombre, email{opciones ? ", curso" : ""} y la casilla de privacidad.
                </p>
            )}
            <button type="submit" disabled={estado === "enviando"} className="fc-btn" style={{ opacity: estado === "enviando" ? 0.6 : 1 }}>
                {estado === "enviando" ? "Enviando…" : "Enviar solicitud"}
            </button>

            <style>{`
                .fc-hero-grid {
                    display: grid;
                    grid-template-columns: 1.15fr 0.85fr;
                    gap: 3rem;
                    align-items: center;
                }
                @media (max-width: 960px) {
                    .fc-hero-grid { grid-template-columns: 1fr; gap: 2rem; }
                }
                .fc-card {
                    background: rgba(28, 25, 23, 0.92);
                    border: 1px solid rgba(250, 246, 239, 0.12);
                    border-radius: 18px;
                    padding: 1.6rem 1.7rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.7rem;
                    max-width: 460px;
                    width: 100%;
                    justify-self: end;
                }
                @media (max-width: 960px) { .fc-card { justify-self: start; max-width: 520px; } }
                .fc-titulo {
                    font-family: var(--font-display, serif);
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                }
                .fc-fila { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem 1rem; }
                @media (max-width: 480px) { .fc-fila { grid-template-columns: 1fr; } }
                .fc-input {
                    width: 100%;
                    background: transparent;
                    border: none;
                    border-bottom: 1px solid rgba(250, 246, 239, 0.3);
                    border-radius: 0;
                    padding: 0.6rem 0;
                    font-size: 0.88rem;
                    font-family: inherit;
                    color: #faf6ef;
                    outline: none;
                    transition: border-color 0.2s ease;
                }
                .fc-input:focus { border-bottom-color: #f6c39c; }
                .fc-input::placeholder { color: rgba(250, 246, 239, 0.55); }
                .fc-input option { background: #fffdf8; color: #1c1917; }
                .fc-btn {
                    background: #f6c39c;
                    color: #1c1917;
                    border: none;
                    border-radius: 50px;
                    padding: 0.8rem 1rem;
                    width: 100%;
                    font-size: 0.95rem;
                    font-weight: 700;
                    font-family: inherit;
                    cursor: pointer;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .fc-btn:hover { background: #faf6ef; transform: translateY(-1px); }
            `}</style>
        </form>
    );
}
