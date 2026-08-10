import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import FormularioCurso from "./FormularioCurso";

// =============================================================================
// PLANTILLA DE SECTOR — lenguaje editorial v3
// =============================================================================
// El visitante se reconoce por lo que es ("soy un despacho"), así que la página
// abre con su dolor y cierra con la pieza que se lo quita. Mismo esqueleto que
// el resto del sitio: hero con foto y formulario, split degradado, dolores en
// tinta, cifras, tira de sectores y FAQ con el CTA dentro.
//
// Cabeceras: cada sector pasa las suyas (`dolorTitulo`, `solucionTitulo`…) para
// que tres páginas no compitan en Google con los mismos H2.
// =============================================================================

export interface SectorPageProps {
    sector: string;
    sectorSlug: string;
    icon: string;
    color: string;
    heroKicker: string;
    heroTitle: React.ReactNode;
    heroSubtitle: string;
    heroImagen?: string;
    heroPosicion?: string;
    /** Cápsula answer-first del split degradado */
    enCorto?: string;
    /** Línea mono de datos del split (3-4 entradas; la última se pinta en melocotón) */
    datos?: string[];
    painPoints: { icon: string; text: string }[];
    /** H2 propio de la sección de dolores */
    dolorTitulo?: string;
    dolorSub?: string;
    solutions: { icon: string; title: string; description: string }[];
    /** H2 propio de la sección de soluciones */
    solucionTitulo?: string;
    /** H2 del split degradado — distinto del de soluciones */
    enCortoTitulo?: string;
    results: { stat: string; label: string }[];
    /** Foto de la banda de soluciones (si no, va en tinta) */
    fotoSoluciones?: string;
    faqs: { question: string; answer: string }[];
    /** Siguiente paso: 3 piezas como máximo — el menú y el footer ya listan el resto */
    relacionados?: { href: string; icon: string; titulo: string; desc: string }[];
    /** Opciones del selector del formulario del hero */
    opcionesFormulario?: string[];
}

// Las seis puertas por identidad, en el mismo orden que el menú.
export const SECTORES = [
    { href: "/sectores/administradores-fincas", label: "Fincas" },
    { href: "/sectores/despachos", label: "Despachos" },
    { href: "/formacion/centros-educativos", label: "Centros" },
    { href: "/sectores/academias", label: "Academias" },
    { href: "/sectores/rrhh", label: "RRHH" },
    { href: "/formacion/directivos", label: "Dirección" },
];

export default function SectorPage(p: SectorPageProps) {
    const foto = p.heroImagen ?? "/servicios-hero.webp";

    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />

            {/* Hero con foto + velo lateral y formulario translúcido */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 4rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={foto}
                    alt=""
                    aria-hidden="true"
                    fetchPriority="high"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: p.heroPosicion ?? "center",
                        zIndex: 0,
                    }}
                />
                <div aria-hidden="true" style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "linear-gradient(90deg, rgba(28,25,23,0.62) 0%, rgba(28,25,23,0.42) 38%, rgba(28,25,23,0.12) 65%, transparent 85%), linear-gradient(180deg, rgba(28,25,23,0.18) 0%, transparent 40%)",
                }} />
                <div className="container fc-hero-grid fh-foto" style={{ position: "relative", zIndex: 2 }}>
                    <div>
                        <span className="kicker-mono" style={{ color: "#f6c39c" }}>
                            <i className={`fa-solid ${p.icon}`} style={{ marginRight: "0.6rem" }}></i>
                            {p.heroKicker}
                        </span>
                        <h1 style={{
                            fontFamily: "var(--font-display, serif)",
                            fontSize: "clamp(2rem, 4.5vw, 3rem)",
                            fontWeight: 600,
                            lineHeight: 1.12,
                            letterSpacing: "-0.02em",
                            color: "#faf6ef",
                            margin: "1rem 0 1.2rem",
                            textShadow: "0 2px 30px rgba(28,25,23,0.45)",
                        }}>
                            {p.heroTitle}
                        </h1>
                        <p style={{ fontSize: "1.1rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, margin: 0, maxWidth: 620, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                            {p.heroSubtitle}
                        </p>
                    </div>

                    {/* Captura en el hero: el sector viaja como origen del lead */}
                    <FormularioCurso
                        origen={`Sector · ${p.sector}`}
                        etiquetaPersonas="Tamaño del equipo"
                        etiquetaOpciones="¿Qué te urge más?*"
                        opciones={p.opcionesFormulario ?? [
                            "Quitarme trabajo manual",
                            "Tener todo en un panel",
                            "Atender mejor y más rápido",
                            "Aún no lo tengo claro",
                        ]}
                    />
                </div>
            </section>

            {/* Las seis puertas por identidad — pestañas pegadas al hero */}
            <nav aria-label="Sectores" className="nav-barra">
                <div className="container nav-barra-fila">
                    {SECTORES.map((s, i) => {
                        const activa = p.sectorSlug.includes(s.href.split("/").pop()!);
                        return (
                            <Link
                                key={s.href}
                                href={s.href}
                                aria-current={activa ? "page" : undefined}
                                className={`nav-barra-item ${activa ? "nav-barra-activa" : ""}`}
                            >
                                {s.label}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* En corto — split degradado, como el curso estrella */}
            {p.enCorto && (
                <section aria-label="En corto" style={{ padding: 0, background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)" }}>
                    <div className="container sp2-mitades">
                        <div className="sp2-mitad">
                            <span className="sp2-marca" aria-hidden="true">
                                <i className={`fa-solid ${p.icon}`}></i>
                            </span>
                            <div className="sp2-cuerpo">
                                <span className="mono-label" style={{ color: "#f6c39c" }}>En corto</span>
                                <h2 className="sp2-titulo">{p.enCortoTitulo ?? `Automatización para ${p.sector.toLowerCase()}`}</h2>
                                <p className="sp2-sub">{p.enCorto}</p>
                                {p.datos && (
                                    <div className="sp2-datos">
                                        {p.datos.map((d, i) => (
                                            <span key={d} className={i === p.datos!.length - 1 ? "sp2-dato-precio" : undefined}>{d}</span>
                                        ))}
                                    </div>
                                )}
                                <div className="sp2-enlaces">
                                    <a href="#soluciones" className="sp2-enlace">Ver qué se automatiza ↓</a>
                                    <Link href="/precios#automatizar" className="sp2-enlace">Ver la tabla de precios →</Link>
                                </div>
                                <p className="sp2-nota">
                                    ¿No sabes por dónde empezar? El{" "}
                                    <Link href="/diagnostico">diagnóstico gratis, 12 preguntas en 3 minutos</Link>,
                                    te lo dice.
                                </p>
                            </div>
                        </div>
                        <div className="sp2-mitad">
                            <div className="sp2-cuerpo">
                                {p.results.map((r, i) => (
                                    <div key={r.label} className={i === 0 ? "sp2-cifra-bloque" : "sp2-cifra-bloque sp2-cifra-bloque-2"}>
                                        <span className="sp2-cifra-valor">{r.stat}</span>
                                        <span className="sp2-cifra-etiqueta">{r.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* El problema — filas tipo índice en tinta */}
            <section style={{ padding: "3.8rem 0", background: "#1c1917" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>¿Te suena?</span>
                        <h2 style={{
                            fontFamily: "var(--font-display, serif)",
                            fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)",
                            fontWeight: 600,
                            lineHeight: 1.2,
                            color: "#faf6ef",
                            margin: "1rem 0 0.6rem",
                            letterSpacing: "-0.01em",
                        }}>
                            {p.dolorTitulo ?? "Dónde se va el tiempo"}
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.8)", lineHeight: 1.7, margin: 0, maxWidth: 560 }}>
                            {p.dolorSub ?? "Si reconoces tres o más, hay horas que recuperar."}
                        </p>
                    </div>
                    <div className="sp2-dolores">
                        {p.painPoints.map((pp, i) => (
                            <div key={pp.text} className="sp2-dolor">
                                <span className="sp2-dolor-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                                <span>{pp.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Qué se automatiza — sobre foto con velo */}
            <section id="soluciones" style={{ position: "relative", overflow: "hidden", padding: "4.5rem 0", background: "#1c1917", scrollMarginTop: "6rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={p.fotoSoluciones ?? "/auditoria.webp"}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
                />
                <div aria-hidden="true" style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "linear-gradient(90deg, rgba(28,25,23,0.8) 0%, rgba(28,25,23,0.66) 45%, rgba(28,25,23,0.45) 75%, rgba(28,25,23,0.3) 100%)",
                }} />
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="sp2-cab">
                        <span className="mono-label sp2-cab-kicker">Qué se automatiza</span>
                        <h2 className="sp2-cab-titulo">{p.solucionTitulo ?? `Los flujos de ${p.sector.toLowerCase()}, uno a uno`}</h2>
                        <p className="sp2-cab-sub">
                            Flujos del sector montados sobre vuestro proceso real — no plantillas genéricas.
                        </p>
                    </div>
                    <div className="sp2-soluciones">
                        {p.solutions.map((s, i) => (
                            <div key={s.title} className="sp2-solucion">
                                <span className="sp2-solucion-num mono-label">{String(i + 1).padStart(2, "0")}</span>
                                <h3>{s.title}</h3>
                                <p>{s.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Siguiente paso — filas con filete, máximo tres */}
            {p.relacionados && p.relacionados.length > 0 && (
                <section style={{ padding: "3.6rem 0", background: "#1c1917", borderTop: "1px solid rgba(250,246,239,0.08)" }}>
                    <div className="container sp2-rel-grid">
                        <div>
                            <span className="mono-label" style={{ color: "#f6c39c" }}>Siguiente paso</span>
                            <h2 className="sp2-rel-titulo">Lo que suele venir después</h2>
                            <p className="sp2-rel-sub">
                                Las piezas que mejor encajan con {p.sector.toLowerCase()} — cada una
                                con su página y su precio.
                            </p>
                        </div>
                        <div>
                            {p.relacionados.slice(0, 3).map((r) => (
                                <Link key={r.titulo} href={r.href} className="sp2-rel">
                                    <div className="sp2-rel-cab">
                                        <h3>{r.titulo}</h3>
                                        <span className="sp2-rel-f">→</span>
                                    </div>
                                    <p>{r.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ — split en tinta con el CTA integrado */}
            <section style={{ padding: "4rem 0", background: "#1c1917", borderTop: "1px solid rgba(250,246,239,0.08)" }}>
                <div className="container sp2-faq-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.9rem", color: "#faf6ef" }}>
                            Preguntas frecuentes
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.7)", lineHeight: 1.65, margin: "0 0 1.6rem", fontSize: "0.95rem" }}>
                            30 minutos gratis: me cuentas cómo trabajáis y te digo qué automatizaría
                            primero en {p.sector.toLowerCase()} — y qué no merece la pena tocar.
                        </p>
                        <Link href="/#contact" className="sp2-cta">Pedir mis 30 minutos →</Link>
                    </div>
                    <div>
                        {p.faqs.map((f) => (
                            <details key={f.question} className="sp-faq" name="faq-sector">
                                <summary>
                                    <span>{f.question}</span>
                                    <i className="fas fa-chevron-down"></i>
                                </summary>
                                <p style={{ padding: "0 0.4rem 1.5rem", color: "rgba(250,246,239,0.75)", lineHeight: 1.7, margin: 0 }}>{f.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            <style>{`
                .fh-foto .fc-card {
                    background: rgba(28, 25, 23, 0.62);
                    backdrop-filter: blur(5px);
                    -webkit-backdrop-filter: blur(5px);
                }
                @media (max-width: 900px) {
                }
                .sp2-mitades {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4.5rem;
                }
                .sp2-mitad {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .sp2-marca {
                    position: absolute;
                    top: 1.2rem;
                    right: 1.6rem;
                    font-size: clamp(3.5rem, 6vw, 5.5rem);
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.1);
                    pointer-events: none;
                }
                .sp2-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    padding: 3rem 0;
                    width: 100%;
                }
                .sp2-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.12;
                    letter-spacing: -0.01em;
                    margin: 0;
                }
                .sp2-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.65;
                    font-size: 0.97rem;
                    margin: 0;
                }
                .sp2-datos {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem 1.3rem;
                    margin-top: 0.4rem;
                }
                .sp2-datos span {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.7);
                }
                .sp2-datos .sp2-dato-precio { color: #f6c39c; }
                .sp2-enlaces {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem 1.3rem;
                    margin-top: 1rem;
                }
                .sp2-enlace {
                    display: inline-block;
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .sp2-enlace:hover { color: #faf6ef; transform: translateX(6px); }
                .sp2-nota {
                    margin: 0.6rem 0 0;
                    font-size: 0.85rem;
                    line-height: 1.6;
                    color: rgba(250, 246, 239, 0.6);
                }
                .sp2-nota a { color: #f6c39c; font-weight: 600; }
                .sp2-nota a:hover { color: #faf6ef; }
                .sp2-cifra-bloque {
                    display: flex;
                    flex-direction: column;
                    gap: 0.3rem;
                }
                .sp2-cifra-bloque-2 {
                    border-top: 1px solid rgba(250, 246, 239, 0.16);
                    padding-top: 1.2rem;
                    margin-top: 1.2rem;
                }
                .sp2-cifra-valor {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.8rem, 3.4vw, 2.6rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .sp2-cifra-etiqueta {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.7);
                    line-height: 1.5;
                }
                @media (max-width: 800px) {
                    .sp2-mitades { grid-template-columns: 1fr; gap: 0; }
                    .sp2-cuerpo { padding: 2.2rem 0; }
                }
                .sp2-dolor {
                    display: grid;
                    grid-template-columns: 3rem 1fr;
                    gap: 1rem;
                    align-items: baseline;
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                    padding: 1.1rem 0;
                    color: rgba(250, 246, 239, 0.88);
                    font-size: 1rem;
                    line-height: 1.55;
                }
                .sp2-dolor:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .sp2-dolor-num {
                    font-family: var(--font-display, serif);
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: rgba(246, 195, 156, 0.45);
                    line-height: 1;
                }
                .sp2-cab {
                    text-align: center;
                    max-width: 660px;
                    margin: 0 auto 2.4rem;
                }
                .sp2-cab-kicker { color: #f6c39c; }
                .sp2-cab-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 3.2vw, 2.4rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 0.9rem 0 0.7rem;
                    text-shadow: 0 2px 30px rgba(28,25,23,0.45);
                }
                .sp2-cab-sub {
                    color: rgba(250, 246, 239, 0.75);
                    font-size: 0.95rem;
                    line-height: 1.65;
                    margin: 0;
                }
                .sp2-soluciones {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem 2.4rem;
                }
                .sp2-solucion {
                    display: flex;
                    flex-direction: column;
                    gap: 0.35rem;
                    border-top: 1px solid rgba(250, 246, 239, 0.2);
                    padding-top: 1rem;
                }
                .sp2-solucion-num { color: #f6c39c; }
                .sp2-solucion h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.25;
                }
                .sp2-solucion p {
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.6;
                    font-size: 0.9rem;
                    margin: 0;
                }
                @media (max-width: 900px) {
                    .sp2-soluciones { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 600px) {
                    .sp2-soluciones { grid-template-columns: 1fr; gap: 1.4rem; }
                }
                .sp2-rel-grid, .sp2-faq-grid {
                    display: grid;
                    grid-template-columns: 0.38fr 0.62fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 800px) {
                    .sp2-rel-grid, .sp2-faq-grid { grid-template-columns: 1fr; gap: 1.8rem; }
                }
                .sp2-rel-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 1.9rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    margin: 0.8rem 0 0.6rem;
                }
                .sp2-rel-sub {
                    color: rgba(250, 246, 239, 0.7);
                    line-height: 1.65;
                    font-size: 0.93rem;
                    margin: 0;
                }
                .sp2-rel {
                    display: block;
                    color: inherit;
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                    padding: 1.1rem 0;
                }
                .sp2-rel:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .sp2-rel-cab {
                    display: flex;
                    align-items: baseline;
                    justify-content: space-between;
                    gap: 1rem;
                }
                .sp2-rel h3 {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.1rem, 2vw, 1.35rem);
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.25;
                    transition: color 0.2s ease;
                }
                .sp2-rel:hover h3 { color: #f6c39c; }
                .sp2-rel-f {
                    color: #f6c39c;
                    font-weight: 600;
                    flex-shrink: 0;
                    display: inline-block;
                    transition: transform 0.25s ease;
                }
                .sp2-rel:hover .sp2-rel-f { transform: translateX(6px); }
                .sp2-rel p {
                    color: rgba(250, 246, 239, 0.78);
                    line-height: 1.6;
                    font-size: 0.9rem;
                    margin: 0.3rem 0 0;
                    max-width: 560px;
                }
                .sp2-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.8rem 1.6rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .sp2-cta:hover { background: #faf6ef; transform: translateY(-2px); }
                .sp-faq { border-top: 1px solid rgba(250, 246, 239, 0.14); }
                .sp-faq:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .sp-faq summary {
                    list-style: none;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    padding: 1.3rem 0.4rem;
                    cursor: pointer;
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.05rem, 2vw, 1.3rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.3;
                    transition: color 0.2s ease, padding-left 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .sp-faq summary::-webkit-details-marker { display: none; }
                .sp-faq summary:hover { color: #f6c39c; padding-left: 1rem; }
                .sp-faq summary i { color: #f6c39c; font-size: 0.8rem; flex-shrink: 0; transition: transform 0.3s ease; }
                .sp-faq[open] summary i { transform: rotate(180deg); }
                .premium-gradient {
                    background: none !important;
                    -webkit-background-clip: unset !important;
                    background-clip: unset !important;
                    -webkit-text-fill-color: #f6c39c !important;
                    color: #f6c39c !important;
                }
            `}</style>
        </main>
    );
}
