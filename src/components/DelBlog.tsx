import Link from "next/link";
import { supabaseServer } from "@/lib/supabase-server";

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    cover_image: string | null;
    published_at: string | null;
    created_at: string;
}

function formatDate(dateStr: string | null): string {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    const months = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
    ];
    return `${d.getDate()} de ${months[d.getMonth()]} de ${d.getFullYear()}`;
}

async function getUltimosPosts(): Promise<BlogPost[]> {
    const { data, error } = await supabaseServer
        .from("blog_posts")
        .select("id,title,slug,excerpt,cover_image,published_at,created_at")
        .eq("status", "published")
        .eq("is_visible", true)
        .order("published_at", { ascending: false })
        .limit(3);
    if (error || !data) return [];
    return data;
}

// =============================================================================
// DEL BLOG — paneles a sangre con la portada de fondo y velo tinta, el mismo
// lenguaje que los pilares del home.
// =============================================================================

export default async function DelBlog() {
    const posts = await getUltimosPosts();
    if (posts.length === 0) return null;

    return (
        <section id="del-blog" style={{ padding: 0 }}>
            <div className="db-cabecera">
                <h2 className="db-etiqueta">Lo último que he escrito</h2>
            </div>

            <div className="db-paneles">
                {posts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="db-panel">
                        {post.cover_image && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img className="db-panel-fondo" src={post.cover_image} alt="" aria-hidden="true" loading="lazy" />
                        )}
                        <span className="db-panel-velo" aria-hidden="true"></span>
                        <span className="db-panel-cuerpo">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>
                                {formatDate(post.published_at || post.created_at)}
                            </span>
                            <span className="db-panel-titulo">{post.title}</span>
                            {post.excerpt && <span className="db-panel-extracto">{post.excerpt}</span>}
                            <span className="db-panel-cta">Leer el artículo →</span>
                        </span>
                    </Link>
                ))}
            </div>

            <p className="db-enlace">
                <Link href="/blog">Ver todos los artículos →</Link>
            </p>

            <style>{`
                .db-cabecera {
                    background: #1c1917;
                    padding: 2.4rem 0 1.6rem;
                }
                .db-etiqueta {
                    text-align: center;
                    font-family: var(--font-mono, monospace);
                    font-size: 0.78rem;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.55);
                    margin: 0;
                }
                .db-enlace {
                    background: #1c1917;
                    text-align: center;
                    margin: 0;
                    padding: 1.6rem 0 2rem;
                }
                .db-enlace a {
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.92rem;
                }
                .db-enlace a:hover { color: #faf6ef; }
                .db-paneles {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                }
                .db-panel {
                    position: relative;
                    display: flex;
                    align-items: flex-end;
                    min-height: 24rem;
                    overflow: hidden;
                    color: inherit;
                    background: #1c1917;
                }
                .db-panel-fondo {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .db-panel:hover .db-panel-fondo { transform: scale(1.04); }
                .db-panel-velo {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(28,25,23,0.35) 0%, rgba(28,25,23,0.6) 45%, rgba(28,25,23,0.9) 100%);
                }
                .db-panel-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.55rem;
                    padding: 5rem 1.8rem 1.9rem;
                }
                .db-panel-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.15rem, 1.9vw, 1.45rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.25;
                }
                .db-panel-extracto {
                    font-size: 0.9rem;
                    color: rgba(250, 246, 239, 0.8);
                    line-height: 1.55;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .db-panel-cta {
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.92rem;
                    margin-top: 0.3rem;
                    transition: transform 0.25s ease;
                }
                .db-panel:hover .db-panel-cta { transform: translateX(6px); }
                @media (max-width: 900px) {
                    .db-paneles { grid-template-columns: 1fr; }
                    .db-panel { min-height: 18rem; }
                    .db-panel-cuerpo { padding: 3.5rem 1.4rem 1.6rem; }
                }
            `}</style>
        </section>
    );
}
