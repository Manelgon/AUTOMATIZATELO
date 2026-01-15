"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { countryCodes } from "../data/countryCodes";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        prefijo: "+34",
        telefono: "",
        tipo_cliente: "",
        servicio: "",
        mensaje: "",
        acepto: false,
    });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [statusMessage, setStatusMessage] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filteredCountries = countryCodes.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.code.includes(searchTerm)
    );

    const handleSelectPrefix = (code: string) => {
        setFormData(prev => ({ ...prev, prefijo: code }));
        setIsDropdownOpen(false);
        setSearchTerm("");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        // @ts-ignore
        const checked = type === "checkbox" ? e.target.checked : undefined;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));

        // Reset custom validity if the user starts typing
        if (type !== 'checkbox' && 'setCustomValidity' in e.target) {
            (e.target as HTMLInputElement).setCustomValidity('');
        }

        // Also ensure specific error clearing for the conditional fields
        if (name === 'email' || name === 'telefono') {
            const form = (e.target as HTMLElement).closest('form');
            if (form) {
                const emailInput = form.elements.namedItem('email') as HTMLInputElement;
                const phoneInput = form.elements.namedItem('telefono') as HTMLInputElement;
                if (emailInput) emailInput.setCustomValidity('');
                if (phoneInput) phoneInput.setCustomValidity('');
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        const emailInput = form.elements.namedItem('email') as HTMLInputElement;
        const phoneInput = form.elements.namedItem('telefono') as HTMLInputElement;

        // Conditional Validation: Email OR Phone required
        if (!formData.email && !formData.telefono) {
            if (emailInput) {
                emailInput.setCustomValidity("Por favor, introduce al menos un email o un teléfono.");
                emailInput.reportValidity();
            }
            return;
        }

        // Validate Phone (9 digits) - Only if provided
        if (formData.telefono) {
            const cleanPhone = formData.telefono.replace(/\D/g, '');
            if (!/^\d{9}$/.test(cleanPhone)) {
                if (phoneInput) {
                    phoneInput.setCustomValidity("Por favor, introduce un número de teléfono válido de 9 dígitos.");
                    phoneInput.reportValidity();
                }
                return;
            }
        }

        // Validate Email - Only if provided
        if (formData.email) {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                if (emailInput) {
                    emailInput.setCustomValidity("Por favor, introduce un correo electrónico válido (ej: usuario@dominio.com).");
                    emailInput.reportValidity();
                }
                return;
            }
        }

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
                telefono: `${formData.prefijo.replace('+', '')}${formData.telefono}`,
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
                    prefijo: "+34",
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
                        <div>
                            <label htmlFor="nombre" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151' }}>Nombre completo</label>
                            <input
                                id="nombre"
                                type="text"
                                name="nombre"
                                placeholder="Ej: Juan Pérez"
                                required
                                value={formData.nombre}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151' }}>Correo electrónico</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Ej: info@empresa.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="telefono" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151' }}>Teléfono de contacto</label>
                            <div style={{ display: 'flex', gap: '10px' }} ref={dropdownRef}>
                                <div style={{ position: 'relative' }}>
                                    <button
                                        type="button"
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        style={{
                                            width: '100px',
                                            height: '100%',
                                            padding: '0 10px',
                                            border: '1px solid #ccc',
                                            borderRadius: '4px',
                                            backgroundColor: 'white',
                                            textAlign: 'left',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            color: '#333'
                                        }}
                                    >
                                        <span>{formData.prefijo}</span>
                                        <span style={{ fontSize: '0.8rem' }}>▼</span>
                                    </button>

                                    <AnimatePresence>
                                        {isDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                style={{
                                                    position: 'absolute',
                                                    top: '100%',
                                                    left: 0,
                                                    width: '280px',
                                                    maxHeight: '300px',
                                                    overflowY: 'auto',
                                                    backgroundColor: 'white',
                                                    border: '1px solid #ccc',
                                                    borderRadius: '4px',
                                                    zIndex: 1000,
                                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                                }}
                                            >
                                                <div style={{ padding: '8px', position: 'sticky', top: 0, background: 'white', borderBottom: '1px solid #eee' }}>
                                                    <input
                                                        type="text"
                                                        placeholder="Buscar país..."
                                                        value={searchTerm}
                                                        onChange={(e) => setSearchTerm(e.target.value)}
                                                        autoFocus
                                                        style={{
                                                            width: '100%',
                                                            padding: '6px',
                                                            border: '1px solid #ddd',
                                                            borderRadius: '4px',
                                                            marginBottom: 0
                                                        }}
                                                        onClick={(e) => e.stopPropagation()}
                                                    />
                                                </div>
                                                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                                                    {filteredCountries.map((country) => (
                                                        <li
                                                            key={country.code + country.name}
                                                            onClick={() => handleSelectPrefix(country.code)}
                                                            style={{
                                                                padding: '8px 12px',
                                                                cursor: 'pointer',
                                                                borderBottom: '1px solid #f0f0f0',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '8px',
                                                                color: '#333'
                                                            }}
                                                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f9f9f9')}
                                                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
                                                        >
                                                            <span style={{ fontSize: '1.2rem' }}>{country.flag}</span>
                                                            <span style={{ fontWeight: 'bold', minWidth: '45px' }}>{country.code}</span>
                                                            <span style={{ fontSize: '0.9rem', color: '#666' }}>{country.name}</span>
                                                        </li>
                                                    ))}
                                                    {filteredCountries.length === 0 && (
                                                        <li style={{ padding: '12px', textAlign: 'center', color: '#999' }}>
                                                            No se encontraron resultados
                                                        </li>
                                                    )}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <input
                                    id="telefono"
                                    type="tel"
                                    name="telefono"
                                    placeholder="Número (9 dígitos)"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    style={{ flexGrow: 1 }}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="tipo_cliente" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151' }}>Tipo de Cliente</label>
                            <select
                                id="tipo_cliente"
                                name="tipo_cliente"
                                required
                                value={formData.tipo_cliente}
                                onChange={handleChange}
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="empresa">Empresa</option>
                                <option value="particular">Particular</option>
                            </select>
                        </div>

                        <div style={{ gridColumn: '1 / -1' }}>
                            <label htmlFor="servicio" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151' }}>Servicio de interés</label>
                            <select
                                id="servicio"
                                name="servicio"
                                required
                                value={formData.servicio}
                                onChange={handleChange}
                            >
                                <option value="">Selecciona un servicio</option>
                                <option value="autom_flujos">Automatización de Flujos</option>
                                <option value="integraciones">Integración de Sistemas</option>
                                <option value="chatbots_ia">IA & Chatbots</option>
                                <option value="mantenimiento">Mantenimiento Mensual</option>
                            </select>
                        </div>
                    </div>

                    <div style={{ marginBottom: '0.5rem' }}>
                        <label htmlFor="mensaje" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151' }}>Tu mensaje (Opcional)</label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            placeholder="Cuéntanos brevemente qué necesitas..."
                            value={formData.mensaje}
                            onChange={handleChange}
                            style={{ resize: 'none', height: '150px', overflowY: 'auto' }}
                        ></textarea>
                    </div>

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
