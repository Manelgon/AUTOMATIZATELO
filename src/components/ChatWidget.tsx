"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome",
            text: "¡Hola! 👋 Soy el asistente virtual de Automatizatelo. ¿En qué puedo ayudarte hoy?",
            sender: "bot",
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [metadata, setMetadata] = useState<any>({});

    // Fetch metadata on mount
    useEffect(() => {
        const fetchMetadata = async () => {
            try {
                const ipResponse = await fetch("https://ipapi.co/json/");
                const ipData = await ipResponse.json();
                setMetadata({
                    ip: ipData.ip,
                    city: ipData.city,
                    region: ipData.region,
                    country: ipData.country_name,
                    userAgent: navigator.userAgent,
                    screenSize: `${window.screen.width}x${window.screen.height}`,
                    language: navigator.language
                });
            } catch (e) {
                console.warn("Failed to load user metadata");
            }
        };
        fetchMetadata();
    }, []);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping, isOpen]);

    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        try {
            const payload = {
                message: userMsg.text,
                history: messages.map(m => ({ role: m.sender === 'user' ? 'user' : 'assistant', content: m.text })),
                metadata: metadata
            };

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error("Failed to send");

            const data = await response.json();

            // Handle response. Expecting { output: string | string[] } or similar
            // Adjust parsing logic based on actual webhook return structure
            // For this implementation, let's assume `data.output` is the text response
            // It might be a string or an array of strings for sequential messages

            const botResponses: string[] = Array.isArray(data.output)
                ? data.output
                : [data.output || "Lo siento, ha ocurrido un error. Inténtalo de nuevo."];

            setIsTyping(false);

            // Sequential message rendering
            for (const text of botResponses) {
                await new Promise(resolve => setTimeout(resolve, 600)); // Delay between messages
                setMessages((prev) => [
                    ...prev,
                    {
                        id: Date.now().toString() + Math.random(),
                        text: text,
                        sender: "bot",
                        timestamp: new Date(),
                    },
                ]);
            }

        } catch (error) {
            console.error(error);
            setIsTyping(false);
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now().toString(),
                    text: "Lo siento, tuve un problema conexión. Por favor intenta más tarde.",
                    sender: "bot",
                    timestamp: new Date(),
                },
            ]);
        }
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="chat-window"
                    >
                        <div className="chat-header">
                            <div className="chat-header-info">
                                <div className="avatar-bot">
                                    <i className="fa-solid fa-robot"></i>
                                </div>
                                <div>
                                    <h4>Asistente Automatizatelo</h4>
                                    <span>En línea</span>
                                </div>
                            </div>
                            <button className="chat-close" onClick={() => setIsOpen(false)}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <div className="chat-body">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                            {isTyping && (
                                <div className="chat-message bot typing">
                                    <span></span><span></span><span></span>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <form className="chat-footer" onSubmit={handleSendMessage}>
                            <input
                                type="text"
                                placeholder="Escribe tu mensaje..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button type="submit" disabled={!inputValue.trim()}>
                                <i className="fa-solid fa-paper-plane"></i>
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                className="chat-launcher"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {isOpen ? (
                    <i className="fa-solid fa-chevron-down"></i>
                ) : (
                    <i className="fa-solid fa-comment-dots"></i>
                )}
            </motion.button>
        </>
    );
}
