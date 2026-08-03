import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const explora = [
    { href: "/", label: "Inicio" },
    { href: "/#problema", label: "El problema" },
    { href: "/#que-automatizamos", label: "Qué automatizamos" },
    { href: "/precios", label: "Precios" },
    { href: "/casos-de-exito", label: "Casos de éxito" },
    { href: "/blog", label: "Blog" },
    { href: "/sobre-mi", label: "Sobre mí" },
    { href: "/#faq", label: "FAQ" },
];

const soluciones = [
    { href: "/servicios/automatizacion", label: "Automatización de procesos" },
    { href: "/servicios/formacion-ia-empresas", label: "Formación en IA" },
    { href: "/automatizacion-administradores-fincas", label: "Administradores de Fincas" },
    { href: "/formacion-ia-centros-educativos", label: "Centros Educativos" },
    { href: "/automatizacion-empresas-servicios", label: "Empresas de Servicios" },
    { href: "/automatizacion-clinicas", label: "Clínicas y Salud" },
    { href: "/automatizacion-ecommerce", label: "E-commerce" },
    { href: "/formacion-obligatoria-ai-act", label: "Formación obligatoria (AI Act)" },
];

const linkStyle = { color: "rgba(250,246,239,0.7)" } as const;
const tituloCol = {
    fontFamily: "var(--font-mono, monospace)",
    fontSize: "0.72rem",
    fontWeight: 600,
    letterSpacing: "0.16em",
    textTransform: "uppercase" as const,
    color: "#f6c39c",
    marginBottom: "1.4rem",
};

export default function Footer() {
    return (
        <footer className="footer" style={{
            background: '#1c1917',
            width: '100%',
            borderTop: '1px solid rgba(250,246,239,0.08)',
            color: 'white',
            padding: '4rem 0 2rem'
        }}>
            <div className="container">
                <div className="footer-grid">
                    {/* Marca + redes */}
                    <div className="footer-col">
                        <a
                            href="/"
                            className="logo"
                            style={{ marginBottom: "1.2rem", display: "flex", alignItems: 'center', gap: '0.5rem' }}
                        >
                            <span className="premium-gradient" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Automatizatelo.</span>
                        </a>
                        <p style={{ color: "rgba(250,246,239,0.7)", lineHeight: '1.7', marginBottom: '1.5rem' }}>
                            Chatbots, paneles y automatizaciones que ya funcionan
                            en negocios reales. Barcelona y toda España.
                        </p>
                        <div style={{ display: "flex", gap: "1.1rem" }}>
                            <a href="https://www.linkedin.com/company/automatizatelo" style={{ fontSize: "1.4rem", color: '#f6c39c' }} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.instagram.com/automatizatelo.ia?igsh=NWE1eW8xa2VieTlh&utm_source=qr" style={{ fontSize: "1.4rem", color: '#f6c39c' }} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://wa.me/34678399182" style={{ fontSize: "1.4rem", color: '#f6c39c' }} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                    {/* Explora */}
                    <div className="footer-col">
                        <p style={tituloCol}>Explora</p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                            {explora.map((l) => (
                                <li key={l.href}>
                                    <a href={l.href} style={linkStyle}>{l.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Soluciones */}
                    <div className="footer-col">
                        <p style={tituloCol}>Soluciones</p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                            {soluciones.map((l) => (
                                <li key={l.href}>
                                    <a href={l.href} style={linkStyle}>{l.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div className="footer-col">
                        <p style={tituloCol}>Contacto</p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'rgba(250,246,239,0.7)' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                <i className="fa-solid fa-phone" style={{ color: '#f6c39c' }}></i>
                                <a href="tel:+34678399182" style={linkStyle}>+34 678 39 91 82</a>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                <i className="fa-solid fa-envelope" style={{ color: '#f6c39c' }}></i>
                                <a href="mailto:info@automatizatelo.com" style={linkStyle}>info@automatizatelo.com</a>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                <i className="fa-solid fa-location-dot" style={{ color: '#f6c39c' }}></i>
                                Barcelona · toda España
                            </li>
                            <li style={{ marginTop: '0.6rem' }}>
                                <a href="/#contact" className="btn btn-primary" style={{
                                    padding: '0.6rem 1.5rem',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    borderRadius: '50px',
                                    color: '#fff',
                                    display: 'inline-block',
                                }}>Auditoría gratuita</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Logo XXL — cierre editorial */}
                <div aria-hidden="true" style={{ marginTop: '4rem', overflow: 'hidden' }}>
                    <p style={{
                        fontFamily: 'var(--font-display, serif)',
                        fontSize: 'clamp(3rem, 11vw, 9.5rem)',
                        fontWeight: 600,
                        lineHeight: 0.95,
                        letterSpacing: '-0.03em',
                        color: 'rgba(250,246,239,0.12)',
                        margin: 0,
                        whiteSpace: 'nowrap',
                        userSelect: 'none',
                    }}>
                        Automatizatelo.
                    </p>
                </div>

                <div className="footer-bottom" style={{ borderTop: '1px solid rgba(250,246,239,0.08)', marginTop: '2rem', paddingTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem' }}>
                    <p style={{
                        fontFamily: 'var(--font-mono, monospace)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.06em',
                        color: 'rgba(250,246,239,0.45)',
                        textAlign: 'center',
                    }}>
                        Esta web está hecha con Next.js, Supabase e IA — las mismas herramientas que uso en tus proyectos.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.85rem' }}>
                        <a href="/aviso-legal" style={{ color: 'rgba(250,246,239,0.5)' }}>Aviso Legal</a>
                        <a href="/proteccion-datos" style={{ color: 'rgba(250,246,239,0.5)' }}>Protección de Datos</a>
                        <a href="/politica-cookies" style={{ color: 'rgba(250,246,239,0.5)' }}>Política de Cookies</a>
                        <a href="/declaracion-accesibilidad" style={{ color: 'rgba(250,246,239,0.5)' }}>Accesibilidad</a>
                    </div>
                    <p style={{ color: 'rgba(250,246,239,0.5)' }}>&copy; 2026 Automatizatelo. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
