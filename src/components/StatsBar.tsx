"use client";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const Counter = ({
    target,
    duration = 2,
    suffix = "",
    prefix = "",
}: {
    target: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
}) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number | null = null;
        let requestFrameId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const progressRatio = Math.min(progress / (duration * 1000), 1);

            setCount(Math.floor(progressRatio * target));

            if (progressRatio < 1) {
                requestFrameId = requestAnimationFrame(animate);
            }
        };

        requestFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(requestFrameId);
    }, [isInView, target, duration]);

    return (
        <h3 ref={ref}>
            {prefix}
            {count}
            {suffix}
        </h3>
    );
};

export default function StatsBar() {
    return (
        <div className="stats-bar" style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
            <div className="container stats-grid" id="stats-counter" style={{ gap: '2rem', padding: 'var(--spacing-xl) var(--spacing-md)' }}>
                <div className="stat-item" style={{ textAlign: 'center' }}>
                    <div style={{ color: 'var(--color-primary)', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                        <Counter target={55} suffix="%" />
                    </div>
                    <p style={{ color: 'var(--color-text-main)', fontWeight: 500 }}>de PYMEs ahorran +10h/semana con nosotros.</p>
                </div>
                <div className="stat-item" style={{ textAlign: 'center' }}>
                    <div style={{ color: 'var(--color-primary)', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                        <Counter target={40} suffix="%" />
                    </div>
                    <p style={{ color: 'var(--color-text-main)', fontWeight: 500 }}>de reducción en errores operativos.</p>
                </div>
                <div className="stat-item" style={{ textAlign: 'center' }}>
                    <div style={{ color: 'var(--color-primary)', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                        <Counter target={30} suffix="%" prefix="+" />
                    </div>
                    <p style={{ color: 'var(--color-text-main)', fontWeight: 500 }}>de tiempo liberado para generar valor real.</p>
                </div>
            </div>
        </div>


    );
}
