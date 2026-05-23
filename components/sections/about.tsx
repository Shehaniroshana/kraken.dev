"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import LiquidEther from "@/components/ui/liquid-ether/LiquidEther";

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="about" className="relative min-h-screen py-32 z-20 overflow-hidden flex items-center bg-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={['#450a0a', '#991b1b', '#ef4444', '#000000']}
          mouseForce={25}
          cursorSize={100}
          resolution={0.5}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={4.5}
          className="opacity-90"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div style={{ y, opacity }} className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-[1px] w-12 bg-red-600"></div>
            <span className="text-red-500 text-xs font-bold uppercase tracking-[0.3em]">Core Directive</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight uppercase tracking-tighter mix-blend-difference mb-12">
            KRAKEN REPRESENTS <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">GROWTH, TRUST, AND THE POWER</span> OF SHARED VISION.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-panel p-8 border-l-2 border-l-red-600 bg-black/40 backdrop-blur-xl">
              <h3 className="text-sm font-mono text-white mb-4 uppercase tracking-widest">The Dream / 01</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Founded by two lifelong friends since Grade 1, our journey began with different ambitions—one for wood carving and precision, the other for building ideas as a businessman. After separate paths, these dreams evolved into a shared mastery of technology and strategy.
              </p>
            </div>
            <div className="glass-panel p-8 border-l-2 border-l-red-600 bg-black/40 backdrop-blur-xl">
              <h3 className="text-sm font-mono text-white mb-4 uppercase tracking-widest">The Synergy / 02</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We merge backend engineering and system architecture with strategic digital marketing. KRAKEN represents the belief that different skills and different journeys can come together to build something powerful, immersive, and designed for the future.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
