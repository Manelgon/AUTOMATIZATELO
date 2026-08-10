"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { countryCodes } from "../data/countryCodes";
import SelectorFC from "./SelectorFC";

// Qué necesita el lead, escrito como lo diría él y no como lo llamo yo en la
// web. La última opción evita atascar a quien aún no lo tiene claro.
const SERVICIOS = [
    { valor: "formacion_ia", etiqueta: "Formar a mi equipo en IA" },
    { valor: "cumplimiento_ai_act", etiqueta: "Saber si cumplo el Reglamento de IA (AI Act)" },
    { valor: "empezar_con_ia", etiqueta: "Empezar a usar la IA en mi empresa" },
    { valor: "automatizar_procesos", etiqueta: "Automatizar tareas repetitivas" },
    { valor: "chatbot", etiqueta: "Un chatbot para WhatsApp o la web" },
    { valor: "panel_gestion", etiqueta: "Un panel de gestión a medida" },
    { valor: "no_lo_se", etiqueta: "Aún no lo sé" },
];

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        prefijo: "+34",
        telefono: "",
        tipo_cliente: "",
        servicio: "",
        sector: "",
        sector_otro: "",
        tamano_empresa: "",
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

        // El selector ya no es un <select> nativo, así que "¿qué te interesa?"
        // se comprueba aquí: el navegador no puede exigirlo por nosotros.
        if (!formData.servicio) {
            setStatus("error");
            setStatusMessage("Dime qué te interesa para poder responderte bien.");
            document.getElementById("servicio")?.focus();
            return;
        }

        if (status === "sending") return;

        setStatus("sending");
        setStatusMessage("Procesando información y enviando solicitud...");

        try {
            // Fetch geolocation data from free API
            let geoData = { city: 'Desconocida', country: 'Desconocido' };
            try {
                const geoRes = await fetch('https://ipapi.co/json/');
                if (geoRes.ok) {
                    const geo = await geoRes.json();
                    geoData = {
                        city: geo.city || 'Desconocida',
                        country: geo.country_name || 'Desconocido'
                    };
                }
            } catch { /* Geolocation is optional, continue without it */ }

            const payload = {
                ...formData,
                telefono: `${formData.prefijo.replace('+', '')}${formData.telefono}`,
                fecha_envio: new Date().toISOString(),
                navegador: navigator.userAgent,
                idioma: navigator.language,
                pantalla: `${window.screen.width}x${window.screen.height}`,
                ciudad: geoData.city,
                pais: geoData.country,
            };


            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                // Save submission time to localStorage
                localStorage.setItem('last_submission_time', Date.now().toString());

                if (typeof window !== "undefined" && (window as any).gtag) {
                    (window as any).gtag("event", "generate_lead", {
                        event_category: "form",
                        event_label: "contact_form",
                        // Qué pedían y desde dónde: para saber qué páginas y qué
                        // servicios traen clientes, no solo visitas
                        servicio: formData.servicio || "sin_especificar",
                        sector: formData.sector || "sin_especificar",
                        pagina: window.location.pathname,
                    });
                }

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
                    sector: "",
                    sector_otro: "",
                    tamano_empresa: "",
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
        <section id="contact" className="contact-section" style={{ position: "relative", overflow: "hidden", background: "#1c1917" }}>
            {/* Foto ambiental + velo terracota→tinta, como los paneles del home */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/auditoria.webp"
                alt=""
                aria-hidden="true"
                loading="lazy"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
            />
            <div aria-hidden="true" style={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                background: "linear-gradient(90deg, rgba(28,25,23,0.62) 0%, rgba(28,25,23,0.42) 38%, rgba(28,25,23,0.12) 65%, transparent 85%), linear-gradient(180deg, rgba(28,25,23,0.18) 0%, transparent 40%)",
            }} />
            <div className="container contact-grid" style={{ position: "relative", zIndex: 2 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="mono-label" style={{ color: '#f6c39c' }}>Contacto</span>
                    <h2 className="section-title" style={{ textAlign: 'left', marginTop: '0.8rem', marginBottom: '0.5rem', color: '#faf6ef' }}>
                        Cuéntame cómo trabajas
                    </h2>
                    <p className="section-subtitle" style={{ textAlign: 'left', margin: 0, maxWidth: 480, color: 'rgba(250,246,239,0.8)' }}>
                        Media hora gratis. Te digo qué automatizar primero, qué formar
                        y qué no te compensa tocar — sin compromiso y sin jerga.
                    </p>
                    <div className="contact-datos">
                        <a href="mailto:info@automatizatelo.com">info@automatizatelo.com</a>
                        <a href="tel:+34678399182">+34 678 39 91 82</a>
                        <a href="https://wa.me/34678399182" target="_blank" rel="noopener noreferrer">WhatsApp directo →</a>
                    </div>
                    <div className="contact-despues">
                        <span className="contact-despues-titulo">Qué pasa después</span>
                        {[
                            ["01", "Te respondo en menos de 24 h laborables."],
                            ["02", "Hablamos 30 minutos: me cuentas cómo trabajáis y te digo qué automatizar primero."],
                            ["03", "Si encaja, propuesta por escrito con precio y plazo cerrados. Si no, te lo digo igual."],
                        ].map(([n, t]) => (
                            <div key={n} className="contact-paso">
                                <span className="contact-paso-num">{n}</span>
                                <span>{t}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <form id="form-automatizatelo" onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div>
                            <label htmlFor="nombre" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-text-main)' }}>Nombre <span style={{ color: 'var(--color-primary)' }}>*</span></label>
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
                            <label htmlFor="apellido" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-text-main)' }}>Apellido <span style={{ color: 'var(--color-primary)' }}>*</span></label>
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
                            <label htmlFor="telefono" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-text-main)' }}>Teléfono de contacto <span style={{ color: 'var(--color-primary)' }}>*</span></label>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'nowrap' }} ref={phoneDropdownRef}>
                                <div style={{ position: 'relative' }}>
                                    <button
                                        type="button"
                                        onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
                                        className="glass"
                                        style={{
                                            width: '82px',
                                            flexShrink: 0,
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
                                        <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }} aria-hidden="true"></i>
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
                                                    backgroundColor: 'var(--color-card-bg)',
                                                    zIndex: 1000,
                                                    boxShadow: '0 24px 60px rgba(28, 25, 23, 0.16)',
                                                    border: '1px solid var(--color-border)',
                                                    borderRadius: '8px',
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                <div style={{ padding: '8px', position: 'sticky', top: 0, background: 'var(--color-card-bg)', borderBottom: '1px solid var(--color-border)', zIndex: 1 }}>
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
                                                                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(234, 88, 12, 0.07)'; }}
                                                                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
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
                                    style={{ flexGrow: 1, minWidth: 0, background: 'var(--color-bg-secondary)', color: 'var(--color-text-main)', border: '1px solid var(--color-border)' }}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-text-main)' }}>Correo electrónico <span style={{ color: 'var(--color-primary)' }}>*</span></label>
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

                    </div>

                    <div style={{ marginTop: '1.5rem' }}>
                        <label htmlFor="servicio" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-text-main)' }}>
                            ¿Qué te interesa? <span style={{ color: 'var(--color-primary)' }}>*</span>
                        </label>
                        <SelectorFC
                            nombre="servicio"
                            requerido
                            value={formData.servicio}
                            onChange={(v) => setFormData((prev) => ({ ...prev, servicio: v }))}
                            placeholder="Elige una opción"
                            opciones={SERVICIOS}
                        />
                    </div>

                    <div style={{ marginBottom: '0.75rem', marginTop: '1.5rem' }}>
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
                        <span>
                            Acepto la{" "}
                            <a href="/proteccion-datos" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>
                                Política de Privacidad
                            </a>.
                        </span>
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
                            color: status === "success" ? "#15803d" : status === "error" ? "#b91c1c" : "rgba(28,25,23,0.75)"
                        }}
                    >
                        {statusMessage}
                    </p>
                </form>
            </div>

            <style>{`
                /* Contacto editorial sobre tinta: split + campos de subrayado */
                .contact-grid {
                    display: grid;
                    grid-template-columns: 0.85fr 1.15fr;
                    gap: 4rem;
                    align-items: center;
                }
                @media (max-width: 900px) {
                    .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; }
                }
                .contact-datos {
                    display: flex;
                    flex-direction: column;
                    gap: 0.7rem;
                    margin-top: 2.2rem;
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                    padding-top: 1.6rem;
                }
                .contact-datos a {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.85rem;
                    font-weight: 600;
                    letter-spacing: 0.05em;
                    color: #f6c39c;
                    width: fit-content;
                }
                .contact-datos a:hover { color: #faf6ef; }
                .contact-despues {
                    display: flex;
                    flex-direction: column;
                    gap: 0.9rem;
                    margin-top: 2.2rem;
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                    padding-top: 1.6rem;
                }
                .contact-despues-titulo {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.55);
                }
                .contact-paso {
                    display: grid;
                    grid-template-columns: 2rem 1fr;
                    gap: 0.7rem;
                    align-items: baseline;
                }
                .contact-paso-num {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: #f6c39c;
                }
                .contact-paso span:last-child {
                    color: rgba(250, 246, 239, 0.85);
                    font-size: 0.93rem;
                    line-height: 1.55;
                }
                #form-automatizatelo {
                    max-width: none !important;
                    margin: 0 !important;
                    background: rgba(28, 25, 23, 0.45);
                    border: 1px solid rgba(250, 246, 239, 0.12);
                    border-radius: 18px;
                    padding: 2.4rem;
                    backdrop-filter: blur(2px);
                }
                @media (max-width: 600px) {
                    #form-automatizatelo { padding: 1.6rem 1.3rem; }
                }
                #form-automatizatelo label {
                    font-family: var(--font-mono, monospace) !important;
                    font-size: 0.72rem !important;
                    font-weight: 600 !important;
                    letter-spacing: 0.08em !important;
                    text-transform: uppercase !important;
                    color: rgba(250, 246, 239, 0.7) !important;
                }
                #form-automatizatelo input,
                #form-automatizatelo textarea {
                    background: transparent !important;
                    color: #faf6ef !important;
                    border: none !important;
                    border-bottom: 1px solid rgba(250, 246, 239, 0.3) !important;
                    border-radius: 0 !important;
                    padding-left: 0 !important;
                    box-shadow: none !important;
                }
                #form-automatizatelo input:focus,
                #form-automatizatelo textarea:focus {
                    border-bottom-color: #f6c39c !important;
                    outline: none !important;
                }
                #form-automatizatelo input::placeholder,
                #form-automatizatelo textarea::placeholder {
                    color: rgba(250, 246, 239, 0.35);
                }
                /* El selector propio respira igual que los campos de al lado */
                #form-automatizatelo .sfc-boton {
                    padding: 0.81rem 0;
                }
                #form-automatizatelo button[type="button"] {
                    background: transparent !important;
                    color: #faf6ef !important;
                    border: none !important;
                    border-bottom: 1px solid rgba(250, 246, 239, 0.3) !important;
                    border-radius: 0 !important;
                }
                #form-automatizatelo button[type="submit"] {
                    background: #f6c39c !important;
                    background-image: none !important;
                    color: #1c1917 !important;
                    border: none !important;
                    border-radius: 50px !important;
                    width: auto !important;
                    padding: 0.85rem 2.2rem !important;
                    font-weight: 700 !important;
                    box-shadow: none !important;
                }
                #form-automatizatelo button[type="submit"]:hover {
                    background: #faf6ef !important;
                    transform: translateY(-2px);
                }
                #form-automatizatelo .checkbox {
                    color: rgba(250, 246, 239, 0.8) !important;
                }
                #form-automatizatelo .checkbox a {
                    color: #f6c39c !important;
                }
            `}</style>
        </section>
    );
}
