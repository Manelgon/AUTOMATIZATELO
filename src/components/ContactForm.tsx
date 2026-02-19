"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { countryCodes } from "../data/countryCodes";

interface CustomDropdownProps {
    label: string;
    name: string;
    value: string;
    onChange: (name: string, value: string) => void;
    options: { value: string; label: string }[];
    placeholder: string;
    required?: boolean;
}

const CustomDropdown = ({ label, name, value, onChange, options, placeholder, required }: CustomDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectedLabel = options.find(opt => opt.value === value)?.label;

    return (
        <div ref={ref} style={{ position: 'relative' }}>
            <label htmlFor={name} style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-text-main)' }}>
                {label}
            </label>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="glass"
                style={{
                    padding: '12px',
                    background: 'var(--color-bg-secondary)',
                    color: value ? 'var(--color-text-main)' : 'var(--color-text-muted)',
                    border: '1px solid var(--color-border)',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    minHeight: '50px'
                }}
            >
                <span>{selectedLabel || placeholder}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>▼</span>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="glass"
                        style={{
                            position: 'absolute',
                            top: 'calc(100% + 10px)',
                            left: 0,
                            right: 0,
                            maxHeight: '250px',
                            overflowY: 'auto',
                            backgroundColor: 'var(--color-bg-secondary)',
                            zIndex: 1000,
                            boxShadow: 'var(--shadow-card)',
                            border: '1px solid var(--color-primary)',
                            borderRadius: 'var(--radius-md)',
                            padding: '5px 0'
                        }}
                    >
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                            {options.map((option) => (
                                <li
                                    key={option.value}
                                    onClick={() => {
                                        onChange(name, option.value);
                                        setIsOpen(false);
                                    }}
                                    style={{
                                        padding: '12px',
                                        cursor: 'pointer',
                                        borderBottom: '1px solid var(--color-glass-border)',
                                        color: 'var(--color-text-main)',
                                        background: value === option.value ? 'rgba(249, 115, 22, 0.1)' : 'transparent',
                                        transition: 'background 0.2s'
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(249, 115, 22, 0.15)'; e.currentTarget.style.color = 'var(--color-primary)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = value === option.value ? 'rgba(249, 115, 22, 0.1)' : 'transparent'; e.currentTarget.style.color = 'var(--color-text-main)'; }}
                                >
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Hidden native input for validaton if needed, though we handle form data manually */}
            <input
                type="text"
                name={name}
                value={value}
                required={required}
                style={{ position: 'absolute', opacity: 0, height: 0, padding: 0, margin: 0, border: 0 }}
                onChange={() => { }} // dummy
                tabIndex={-1}
            />
        </div>
    );
};

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
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
    const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const phoneDropdownRef = useRef<HTMLDivElement>(null);

    // Close phone dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (phoneDropdownRef.current && !phoneDropdownRef.current.contains(event.target as Node)) {
                setIsPhoneDropdownOpen(false);
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
        setIsPhoneDropdownOpen(false);
        setSearchTerm("");
    };

    const handleCustomChange = (name: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
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

        // Check for cooldown (5 minutes)
        const lastSubmission = localStorage.getItem('last_submission_time');
        if (lastSubmission) {
            const timePassed = Date.now() - parseInt(lastSubmission);
            const cooldownMs = 5 * 60 * 1000; // 5 minutes
            if (timePassed < cooldownMs) {
                const minutesLeft = Math.ceil((cooldownMs - timePassed) / 60000);
                setStatus("error");
                setStatusMessage(`Ya has enviado una solicitud recientemente. Por favor, espera ${minutesLeft} minutos.`);
                return;
            }
        }

        const form = e.currentTarget as HTMLFormElement;
        const emailInput = form.elements.namedItem('email') as HTMLInputElement;
        const phoneInput = form.elements.namedItem('telefono') as HTMLInputElement;

        // Validate Phone (9 digits)
        const cleanPhone = formData.telefono.replace(/\D/g, '');
        if (!/^\d{9}$/.test(cleanPhone)) {
            if (phoneInput) {
                phoneInput.setCustomValidity("Por favor, introduce un número de teléfono válido de 9 dígitos.");
                phoneInput.reportValidity();
            }
            return;
        }

        // Validate Email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            if (emailInput) {
                emailInput.setCustomValidity("Por favor, introduce un correo electrónico válido (ej: usuario@dominio.com).");
                emailInput.reportValidity();
            }
            return;
        }

        if (status === "sending") return;

        setStatus("sending");
        setStatusMessage("Procesando información y enviando solicitud...");

        try {
            const payload = {
                ...formData,
                telefono: `${formData.prefijo.replace('+', '')}${formData.telefono}`,
                fecha_envio: new Date().toISOString(),
                navegador: navigator.userAgent,
                idioma: navigator.language,
                pantalla: `${window.screen.width}x${window.screen.height}`,
                // Let the server-side handle IP and location
                ip: "Pendiente",
                ciudad: "Pendiente",
                region: "Pendiente",
                pais: "Pendiente",
                lat: null,
                lon: null,
            };


            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                // Save submission time to localStorage
                localStorage.setItem('last_submission_time', Date.now().toString());

                setStatus("success");
                setStatusMessage("¡Enviado con éxito! Te contactaremos muy pronto.");
                setFormData({
                    nombre: "",
                    apellido: "",
                    email: "",
                    prefijo: "+34",
                    telefono: "",
                    tipo_cliente: "",
                    servicio: "",
                    mensaje: "",
                    acepto: false
                });

                // Allow a new submission after 5 minutes in UI state
                setTimeout(() => {
                    setStatus("idle");
                    setStatusMessage("");
                }, 5 * 60 * 1000);
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
                    Contacta con <span className="premium-gradient">Nosotros</span>
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

                <form id="form-automatizatelo" onSubmit={handleSubmit} className="glass" style={{ padding: '3rem', marginTop: '3rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-card)' }}>
                    <div className="form-grid">
                        <div>
                            <label htmlFor="nombre" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-text-main)' }}>Nombre</label>
                            <input
                                id="nombre"
                                type="text"
                                name="nombre"
                                className="glass"
                                placeholder="Ej: Juan"
                                required
                                value={formData.nombre}
                                onChange={handleChange}
                                style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text-main)', border: '1px solid var(--color-border)' }}
                            />
                        </div>
                        <div>
                            <label htmlFor="apellido" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-text-main)' }}>Apellido</label>
                            <input
                                id="apellido"
                                type="text"
                                name="apellido"
                                className="glass"
                                placeholder="Ej: Pérez"
                                required
                                value={formData.apellido}
                                onChange={handleChange}
                                style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text-main)', border: '1px solid var(--color-border)' }}
                            />
                        </div>
                        <div>
                            <label htmlFor="telefono" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-text-main)' }}>Teléfono de contacto</label>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }} ref={phoneDropdownRef}>
                                <div style={{ position: 'relative' }}>
                                    <button
                                        type="button"
                                        onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
                                        className="glass"
                                        style={{
                                            width: '100px',
                                            height: '100%',
                                            padding: '0 10px',
                                            backgroundColor: 'var(--color-bg-secondary)',
                                            textAlign: 'left',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            color: 'var(--color-text-main)',
                                            border: '1px solid var(--color-border)'
                                        }}
                                    >
                                        <span>{formData.prefijo}</span>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>▼</span>
                                    </button>

                                    <AnimatePresence>
                                        {isPhoneDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="glass"
                                                style={{
                                                    position: 'absolute',
                                                    top: 'calc(100% + 10px)',
                                                    left: 0,
                                                    width: '320px',
                                                    backgroundColor: 'var(--color-bg-secondary)',
                                                    zIndex: 1000,
                                                    boxShadow: 'var(--shadow-card)',
                                                    border: '1px solid var(--color-primary)',
                                                    borderRadius: 'var(--radius-md)',
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                <div style={{ padding: '8px', position: 'sticky', top: 0, background: 'var(--color-bg-secondary)', borderBottom: '1px solid var(--color-border)', zIndex: 1 }}>
                                                    <input
                                                        type="text"
                                                        placeholder="Buscar país..."
                                                        value={searchTerm}
                                                        onChange={(e) => setSearchTerm(e.target.value)}
                                                        autoFocus
                                                        className="glass"
                                                        style={{
                                                            width: '100%',
                                                            padding: '6px',
                                                            background: 'var(--color-bg)',
                                                            color: 'var(--color-text-main)',
                                                            border: '1px solid var(--color-border)',
                                                            marginBottom: 0
                                                        }}
                                                        onClick={(e) => e.stopPropagation()}
                                                    />
                                                </div>
                                                <div style={{ maxHeight: '250px', overflowY: 'auto' }}>
                                                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                                                        {filteredCountries.map((country) => (
                                                            <li
                                                                key={country.code + country.name}
                                                                onClick={() => handleSelectPrefix(country.code)}
                                                                style={{
                                                                    padding: '8px 12px',
                                                                    cursor: 'pointer',
                                                                    borderBottom: '1px solid var(--color-border)',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '8px',
                                                                    color: 'var(--color-text-main)'
                                                                }}
                                                                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(249, 115, 22, 0.15)'; e.currentTarget.style.color = 'var(--color-primary)'; const mutedSpan = e.currentTarget.querySelector('span:last-child') as HTMLElement; if (mutedSpan) mutedSpan.style.color = 'var(--color-primary)'; }}
                                                                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-text-main)'; const mutedSpan = e.currentTarget.querySelector('span:last-child') as HTMLElement; if (mutedSpan) mutedSpan.style.color = 'var(--color-text-muted)'; }}
                                                            >
                                                                <span style={{ fontSize: '1.2rem' }}>{country.flag}</span>
                                                                <span style={{ fontWeight: 'bold', minWidth: '45px' }}>{country.code}</span>
                                                                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{country.name}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <input
                                    id="telefono"
                                    type="tel"
                                    name="telefono"
                                    className="glass"
                                    placeholder="Número (9 dígitos)"
                                    required
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    style={{ flexGrow: 1, minWidth: '200px', background: 'var(--color-bg-secondary)', color: 'var(--color-text-main)', border: '1px solid var(--color-border)' }}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-text-main)' }}>Correo<br />electrónico</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="glass"
                                placeholder="Ej: info@empresa.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text-main)', border: '1px solid var(--color-border)' }}
                            />
                        </div>

                        <div>
                            <CustomDropdown
                                label="Tipo de Cliente"
                                name="tipo_cliente"
                                value={formData.tipo_cliente}
                                onChange={handleCustomChange}
                                placeholder="Selecciona una opción"
                                required
                                options={[
                                    { value: 'empresa', label: 'Empresa' },
                                    { value: 'particular', label: 'Particular' }
                                ]}
                            />
                        </div>

                        <div>
                            <CustomDropdown
                                label="Servicio de interés"
                                name="servicio"
                                value={formData.servicio}
                                onChange={handleCustomChange}
                                placeholder="Selecciona un servicio"
                                required
                                options={[
                                    { value: 'ecosistemas_digitales', label: 'Ecosistemas Digitales Integrales' },
                                    { value: 'software_medida', label: 'Desarrollo de Software a Medida' },
                                    { value: 'bi_dashboards', label: 'Paneles de Control & Business Intelligence' },
                                    { value: 'web_design', label: 'Diseño y Desarrollo Web' },
                                    { value: 'ecommerce', label: 'E-commerce & Plataformas de Venta' },
                                    { value: 'process_autom', label: 'Automatización de Procesos' },
                                    { value: 'integracion_sistemas', label: 'Integración de Sistemas (CRM · ERP · APIs)' },
                                    { value: 'ia_chatbots', label: 'IA & Chatbots Conversacionales' },
                                    { value: 'ocr_ia', label: 'Procesamiento Inteligente de Documentos (OCR + IA)' },
                                    { value: 'otros', label: 'Otros' }
                                ]}
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem', marginTop: '1.5rem' }}>
                        <label htmlFor="mensaje" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-text-main)' }}>Tu mensaje (Opcional)</label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            className="glass"
                            placeholder="Cuéntanos brevemente qué necesitas..."
                            value={formData.mensaje}
                            onChange={handleChange}
                            style={{ resize: 'none', height: '150px', overflowY: 'auto', background: 'var(--color-bg-secondary)', color: 'var(--color-text-main)', border: '1px solid var(--color-border)' }}
                        ></textarea>
                    </div>

                    <label className="checkbox" style={{ color: 'var(--color-text-muted)' }}>
                        <input
                            type="checkbox"
                            name="acepto"
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
                        style={{ marginTop: '2rem', width: '100%', fontSize: '1.2rem', padding: '1rem' }}
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
