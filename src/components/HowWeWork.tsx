"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";

// Las tres puertas de entrada — las mismas de precios, el navbar y /como-trabajo.
const fases = [
    {
        num: "01",
        titulo: "Formar",
        lema: "Que tu equipo use la IA con criterio.",
        texto:
            "Talleres prácticos con vuestros casos reales, no diapositivas genéricas: cada persona sale sabiendo qué pedirle a la IA en su puesto — y qué no. Con certificado nominal y registro formativo, la evidencia que exige el Art. 4.",
        precio: "desde 600€",
        linkHref: "/servicios/formacion-ia-empresas",
        linkLabel: "Ver formatos y tarifas",
    },
    {
        num: "02",
        titulo: "Cumplir",
        lema: "Que la ley no te pille a contrapié.",
        texto:
            "Reviso qué IA usa tu empresa de verdad, clasifico los riesgos según el Reglamento Europeo y te entrego el informe con el plan de acción. Y si quieres cerrarlo: política de uso redactada y formación del Art. 4.",
        precio: "desde 750€",
        linkHref: "/servicios/auditoria-ia",
        linkLabel: "Ver qué incluye la auditoría",
    },
    {
        num: "03",
        titulo: "Automatizar",
        lema: "Que el trabajo repetitivo se haga solo.",
        texto:
            "Chatbots, paneles a medida y flujos que eliminan el trabajo manual — construidos por hitos, probados con tus datos y entregados funcionando. El código y los datos, siempre tuyos.",
        precio: "desde 900€",
        linkHref: "/casos-de-exito",
        linkLabel: "Ver sistemas que ya funcionan",
    },
];

const T = fases.length;

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo implanto la IA en tu negocio",
    "description": "Tres líneas: formar al equipo, cumplir el Reglamento Europeo de IA y automatizar el trabajo. Todo empieza con una auditoría gratuita de 30 minutos, con precio y plazo cerrados por escrito.",
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
                <div className="hww-pie">
                    <span className="hww-precio">{fase.precio}</span>
                    <Link
                        href={fase.linkHref}
                        className="hww-link"
                        style={{ color: "var(--color-primary)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.4rem", pointerEvents: "auto" }}
                    >
                        {fase.linkLabel} <span className="hww-arrow" style={{ transition: "transform 0.2s ease", display: "inline-block" }}>→</span>
                    </Link>
                </div>
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
                    <span className="kicker-mono">Por dónde empezar</span>
                    <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.6rem" }}>
                        Tres puertas. Entra por la que te pique.
                    </h2>
                    <p className="hww-intro">
                        Todas empiezan igual: 30 minutos gratis para ver tu caso.{" "}
                        <Link href="/como-trabajo" style={{ color: "var(--color-primary)", fontWeight: 600, pointerEvents: "auto" }}>
                            Así trabajo →
                        </Link>
                    </p>

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
                    height: 180vh;
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
                .hww-intro {
                    color: var(--color-text-muted);
                    margin-bottom: 2.2rem;
                    max-width: 520px;
                }
                /* Precio y enlace comparten línea: la puerta se lee entera de un vistazo */
                .hww-pie {
                    display: flex;
                    align-items: baseline;
                    gap: 1.4rem;
                    flex-wrap: wrap;
                }
                .hww-precio {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.78rem;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: var(--color-text-main);
                    background: #f8dfc6;
                    padding: 0.35rem 0.8rem;
                    border-radius: 999px;
                    white-space: nowrap;
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
