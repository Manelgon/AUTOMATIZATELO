import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const explora = [
    { href: "/", label: "Inicio" },
    { href: "/precios", label: "Precios" },
    { href: "/casos", label: "Casos de éxito" },
    { href: "/diagnostico", label: "Diagnóstico gratis — 12 preguntas" },
    { href: "/recursos", label: "Recursos gratis" },
    { href: "/blog", label: "Blog" },
    { href: "/sobre-mi", label: "Sobre mí" },
];

// Misma jerarquía que el menú: tres pilares y sus hijas sangradas.
// `sub` marca las hijas — se pintan con sangría y borde, estilo índice.
const servicios = [
    { href: "/formacion", label: "Formación en IA" },
    { href: "/formacion/empresas", label: "In-company para empresas", sub: true },
    { href: "/formacion/ai-act", label: "Alfabetización del Art. 4 (AI Act)", sub: true },
    { href: "/formacion/chatgpt", label: "Curso de ChatGPT", sub: true },
    { href: "/formacion/copilot", label: "Curso de Copilot 365", sub: true },
    { href: "/formacion/gemini", label: "Curso de Gemini + NotebookLM", sub: true },
    { href: "/formacion/claude", label: "Curso de Claude", sub: true },
    { href: "/formacion/cursos-a-medida", label: "Cursos e-learning a medida (SCORM)", sub: true },
    { href: "/formacion/centros-educativos", label: "Formación para centros educativos", sub: true },
    { href: "/formacion/alumnado", label: "Taller de IA para alumnado", sub: true },
    { href: "/formacion/directivos", label: "Sesión ejecutiva para dirección", sub: true },
    { href: "/cumplimiento", label: "Cumplimiento del AI Act" },
    { href: "/sistemas", label: "Automatización y sistemas" },
    { href: "/sistemas/documentos", label: "Facturas y documentos (OCR + IA)", sub: true },
    { href: "/sistemas/ventas", label: "Automatización de ventas", sub: true },
    { href: "/sistemas/crm", label: "Implantación de CRM", sub: true },
    { href: "/sistemas/paneles", label: "Paneles de gestión", sub: true },
    { href: "/sistemas/chatbots-whatsapp", label: "Chatbots — WhatsApp y web", sub: true },
    { href: "/sistemas/integracion", label: "Integración de sistemas", sub: true },
];

const porSector = [
    { href: "/sectores/administradores-fincas", label: "Administradores de fincas" },
    { href: "/sectores/despachos", label: "Despachos profesionales" },
    { href: "/formacion/centros-educativos", label: "Centros educativos" },
    { href: "/sectores/academias", label: "Academias y formación online" },
    { href: "/sectores/rrhh", label: "Selección de personal y RRHH" },
    { href: "/formacion/directivos", label: "Equipos directivos" },
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
                            style={{ marginBottom: "1.2rem", display: "inline-block" }}
                        >
                            <span style={{
                                fontFamily: 'var(--font-display, serif)',
                                fontSize: '1.7rem',
                                fontWeight: 600,
                                letterSpacing: '-0.02em',
                                color: '#faf6ef',
                            }}>Automatizatelo<span style={{ color: '#ea580c' }}>.</span></span>
                        </a>
                        <p style={{ color: "rgba(250,246,239,0.65)", lineHeight: '1.7', marginBottom: '1.6rem', fontSize: '0.93rem', maxWidth: '30ch' }}>
                            Formación en IA, cumplimiento del Reglamento Europeo y
                            sistemas que trabajan solos — en despachos, academias
                            y pymes reales. Barcelona y toda España.
                        </p>
                        <div style={{ display: "flex", gap: "1rem" }}>
                            {[
                                { href: "https://www.linkedin.com/company/automatizatelo", label: "LinkedIn", icono: <FaLinkedin /> },
                                { href: "https://www.instagram.com/automatizatelo.ia", label: "Instagram", icono: <FaInstagram /> },
                                { href: "https://wa.me/34678399182", label: "WhatsApp", icono: <FaWhatsapp /> },
                            ].map((r) => (
                                <a
                                    key={r.label}
                                    href={r.href}
                                    aria-label={r.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-red"
                                >
                                    {r.icono}
                                </a>
                            ))}
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

                    {/* Servicios — qué hago, con la jerarquía de pilares */}
                    <div className="footer-col">
                        <p style={tituloCol}>Servicios</p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                            {servicios.map((l) => (
                                <li
                                    key={l.href}
                                    style={l.sub ? {
                                        paddingLeft: '0.9rem',
                                        borderLeft: '1px solid rgba(250,246,239,0.18)',
                                        marginLeft: '0.2rem',
                                    } : undefined}
                                >
                                    <a href={l.href} style={l.sub ? { color: "rgba(250,246,239,0.55)", fontSize: '0.92em' } : linkStyle}>
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Por sector — para quién */}
                    <div className="footer-col">
                        <p style={tituloCol}>Por sector</p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                            {porSector.map((l) => (
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
            <style>{`
                .footer-red {
                    width: 38px;
                    height: 38px;
                    border: 1px solid rgba(250, 246, 239, 0.25);
                    border-radius: 50%;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.05rem;
                    color: rgba(250, 246, 239, 0.75);
                    transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
                }
                .footer-red:hover {
                    color: #f6c39c;
                    border-color: #f6c39c;
                    transform: translateY(-2px);
                }
            `}</style>
        </footer>
    );
}
