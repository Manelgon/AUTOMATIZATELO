import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <a
                            href="#"
                            className="logo"
                            style={{ marginBottom: "1rem", display: "inline-block" }}
                        >
                            Automatizatelo<span>.</span>
                        </a>
                        <p style={{ color: "var(--color-text-muted)" }}>
                            Transformamos tu negocio con IA y automatización.
                            <br />
                            Tu socio en eficiencia operativa.
                        </p>
                    </div>
                    <div className="footer-col">
                        <h4>Enlaces</h4>
                        <ul>
                            <li>
                                <a href="#benefits">Beneficios</a>
                            </li>
                            <li>
                                <a href="#services">Servicios</a>
                            </li>
                            <li>
                                <a href="#how-we-work">Metodología</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contacto</h4>
                        <ul>
                            <li>
                                <i className="fa-solid fa-phone"></i> +34 694 26 48 40
                            </li>
                            <li>
                                <i className="fa-solid fa-envelope"></i> info@automatizatelo.com
                            </li>
                            <li>
                                <i className="fa-solid fa-location-dot"></i> España
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Redes</h4>
                        <div style={{ display: "flex", gap: "1rem" }}>
                            <a href="https://www.linkedin.com/in/automatizatelo-automatizaciones-de-procesos-con-ia-4422523a6/" style={{ fontSize: "1.5rem", color: "white" }} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.instagram.com/automatizatelo.ia?igsh=NWE1eW8xa2VieTlh&utm_source=qr" style={{ fontSize: "1.5rem", color: "white" }} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <p>&copy; 2024 Automatizatelo. Todos los derechos reservados.</p>
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.85rem' }}>
                        <a href="/aviso-legal" style={{ color: 'var(--color-text-muted)' }}>Aviso Legal</a>
                        <a href="/proteccion-datos" style={{ color: 'var(--color-text-muted)' }}>Protección de Datos</a>
                        <a href="/politica-cookies" style={{ color: 'var(--color-text-muted)' }}>Política de Cookies</a>
                        <a href="/declaracion-accesibilidad" style={{ color: 'var(--color-text-muted)' }}>Accesibilidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
