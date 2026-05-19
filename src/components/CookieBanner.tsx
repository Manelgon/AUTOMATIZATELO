"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const STORAGE_KEY = "automatizatelo_consent_v1";
const CONSENT_VALID_DAYS = 180; // AEPD recomienda re-pedir cada 6 meses

type ConsentState = {
    analytics: boolean;
    marketing: boolean;
    functional: boolean;
    timestamp: number;
};

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        dataLayer?: unknown[];
        openCookiePreferences?: () => void;
    }
}

function applyConsentToGtag(state: Omit<ConsentState, "timestamp">) {
    if (typeof window === "undefined" || !window.gtag) return;
    window.gtag("consent", "update", {
        ad_storage: state.marketing ? "granted" : "denied",
        ad_user_data: state.marketing ? "granted" : "denied",
        ad_personalization: state.marketing ? "granted" : "denied",
        analytics_storage: state.analytics ? "granted" : "denied",
        functionality_storage: state.functional ? "granted" : "denied",
        personalization_storage: state.functional ? "granted" : "denied",
    });
}

function isConsentValid(saved: ConsentState | null): boolean {
    if (!saved) return false;
    const ageMs = Date.now() - saved.timestamp;
    return ageMs < CONSENT_VALID_DAYS * 24 * 60 * 60 * 1000;
}

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);
    const [showCustom, setShowCustom] = useState(false);
    const [analytics, setAnalytics] = useState(false);
    const [marketing, setMarketing] = useState(false);
    const [functional, setFunctional] = useState(false);

    // Cargar consentimiento previo y aplicarlo
    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            const saved: ConsentState | null = raw ? JSON.parse(raw) : null;
            if (saved && isConsentValid(saved)) {
                applyConsentToGtag(saved);
                setAnalytics(saved.analytics);
                setMarketing(saved.marketing);
                setFunctional(saved.functional);
                return;
            }
            setVisible(true);
        } catch {
            setVisible(true);
        }
    }, []);

    // Permitir abrir el banner desde la política de cookies
    useEffect(() => {
        window.openCookiePreferences = () => {
            setShowCustom(true);
            setVisible(true);
        };
        return () => {
            delete window.openCookiePreferences;
        };
    }, []);

    const save = useCallback((state: Omit<ConsentState, "timestamp">) => {
        const full: ConsentState = { ...state, timestamp: Date.now() };
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(full));
        } catch {
            // localStorage bloqueado (modo privado): aplicamos solo en memoria
        }
        applyConsentToGtag(state);
        setVisible(false);
        setShowCustom(false);
    }, []);

    const acceptAll = () => save({ analytics: true, marketing: true, functional: true });
    const rejectAll = () => save({ analytics: false, marketing: false, functional: false });
    const saveCustom = () => save({ analytics, marketing, functional });

    if (!visible) return null;

    return (
        <div
            role="dialog"
            aria-label="Banner de consentimiento de cookies"
            aria-modal="false"
            style={{
                position: "fixed",
                bottom: 16,
                left: 16,
                right: 16,
                maxWidth: 580,
                margin: "0 auto",
                background: "#111827",
                color: "#f8fafc",
                borderRadius: 16,
                boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "1.25rem 1.5rem",
                zIndex: 10000,
                fontSize: "0.9rem",
                lineHeight: 1.55,
            }}
        >
            {!showCustom ? (
                <>
                    <p style={{ marginBottom: "1rem" }}>
                        Usamos <strong>cookies propias y de terceros</strong> para analizar el uso del sitio y, con tu consentimiento, mostrar publicidad personalizada. Puedes aceptar, rechazar o configurar cada categoría.{" "}
                        <Link href="/politica-cookies" style={{ color: "#f97316", textDecoration: "underline" }}>
                            Más info
                        </Link>
                        .
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                        <button
                            onClick={acceptAll}
                            style={{
                                background: "#f97316",
                                color: "white",
                                border: "none",
                                padding: "0.6rem 1.1rem",
                                borderRadius: 50,
                                fontWeight: 600,
                                cursor: "pointer",
                                fontSize: "0.88rem",
                                flex: "1 1 auto",
                            }}
                        >
                            Aceptar todas
                        </button>
                        <button
                            onClick={rejectAll}
                            style={{
                                background: "transparent",
                                color: "#f8fafc",
                                border: "1px solid rgba(255,255,255,0.2)",
                                padding: "0.6rem 1.1rem",
                                borderRadius: 50,
                                fontWeight: 600,
                                cursor: "pointer",
                                fontSize: "0.88rem",
                                flex: "1 1 auto",
                            }}
                        >
                            Rechazar todas
                        </button>
                        <button
                            onClick={() => setShowCustom(true)}
                            style={{
                                background: "transparent",
                                color: "rgba(248,250,252,0.7)",
                                border: "none",
                                padding: "0.6rem 1rem",
                                cursor: "pointer",
                                fontSize: "0.85rem",
                                textDecoration: "underline",
                            }}
                        >
                            Personalizar
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                        Configurar cookies
                    </h3>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1rem" }}>
                        <CookieRow
                            label="Necesarias"
                            description="Imprescindibles para el funcionamiento del sitio. No se pueden desactivar."
                            checked
                            disabled
                            onChange={() => { }}
                        />
                        <CookieRow
                            label="Analíticas (Google Analytics)"
                            description="Nos ayudan a entender cómo se usa el sitio para mejorarlo."
                            checked={analytics}
                            onChange={setAnalytics}
                        />
                        <CookieRow
                            label="Marketing (Google Ads)"
                            description="Medir conversiones de campañas y mostrar publicidad personalizada."
                            checked={marketing}
                            onChange={setMarketing}
                        />
                        <CookieRow
                            label="Funcionales"
                            description="Recordar preferencias (idioma, región, etc.)."
                            checked={functional}
                            onChange={setFunctional}
                        />
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                        <button
                            onClick={saveCustom}
                            style={{
                                background: "#f97316",
                                color: "white",
                                border: "none",
                                padding: "0.6rem 1.1rem",
                                borderRadius: 50,
                                fontWeight: 600,
                                cursor: "pointer",
                                fontSize: "0.88rem",
                                flex: "1 1 auto",
                            }}
                        >
                            Guardar selección
                        </button>
                        <button
                            onClick={acceptAll}
                            style={{
                                background: "transparent",
                                color: "#f8fafc",
                                border: "1px solid rgba(255,255,255,0.2)",
                                padding: "0.6rem 1.1rem",
                                borderRadius: 50,
                                fontWeight: 600,
                                cursor: "pointer",
                                fontSize: "0.88rem",
                                flex: "1 1 auto",
                            }}
                        >
                            Aceptar todas
                        </button>
                        <button
                            onClick={rejectAll}
                            style={{
                                background: "transparent",
                                color: "rgba(248,250,252,0.7)",
                                border: "none",
                                padding: "0.6rem 1rem",
                                cursor: "pointer",
                                fontSize: "0.85rem",
                                textDecoration: "underline",
                            }}
                        >
                            Rechazar todas
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

function CookieRow({
    label,
    description,
    checked,
    disabled,
    onChange,
}: {
    label: string;
    description: string;
    checked: boolean;
    disabled?: boolean;
    onChange: (v: boolean) => void;
}) {
    return (
        <label style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", cursor: disabled ? "default" : "pointer" }}>
            <input
                type="checkbox"
                checked={checked}
                disabled={disabled}
                onChange={(e) => onChange(e.target.checked)}
                style={{
                    marginTop: 4,
                    width: 18,
                    height: 18,
                    accentColor: "#f97316",
                    cursor: disabled ? "default" : "pointer",
                    flexShrink: 0,
                }}
            />
            <div>
                <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{label}</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(248,250,252,0.65)" }}>{description}</div>
            </div>
        </label>
    );
}
