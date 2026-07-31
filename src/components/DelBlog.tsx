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

export default async function DelBlog() {
    const posts = await getUltimosPosts();
    if (posts.length === 0) return null;

    return (
        <section id="del-blog" style={{ padding: "5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)" }}>
            <div className="container">
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "1rem", marginBottom: "2.5rem" }}>
                    <div>
                        <span className="kicker-mono">Del blog</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Lo último que he escrito
                        </h2>
                    </div>
                    <Link href="/blog" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                        Ver todos los artículos →
                    </Link>
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "1.5rem",
                }}>
                    {posts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            style={{
                                background: "var(--color-card-bg)",
                                border: "1px solid var(--color-border)",
                                borderRadius: "var(--radius-md)",
                                overflow: "hidden",
                                boxShadow: "var(--shadow-card)",
                                display: "flex",
                                flexDirection: "column",
                                color: "inherit",
                            }}
                        >
                            {post.cover_image && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={post.cover_image}
                                    alt={post.title}
                                    loading="lazy"
                                    style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
                                />
                            )}
                            <div style={{ padding: "1.4rem", display: "flex", flexDirection: "column", gap: "0.6rem", flexGrow: 1 }}>
                                <span className="mono-label" style={{ color: "var(--color-text-muted)" }}>
                                    {formatDate(post.published_at || post.created_at)}
                                </span>
                                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--color-text-main)", lineHeight: 1.35, margin: 0 }}>
                                    {post.title}
                                </h3>
                                {post.excerpt && (
                                    <p style={{
                                        color: "var(--color-text-muted)", fontSize: "0.92rem", lineHeight: 1.6, margin: 0,
                                        display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden",
                                    }}>
                                        {post.excerpt}
                                    </p>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
