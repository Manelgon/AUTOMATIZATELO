"use client";

import { useEffect, useRef, useState } from "react";

// =============================================================================
// SELECTOR DEL FORMULARIO — el <select> nativo, pero con nuestra ropa
// =============================================================================
// El desplegable de un <select> lo dibuja el sistema operativo: no se puede
// estilar más allá del color de fondo. Aquí se sustituye por un listbox propio
// con el idioma del sitio (tinta, filetes, melocotón) y el mismo comportamiento
// de teclado que se espera de un select: flechas, Enter, Escape y Home/End.
// =============================================================================

/** La opción puede ser texto plano o llevar un valor distinto de lo que se lee. */
export type Opcion = string | { valor: string; etiqueta: string };

interface Props {
    value: string;
    onChange: (valor: string) => void;
    placeholder: string;
    opciones: Opcion[];
    /** id para asociar el label si algún día se añade */
    nombre: string;
    /** para los selectores sin texto visible que los explique (el prefijo) */
    etiquetaAria?: string;
    /** marca el campo como obligatorio de cara al lector de pantalla */
    requerido?: boolean;
}

export default function SelectorFC({
    value, onChange, placeholder, opciones, nombre, etiquetaAria, requerido,
}: Props) {
    const [abierto, setAbierto] = useState(false);
    const [resaltado, setResaltado] = useState(0);
    const cajaRef = useRef<HTMLDivElement>(null);

    const lista = opciones.map((o) => (typeof o === "string" ? { valor: o, etiqueta: o } : o));
    const elegida = lista.find((o) => o.valor === value);

    useEffect(() => {
        if (!abierto) return;
        const fuera = (e: MouseEvent) => {
            if (cajaRef.current && !cajaRef.current.contains(e.target as Node)) setAbierto(false);
        };
        document.addEventListener("mousedown", fuera);
        return () => document.removeEventListener("mousedown", fuera);
    }, [abierto]);

    const elegir = (valor: string) => {
        onChange(valor);
        setAbierto(false);
    };

    const desde = () => Math.max(0, lista.findIndex((o) => o.valor === value));

    const alTeclado = (e: React.KeyboardEvent) => {
        if (!abierto && (e.key === "Enter" || e.key === " " || e.key === "ArrowDown")) {
            e.preventDefault();
            setAbierto(true);
            setResaltado(desde());
            return;
        }
        if (!abierto) return;
        if (e.key === "Escape") { e.preventDefault(); setAbierto(false); }
        if (e.key === "ArrowDown") { e.preventDefault(); setResaltado((i) => (i + 1) % lista.length); }
        if (e.key === "ArrowUp") { e.preventDefault(); setResaltado((i) => (i - 1 + lista.length) % lista.length); }
        if (e.key === "Home") { e.preventDefault(); setResaltado(0); }
        if (e.key === "End") { e.preventDefault(); setResaltado(lista.length - 1); }
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); elegir(lista[resaltado].valor); }
    };

    return (
        <div className="sfc" ref={cajaRef}>
            <button
                type="button"
                id={nombre}
                className="sfc-boton"
                aria-haspopup="listbox"
                aria-expanded={abierto}
                aria-label={etiquetaAria}
                aria-required={requerido}
                onClick={() => {
                    setAbierto((v) => !v);
                    setResaltado(desde());
                }}
                onKeyDown={alTeclado}
            >
                <span className={elegida ? "sfc-valor" : "sfc-placeholder"}>{elegida?.etiqueta || placeholder}</span>
                <i className={`fa-solid fa-chevron-down sfc-flecha ${abierto ? "sfc-flecha-abierta" : ""}`} aria-hidden="true"></i>
            </button>

            {abierto && (
                <ul className="sfc-lista" role="listbox" aria-labelledby={nombre}>
                    {lista.map((o, i) => (
                        <li
                            key={o.valor}
                            role="option"
                            aria-selected={o.valor === value}
                            className={`sfc-opcion ${i === resaltado ? "sfc-opcion-activa" : ""} ${o.valor === value ? "sfc-opcion-elegida" : ""}`}
                            onMouseEnter={() => setResaltado(i)}
                            onClick={() => elegir(o.valor)}
                        >
                            {o.etiqueta}
                        </li>
                    ))}
                </ul>
            )}

            <style>{`
                .sfc { position: relative; width: 100%; }
                .sfc-boton {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 0.8rem;
                    background: transparent;
                    border: none;
                    border-bottom: 1px solid rgba(250, 246, 239, 0.3);
                    border-radius: 0;
                    padding: 0.6rem 0;
                    font: inherit;
                    text-align: left;
                    cursor: pointer;
                    transition: border-color 0.2s ease;
                }
                .sfc-boton:hover,
                .sfc-boton:focus-visible {
                    border-bottom-color: #f6c39c;
                    outline: none;
                }
                .sfc-valor { color: #faf6ef; }
                .sfc-placeholder { color: rgba(250, 246, 239, 0.45); }
                .sfc-flecha {
                    font-size: 0.7rem;
                    color: rgba(250, 246, 239, 0.5);
                    flex-shrink: 0;
                    transition: transform 0.2s ease, color 0.2s ease;
                }
                .sfc-flecha-abierta { transform: rotate(180deg); color: #f6c39c; }
                .sfc-lista {
                    position: absolute;
                    z-index: 30;
                    top: calc(100% + 0.4rem);
                    left: 0;
                    /* mínimo el ancho del campo; si la opción es más larga
                       (el prefijo mide cuatro dedos), la lista crece sola */
                    min-width: 100%;
                    max-width: min(24rem, 78vw);
                    width: max-content;
                    margin: 0;
                    padding: 0.3rem 0;
                    list-style: none;
                    background: #1c1917;
                    border: 1px solid rgba(250, 246, 239, 0.16);
                    border-radius: 4px;
                    box-shadow: 0 18px 40px rgba(28, 25, 23, 0.5);
                    max-height: 15rem;
                    overflow-y: auto;
                    overscroll-behavior: contain;
                }
                .sfc-opcion {
                    padding: 0.6rem 0.9rem;
                    font-size: 0.96em;
                    line-height: 1.4;
                    color: rgba(250, 246, 239, 0.8);
                    cursor: pointer;
                    border-top: 1px solid rgba(250, 246, 239, 0.08);
                    transition: color 0.15s ease, background 0.15s ease;
                }
                .sfc-opcion:first-child { border-top: none; }
                .sfc-opcion-activa { background: rgba(250, 246, 239, 0.07); color: #faf6ef; }
                .sfc-opcion-elegida { color: #f6c39c; font-weight: 600; }

            `}</style>
        </div>
    );
}
