"use client";

import { motion } from "motion/react";
import React, { useState, useRef } from "react";
import { Server, Brain, Globe, Smartphone, Cloud, PenTool } from "lucide-react";

const services = [
  {
    title: "Enterprise Software",
    category: "01 / Architecture",
    description: "Highly scalable, distributed architectures designed for mission-critical operations with absolute reliability.",
    icon: Server,
  },
  {
    title: "AI Solutions",
    category: "02 / Intelligence",
    description: "Deep learning models and autonomous decision engines tailored for advanced behavioral analytics.",
    icon: Brain,
  },
  {
    title: "Web Applications",
    category: "03 / Digital Presence",
    description: "High-performance, cinematic front-ends engineered for extreme speed and conversion.",
    icon: Globe,
  },
  {
    title: "Mobile Platforms",
    category: "04 / Ubiquity",
    description: "Native and cross-platform mobile experiences leveraging edge computing for zero latency.",
    icon: Smartphone,
  },
  {
    title: "Cloud Infrastructure",
    category: "05 / Scaling",
    description: "Global cloud deployment strategies with automated threat mitigation and packet inspection.",
    icon: Cloud,
  },
  {
    title: "UI/UX Engineering",
    category: "06 / Experience",
    description: "Military-precision interfaces combining WebGL logic with intuitive, aggressive design patterns.",
    icon: PenTool,
  }
];

function TiltCard({ children, delay }: { children: React.ReactNode, delay: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState({});

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        setStyle({
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
            transition: 'transform 0.1s ease-out'
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
            transition: 'transform 0.5s ease-in-out'
        });
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={style}
            className="glass-panel p-8 relative group overflow-hidden cursor-pointer"
        >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/5 transition-colors duration-500 z-0 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
            
            <div className="relative z-10 w-full h-full flex flex-col">
                {children}
            </div>
            
            {/* Border glow */}
            <div className="absolute inset-0 border border-white/5 group-hover:border-red-500/50 transition-colors duration-500 z-20 pointer-events-none"></div>
        </motion.div>
    );
}

export function ServicesSection() {
  return (
    <section id="services" className="relative py-32 z-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="mb-16">
            <h2 className="text-sm font-mono text-[var(--color-red)] tracking-[0.3em] uppercase mb-4">Core Competencies</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter">
              Engineering Protocols
            </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <TiltCard key={index} delay={index * 0.1}>
              <div className="flex justify-between items-start mb-12">
                 <div className="text-[10px] text-red-500 font-bold uppercase tracking-tighter w-1/2">
                    {service.category}
                 </div>
                 <service.icon className="w-6 h-6 text-gray-500 group-hover:text-red-500 transition-colors duration-300" />
              </div>
              
              <div className="mt-auto">
                 <div className="text-xl font-display font-black uppercase mb-3 text-white group-hover:text-red-400 text-glow transition-colors duration-300">
                    {service.title}
                 </div>
                 <div className="text-xs text-gray-400 leading-relaxed uppercase tracking-widest font-mono">
                    {service.description}
                 </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
