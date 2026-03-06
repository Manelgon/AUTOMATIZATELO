"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
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

const reveal = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function BlogSection() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const trackRef = useRef<HTMLDivElement>(null);
    const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const { data, error } = await supabase
                    .from("blog_posts")
                    .select("id,title,slug,excerpt,cover_image,tags,published_at,created_at")
                    .eq("status", "published")
                    .eq("is_visible", true)
                    .order("published_at", { ascending: false })
                    .limit(5);

                if (!error && data) setPosts(data);
            } catch (err) {
                console.error("Error loading blog posts:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    const scrollToIndex = useCallback((index: number) => {
        if (!trackRef.current || posts.length === 0) return;
        const clampedIndex = Math.max(0, Math.min(index, posts.length - 1));
        setCurrentIndex(clampedIndex);

        const track = trackRef.current;
        const card = track.children[clampedIndex] as HTMLElement;
        if (card) {
            const trackRect = track.getBoundingClientRect();
            const cardRect = card.getBoundingClientRect();
            const scrollLeft = card.offsetLeft - (trackRect.width / 2) + (cardRect.width / 2);
            track.scrollTo({ left: scrollLeft, behavior: "smooth" });
        }
    }, [posts.length]);

    const goNext = useCallback(() => {
        setCurrentIndex((prev) => {
            const next = prev >= posts.length - 1 ? 0 : prev + 1;
            scrollToIndex(next);
            return next;
        });
    }, [posts.length, scrollToIndex]);

    const goPrev = useCallback(() => {
        setCurrentIndex((prev) => {
            const next = prev <= 0 ? posts.length - 1 : prev - 1;
            scrollToIndex(next);
            return next;
        });
    }, [posts.length, scrollToIndex]);

    // Auto-play
    useEffect(() => {
        if (!isAutoPlaying || posts.length <= 1) return;
        autoPlayRef.current = setInterval(goNext, 5000);
        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, [isAutoPlaying, goNext, posts.length]);

    const pauseAutoPlay = () => {
        setIsAutoPlaying(false);
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };

    const resumeAutoPlay = () => {
        setIsAutoPlaying(true);
    };

    if (!loading && posts.length === 0) return null;

    return (
        <section id="blog" style={{ background: "var(--color-bg-secondary)", overflow: "hidden", scrollMarginTop: "100px" }}>
            <div className="container">
                <motion.h2
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    variants={reveal} className="section-title"
                >
                    Nuestro <span className="premium-gradient">Blog</span>
                </motion.h2>
                <motion.p
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    variants={reveal} transition={{ delay: 0.1 }}
                    className="section-subtitle"
                >
                    Artículos, guías y novedades sobre automatización e inteligencia artificial.
                </motion.p>

                {loading ? (
                    <div style={{ display: "flex", justifyContent: "center", padding: "3rem" }}>
                        <div className="blog-spinner" />
                    </div>
                ) : (
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }}
                        variants={reveal} transition={{ delay: 0.2 }}
                    >
                        {/* Carousel wrapper */}
                        <div
                            style={{ position: "relative" }}
                            onMouseEnter={pauseAutoPlay}
                            onMouseLeave={resumeAutoPlay}
                        >
                            {/* Left arrow */}
                            <button
                                onClick={goPrev}
                                aria-label="Anterior"
                                className="carousel-arrow carousel-arrow-left"
                            >
                                <i className="fa-solid fa-chevron-left" />
                            </button>

                            {/* Track */}
                            <div
                                ref={trackRef}
                                className="blog-carousel-track"
                            >
                                {posts.map((post, i) => (
                                    <Link
                                        key={post.id}
                                        href={`/blog/${post.slug}`}
                                        style={{ textDecoration: "none", color: "inherit", flexShrink: 0 }}
                                    >
                                        <article
                                            className={`blog-carousel-card ${i === currentIndex ? "active" : ""}`}
                                        >
                                            {/* Cover */}
                                            <div style={{ overflow: "hidden", height: 200, flexShrink: 0 }}>
                                                {post.cover_image ? (
                                                    <img
                                                        src={post.cover_image}
                                                        alt={post.title}
                                                        loading="lazy"
                                                        className="blog-carousel-img"
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
                                            <div style={{ padding: "1.25rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                                <span style={{
                                                    fontSize: "0.75rem", color: "var(--color-primary)",
                                                    fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em",
                                                }}>
                                                    {formatDate(post.published_at || post.created_at)}
                                                </span>

                                                <h3 className="blog-carousel-title">{post.title}</h3>

                                                <p className="blog-carousel-excerpt">
                                                    {post.excerpt || ""}
                                                </p>

                                                {/* Tags */}
                                                {post.tags && post.tags.length > 0 && (
                                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginTop: "auto" }}>
                                                        {post.tags.slice(0, 2).map((tag) => (
                                                            <span key={tag} className="blog-carousel-tag">{tag}</span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Footer */}
                                            <div style={{
                                                padding: "0.75rem 1.25rem",
                                                borderTop: "1px solid var(--color-border)",
                                                display: "flex", alignItems: "center",
                                            }}>
                                                <span className="blog-carousel-readmore">
                                                    Leer artículo <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </div>

                            {/* Right arrow */}
                            <button
                                onClick={goNext}
                                aria-label="Siguiente"
                                className="carousel-arrow carousel-arrow-right"
                            >
                                <i className="fa-solid fa-chevron-right" />
                            </button>
                        </div>

                        {/* Dots */}
                        <div style={{
                            display: "flex", justifyContent: "center",
                            gap: "0.5rem", marginTop: "1.5rem",
                        }}>
                            {posts.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => scrollToIndex(i)}
                                    aria-label={`Ir al artículo ${i + 1}`}
                                    style={{
                                        width: i === currentIndex ? 28 : 10,
                                        height: 10,
                                        borderRadius: 999,
                                        border: "none",
                                        background: i === currentIndex ? "var(--color-primary)" : "var(--color-border)",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                    }}
                                />
                            ))}
                        </div>

                        {/* Ver más button */}
                        <div style={{ textAlign: "center", marginTop: "2rem" }}>
                            <Link href="/blog" className="btn btn-primary" style={{
                                background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-glow))",
                                color: "#fff",
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}>
                                Ver todos los artículos <i className="fa-solid fa-arrow-right" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </div>

            <style jsx global>{`
                @keyframes spin { to { transform: rotate(360deg); } }
                .blog-spinner {
                    width: 40px; height: 40px;
                    border: 3px solid rgba(249,115,22,0.2);
                    border-top: 3px solid var(--color-primary);
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                .blog-carousel-track {
                    display: flex;
                    gap: 1.5rem;
                    overflow-x: auto;
                    scroll-snap-type: x mandatory;
                    -webkit-overflow-scrolling: touch;
                    scrollbar-width: none;
                    padding: 1rem 0.5rem;
                }
                .blog-carousel-track::-webkit-scrollbar { display: none; }

                .blog-carousel-card {
                    width: 340px;
                    min-width: 340px;
                    scroll-snap-align: center;
                    background: white;
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                    box-shadow: var(--shadow-card);
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }
                .blog-carousel-card:hover,
                .blog-carousel-card.active {
                    transform: translateY(-6px);
                    border-color: var(--color-primary);
                    box-shadow: 0 15px 35px rgba(249,115,22,0.15), 0 0 15px rgba(249,115,22,0.1);
                }
                .blog-carousel-card:hover .blog-carousel-img {
                    transform: scale(1.05);
                }
                .blog-carousel-img {
                    width: 100%; height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }

                .blog-carousel-title {
                    font-size: 1.15rem;
                    font-weight: 700;
                    color: var(--color-text-main);
                    margin: 0.4rem 0;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    line-clamp: 2;
                }
                .blog-carousel-excerpt {
                    font-size: 0.85rem;
                    color: var(--color-text-muted);
                    line-height: 1.6;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    margin-bottom: 0.75rem;
                    line-clamp: 2;
                }
                .blog-carousel-tag {
                    font-size: 0.65rem;
                    font-weight: 600;
                    padding: 0.15rem 0.5rem;
                    border-radius: 999px;
                    background: rgba(249,115,22,0.1);
                    color: var(--color-primary);
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                }
                .blog-carousel-readmore {
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: var(--color-primary);
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                    transition: gap 0.3s ease;
                }
                .blog-carousel-card:hover .blog-carousel-readmore {
                    gap: 0.6rem;
                }

                /* Arrows */
                .carousel-arrow {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 10;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    border: 1px solid var(--color-border);
                    background: white;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1rem;
                    color: var(--color-text-main);
                    transition: all 0.3s ease;
                }
                .carousel-arrow:hover {
                    background: var(--color-primary);
                    color: white;
                    border-color: var(--color-primary);
                    box-shadow: 0 6px 20px rgba(249,115,22,0.3);
                }
                .carousel-arrow-left { left: -22px; }
                .carousel-arrow-right { right: -22px; }

                @media (max-width: 768px) {
                    .carousel-arrow-left { left: 4px; }
                    .carousel-arrow-right { right: 4px; }
                    .carousel-arrow { width: 36px; height: 36px; font-size: 0.85rem; }
                    .blog-carousel-card { width: 300px; min-width: 300px; }
                }
            `}</style>
        </section>
    );
}
