import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Accesibilidad() {
    return (
        <main>
            <Header />
            <div className="legal-page-wrapper">
                <div className="legal-header">
                    <h1>Declaración de Accesibilidad</h1>
                    <p>
                        <strong>Compromiso con la accesibilidad web y la inclusión digital</strong>
                        <br />
                        Conforme a WCAG 2.1 AA - UNE-EN 301 549:2022
                    </p>
                </div>

                <section className="legal-section">
                    <h2>1. Compromiso</h2>
                    <p className="mb-4">
                        Comprometidos con el criterio del Programa Kit Digital y norma UNE-EN 301 549:2022.
                    </p>
                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">WCAG 2.1 AA</span>
                            <span className="value">Adoptamos esta guía informativa para la construcción de la web.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Mejora continua</span>
                            <span className="value">Esfuerzo constante para eliminar barreras.</span>
                        </div>
                    </div>
                </section>

                <section className="legal-section">
                    <h2>2. Aspectos Implementados</h2>
                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">Presentación Visual</span>
                            <span className="value">CSS y etiquetas apropiadas.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Navegación Usable</span>
                            <span className="value">Intuitiva y alternativa.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Imágenes</span>
                            <span className="value">Descripciones alternativas (Alt text).</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Compatibilidad</span>
                            <span className="value">Verificado en múltiples navegadores.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Formatos</span>
                            <span className="value">Universales y accesibles.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Navegación Teclado</span>
                            <span className="value">Atajos y tabulación lógica.</span>
                        </div>
                    </div>
                </section>

                <section className="legal-section">
                    <h2>3. Herramientas de Accesibilidad</h2>
                    <p className="mb-4">Funcionalidades disponibles para mejorar la experiencia:</p>

                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">Herramientas</span>
                            <span className="value">
                                Tamaño de fuentes • Espacio entre fuentes • Contraste y Saturación • Alineación texto • Subrayar enlaces • Fuente legible (dislexia) • Cursor y guías • Detener animaciones
                            </span>
                        </div>
                    </div>
                </section>

                <section className="legal-section">
                    <h2>Contacto Accesibilidad</h2>
                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">Email</span>
                            <span className="value">Si encuentra barreras, contáctenos: info@automatizalo.com</span>
                        </div>
                    </div>
                </section>

                <p style={{ textAlign: "center", marginTop: "2rem", color: "var(--color-text-muted)" }}>
                    Automatizatelo - Comprometidos con la accesibilidad universal
                    <br />
                    Conforme a WCAG 2.1 AA • UNE-EN 301 549:2022 • Programa Kit Digital
                </p>

            </div>
            <Footer />
        </main>
    );
}
