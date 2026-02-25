import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronDown, Rocket, Shield, Cpu, MessageSquare, Zap } from 'lucide-react';

const ReelSection = ({ children, backgroundImage, title, subtitle, icon: Icon, index }) => {
    return (
        <section className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden snap-start">
            {/* Background Image with Parallax & Dark Overlay */}
            <motion.div
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={backgroundImage}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 px-6 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mb-6 flex justify-center"
                >
                    <div className="p-4 rounded-full bg-cyan-500/20 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                        <Icon size={40} className="text-cyan-400" />
                    </div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 uppercase tracking-tighter"
                >
                    {title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="text-xl md:text-2xl text-cyan-200/80 font-light tracking-wide max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            {index < 3 && (
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 text-cyan-500 opacity-50 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] font-mono tracking-widest uppercase">Next Protocol</span>
                    <ChevronDown size={20} />
                </motion.div>
            )}
        </section>
    );
};

const PromotionalReel = ({ onClose }) => {
    const scrollRef = useRef(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black overflow-y-auto snap-y snap-mandatory scroll-smooth"
            ref={scrollRef}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="fixed top-8 right-8 z-[110] p-4 rounded-full bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all group backdrop-blur-xl"
            >
                <X size={24} className="group-hover:rotate-90 transition-transform" />
            </button>

            {/* Intro Screen */}
            <section className="h-screen w-full relative flex flex-col items-center justify-center snap-start overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black"></div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative z-10 text-center"
                >
                    <div className="mb-8 flex justify-center">
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="w-32 h-32 rounded-full border-2 border-cyan-500/50 flex items-center justify-center relative"
                        >
                            <div className="w-24 h-24 rounded-full border-4 border-cyan-400/30 animate-spin-slow"></div>
                            <Zap size={48} className="text-cyan-400 absolute" />
                        </motion.div>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-black font-mono text-cyan-500 tracking-[0.3em] mb-4">
                        JARVIS
                    </h1>
                    <p className="text-cyan-400/60 font-mono tracking-widest uppercase text-sm">
                        System Version 2.4 // Visual Protocol Active
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="mt-12"
                    >
                        <button
                            onClick={() => scrollRef.current.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                            className="px-8 py-3 rounded-full border border-cyan-500 text-cyan-500 font-mono hover:bg-cyan-500 hover:text-black transition-all flex items-center gap-3 mx-auto group"
                        >
                            <Play size={18} className="fill-current" />
                            VIEW REEL
                        </button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Feature 1: Architect Protocol */}
            <ReelSection
                index={1}
                title="ARCHITECT PROTOCOL"
                subtitle="Not just a chatbot. A senior partner who understands structural integrity and clean architecture."
                backgroundImage="/promo/architect.png"
                icon={Shield}
            />

            {/* Feature 2: High Performance Core */}
            <ReelSection
                index={2}
                title="ARK CORE UI"
                subtitle="Interactive futuristic interface driven by custom CSS physics. The suit and the system are one."
                backgroundImage="/promo/reactor.png"
                icon={Cpu}
            />

            {/* Feature 3: Cognitive Memory */}
            <ReelSection
                index={3}
                title="COGNITIVE SOUL"
                subtitle="JARVIS remembers your project context, preferences, and technical debt across every session."
                backgroundImage="/promo/memory.png"
                icon={MessageSquare}
            />

            {/* Final CTA */}
            <section className="h-screen w-full relative flex flex-col items-center justify-center snap-start bg-black overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mb-8"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-6 font-mono">READY TO UPGRADE?</h2>
                        <p className="text-cyan-600 max-w-xl mx-auto mb-10 text-lg">
                            Experience the future of software development with JARVIS.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <button className="px-10 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                                GET EARLY ACCESS
                            </button>
                            <button
                                onClick={onClose}
                                className="px-10 py-4 border border-cyan-500/50 text-cyan-400 font-bold rounded-xl hover:bg-cyan-900/30 transition-all"
                            >
                                BACK TO TERMINAL
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

        </motion.div>
    );
};

export default PromotionalReel;
