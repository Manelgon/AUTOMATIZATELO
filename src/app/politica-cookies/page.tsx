import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PoliticaCookies() {
    return (
        <main>
            <Header />
            <div className="legal-page-wrapper">
                <div className="legal-header">
                    <h1>Política de Cookies</h1>
                    <p>
                        <strong>Información sobre el uso de cookies en nuestro sitio web</strong>
                        <br />
                        Última actualización: Enero 2025
                    </p>
                </div>

                <section className="legal-section">
                    <h2>1. ¿Qué son las Cookies?</h2>
                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">Definición</span>
                            <span className="value">
                                Automatizatelo utiliza cookies y archivos similares. Son pequeños archivos de datos que se envían a su dispositivo para obtener información de navegación o identificación.
                            </span>
                        </div>
                    </div>
                </section>

                <section className="legal-section">
                    <h2>2. Tipología y Finalidad</h2>
                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">Cookies de sesión</span>
                            <span className="value">Recaban datos durante el acceso. No se guardan tras cerrar.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Cookies persistentes</span>
                            <span className="value">Datos permanecen en el terminal por un periodo definido.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Propias</span>
                            <span className="value">Técnicas (navegación) y Personalización (preferencias).</span>
                        </div>
                    </div>
                </section>

                <section className="legal-section">
                    <h2>3. Gestión y Desactivación</h2>
                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">Instrucciones</span>
                            <span className="value">Puede gestionar sus preferencias en el navegador.</span>
                        </div>
                        <a href="https://support.google.com/chrome/answer/95647" target="_blank" className="data-item" style={{ textDecoration: 'none' }}>
                            <span className="label" style={{ color: '#DB4437' }}>Google Chrome</span>
                            <span className="value">Ver instrucciones &rarr;</span>
                        </a>
                        <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" className="data-item" style={{ textDecoration: 'none' }}>
                            <span className="label" style={{ color: '#E66000' }}>Mozilla Firefox</span>
                            <span className="value">Ver instrucciones &rarr;</span>
                        </a>
                        <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c23d-4fa8-e48063958838" target="_blank" className="data-item" style={{ textDecoration: 'none' }}>
                            <span className="label" style={{ color: '#0078D7' }}>Microsoft Edge</span>
                            <span className="value">Ver instrucciones &rarr;</span>
                        </a>
                        <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" className="data-item" style={{ textDecoration: 'none' }}>
                            <span className="label" style={{ color: '#00C3FF' }}>Safari</span>
                            <span className="value">Ver instrucciones &rarr;</span>
                        </a>
                    </div>

                    <div className="info-box" style={{ marginTop: '2rem' }}>
                        <h3>Importante sobre el bloqueo</h3>
                        <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
                            <li>Algunas características de la web pueden no funcionar.</li>
                            <li>Puede impedir el acceso a ciertos servicios.</li>
                        </ul>
                    </div>
                </section>

                <section className="legal-section">
                    <h2>4. Actualizaciones</h2>
                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">Modificaciones</span>
                            <span className="value">Automatizatelo puede modificar esta Política. Si desea más información: info@automatizalo.com</span>
                        </div>
                    </div>
                </section>

                <p style={{ textAlign: "center", marginTop: "2rem", color: "var(--color-text-muted)" }}>
                    Automatizatelo - Política de Cookies
                </p>
            </div>
            <Footer />
        </main>
    );
}
