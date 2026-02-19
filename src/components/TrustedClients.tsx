"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TrustedClients.module.css';

const clients = [
    {
        name: 'Serincosol',
        logo: '/clients/serincosol.png',
        url: 'https://serincosol.com/',
        scale: 1
    },
    {
        name: 'Afcademia',
        logo: '/clients/afcademia.png',
        url: 'https://afcademia.com/',
        scale: 1.5
    }
];

export default function TrustedClients() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="trusted-clients" className={styles.section}>
            <div className={styles.container}>
                {/* Left Column: Carousel (Logos) */}
                <div className={styles.carouselWrapper}>
                    <div className={styles.carouselContainer}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.6 }}
                                className={styles.clientSlide}
                            >
                                <a
                                    href={clients[currentIndex].url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.clientLink}
                                >
                                    <div className={styles.logoWrapper}>
                                        <Image
                                            src={clients[currentIndex].logo}
                                            alt={`${clients[currentIndex].name} logo`}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            style={{
                                                objectFit: 'contain',
                                                transform: `scale(${clients[currentIndex].scale})`
                                            }}
                                        />
                                    </div>
                                </a>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right Column: Text (Title & Subtitle) */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={styles.content}
                >
                    <div className={styles.accentLine}></div>
                    <h2 className="section-title" style={{ textAlign: 'right', margin: 0, width: '100%' }}>PROYECTOS DE ÉXITO</h2>
                    <p className="section-subtitle" style={{ textAlign: 'right', marginTop: '1rem', width: '100%', maxWidth: 'none', marginInline: 0 }}>Clientes que han confiado en nosotros</p>
                </motion.div>
            </div>
        </section>
    );
}
