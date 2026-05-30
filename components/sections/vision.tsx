"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import EvilEye from "@/components/ui/evil-eye/EvilEye";

export function VisionSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="vision" className="relative min-h-screen bg-black overflow-hidden z-20 flex items-center">
      {/* 3D Background */}
        <div className="absolute inset-0 z-0">
        <EvilEye 
          eyeColor="#120202ff"
          intensity={1.0}
          glowIntensity={0.3}
          scale={0.45}
          pupilFollow={1}
          flameSpeed={0.2}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          style={{ y, opacity }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-red-600 text-[10px] font-display font-black uppercase tracking-[0.4em] mb-4">Vision v1.0</span>
            <div className="h-[1px] w-12 bg-red-600/30"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase leading-[1] tracking-tighter mb-8">
                Built from <br />
                <span className="premium-gradient-text">
                  two separate paths
                </span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed uppercase tracking-widest font-medium border-l border-red-600/30 pl-8">
                To turn a friendship that began in Grade 1 into a software company that builds systems, platforms, and immersive experiences for the future.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="glass-panel p-8 bg-white/5 border-white/5 backdrop-blur-xl">
                <div className="text-red-600 font-display font-black text-[10px] mb-3 uppercase tracking-widest">01. Trust</div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Built over years of friendship, not just business logic.</p>
              </div>
              <div className="glass-panel p-8 bg-white/5 border-white/5 backdrop-blur-xl">
                <div className="text-red-600 font-display font-black text-[10px] mb-3 uppercase tracking-widest">02. Direction</div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Different skills, one unified vision for the digital landscape.</p>
              </div>
            </div>
          </div>

          {/* Bottom HUD - Refined */}
          <div className="mt-24 flex flex-wrap justify-center gap-12 items-center text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
              <span>Core Status: Unified</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
              <span>Foundation: Grade 1</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
              <span>Mission: Impact</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
