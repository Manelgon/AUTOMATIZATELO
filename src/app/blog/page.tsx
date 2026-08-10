import type { Metadata } from "next";
import Link from "next/link";
import { supabaseServer } from "@/lib/supabase-server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Esquema from "@/components/Esquema";
import { migas } from "@/lib/esquemas";

export const revalidate = 3600;

export const metadata: Metadata = {
    title: "Blog de Automatización e IA para Pymes",
    description:
        "Guías prácticas sobre automatización, chatbots e IA para pymes: qué automatizar, cuánto cuesta y casos reales de negocios en España.",
    alternates: { canonical: "https://automatizatelo.com/blog" },
};

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    cover_image: string | null;
    tags: string[] | null;
    published_at: string | null;
    created_at: string;
}

async function getPosts(): Promise<BlogPost[]> {
    const { data, error } = await supabaseServer
        .from("blog_posts")
        .select("id,title,slug,excerpt,cover_image,tags,published_at,created_at")
        .eq("status", "published")
        .eq("is_visible", true)
        .order("published_at", { ascending: false });
    if (error || !data) return [];
    return data;
}

function fecha(iso: string | null) {
    if (!iso) return "";
    return new Date(iso).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });
}

export default async function BlogListingPage() {
    const posts = await getPosts();
    const [destacado, ...resto] = posts;

    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Esquema datos={migas([{ nombre: "Blog", url: "/blog" }])} />
            <Header />

            {/* Hero con foto + velo lateral, como el resto del sitio */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 4rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/escribiendo-ventana.webp"
                    alt=""
                    aria-hidden="true"
                    fetchPriority="high"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", zIndex: 0 }}
                />
                <div aria-hidden="true" style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "linear-gradient(90deg, rgba(28,25,23,0.72) 0%, rgba(28,25,23,0.52) 45%, rgba(28,25,23,0.25) 75%, rgba(28,25,23,0.1) 100%)",
                }} />
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <span className="kicker-mono" style={{ color: "#f6c39c" }}>
                        <i className="fa-solid fa-pen-nib" style={{ marginRight: "0.6rem" }}></i>
                        Blog
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
                        Automatización e IA para pymes,{" "}
                        <span style={{ color: "#f6c39c" }}>sin jerga</span>
                    </h1>
                    <p style={{ fontSize: "1.1rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, margin: 0, maxWidth: 620, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                        Lo que aprendo automatizando negocios reales, contado para que puedas
                        aplicarlo en el tuyo. Sin humo y sin vender nada entre líneas.
                    </p>
                </div>
            </section>

            {/* Los pilares, por si has llegado aquí buscando servicio */}
            <nav aria-label="Secciones" className="nav-barra">
                <div className="container nav-barra-fila">
                    <span className="nav-barra-etiqueta mono-label">¿Buscabas otra cosa?</span>
                    <Link href="/formacion" className="nav-barra-item">Formación</Link>
                    <Link href="/cumplimiento" className="nav-barra-item">Cumplimiento</Link>
                    <Link href="/sistemas" className="nav-barra-item">Sistemas</Link>
                    <Link href="/casos" className="nav-barra-item">Casos</Link>
                    <Link href="/diagnostico" className="nav-barra-item">Diagnóstico</Link>
                </div>
            </nav>

            {posts.length === 0 ? (
                <section style={{ padding: "5rem 0", background: "#1c1917", flexGrow: 1 }}>
                    <div className="container" style={{ textAlign: "center" }}>
                        <p style={{ color: "rgba(250,246,239,0.7)", fontSize: "1.05rem", margin: 0 }}>
                            Todavía no hay artículos publicados. Mientras tanto, en{" "}
                            <Link href="/recursos" style={{ color: "#f6c39c", fontWeight: 600 }}>recursos</Link>{" "}
                            tienes guías descargables sin registro.
                        </p>
                    </div>
                </section>
            ) : (
                <>
                    {/* El último artículo, a sangre */}
                    {destacado && (
                        <section style={{ padding: 0 }}>
                            <Link href={`/blog/${destacado.slug}`} className="bl2-destacado">
                                {destacado.cover_image ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img className="bl2-destacado-fondo" src={destacado.cover_image} alt="" aria-hidden="true" loading="lazy" />
                                ) : (
                                    <span className="bl2-destacado-fondo bl2-sin-foto" aria-hidden="true" />
                                )}
                                <span className="bl2-destacado-velo" aria-hidden="true"></span>
                                <span className="bl2-destacado-cuerpo container">
                                    <span className="mono-label bl2-kicker">
                                        Lo último · {fecha(destacado.published_at || destacado.created_at)}
                                    </span>
                                    <span className="bl2-destacado-titulo">{destacado.title}</span>
                                    {destacado.excerpt && <span className="bl2-destacado-desc">{destacado.excerpt}</span>}
                                    <span className="bl2-cta">Leer el artículo →</span>
                                </span>
                            </Link>
                        </section>
                    )}

                    {/* El resto, en paneles a sangre */}
                    {resto.length > 0 && (
                        <section style={{ padding: 0 }}>
                            <div className="bl2-cabecera">
                                <h2 className="bl2-etiqueta">Todos los artículos</h2>
                            </div>
                            <div className="bl2-paneles">
                                {resto.map((post) => (
                                    <Link key={post.id} href={`/blog/${post.slug}`} className="bl2-panel">
                                        {post.cover_image ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img className="bl2-fondo" src={post.cover_image} alt="" aria-hidden="true" loading="lazy" />
                                        ) : (
                                            <span className="bl2-fondo bl2-sin-foto" aria-hidden="true" />
                                        )}
                                        <span className="bl2-velo" aria-hidden="true"></span>
                                        <span className="bl2-cuerpo">
                                            <span className="mono-label bl2-kicker">
                                                {post.tags?.[0] ?? "Artículo"} · {fecha(post.published_at || post.created_at)}
                                            </span>
                                            <span className="bl2-titulo">{post.title}</span>
                                            {post.excerpt && <span className="bl2-desc">{post.excerpt}</span>}
                                            <span className="bl2-cta">Leer →</span>
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}
                </>
            )}

            {/* Cierre — el blog no es un callejón */}
            <section style={{ padding: "3.4rem 0", background: "#1c1917", borderTop: "1px solid rgba(250,246,239,0.08)" }}>
                <div className="container bl2-cierre">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Y si quieres pasar a la práctica</span>
                        <h2 className="bl2-cierre-titulo">30 minutos gratis, sin compromiso</h2>
                        <p className="bl2-cierre-sub">
                            Me cuentas cómo trabajáis y te digo qué automatizar primero, qué formar
                            y qué no merece la pena tocar.
                        </p>
                    </div>
                    <div className="bl2-cierre-acciones">
                        <Link href="/#contact" className="bl2-cierre-cta">Pedir mis 30 minutos →</Link>
                        <Link href="/diagnostico" className="bl2-cierre-enlace">O haz el test de 3 minutos →</Link>
                    </div>
                </div>
            </section>

            <Footer />

            <style>{`
                .bl2-destacado {
                    position: relative;
                    display: flex;
                    align-items: flex-end;
                    min-height: 30rem;
                    overflow: hidden;
                    color: inherit;
                    background: #1c1917;
                }
                .bl2-destacado-fondo {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .bl2-destacado:hover .bl2-destacado-fondo { transform: scale(1.03); }
                .bl2-destacado-velo {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(28,25,23,0.3) 0%, rgba(28,25,23,0.6) 45%, rgba(28,25,23,0.92) 100%);
                }
                .bl2-destacado-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                    padding-top: 6rem;
                    padding-bottom: 3rem;
                    width: 100%;
                }
                .bl2-destacado-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.8rem, 3.6vw, 2.8rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    max-width: 900px;
                }
                .bl2-destacado-desc {
                    color: rgba(250, 246, 239, 0.85);
                    font-size: 1rem;
                    line-height: 1.65;
                    max-width: 700px;
                }
                .bl2-kicker { color: #f6c39c; }
                .bl2-cta {
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    margin-top: 0.5rem;
                    transition: transform 0.25s ease;
                    display: inline-block;
                }
                .bl2-destacado:hover .bl2-cta,
                .bl2-panel:hover .bl2-cta { transform: translateX(6px); }
                .bl2-cabecera {
                    background: #1c1917;
                    padding: 2.4rem 0 1.6rem;
                    border-top: 1px solid rgba(250, 246, 239, 0.08);
                }
                .bl2-etiqueta {
                    text-align: center;
                    font-family: var(--font-mono, monospace);
                    font-size: 0.78rem;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.55);
                    margin: 0;
                }
                .bl2-paneles {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                }
                .bl2-panel {
                    position: relative;
                    display: flex;
                    align-items: flex-end;
                    min-height: 24rem;
                    overflow: hidden;
                    color: inherit;
                    background: #1c1917;
                }
                .bl2-fondo {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .bl2-panel:hover .bl2-fondo { transform: scale(1.04); }
                .bl2-sin-foto {
                    background: linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%);
                }
                .bl2-velo {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(28,25,23,0.3) 0%, rgba(28,25,23,0.6) 45%, rgba(28,25,23,0.92) 100%);
                }
                .bl2-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    padding: 5rem 1.7rem 1.8rem;
                }
                .bl2-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.2rem, 2vw, 1.5rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.2;
                }
                .bl2-desc {
                    font-size: 0.88rem;
                    color: rgba(250, 246, 239, 0.8);
                    line-height: 1.55;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                @media (max-width: 1000px) {
                    .bl2-paneles { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 640px) {
                    .bl2-paneles { grid-template-columns: 1fr; }
                    .bl2-panel { min-height: 20rem; }
                    .bl2-destacado { min-height: 24rem; }
                }
                .bl2-cierre {
                    display: grid;
                    grid-template-columns: 0.62fr 0.38fr;
                    gap: 3rem;
                    align-items: center;
                }
                @media (max-width: 800px) {
                    .bl2-cierre { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .bl2-cierre-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    margin: 0.9rem 0 0.6rem;
                }
                .bl2-cierre-sub {
                    color: rgba(250, 246, 239, 0.75);
                    line-height: 1.65;
                    font-size: 0.95rem;
                    margin: 0;
                    max-width: 620px;
                }
                .bl2-cierre-acciones {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 0.9rem;
                }
                .bl2-cierre-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.8rem 1.6rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .bl2-cierre-cta:hover { background: #faf6ef; transform: translateY(-2px); }
                .bl2-cierre-enlace {
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.9rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .bl2-cierre-enlace:hover { color: #faf6ef; transform: translateX(6px); }
            `}</style>
        </main>
    );
}
