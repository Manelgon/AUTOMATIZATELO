"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

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

function formatDate(dateStr: string | null): string {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
    ];
    return `${d.getDate()} de ${months[d.getMonth()]}, ${d.getFullYear()}`;
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogListingPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const { data, error } = await supabase
                    .from("blog_posts")
                    .select("id,title,slug,excerpt,cover_image,tags,published_at,created_at")
                    .eq("status", "published")
                    .eq("is_visible", true)
                    .order("published_at", { ascending: false });

                if (!error && data) setPosts(data);
            } catch (err) {
                console.error("Error loading blog posts:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />

            {/* Hero */}
            <div className="blog-list-hero" style={{ marginTop: "6rem" }}>
                <div className="container">
                    <h1 className="section-title" style={{ marginBottom: "0.5rem" }}>
                        Nuestro <span className="premium-gradient">Blog</span>
                    </h1>
                    <p className="section-subtitle" style={{ marginBottom: 0 }}>
                        Todos los artículos sobre automatización, IA y transformación digital.
                    </p>
                </div>
            </div>

            {/* Articles grid */}
            <div className="container" style={{ paddingBottom: "5rem", flexGrow: 1 }}>
                {loading ? (
                    <div style={{ display: "flex", justifyContent: "center", padding: "4rem" }}>
                        <div style={{
                            width: 48, height: 48,
                            border: "4px solid rgba(249,115,22,0.2)",
                            borderTop: "4px solid var(--color-primary)",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                        }} />
                    </div>
                ) : posts.length === 0 ? (
                    <div style={{ textAlign: "center", padding: "4rem 2rem", color: "var(--color-text-muted)" }}>
                        <i className="fa-solid fa-newspaper" style={{ fontSize: "3rem", color: "rgba(249,115,22,0.2)", marginBottom: "1rem", display: "block" }} />
                        <p style={{ fontSize: "1.1rem" }}>Próximamente publicaremos artículos aquí. ¡Vuelve pronto!</p>
                    </div>
                ) : (
                    <div className="blog-list-grid">
                        {posts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <article className="blog-list-card">
                                    {/* Cover */}
                                    <div style={{ overflow: "hidden", height: 240, flexShrink: 0 }}>
                                        {post.cover_image ? (
                                            <img
                                                src={post.cover_image}
                                                alt={post.title}
                                                loading="lazy"
                                                className="blog-list-card-img"
                                            />
                                        ) : (
                                            <div style={{
                                                width: "100%", height: "100%",
                                                background: "linear-gradient(135deg, rgba(249,115,22,0.12), rgba(249,115,22,0.04))",
                                                display: "flex", alignItems: "center", justifyContent: "center",
                                            }}>
                                                <i className="fa-solid fa-newspaper" style={{ fontSize: "2.5rem", color: "rgba(249,115,22,0.25)" }} />
                                            </div>
                                        )}
                                    </div>

                                    {/* Body */}
                                    <div style={{ padding: "1.5rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                        <h2 className="blog-list-card-title">{post.title}</h2>

                                        {/* Tags */}
                                        {post.tags && post.tags.length > 0 && (
                                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
                                                {post.tags.slice(0, 3).map((tag) => (
                                                    <span key={tag} style={{
                                                        fontSize: "0.85rem", fontWeight: 700,
                                                        color: "#8A2BE2",
                                                        textTransform: "uppercase", letterSpacing: "0.05em",
                                                    }}>{tag}</span>
                                                ))}
                                            </div>
                                        )}

                                        <p className="blog-list-card-excerpt">{post.excerpt || ""}</p>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <Footer />

            <style jsx global>{`
                @keyframes spin { to { transform: rotate(360deg); } }

                .blog-list-header {
                    position: sticky; top: 0; z-index: 100;
                    background: rgba(255,255,255,0.92);
                    backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
                    border-bottom: 1px solid var(--color-border);
                    padding: 1rem 2rem;
                    display: flex; align-items: center; justify-content: space-between;
                }
                .blog-list-logo {
                    font-size: 1.1rem; font-weight: 700;
                    color: var(--color-text-main); text-decoration: none;
                    display: flex; align-items: center; gap: 0.5rem;
                }
                .blog-list-back {
                    color: var(--color-primary); font-weight: 600;
                    font-size: 0.9rem; display: flex; align-items: center;
                    gap: 0.4rem; text-decoration: none; transition: gap 0.3s;
                }
                .blog-list-back:hover { gap: 0.7rem; }

                .blog-list-hero {
                    padding: 3rem 0 2rem;
                    background: radial-gradient(circle at top center, rgba(249,115,22,0.06) 0%, transparent 70%);
                }

                .blog-list-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 2rem;
                    margin-top: 1rem;
                }

                .blog-list-card {
                    background: white;
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                    box-shadow: var(--shadow-card);
                    display: flex; flex-direction: column;
                    height: 440px;
                }
                .blog-list-card:hover {
                    transform: translateY(-6px);
                    border-color: var(--color-primary);
                    box-shadow: 0 15px 35px rgba(249,115,22,0.15), 0 0 15px rgba(249,115,22,0.1);
                }
                .blog-list-card:hover .blog-list-card-img { transform: scale(1.05); }
                .blog-list-card-img {
                    width: 100%; height: 100%;
                    object-fit: cover; transition: transform 0.5s ease;
                }

                .blog-list-card-title {
                    font-size: 1.3rem; font-weight: 700;
                    color: var(--color-text-main);
                    margin: 0 0 0.5rem 0;
                    display: -webkit-box; -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical; overflow: hidden;
                    line-clamp: 2;
                }
                .blog-list-card-excerpt {
                    font-size: 0.95rem; color: var(--color-text-muted);
                    line-height: 1.6;
                    display: -webkit-box; -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical; overflow: hidden;
                    margin: 0; line-clamp: 3;
                }
                .blog-list-readmore {
                    font-size: 0.85rem; font-weight: 600;
                    color: var(--color-primary);
                    display: flex; align-items: center;
                    gap: 0.3rem; transition: gap 0.3s ease;
                }
                .blog-list-card:hover .blog-list-readmore { gap: 0.6rem; }

                @media (max-width: 768px) {
                    .blog-list-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </main>
    );
}
