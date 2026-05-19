"use client";

export default function CookiePreferencesButton() {
    return (
        <button
            onClick={() => {
                if (typeof window !== "undefined" && window.openCookiePreferences) {
                    window.openCookiePreferences();
                }
            }}
            style={{
                background: "var(--color-primary)",
                color: "white",
                border: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: 50,
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "0.95rem",
            }}
        >
            Gestionar mis preferencias de cookies
        </button>
    );
}
