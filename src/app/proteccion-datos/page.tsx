import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Política de Privacidad",
    description: "Información sobre el tratamiento de datos personales en Automatizatelo conforme al RGPD y la LOPDGDD.",
};

export default function ProteccionDatos() {
    return (
        <main>
            <Header />
            <div className="legal-page-wrapper">
                <div className="legal-header">
                    <h1>Política de Privacidad</h1>
                    <p>
                        <strong>Información sobre el tratamiento de tus datos personales</strong>
                        <br />
                        Conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD)
                        <br />
                        Última actualización: Mayo 2026
                    </p>
                </div>

                <section className="legal-section">
                    <h2>1. Responsable del tratamiento</h2>
                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">Titular:</span>
                            <span className="value">Manuel Méndez González</span>
                        </div>
                        <div className="data-item">
                            <span className="label">N.I.F.:</span>
                            <span className="value">47839053L</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Nombre comercial:</span>
                            <span className="value">Automatizatelo</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Domicilio:</span>
                            <span className="value">C/ Àngel Guimerà 3, 08812 Les Roquetes (Sant Pere de Ribes), Barcelona, España</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Email:</span>
                            <span className="value">manelgon92@gmail.com</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Teléfono:</span>
                            <span className="value">+34 678 399 182</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Delegado de Protección de Datos (DPO):</span>
                            <span className="value">No designado por no ser obligatorio según el art. 37 RGPD y el art. 34 LOPDGDD.</span>
                        </div>
                    </div>
                </section>

                <section className="legal-section">
                    <h2>2. Datos personales que tratamos</h2>
                    <p>Tratamos exclusivamente los datos que tú nos facilitas voluntariamente, así como aquellos derivados de tu navegación:</p>
                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">A través del formulario de contacto:</span>
                            <span className="value">Nombre, apellidos, email, teléfono, tipo de cliente, servicio de interés y mensaje opcional.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">A través del chat:</span>
                            <span className="value">Mensajes que envías, identificador de sesión y momento de la conversación.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Datos técnicos de navegación:</span>
                            <span className="value">Dirección IP, geolocalización aproximada (ciudad/país), tipo de dispositivo, navegador y páginas visitadas.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Cookies:</span>
                            <span className="value">Solo si has dado tu consentimiento. Detalles en nuestra <a href="/politica-cookies" style={{ color: "var(--color-primary)" }}>Política de Cookies</a>.</span>
                        </div>
                    </div>
                </section>

                <section className="legal-section">
                    <h2>3. Finalidad y base legal</h2>
                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">Atender tu consulta o solicitud de auditoría</span>
                            <span className="value">
                                <strong>Base legal:</strong> tu consentimiento al enviar el formulario (art. 6.1.a RGPD) y la ejecución de medidas precontractuales a petición tuya (art. 6.1.b RGPD).
                            </span>
                        </div>
                        <div className="data-item">
                            <span className="label">Gestionar la relación comercial si nos contratas</span>
                            <span className="value">
                                <strong>Base legal:</strong> ejecución de un contrato en el que eres parte (art. 6.1.b RGPD).
                            </span>
                        </div>
                        <div className="data-item">
                            <span className="label">Análisis estadístico del uso del sitio</span>
                            <span className="value">
                                <strong>Base legal:</strong> tu consentimiento mediante el banner de cookies (art. 6.1.a RGPD).
                            </span>
                        </div>
                        <div className="data-item">
                            <span className="label">Marketing y medición de campañas publicitarias</span>
                            <span className="value">
                                <strong>Base legal:</strong> tu consentimiento explícito mediante el banner de cookies (art. 6.1.a RGPD).
                            </span>
                        </div>
                        <div className="data-item">
                            <span className="label">Cumplir obligaciones legales (fiscales, contables)</span>
                            <span className="value">
                                <strong>Base legal:</strong> cumplimiento de obligación legal (art. 6.1.c RGPD).
                            </span>
                        </div>
                    </div>
                </section>

                <section className="legal-section">
                    <h2>4. Plazos de conservación</h2>
                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">Leads no contactados:</span>
                            <span className="value">Hasta 24 meses desde la fecha de envío, salvo que solicites antes su supresión.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Clientes (relación contractual):</span>
                            <span className="value">Durante la vigencia del contrato y los plazos legales posteriores (hasta 6 años por motivos fiscales y contables).</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Datos de navegación / chat:</span>
                            <span className="value">Hasta 12 meses desde la última interacción.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Consentimientos:</span>
                            <span className="value">Hasta su revocación o, en cualquier caso, durante 3 años para demostrar su obtención.</span>
                        </div>
                    </div>
                </section>

                <section className="legal-section">
                    <h2>5. Destinatarios y encargados del tratamiento</h2>
                    <p>Tus datos no se ceden a terceros, salvo obligación legal. Empleamos los siguientes <strong>encargados del tratamiento</strong>, todos con contratos conformes al art. 28 RGPD:</p>
                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">Supabase (Supabase Inc.)</span>
                            <span className="value">Base de datos y autenticación. Servidores en la Unión Europea (Irlanda). Acuerdo de Procesamiento de Datos firmado.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Vercel Inc.</span>
                            <span className="value">Alojamiento web del sitio. Acuerdo de Procesamiento de Datos disponible.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Google LLC (Google Analytics 4 y Google Ads)</span>
                            <span className="value">Análisis estadístico y campañas publicitarias. Activo solo si has prestado consentimiento. Implementamos Google Consent Mode v2.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">n8n (workflow automation)</span>
                            <span className="value">Procesamiento de mensajes de chat y notificaciones internas.</span>
                        </div>
                    </div>
                    <p style={{ marginTop: "1rem" }}>
                        <strong>Transferencias internacionales:</strong> Algunos proveedores (Google, Vercel) están establecidos en EE. UU. Las transferencias se realizan al amparo del marco <em>EU-U.S. Data Privacy Framework</em> o de cláusulas contractuales tipo (CCT) aprobadas por la Comisión Europea, garantizando un nivel de protección equivalente al del Espacio Económico Europeo.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>6. Tus derechos</h2>
                    <p>Puedes ejercer en cualquier momento los siguientes derechos sobre tus datos:</p>
                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">Acceso</span>
                            <span className="value">Saber qué datos tuyos tratamos, con qué fin y a quién los comunicamos.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Rectificación</span>
                            <span className="value">Corregir datos inexactos o incompletos.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Supresión (derecho al olvido)</span>
                            <span className="value">Eliminar tus datos cuando ya no sean necesarios o retires el consentimiento.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Oposición</span>
                            <span className="value">Oponerte al tratamiento, especialmente al marketing.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Limitación del tratamiento</span>
                            <span className="value">Restringir el tratamiento mientras se verifica una solicitud.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Portabilidad</span>
                            <span className="value">Recibir tus datos en formato estructurado para transferirlos a otro responsable.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Revocación del consentimiento</span>
                            <span className="value">Sin que ello afecte a la licitud del tratamiento previo a la revocación.</span>
                        </div>
                    </div>
                </section>

                <section className="legal-section">
                    <h2>7. Cómo ejercer tus derechos</h2>
                    <p>
                        Envía una solicitud por escrito a <strong>manelgon92@gmail.com</strong> o por correo postal a la dirección del responsable (ver sección 1), incluyendo:
                    </p>
                    <ul style={{ marginTop: "0.75rem", marginLeft: "1.5rem", listStyle: "disc" }}>
                        <li>Nombre completo y copia de tu DNI / NIE / pasaporte (para verificar identidad).</li>
                        <li>Derecho que deseas ejercer y, si aplica, los datos concretos sobre los que.</li>
                        <li>Email o dirección postal para enviarte la respuesta.</li>
                    </ul>
                    <p style={{ marginTop: "1rem" }}>
                        Responderemos en el plazo máximo de <strong>1 mes</strong> desde la recepción (prorrogable a 2 meses adicionales en casos de complejidad). El ejercicio es <strong>gratuito</strong>, salvo solicitudes manifiestamente infundadas o excesivas.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>8. Reclamación ante la autoridad de control</h2>
                    <p>
                        Si consideras que el tratamiento de tus datos personales infringe la normativa, tienes derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong>:
                    </p>
                    <div className="legal-data-list" style={{ marginTop: "1rem" }}>
                        <div className="data-item">
                            <span className="label">Dirección:</span>
                            <span className="value">C/ Jorge Juan, 6, 28001 Madrid</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Web:</span>
                            <span className="value"><a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>www.aepd.es</a></span>
                        </div>
                        <div className="data-item">
                            <span className="label">Sede electrónica:</span>
                            <span className="value"><a href="https://sedeagpd.gob.es" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>sedeagpd.gob.es</a></span>
                        </div>
                    </div>
                </section>

                <section className="legal-section">
                    <h2>9. Decisiones automatizadas y elaboración de perfiles</h2>
                    <p>
                        No tomamos decisiones automatizadas que produzcan efectos jurídicos significativos sobre los usuarios. Los datos analíticos que recogemos (con tu consentimiento) se usan únicamente con fines estadísticos agregados.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>10. Seguridad</h2>
                    <p>
                        Aplicamos medidas técnicas y organizativas adecuadas para garantizar la seguridad de los datos: cifrado en tránsito (HTTPS), almacenamiento en proveedores certificados (Supabase, Vercel) bajo el RGPD, control de accesos basado en roles y políticas de seguridad a nivel de fila (RLS) en base de datos.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>11. Cambios en esta política</h2>
                    <p>
                        Nos reservamos el derecho a actualizar esta Política de Privacidad para adaptarla a cambios normativos, jurisprudenciales o de la propia actividad. La fecha de última actualización figura al inicio del documento.
                    </p>
                </section>
            </div>
            <Footer />
        </main>
    );
}
