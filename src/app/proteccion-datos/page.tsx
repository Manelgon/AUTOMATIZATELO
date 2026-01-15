import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProteccionDatos() {
    return (
        <main>
            <Header />
            <div className="legal-page-wrapper">
                <div className="legal-header">
                    <h1>Derechos de Protección de Datos</h1>
                    <p>
                        <strong>Información sobre los derechos de los usuarios en materia de protección de datos</strong>
                        <br />
                        Última actualización: Enero 2025
                    </p>
                </div>

                <p className="mb-4 text-center">
                    La normativa de protección de datos recoge una serie de derechos a los que pueden acogerse todas las personas. Automatizatelo, para facilitar su ejercicio, le informa de los diferentes derechos, su contenido, procedimientos, plazos y le aporta los modelos que podrá utilizar en su ejercicio.
                </p>



                <section className="legal-section">
                    <h2>Es común a todos los derechos:</h2>
                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">Ejercicio gratuito</span>
                            <span className="value">Salvo solicitudes infundadas.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Plazo de respuesta</span>
                            <span className="value">Un mes (prorrogable a dos más).</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Medio de ejercicio</span>
                            <span className="value">Definido en nuestras cláusulas.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Ejercicio directo</span>
                            <span className="value">Personal o representante legal.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Edad requerida</span>
                            <span className="value">14 años (general), 16 (salud).</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Fallecidos</span>
                            <span className="value">Familiares pueden ejercer derechos.</span>
                        </div>
                    </div>
                </section>

                <section className="legal-section">
                    <h2>¿Cómo ejercer los derechos ante Automatizatelo?</h2>
                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">Petición por escrito</span>
                            <span className="value">Por cualquier medio legal.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Identificación</span>
                            <span className="value">DNI/Pasaporte si hay dudas.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Representación</span>
                            <span className="value">Acreditación legal si aplica.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Datos de contacto</span>
                            <span className="value">Dirección, fecha y firma.</span>
                        </div>
                    </div>
                </section>

                <section className="legal-section">
                    <h2>Contenido de los Derechos</h2>
                    <div className="legal-data-list">
                        <div className="data-item">
                            <span className="label">Derecho de Acceso</span>
                            <span className="value">Conocer si tratamos sus datos, con qué fin, destinatarios y plazos.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Derecho de Rectificación</span>
                            <span className="value">Corregir datos inexactos o incompletos.</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Derecho de Supresión</span>
                            <span className="value">Eliminar datos si ya no son necesarios o retira consentimiento (Derecho al olvido).</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Derecho de Oposición</span>
                            <span className="value">Oponerse al tratamiento (ej. marketing).</span>
                        </div>
                        <div className="data-item">
                            <span className="label">Derecho a la Portabilidad</span>
                            <span className="value">Recibir datos en formato estructurado para otro responsable.</span>
                        </div>
                    </div>
                    <p style={{ marginTop: "2rem", fontSize: "0.9rem", color: "var(--color-text-muted)", textAlign: 'right' }}>
                        Fuente: Agencia Española de Protección de Datos
                    </p>
                </section>
            </div>
            <Footer />
        </main>
    );
}
