"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        tipo_cliente: "",
        servicio: "",
        mensaje: "",
        acepto: false,
    });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        // @ts-ignore
        const checked = type === "checkbox" ? e.target.checked : undefined;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (status === "sending") return;

        setStatus("sending");
        setStatusMessage("Procesando información y enviando solicitud...");

        try {
            // Get IP + GEO + Browser Info
            let ipInfo: any = {};
            try {
                const ipResponse = await fetch("https://ipapi.co/json/");
                if (ipResponse.ok) {
                    ipInfo = await ipResponse.json();
                }
            } catch (error) {
                console.warn("Could not fetch IP info", error);
            }

            const payload = {
                ...formData,
                fecha_envio: new Date().toISOString(),
                navegador: navigator.userAgent,
                idioma: navigator.language,
                pantalla: `${window.screen.width}x${window.screen.height}`,
                ip: ipInfo?.ip || "Desconocida",
                ciudad: ipInfo?.city || "Desconocida",
                region: ipInfo?.region || "Desconocida",
                pais: ipInfo?.country_name || "Desconocido",
                lat: ipInfo?.latitude || null,
                lon: ipInfo?.longitude || null,
            };

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setStatus("success");
                setStatusMessage("¡Enviado con éxito! Te contactaremos muy pronto.");
                setFormData({
                    nombre: "",
                    email: "",
                    telefono: "",
                    tipo_cliente: "",
                    servicio: "",
                    mensaje: "",
                    acepto: false
                });
                // Anti-spam Block (30s) logic is handled by just showing success state, 
                // but we can enforce a timeout to reset status to idle if we want.
                setTimeout(() => {
                    setStatus("idle");
                    setStatusMessage("");
                }, 30000);
            } else {
                const errorData = await response.json().catch(() => ({}));
                console.error("API Error Details:", errorData);
                throw new Error(errorData.error || "Webhook returned error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            setStatusMessage("Error enviando la solicitud. Por favor, contáctanos por email.");
            // Reset error after 5s
            setTimeout(() => {
                setStatus("idle");
                setStatusMessage("");
            }, 5000);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Contacta con Nosotros
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="section-subtitle"
                >
                    Cuéntanos tu proyecto y te ayudaremos a automatizarlo.
                </motion.p>

                <form id="form-automatizatelo" onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre completo"
                            required
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="tel"
                            name="telefono"
                            placeholder="Teléfono"
                            required
                            value={formData.telefono}
                            onChange={handleChange}
                        />

                        <select
                            name="tipo_cliente"
                            required
                            value={formData.tipo_cliente}
                            onChange={handleChange}
                        >
                            <option value="">¿Eres Empresa o Particular?</option>
                            <option value="empresa">Empresa</option>
                            <option value="particular">Particular</option>
                        </select>

                        <select
                            name="servicio"
                            required
                            value={formData.servicio}
                            onChange={handleChange}
                        >
                            <option value="">Tipo de servicio solicitado</option>
                            <option value="autom_flujos">Automatización de Flujos</option>
                            <option value="integraciones">Integración de Sistemas</option>
                            <option value="chatbots_ia">IA & Chatbots</option>
                            <option value="mantenimiento">Mantenimiento Mensual</option>
                        </select>
                    </div>

                    <textarea
                        name="mensaje"
                        placeholder="Describe brevemente tu necesidad..."
                        required
                        value={formData.mensaje}
                        onChange={handleChange}
                    ></textarea>

                    <label className="checkbox">
                        <input
                            type="checkbox"
                            name="acepto" // Add name attribute for handleChange
                            id="acepto"
                            required
                            checked={formData.acepto}
                            onChange={handleChange}
                        />
                        Acepto la Política de Privacidad.
                    </label>

                    <button
                        type="submit"
                        id="btn-enviar"
                        className={`btn btn-primary ${status === "sending" ? "bloqueado" : ""}`}
                        disabled={status === "sending" || status === "success"}
                    >
                        {status === "sending" ? "Enviando..." : "Enviar Solicitud"}
                    </button>

                    <p
                        id="estado-envio"
                        style={{
                            marginTop: "1rem",
                            textAlign: "center",
                            color: status === "success" ? "green" : status === "error" ? "red" : "inherit"
                        }}
                    >
                        {statusMessage}
                    </p>
                </form>
            </div>
        </section>
    );
}
