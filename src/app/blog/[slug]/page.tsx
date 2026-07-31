import type { Metadata } from "next";
import { cache } from "react";
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
    const description = post.meta_description || post.excerpt || undefined;
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
                    <span>
                        Por{" "}
                        <a href="/sobre-mi" style={{ color: "var(--color-primary)", fontWeight: 600, textDecoration: "none" }}>
                            Manel Méndez González
                        </a>
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

            <style>{`
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
