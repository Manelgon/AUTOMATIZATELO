"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TrustedClients.module.css';

const clients = [
    {
        name: 'Serincosol',
        logo: 'https://serincosol.com/wp-content/uploads/2024/04/logo.png',
        url: 'https://serincosol.com/'
    },
    {
        name: 'Afcademia',
        logo: 'https://afcademia.com/logo.webp',
        url: 'https://afcademia.com/'
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
                {/* Left Column: Carousel */}
                <div className={styles.carouselContainer}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className={styles.clientSlide}
                        >
                            <a
                                href={clients[currentIndex].url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.clientLink}
                            >
                                <div className={styles.logoWrapper}>
                                    {clients[currentIndex].logo.startsWith('http') || clients[currentIndex].logo.startsWith('/') ? (
                                        <Image
                                            src={clients[currentIndex].logo}
                                            alt={`${clients[currentIndex].name} logo`}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            style={{ objectFit: 'contain' }}
                                        />
                                    ) : (
                                        // Placeholder implementation for demo purposes
                                        <div style={{
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: '#e5e7eb',
                                            borderRadius: '8px',
                                            color: '#6b7280',
                                            fontWeight: 'bold'
                                        }}>
                                            {clients[currentIndex].name}
                                        </div>
                                    )}
                                </div>
                            </a>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Column: Text */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={styles.content}
                >
                    <h2 className={styles.title}>PROYECTOS DE ÉXITO</h2>
                    <p className={styles.subtitle}>Clientes que han confiado en nosotros</p>
                </motion.div>
            </div>
        </section>
    );
}
