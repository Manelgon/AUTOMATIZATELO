import type { Metadata } from "next";
import { cache } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabaseServer } from "@/lib/supabase-server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const revalidate = 3600;

interface BlogPostFull {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    cover_image: string | null;
    tags: string[] | null;
    meta_title: string | null;
    meta_description: string | null;
    published_at: string | null;
    created_at: string;
    updated_at?: string | null;
}

// El contenido de la BD a veces trae su propio <h1>, que duplicaría el de la
// plantilla (malo para SEO). Si el primero repite el título se elimina; el
// resto de h1 se degradan a h2 para mantener una jerarquía única.
// La ficha (fecha y autor) la pinta la plantilla en la portada. Si el
// contenido de la BD trae la suya al principio — y a veces con otra firma —
// se retira, junto al separador que suele acompañarla.
function quitarFichaDuplicada(html: string): string {
    let out = html.trimStart();
    const bloqueMeta = /^\s*<p[^>]*>(?:(?!<\/p>)[\s\S])*?(?:Fecha|Publicado|Por|Autor)\s*:[\s\S]*?<\/p>/i;
    // Puede venir en uno o en dos párrafos seguidos (Fecha: … / Por: …)
    for (let i = 0; i < 2; i++) {
        const antes = out;
        out = out.replace(bloqueMeta, "").trimStart();
        if (out === antes) break;
    }
    return out.replace(/^\s*<hr\s*\/?>/i, "").trimStart();
}

function sanearEncabezados(html: string, titulo: string): string {
    let out = html.replace(/^\s*<h1[^>]*>([\s\S]*?)<\/h1>/i, (coincidencia, interior: string) => {
        const texto = interior.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim().toLowerCase();
        return texto === titulo.replace(/\s+/g, " ").trim().toLowerCase() ? "" : coincidencia;
    });
    out = out.replace(/<h1(\s[^>]*)?>/gi, "<h2$1>").replace(/<\/h1>/gi, "</h2>");
    return out;
}

const getPost = cache(async (slug: string): Promise<BlogPostFull | null> => {
    const { data, error } = await supabaseServer
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .eq("is_visible", true)
        .single();
    if (error || !data) return null;
    return data;
});

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) return { title: "Artículo no encontrado" };

    const title = post.meta_title || post.title;
    // Ningún artículo debe quedarse sin descripción: si la base no trae ni
    // meta ni entradilla, se compone una a partir del título.
    const description = post.meta_description || post.excerpt ||
        `${post.title}. Automatización con IA, formación y cumplimiento del AI Act para pymes, explicado sin jerga por Manel Méndez.`.slice(0, 155);
    const url = `https://automatizatelo.com/blog/${post.slug}`;

    return {
        title: { absolute: title },
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type: "article",
            siteName: "Automatizatelo",
            locale: "es_ES",
            publishedTime: post.published_at || post.created_at,
            authors: ["Manel Méndez González"],
            ...(post.cover_image && { images: [{ url: post.cover_image }] }),
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            ...(post.cover_image && { images: [post.cover_image] }),
        },
    };
}

function formatDate(dateStr: string | null): string {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
    ];
    return `${d.getDate()} de ${months[d.getMonth()]}, ${d.getFullYear()}`;
}

export default async function BlogPostPage(
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) notFound();

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.meta_description || post.excerpt || undefined,
        "image": post.cover_image || "https://automatizatelo.com/og-image.jpg",
        "datePublished": post.published_at || post.created_at,
        "dateModified": post.updated_at || post.published_at || post.created_at,
        "inLanguage": "es-ES",
        "mainEntityOfPage": `https://automatizatelo.com/blog/${post.slug}`,
        "author": {
            "@type": "Person",
            "name": "Manel Méndez González",
            "url": "https://automatizatelo.com/sobre-mi",
        },
        "publisher": {
            "@type": "Organization",
            "name": "Automatizatelo",
            "url": "https://automatizatelo.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://automatizatelo.com/og-image.jpg",
            },
        },
    };

    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <Header />

            {/* Portada a sangre con el título encima */}
            <section style={{ position: "relative", overflow: "hidden", padding: "11rem 0 3.5rem", background: "#1c1917" }}>
                {post.cover_image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={post.cover_image}
                        alt=""
                        aria-hidden="true"
                        fetchPriority="high"
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
                    />
                ) : (
                    <span aria-hidden="true" style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 0,
                        background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)",
                    }} />
                )}
                <div aria-hidden="true" style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "linear-gradient(180deg, rgba(28,25,23,0.45) 0%, rgba(28,25,23,0.66) 45%, rgba(28,25,23,0.9) 100%)",
                }} />
                <div className="container ar2-cabecera" style={{ position: "relative", zIndex: 2 }}>
                    <span className="mono-label ar2-migas">
                        <Link href="/blog">Blog</Link>
                        {post.tags?.[0] && <> · {post.tags[0]}</>}
                    </span>
                    <h1 className="ar2-titulo">{post.title}</h1>
                    {post.excerpt && <p className="ar2-entradilla">{post.excerpt}</p>}
                    <div className="ar2-firma">
                        <span>{formatDate(post.published_at || post.created_at)}</span>
                        <span>
                            Por <Link href="/sobre-mi">Manel Méndez González</Link>
                        </span>
                    </div>
                </div>
            </section>

            {/* El cuerpo, en papel: un artículo largo se lee mejor sobre crema */}
            <article className="ar2-cuerpo">
                <div
                    className="article-body"
                    dangerouslySetInnerHTML={{ __html: quitarFichaDuplicada(sanearEncabezados(post.content, post.title)) }}
                />
            </article>

            {/* Los pilares, en tira */}
            <nav aria-label="Secciones" className="nav-barra">
                <div className="container nav-barra-fila">
                    <span className="nav-barra-etiqueta mono-label">Y ahora, ¿por dónde sigo?</span>
                    <Link href="/formacion" className="nav-barra-item">Formación</Link>
                    <Link href="/cumplimiento" className="nav-barra-item">Cumplimiento</Link>
                    <Link href="/sistemas" className="nav-barra-item">Sistemas</Link>
                    <Link href="/casos" className="nav-barra-item">Casos</Link>
                    <Link href="/blog" className="nav-barra-item">Más artículos</Link>
                </div>
            </nav>

            {/* Cierre — el artículo no es un callejón */}
            <section style={{ padding: "3.4rem 0", background: "#1c1917" }}>
                <div className="container ar2-cierre">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Si esto te ha tocado de cerca</span>
                        <h2 className="ar2-cierre-titulo">30 minutos gratis, sin compromiso</h2>
                        <p className="ar2-cierre-sub">
                            Me cuentas cómo trabajáis y te digo qué automatizar primero, qué formar
                            y qué no merece la pena tocar. Y si no te hace falta nada, también te lo digo.
                        </p>
                    </div>
                    <div className="ar2-cierre-acciones">
                        <Link href="/#contact" className="ar2-cierre-cta">Pedir mis 30 minutos →</Link>
                        <Link href="/diagnostico" className="ar2-cierre-enlace">O haz el test de 3 minutos →</Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />

            <style>{`
                .ar2-cabecera {
                    max-width: 900px;
                }
                .ar2-migas {
                    color: rgba(250, 246, 239, 0.65);
                }
                .ar2-migas a { color: #f6c39c; font-weight: 600; }
                .ar2-migas a:hover { color: #faf6ef; }
                .ar2-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(2rem, 4.6vw, 3.1rem);
                    font-weight: 600;
                    line-height: 1.12;
                    letter-spacing: -0.02em;
                    color: #faf6ef;
                    margin: 1rem 0 1rem;
                    text-shadow: 0 2px 30px rgba(28,25,23,0.5);
                }
                .ar2-entradilla {
                    font-size: 1.1rem;
                    color: rgba(250, 246, 239, 0.88);
                    line-height: 1.7;
                    margin: 0 0 1.6rem;
                    max-width: 720px;
                    text-shadow: 0 1px 20px rgba(28,25,23,0.4);
                }
                .ar2-firma {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem 1.4rem;
                    font-family: var(--font-mono, monospace);
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.7);
                }
                .ar2-firma a { color: #f6c39c; }
                .ar2-firma a:hover { color: #faf6ef; }
                .ar2-cuerpo {
                    max-width: 760px;
                    margin: 0 auto;
                    padding: 3.5rem 1.5rem 4rem;
                    flex-grow: 1;
                }
                .ar2-cierre {
                    display: grid;
                    grid-template-columns: 0.62fr 0.38fr;
                    gap: 3rem;
                    align-items: center;
                }
                @media (max-width: 800px) {
                    .ar2-cierre { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .ar2-cierre-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    margin: 0.9rem 0 0.6rem;
                }
                .ar2-cierre-sub {
                    color: rgba(250, 246, 239, 0.75);
                    line-height: 1.65;
                    font-size: 0.95rem;
                    margin: 0;
                    max-width: 620px;
                }
                .ar2-cierre-acciones {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 0.9rem;
                }
                .ar2-cierre-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.8rem 1.6rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .ar2-cierre-cta:hover { background: #faf6ef; transform: translateY(-2px); }
                .ar2-cierre-enlace {
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.9rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .ar2-cierre-enlace:hover { color: #faf6ef; transform: translateX(6px); }

                /* Tipografía del artículo: serif en los títulos, medida corta y
                   filetes en vez de cajas — el mismo idioma que el resto. */
                .article-body h2 {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 1.9rem);
                    font-weight: 600;
                    line-height: 1.2;
                    letter-spacing: -0.01em;
                    margin: 2.6rem 0 0.9rem;
                    color: var(--color-text-main);
                }
                .article-body h3 {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.15rem, 2vw, 1.4rem);
                    font-weight: 600;
                    margin: 2rem 0 0.6rem;
                    color: var(--color-text-main);
                }
                .article-body p {
                    margin-bottom: 1.3rem;
                    color: var(--color-text-main);
                    line-height: 1.8;
                    font-size: 1.02rem;
                }
                .article-body ul, .article-body ol {
                    padding-left: 1.4rem;
                    margin-bottom: 1.3rem;
                    color: var(--color-text-main);
                    line-height: 1.8;
                }
                .article-body ul { list-style: none; padding-left: 0; }
                .article-body ul li {
                    position: relative;
                    padding-left: 1.3rem;
                    margin-bottom: 0.6rem;
                }
                .article-body ul li::before {
                    content: "·";
                    position: absolute;
                    left: 0.3rem;
                    color: var(--color-primary);
                    font-weight: 700;
                }
                .article-body ol li { margin-bottom: 0.6rem; }
                .article-body blockquote {
                    border-left: 2px solid var(--color-primary);
                    padding: 0.2rem 0 0.2rem 1.4rem;
                    margin: 2rem 0;
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    line-height: 1.5;
                    font-style: normal;
                    color: var(--color-text-main);
                    background: none;
                    border-radius: 0;
                }
                .article-body pre {
                    background: #1c1917;
                    border: none;
                    border-radius: 4px;
                    padding: 1.2rem 1.4rem;
                    overflow-x: auto;
                    font-size: 0.85rem;
                    color: #faf6ef;
                    margin: 1.8rem 0;
                }
                .article-body img {
                    max-width: 100%;
                    border-radius: 4px;
                    margin: 2rem 0;
                }
                .article-body a {
                    color: var(--color-primary);
                    font-weight: 600;
                    text-decoration: underline;
                    text-underline-offset: 3px;
                }
                .article-body hr {
                    border: none;
                    border-top: 1px solid var(--color-border);
                    margin: 2.4rem 0;
                }
            `}</style>
        </main>
    );
}
