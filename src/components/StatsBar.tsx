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
        <div className="stats-bar">
            <div className="container stats-grid" id="stats-counter">
                <div className="stat-item">
                    <Counter target={55} suffix="%" />
                    <p>de PYMEs ahorran +10h/semana con nosotros.</p>
                </div>
                <div className="stat-item">
                    <Counter target={40} suffix="%" />
                    <p>de reducción en errores operativos.</p>
                </div>
                <div className="stat-item">
                    <Counter target={30} suffix="%" prefix="+" />
                    <p>de tiempo liberado para generar valor real.</p>
                </div>
            </div>
        </div>
    );
}
