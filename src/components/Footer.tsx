import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer" style={{
            background: 'rgba(17, 24, 39, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            width: '100%',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 -10px 40px rgba(0,0,0,0.3)',
            color: 'white',
            padding: '4rem 0',
            marginTop: '4rem'
        }}>
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <a
                            href="#"
                            className="logo"
                            style={{ marginBottom: "1.5rem", display: "flex", alignItems: 'center', gap: '0.5rem' }}
                        >
                            <span className="premium-gradient" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Automatizatelo.</span>
                        </a>
                        <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: '1.6' }}>
                            Transformamos tu negocio con <span style={{ color: 'var(--color-primary)' }}>IA y automatización</span>.
                            <br />
                            Tu socio en eficiencia operativa.
                        </p>
                    </div>
                    <div className="footer-col">
                        <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Enlaces</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li>
                                <a href="/#opportunity" style={{ color: 'rgba(255,255,255,0.7)' }}>La Oportunidad</a>
                            </li>
                            <li>
                                <a href="/#benefits" style={{ color: 'rgba(255,255,255,0.7)' }}>Beneficios</a>
                            </li>
                            <li>
                                <a href="/#services" style={{ color: 'rgba(255,255,255,0.7)' }}>Servicios</a>
                            </li>
                            <li>
                                <a href="/#how-we-work" style={{ color: 'rgba(255,255,255,0.7)' }}>Metodología</a>
                            </li>
                            <li>
                                <a href="/#trusted-clients" style={{ color: 'rgba(255,255,255,0.7)' }}>Casos de Éxito</a>
                            </li>
                            <li>
                                <a href="/#faq" style={{ color: 'rgba(255,255,255,0.7)' }}>FAQ</a>
                            </li>
                            <li style={{ marginTop: '0.5rem' }}>
                                <a href="#contact" className="btn btn-primary" style={{
                                    background: 'var(--color-primary)',
                                    border: 'none',
                                    padding: '0.5rem 1.4rem',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    borderRadius: '50px',
                                    color: '#fff',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    boxShadow: '0 4px 20px rgba(255, 140, 50, 0.3)',
                                }}>Empieza Ahora</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Contacto</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <i className="fa-solid fa-phone" style={{ color: 'var(--color-primary)' }}></i> +34 694 26 48 40
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <i className="fa-solid fa-envelope" style={{ color: 'var(--color-primary)' }}></i> info@automatizatelo.com
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <i className="fa-solid fa-location-dot" style={{ color: 'var(--color-primary)' }}></i> España
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Redes</h4>
                        <div style={{ display: "flex", gap: "1.2rem" }}>
                            <a href="https://www.linkedin.com/company/automatizatelo" style={{ fontSize: "1.5rem", color: 'var(--color-primary)', transition: 'transform 0.3s ease' }} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.instagram.com/automatizatelo.ia?igsh=NWE1eW8xa2VieTlh&utm_source=qr" style={{ fontSize: "1.5rem", color: 'var(--color-primary)', transition: 'transform 0.3s ease' }} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '4rem', paddingTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem' }}>
                    <p style={{ color: 'rgba(255,255,255,0.5)' }}>&copy; 2024 Automatizatelo. Todos los derechos reservados.</p>
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.85rem' }}>
                        <a href="/aviso-legal" style={{ color: 'rgba(255,255,255,0.5)', opacity: 0.7 }}>Aviso Legal</a>
                        <a href="/proteccion-datos" style={{ color: 'rgba(255,255,255,0.5)', opacity: 0.7 }}>Protección de Datos</a>
                        <a href="/politica-cookies" style={{ color: 'rgba(255,255,255,0.5)', opacity: 0.7 }}>Política de Cookies</a>
                        <a href="/declaracion-accesibilidad" style={{ color: 'rgba(255,255,255,0.5)', opacity: 0.7 }}>Accesibilidad</a>
                    </div>
                </div>
            </div>
        </footer>


    );
}
