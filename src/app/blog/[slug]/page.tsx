"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export default function BlogPostPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const [post, setPost] = useState<BlogPostFull | null>(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        if (!slug) return;
        async function fetchPost() {
            try {
                const { data, error } = await supabase
                    .from("blog_posts")
                    .select("*")
                    .eq("slug", slug)
                    .eq("status", "published")
                    .eq("is_visible", true)
                    .single();

                if (error || !data) {
                    setNotFound(true);
                } else {
                    setPost(data);
                    // Update page title
                    document.title = (data.meta_title || data.title) + " — Automatizatelo Blog";
                }
            } catch {
                setNotFound(true);
            } finally {
                setLoading(false);
            }
        }
        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <div style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--color-bg)",
            }}>
                <div style={{
                    width: 48, height: 48,
                    border: "4px solid rgba(249,115,22,0.2)",
                    borderTop: "4px solid var(--color-primary)",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                }} />
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    if (notFound || !post) {
        return (
            <div style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--color-bg)",
                padding: "2rem",
                textAlign: "center",
            }}>
                <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--color-text-main)" }}>
                    Artículo no encontrado
                </h2>
                <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem" }}>
                    El artículo que buscas no existe o ha sido retirado.
                </p>
                <Link href="/blog" className="btn btn-primary" style={{
                    background: "var(--color-primary)",
                    color: "#fff",
                    textDecoration: "none",
                }}>
                    Volver al blog
                </Link>
            </div>
        );
    }

    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />

            {/* Article */}
            <article style={{
                maxWidth: 820,
                margin: "4rem auto 0",
                padding: "2rem 1.5rem 5rem",
                flexGrow: 1,
            }}>
                {/* Cover */}
                {post.cover_image && (
                    <img
                        src={post.cover_image}
                        alt={post.title}
                        style={{
                            width: "100%",
                            maxHeight: 450,
                            objectFit: "cover",
                            borderRadius: "var(--radius-lg)",
                            marginBottom: "2.5rem",
                            boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                        }}
                    />
                )}

                {/* Meta */}
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                    fontSize: "0.85rem",
                    color: "var(--color-text-muted)",
                }}>
                    <span style={{
                        color: "var(--color-primary)",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                    }}>
                        <i className="fa-regular fa-calendar" style={{ marginRight: "0.4rem" }} />
                        {formatDate(post.published_at || post.created_at)}
                    </span>
                    {post.tags?.map((t) => (
                        <span key={t} style={{
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            padding: "0.2rem 0.6rem",
                            borderRadius: 999,
                            background: "rgba(249,115,22,0.1)",
                            color: "var(--color-primary)",
                            textTransform: "uppercase",
                        }}>
                            {t}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h1 style={{
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    fontWeight: 800,
                    lineHeight: 1.15,
                    marginBottom: "2rem",
                    color: "var(--color-text-main)",
                }}>
                    {post.title}
                </h1>

                {/* Content */}
                <div
                    className="article-body"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>

            {/* Footer */}
            <Footer />

            <style jsx global>{`
                @keyframes spin { to { transform: rotate(360deg); } }
                .article-body h1 { font-size: 2rem; font-weight: 700; margin: 2rem 0 1rem; color: var(--color-primary); }
                .article-body h2 { font-size: 1.6rem; font-weight: 600; margin: 1.8rem 0 0.8rem; color: var(--color-text-main); }
                .article-body h3 { font-size: 1.3rem; font-weight: 500; margin: 1.5rem 0 0.6rem; color: var(--color-text-main); }
                .article-body p { margin-bottom: 1.2rem; color: var(--color-text-muted); line-height: 1.8; }
                .article-body ul, .article-body ol { padding-left: 1.5rem; margin-bottom: 1.2rem; color: var(--color-text-muted); list-style: disc; }
                .article-body li { margin-bottom: 0.5rem; }
                .article-body blockquote {
                    border-left: 4px solid var(--color-primary);
                    padding: 1rem 1.5rem;
                    margin: 1.5rem 0;
                    font-style: italic;
                    color: var(--color-text-muted);
                    background: rgba(249,115,22,0.03);
                    border-radius: 0 12px 12px 0;
                }
                .article-body pre {
                    background: var(--color-bg-secondary);
                    border: 1px solid var(--color-border);
                    border-radius: 12px;
                    padding: 1.2rem;
                    overflow-x: auto;
                    font-size: 0.85rem;
                    margin: 1.5rem 0;
                }
                .article-body img {
                    max-width: 100%;
                    border-radius: 12px;
                    margin: 1.5rem 0;
                    box-shadow: 0 8px 30px rgba(0,0,0,0.08);
                }
                .article-body a {
                    color: var(--color-primary);
                    text-decoration: underline;
                    text-underline-offset: 3px;
                }
                .article-body hr {
                    border: none;
                    border-top: 1px solid var(--color-border);
                    margin: 2rem 0;
                }
            `}</style>
        </main>
    );
}
