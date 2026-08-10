import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookiePreferencesButton from "@/components/CookiePreferencesButton";

export const metadata = {
    title: "Política de Cookies",
    description: "Qué cookies usa automatizatelo.com, con qué finalidad, cuánto duran y cómo aceptarlas, configurarlas o rechazarlas desde el propio navegador.",
    alternates: { canonical: "https://automatizatelo.com/politica-cookies" },
};

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
                        Última actualización: agosto de 2026
                    </p>
                    <div style={{ marginTop: "1.5rem" }}>
                        <CookiePreferencesButton />
                    </div>
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
                        <div className="data-item">
                            <span className="label">De terceros</span>
                            <span className="value">Analíticas y publicitarias de Google, detalladas en el apartado siguiente.</span>
                        </div>
                    </div>
                </section>

                <section className="legal-section">
                    <h2>3. Cookies de terceros que utilizamos</h2>
                    <p>
                        Estas cookies <strong>solo se instalan si aceptas</strong> las categorías
                        correspondientes en el aviso de cookies. Por defecto están bloqueadas
                        mediante el Modo de Consentimiento de Google: hasta que das tu
                        consentimiento no se almacena información en tu dispositivo.
                    </p>
                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">_ga / _ga_*</span>
                            <span className="value">
                                <strong>Google Analytics (analítica)</strong> — distingue usuarios y sesiones
                                para saber qué páginas se visitan y cómo se navega el sitio. No se usa para
                                publicidad. Caducidad: hasta 2 años. Proveedor: Google Ireland Limited.
                            </span>
                        </div>
                        <div className="data-item">
                            <span className="label">_gcl_au</span>
                            <span className="value">
                                <strong>Google Ads (publicitaria)</strong> — mide la eficacia de los anuncios,
                                atribuyendo si una visita procede de una campaña. Caducidad: 90 días.
                                Proveedor: Google Ireland Limited.
                            </span>
                        </div>
                        <div className="data-item">
                            <span className="label">Consentimiento</span>
                            <span className="value">
                                Guardamos tu elección (aceptar, rechazar o personalizar) en tu navegador para
                                no volver a preguntarte en cada visita. Es una cookie técnica y no requiere
                                consentimiento.
                            </span>
                        </div>
                        <div className="data-item">
                            <span className="label">Cambiar de opinión</span>
                            <span className="value">
                                Puedes revocar tu consentimiento cuando quieras borrando las cookies del
                                navegador (instrucciones abajo) o desde la configuración de tu navegador.
                            </span>
                        </div>
                    </div>
                    <p>
                        Puedes consultar cómo trata Google estos datos en su{" "}
                        <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">
                            política de cookies
                        </a>{" "}
                        y en su{" "}
                        <a href="https://business.safety.google/privacy/" target="_blank" rel="noopener noreferrer">
                            página de privacidad para empresas
                        </a>.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>4. Gestión y Desactivación</h2>
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
                        <a href="https://support.microsoft.com/es-es/windows/administrar-cookies-en-microsoft-edge-ver-permitir-bloquear-eliminar-y-usar-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" className="data-item" style={{ textDecoration: 'none' }}>
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
                    <h2>5. Actualizaciones</h2>
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
