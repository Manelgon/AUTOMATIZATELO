"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Cada sector busca su imagen en /public/sectores/ (jpg → webp → png).
// Si no existe, muestra el degradado cálido con icono de marca de agua.
const sectores = [
    {
        sector: "Clínicas y Salud",
        href: "/automatizacion-clinicas",
        icon: "fa-stethoscope",
        imagen: "clinicas",
        frase: "Citas que se confirman solas, recordatorios automáticos y lista de espera.",
        span: "grande",
    },
    {
        sector: "Administradores de Fincas",
        href: "/automatizacion-administradores-fincas",
        icon: "fa-building",
        imagen: "fincas",
        frase: "Panel en uso diario en despachos reales desde enero de 2026.",
        span: "ancho",
    },
    {
        sector: "E-commerce",
        href: "/automatizacion-ecommerce",
        icon: "fa-bag-shopping",
        imagen: "ecommerce",
        frase: "Soporte automático y tareas de tienda sin picar datos.",
        span: "normal",
    },
    {
        sector: "Empresas de Servicios",
        href: "/automatizacion-empresas-servicios",
        icon: "fa-briefcase",
        imagen: "servicios",
        frase: "CRM y seguimiento de leads en menos de 5 minutos.",
        span: "normal",
    },
];

const EXTENSIONES = ["jpg", "webp", "png"];

function FotoSector({ nombre, icon }: { nombre: string; icon: string }) {
    // El degradado se muestra siempre; la foto solo se pone encima si
    // comprobamos en segundo plano que el archivo existe (evita imágenes rotas).
    const [src, setSrc] = useState<string | null>(null);

    useEffect(() => {
        let vivo = true;
        (async () => {
            for (const ext of EXTENSIONES) {
                const url = `/sectores/${nombre}.${ext}`;
                const existe = await new Promise<boolean>((res) => {
                    const img = new window.Image();
                    img.onload = () => res(true);
                    img.onerror = () => res(false);
                    img.src = url;
                });
                if (existe && vivo) {
                    setSrc(url);
                    return;
                }
            }
        })();
        return () => { vivo = false; };
    }, [nombre]);

    return (
        <>
            <div className="uc-foto uc-foto-fallback">
                <i className={`fa-solid ${icon}`} aria-hidden="true"></i>
            </div>
            {src && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src} alt="" aria-hidden="true" className="uc-foto" />
            )}
        </>
    );
}

export default function UseCases() {
    return (
        <section id="casos" style={{ padding: "4.5rem 0" }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: "2.5rem" }}
                >
                    <span className="kicker-mono">Casos de uso</span>
                    <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                        Sectores donde la automatización genera más impacto
                    </h2>
                    <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 620 }}>
                        Donde hay procesos repetitivos, hay horas por recuperar. En estos sectores lo hemos comprobado.
                    </p>
                </motion.div>

                <div className="uc-mosaico">
                    {sectores.map((s, i) => (
                        <motion.div
                            key={s.sector}
                            className={`uc-celda uc-${s.span}`}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Link href={s.href} className="uc-tile">
                                <FotoSector nombre={s.imagen} icon={s.icon} />
                                <div className="uc-velo" aria-hidden="true" />
                                <div className="uc-contenido">
                                    <span className="mono-label" style={{ color: "rgba(250,246,239,0.85)" }}>Sector</span>
                                    <h3>{s.sector}</h3>
                                    <p>{s.frase}</p>
                                    <span className="uc-cta">
                                        Ver soluciones <span className="uc-arrow">→</span>
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                .uc-mosaico {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-auto-rows: 235px;
                    gap: 1.2rem;
                }
                .uc-grande { grid-column: span 2; grid-row: span 2; }
                .uc-ancho { grid-column: span 2; }
                .uc-normal { grid-column: span 1; }

                .uc-celda { min-width: 0; }
                .uc-tile {
                    position: relative;
                    display: block;
                    width: 100%;
                    height: 100%;
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    color: #faf6ef;
                }
                .uc-foto {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .uc-tile:hover .uc-foto {
                    transform: scale(1.05);
                }
                .uc-foto-fallback {
                    background: linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .uc-foto-fallback i {
                    font-size: clamp(4rem, 9vw, 8rem);
                    color: rgba(250, 246, 239, 0.14);
                }
                .uc-velo {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(28,25,23,0.05) 30%, rgba(28,25,23,0.72) 100%);
                    transition: background 0.4s ease;
                }
                .uc-contenido {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    padding: 1.6rem 1.8rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.35rem;
                }
                .uc-contenido h3 {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.3rem, 2.2vw, 1.9rem);
                    font-weight: 600;
                    line-height: 1.15;
                    margin: 0;
                    color: #faf6ef;
                }
                .uc-contenido p {
                    font-size: 0.9rem;
                    line-height: 1.5;
                    color: rgba(250,246,239,0.82);
                    margin: 0;
                    max-width: 420px;
                }
                .uc-normal .uc-contenido p { display: none; }
                .uc-cta {
                    font-weight: 600;
                    font-size: 0.9rem;
                    color: #f6c39c;
                    margin-top: 0.5rem;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                }
                .uc-arrow {
                    transition: transform 0.2s ease;
                    display: inline-block;
                }
                .uc-tile:hover .uc-arrow {
                    transform: translateX(5px);
                }
                @media (max-width: 1000px) {
                    .uc-mosaico {
                        grid-template-columns: repeat(2, 1fr);
                        grid-auto-rows: 220px;
                    }
                    .uc-grande { grid-column: span 2; grid-row: span 1; }
                    .uc-ancho { grid-column: span 2; }
                    .uc-normal { grid-column: span 1; }
                }
                @media (max-width: 600px) {
                    .uc-mosaico {
                        grid-template-columns: 1fr;
                        grid-auto-rows: 210px;
                    }
                    .uc-grande, .uc-ancho, .uc-normal { grid-column: span 1; grid-row: span 1; }
                    .uc-normal .uc-contenido p { display: block; }
                }
            `}</style>
        </section>
    );
}
