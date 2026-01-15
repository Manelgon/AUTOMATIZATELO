import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AvisoLegal() {
    return (
        <main>
            <Header />
            <div className="legal-page-wrapper">
                <div className="legal-header">
                    <h1>Aviso Legal</h1>
                    <p>
                        <strong>Información legal y condiciones de uso del sitio web</strong>
                        <br />
                        Última actualización: Enero 2025
                    </p>
                </div>

                <section className="legal-section">
                    <h2>1. Información legal y aceptación</h2>
                    <p className="mb-4">
                        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, a continuación se exponen los datos identificativos de la empresa:
                    </p>

                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">Denominación Social:</span>
                            <span className="value">Automatizatelo</span>
                        </div>
                        <div className="data-item">
                            <span className="label">C.I.F.:</span>
                            <span className="value">[Por completar]</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Domicilio Social:</span>
                            <span className="value">Barcelona, España</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Teléfono:</span>
                            <span className="value">+34 694 26 48 40</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Email:</span>
                            <span className="value">info@automatizalo.com</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Datos registrales:</span>
                            <span className="value">[Por completar]</span>
                        </div>
                    </div>

                    <p style={{ marginTop: "1rem" }}>
                        El presente aviso legal recoge las condiciones generales que rigen el acceso y el uso de este sitio web. El uso del sitio web implica la expresa y plena aceptación de estas condiciones generales en la versión publicada en el momento en que el usuario acceda al mismo.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>2. Propiedad intelectual e industrial</h2>
                    <p className="mb-4">
                        Este sitio web y los contenidos que alberga se encuentran protegidos por la legislación vigente en materia de propiedad intelectual.
                    </p>
                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">Derechos Protegidos</span>
                            <span className="value">
                                Automatizatelo es titular o licenciatario de todos los derechos de propiedad intelectual e industrial de su web, así como de los elementos contenidos en la misma. Queda expresamente prohibida la reproducción, distribución, comunicación pública y transformación de la totalidad o parte de los contenidos de esta web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización expresa.
                            </span>
                        </div>
                    </div>
                </section>

                <section className="legal-section">
                    <h2>3. Condiciones de uso del portal</h2>

                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">3.1 General</span>
                            <span className="value">
                                El Usuario se obliga a hacer un uso correcto del Portal de conformidad con la Ley y el presente Aviso Legal. El Usuario responderá frente a Automatizatelo o frente a terceros, de cualesquiera daños y perjuicios que pudieran causarse como consecuencia del incumplimiento de dicha obligación.
                            </span>
                        </div>
                        <div className="data-item">
                            <span className="label">3.2 Contenidos</span>
                            <span className="value">
                                El Usuario se compromete a utilizar los Contenidos de conformidad con la Ley y el presente Aviso Legal.
                                <br /><br />
                                • Prohibido reproducir, copiar o distribuir sin permiso.
                                <br />
                                • Prohibido extraer bases de datos.
                            </span>
                        </div>
                        <div className="data-item">
                            <span className="label">3.3 Enlaces al Portal</span>
                            <span className="value">
                                El usuario de Internet que quiera introducir enlaces desde sus propias páginas web al Portal deberá cumplir con las condiciones específicas establecidas en este documento.
                            </span>
                        </div>
                    </div>
                </section>

                <section className="legal-section">
                    <h2>4. Exclusión de responsabilidad</h2>
                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">4.1 De la Información</span>
                            <span className="value">Automatizatelo no se responsabiliza de decisiones tomadas basadas en info del portal.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">4.2 Calidad del servicio</span>
                            <span className="value">No garantizamos ausencia de virus. El usuario debe tener antivirus.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">4.3 Disponibilidad</span>
                            <span className="value">El servicio puede ser interrumpido por causas ajenas o mantenimiento.</span>
                        </div>
                    </div>
                </section>

                <section className="legal-section">
                    <h2>5. Actividades Ilícitas</h2>
                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">Reporte</span>
                            <span className="value">En el caso de que el Usuario o cualquier otro usuario de Internet tuvieran conocimiento de que los Sitios Enlazados remiten a páginas cuyos contenidos o servicios son ilícitos, nocivos, denigrantes, violentos o contrarios a la moral podrá ponerse en contacto con Automatizatelo.</span>
                        </div>
                    </div>
                </section>

                <section className="legal-section">
                    <h2>Otros</h2>
                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">7. Modificaciones</span>
                            <span className="value">Reservado el derecho a modificar la web sin previo aviso.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">8. Redes Sociales</span>
                            <span className="value">Las condiciones de uso dependen de cada plataforma.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">9. Legislación</span>
                            <span className="value">Ley española. Juzgados de Barcelona.</span>
                        </div>
                    </div>
                </section>

                <p style={{ textAlign: "center", marginTop: "2rem", color: "var(--color-text-muted)" }}>
                    Automatizatelo - Todos los derechos reservados
                </p>
            </div>
            <Footer />
        </main>
    );
}
