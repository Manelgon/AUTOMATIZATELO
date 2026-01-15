document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Tab Functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active to clicked
            btn.classList.add('active');

            // Show corresponding content
            const target = btn.getAttribute('data-tab');
            document.getElementById(target).classList.add('active');
        });
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: "0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // KPI Counter Animation
    const statsSection = document.getElementById('stats-counter');
    const statNumbers = document.querySelectorAll('.stat-item h3');
    let startedCounts = false;

    if (statsSection && statNumbers.length > 0) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !startedCounts) {
                startedCounts = true;
                statNumbers.forEach(num => {
                    startCounter(num);
                });
            }
        }, { threshold: 0.5 }); // Trigger when 50% visible

        statsObserver.observe(statsSection);
    }

    function startCounter(el) {
        const target = parseInt(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const duration = 2000; // 2 seconds
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = target / steps;

        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                el.innerText = prefix + target + suffix;
                clearInterval(timer);
            } else {
                el.innerText = prefix + Math.floor(current) + suffix;
            }
        }, stepTime);
    }

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');

            // If clicking logo (href="#"), scroll to top
            if (href === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }

            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Contact Form Logic
    const contactForm = document.getElementById('form-automatizatelo');
    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const boton = document.getElementById('btn-enviar');
            const estado = document.getElementById('estado-envio');

            if (boton.disabled) return; // Prevent double submit

            boton.disabled = true;
            boton.innerText = "Enviando...";
            boton.classList.add('bloqueado');
            estado.innerText = "Procesando información y enviando solicitud...";

            // Form Data
            const formData = Object.fromEntries(new FormData(this).entries());

            // Get IP + GEO + Browser Info
            let ipInfo = null;
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

            // Send to Webhook
            try {
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    estado.innerText = "¡Enviado con éxito! Te contactaremos muy pronto.";
                    estado.style.color = "green";
                    this.reset();
                } else {
                    throw new Error("Webhook returned error");
                }
            } catch (error) {
                console.error(error);
                estado.innerText = "Error enviando la solicitud. Por favor, contáctanos por email.";
                estado.style.color = "red";
            }

            // Anti-spam Block (30s)
            setTimeout(() => {
                boton.disabled = false;
                boton.innerText = "Enviar Solicitud";
                boton.classList.remove('bloqueado');
                estado.innerText = "";
            }, 30000);
        });
    }
});
