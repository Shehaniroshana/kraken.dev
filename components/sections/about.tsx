"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="about" className="relative min-h-screen py-32 z-20 overflow-hidden flex items-center bg-black/80 backdrop-blur-sm">
      <div className="absolute inset-0 kraken-grid opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div style={{ y, opacity }} className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-[1px] w-12 bg-red-600"></div>
            <span className="text-red-500 text-xs font-bold uppercase tracking-[0.3em]">Core Directive</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight uppercase tracking-tighter mix-blend-difference mb-12">
            KRAKEN EXISTS TO ENGINEER <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">IMMERSIVE, SCALABLE, AND FUTURE-DRIVEN</span> SOFTWARE EXPERIENCES.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-panel p-8 border-l-2 border-l-red-600 bg-red-900/10">
              <h3 className="text-sm font-mono text-white mb-4 uppercase tracking-widest">Execute / 01</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We do not build templates. We engineer raw digital power. Our architectures are crafted from the ground up for maximum throughput, absolute security, and zero compromises.
              </p>
            </div>
            <div className="glass-panel p-8 border-l-2 border-l-red-600 bg-red-900/10">
              <h3 className="text-sm font-mono text-white mb-4 uppercase tracking-widest">Design / 02</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every interface is a cinematic experience. We blend WebGL, interactive physics, and hyper-optimized DOM manipulations to create interfaces that leave a lasting impression.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background glowing orb */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
        className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-red-600/10 blur-[100px] pointer-events-none"
      />
    </section>
  );
}
