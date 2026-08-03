"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const razones = [
    {
        num: "01",
        titulo: "Construyo lo que enseño",
        texto: "No vivo de diapositivas: los bots, paneles y cursos que enseño y audito llevan meses funcionando en negocios reales.",
        link: { href: "/casos-de-exito", label: "Ver los casos" },
    },
    {
        num: "02",
        titulo: "Precio cerrado, sin permanencia",
        texto: "Sabes lo que pagas antes de empezar. Pago por hitos: si no avanzo, no cobro. Y si quieres parar, paras.",
    },
    {
        num: "03",
        titulo: "El código y los datos son tuyos",
        texto: "Todo lo que construyo para ti se queda contigo. Sin licencias por usuario, sin rehenes, sin letra pequeña.",
    },
    {
        num: "04",
        titulo: "Te enseño a no depender de mí",
        texto: "Formo a tu equipo para que el sistema sea vuestro de verdad. Un sistema que nadie usa no es automatización.",
        link: { href: "/servicios/formacion-ia-empresas", label: "Cómo es la formación" },
    },
];

export default function Razones() {
    return (
        <section style={{ padding: "5.5rem 0", background: "#f8dfc6" }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: "3rem", maxWidth: 780 }}
                >
                    <span className="kicker-mono">Por qué yo</span>
                    <p style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.8rem, 4vw, 3rem)",
                        fontWeight: 600,
                        lineHeight: 1.2,
                        color: "var(--color-text-main)",
                        margin: "1rem 0 0",
                        letterSpacing: "-0.02em",
                    }}>
                        Llevo 3 años haciendo que los negocios{" "}
                        <span style={{ color: "var(--color-primary)" }}>trabajen solos</span>.
                        Las pymes se quedan conmigo porque…
                    </p>
                </motion.div>

                <div className="rz-grid">
                    {razones.map((r, i) => (
                        <motion.div
                            key={r.num}
                            className="rz-col"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="mono-label" style={{ color: "var(--color-text-muted)" }}>{r.num}</span>
                            <h3 style={{
                                fontFamily: "var(--font-display, serif)",
                                fontSize: "1.25rem",
                                fontWeight: 600,
                                color: "var(--color-text-main)",
                                margin: "0.7rem 0 0.6rem",
                                lineHeight: 1.25,
                            }}>
                                {r.titulo}
                            </h3>
                            <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                                {r.texto}
                            </p>
                            {r.link && (
                                <Link href={r.link.href} className="rz-link" style={{ color: "var(--color-primary)", fontWeight: 600, fontSize: "0.92rem", display: "inline-flex", alignItems: "center", gap: "0.35rem", marginTop: "0.8rem" }}>
                                    {r.link.label} <span className="rz-arrow" style={{ transition: "transform 0.2s ease", display: "inline-block" }}>→</span>
                                </Link>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                .rz-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .rz-col {
                    border-left: 1px solid rgba(28, 25, 23, 0.16);
                    padding-left: 1.4rem;
                }
                .rz-link:hover .rz-arrow {
                    transform: translateX(4px);
                }
                @media (max-width: 1000px) {
                    .rz-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 560px) {
                    .rz-grid { grid-template-columns: 1fr; gap: 1.6rem; }
                }
            `}</style>
        </section>
    );
}
