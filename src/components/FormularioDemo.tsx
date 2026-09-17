"use client";

import { useState } from "react";
import Link from "next/link";

// =============================================================================
// FORMULARIO DE LA DEMO — puerta del curso "IA para la pyme"
// =============================================================================
// Correo + clave de acceso contra /api/demo-acceso. Si la clave vale, la API
// devuelve la cookie firmada y aquí solo queda llevar al alumno a la unidad 1.
// Mismo lenguaje visual que FormularioCurso: tarjeta tinta sobre crema.
// =============================================================================

const DESTINO = "/demo/ia-para-la-pyme/curso/u1/index.html";

export default function FormularioDemo() {
    const [email, setEmail] = useState("");
    const [clave, setClave] = useState("");
    const [acepto, setAcepto] = useState(false);
    const [estado, setEstado] = useState<"idle" | "enviando" | "error">("idle");
    const [error, setError] = useState("");

    const enviar = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim() || !clave.trim()) {
            setEstado("error");
            setError("Escribe tu correo y la clave de acceso.");
            return;
        }
        if (!acepto) {
            setEstado("error");
            setError("Marca la casilla de consentimiento para poder darte acceso.");
            return;
        }

        setEstado("enviando");
        setError("");
        try {
            const res = await fetch("/api/demo-acceso", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, clave, acepto }),
            });
            const datos = await res.json().catch(() => null);

            if (!res.ok) {
                setEstado("error");
                setError(datos?.error || "No se ha podido comprobar la clave. Inténtalo de nuevo.");
                return;
            }

            window.location.href = datos?.destino || DESTINO;
        } catch {
            setEstado("error");
            setError("No se ha podido conectar. Inténtalo de nuevo en un momento.");
        }
    };

    return (
        <form onSubmit={enviar} className="fd-card">
            <p className="fd-titulo">Entrar a la demo</p>
            <p className="fd-ayuda">
                Usa la clave que te he enviado por correo. El acceso dura 7 días.
            </p>

            <label className="fd-label" htmlFor="fd-email">Tu correo</label>
            <input
                id="fd-email"
                type="email"
                autoComplete="email"
                maxLength={254}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@empresa.com"
                className="fd-input"
            />

            <label className="fd-label" htmlFor="fd-clave">Clave de acceso</label>
            <input
                id="fd-clave"
                type="password"
                autoComplete="off"
                maxLength={64}
                value={clave}
                onChange={(e) => setClave(e.target.value)}
                placeholder="La clave que te he enviado"
                className="fd-input"
            />

            <label className="fd-consent">
                <input
                    type="checkbox"
                    checked={acepto}
                    onChange={(e) => setAcepto(e.target.checked)}
                    style={{ marginTop: "0.2rem" }}
                />
                <span>
                    Acepto que Automatizatelo registre mi correo para dar acceso a la demo y
                    contactarme sobre el curso.{" "}
                    <Link href="/proteccion-datos" className="fd-enlace">
                        Política de protección de datos
                    </Link>
                    .
                </span>
            </label>

            {estado === "error" && error && <p className="fd-error">{error}</p>}

            <button type="submit" disabled={estado === "enviando"} className="fd-btn">
                {estado === "enviando" ? "Comprobando…" : "Abrir la demo"}
            </button>

            <style>{`
                .fd-card {
                    background: rgba(28, 25, 23, 0.94);
                    border: 1px solid rgba(250, 246, 239, 0.12);
                    border-radius: 18px;
                    padding: 1.8rem 1.7rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                    max-width: 460px;
                    width: 100%;
                }
                .fd-titulo {
                    font-family: var(--font-display, serif);
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                }
                .fd-ayuda {
                    color: rgba(250, 246, 239, 0.65);
                    font-size: 0.82rem;
                    margin: 0 0 0.6rem;
                }
                .fd-label {
                    color: rgba(250, 246, 239, 0.7);
                    font-size: 0.75rem;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                    margin-top: 0.5rem;
                }
                .fd-input {
                    width: 100%;
                    background: transparent;
                    border: none;
                    border-bottom: 1px solid rgba(250, 246, 239, 0.3);
                    border-radius: 0;
                    padding: 0.6rem 0;
                    font-size: 0.92rem;
                    font-family: inherit;
                    color: #faf6ef;
                    outline: none;
                    transition: border-color 0.2s ease;
                }
                .fd-input:focus { border-bottom-color: #f6c39c; }
                .fd-input::placeholder { color: rgba(250, 246, 239, 0.45); }
                .fd-consent {
                    display: flex;
                    gap: 0.5rem;
                    align-items: flex-start;
                    font-size: 0.75rem;
                    color: rgba(250, 246, 239, 0.7);
                    line-height: 1.45;
                    margin: 1rem 0 0.4rem;
                }
                .fd-enlace { color: #f6c39c; text-decoration: underline; }
                .fd-error {
                    color: #fca5a5;
                    font-size: 0.8rem;
                    margin: 0.2rem 0 0.4rem;
                }
                .fd-btn {
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
                    margin-top: 0.5rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .fd-btn:disabled { opacity: 0.6; cursor: default; }
                .fd-btn:hover:enabled { background: #faf6ef; transform: translateY(-1px); }
            `}</style>
        </form>
    );
}
