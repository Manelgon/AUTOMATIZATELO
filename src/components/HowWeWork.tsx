"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";

const fases = [
    {
        num: "01",
        titulo: "Auditoría",
        lema: "Antes de construir, el criterio.",
        texto:
            "Me cuentas cómo trabajas y te digo qué automatizaría primero, qué retorno puedes esperar y qué no merece la pena automatizar. 30 minutos, gratis, sin compromiso y sin jerga.",
        linkHref: "/#contact",
        linkLabel: "Pedir mi auditoría gratuita",
    },
    {
        num: "02",
        titulo: "Implementación",
        lema: "Después del criterio, el sistema.",
        texto:
            "Construyo la solución: chatbots que atienden solos, paneles de gestión a medida, flujos que eliminan el trabajo repetitivo. Precio cerrado, pago por hitos, sin permanencia — y el código y los datos son tuyos.",
        linkHref: "/casos-de-exito",
        linkLabel: "Ver sistemas que ya funcionan",
    },
    {
        num: "03",
        titulo: "Formación",
        lema: "Tu equipo aprende a usarlo.",
        texto:
            "De nada sirve un sistema que nadie usa. Formo a tu equipo para trabajar con IA con criterio y seguridad — y de paso cumples la formación en IA que ya exige el Reglamento Europeo.",
        linkHref: "/servicios/formacion-ia-empresas",
        linkLabel: "Conocer la formación",
    },
];

const T = fases.length;

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo automatizamos tu negocio con IA",
    "description": "Auditoría gratuita, implementación con precio cerrado y formación del equipo.",
    "step": fases.map((f, i) => ({
        "@type": "HowToStep",
        "position": i + 1,
        "name": f.titulo,
        "text": f.texto,
    })),
};

function Fase({ index, progress, fase }: {
    index: number;
    progress: MotionValue<number>;
    fase: (typeof fases)[number];
}) {
    const ini = index / T;
    const fin = (index + 1) / T;
    const m = 0.3 / T;

    const opacity = useTransform(
        progress,
        index === 0
            ? [fin - m, fin]
            : index === T - 1
                ? [ini, ini + m]
                : [ini, ini + m, fin - m, fin],
        index === 0
            ? [1, 0]
            : index === T - 1
                ? [0, 1]
                : [0, 1, 1, 0]
    );

    return (
        <motion.div className="hww-fase" style={{ opacity }}>
            <span className="hww-numero" aria-hidden="true">{fase.num}</span>
            <div className="hww-contenido">
                <h3 style={{
                    fontFamily: "var(--font-display, serif)",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                    fontWeight: 600,
                    color: "var(--color-text-main)",
                    marginBottom: "0.4rem",
                }}>
                    {fase.titulo}
                </h3>
                <p style={{ fontStyle: "italic", color: "var(--color-text-muted)", marginBottom: "1rem" }}>
                    {fase.lema}
                </p>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, maxWidth: 520, marginBottom: "1.2rem" }}>
                    {fase.texto}
                </p>
                <Link
                    href={fase.linkHref}
                    className="hww-link"
                    style={{ color: "var(--color-primary)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.4rem", pointerEvents: "auto" }}
                >
                    {fase.linkLabel} <span className="hww-arrow" style={{ transition: "transform 0.2s ease", display: "inline-block" }}>→</span>
                </Link>
            </div>
        </motion.div>
    );
}

export default function HowWeWork() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    return (
        <section id="how-we-work" ref={ref} className="hww-seccion">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />

            <div className="hww-escenario">
                <div className="container" style={{ width: "100%" }}>
                    <span className="kicker-mono">Cómo trabajo</span>
                    <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "2.5rem" }}>
                        Tres pasos. Sin sorpresas, sin jerga.
                    </h2>

                    <div className="hww-fases">
                        {fases.map((f, i) => (
                            <Fase key={f.num} index={i} progress={scrollYProgress} fase={f} />
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .hww-seccion {
                    position: relative;
                    height: 220vh;
                }
                .hww-escenario {
                    position: sticky;
                    top: 0;
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                }
                .hww-fases {
                    position: relative;
                    min-height: 380px;
                }
                .hww-fase {
                    position: absolute;
                    inset: 0;
                    display: grid;
                    grid-template-columns: auto 1fr;
                    gap: clamp(1.5rem, 5vw, 4rem);
                    align-items: center;
                    pointer-events: none;
                }
                .hww-numero {
                    font-family: var(--font-display, serif);
                    font-size: clamp(8rem, 22vw, 20rem);
                    font-weight: 600;
                    line-height: 0.9;
                    color: rgba(234, 88, 12, 0.16);
                    user-select: none;
                    letter-spacing: -0.04em;
                }
                .hww-link:hover .hww-arrow {
                    transform: translateX(5px);
                }
                @media (max-width: 900px) {
                    .hww-seccion {
                        height: auto;
                    }
                    .hww-escenario {
                        position: static;
                        height: auto;
                        padding: 4rem 0;
                    }
                    .hww-fases {
                        min-height: 0;
                        display: flex;
                        flex-direction: column;
                        gap: 3rem;
                    }
                    .hww-fase {
                        position: static;
                        opacity: 1 !important;
                        grid-template-columns: 1fr;
                        gap: 0.5rem;
                        pointer-events: auto;
                    }
                    .hww-numero {
                        font-size: 4.5rem;
                        line-height: 1;
                    }
                }
            `}</style>
        </section>
    );
}
