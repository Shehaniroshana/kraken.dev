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

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section ref={containerRef} id="vision" className="relative min-h-[200vh] bg-black overflow-hidden z-20">
      {/* 3D Background */}
        <div className="absolute inset-0 z-0">
        <EvilEye 
          eyeColor="#120202ff"
          intensity={2.0}
          glowIntensity={0.5}
          scale={0.55}
          pupilFollow={1.2}
          flameSpeed={0.4}
        />
      </div>

      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div 
          style={{ opacity, scale }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="max-w-6xl mx-auto">
            {/* Header Overlay */}
            <div className="flex items-center justify-between mb-12 border-b border-red-500/20 pb-4">
              <div className="flex items-center space-x-4">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-mono tracking-[0.3em] text-red-500 uppercase">System Vision v2.0.4</span>
              </div>
              <div className="hidden md:block text-[10px] font-mono text-gray-500">
                COORD: 34.0522° N, 118.2437° W
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8">
                <motion.h2 
                  style={{ y: y1 }}
                  className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white uppercase leading-[0.85] tracking-tighter"
                >
                  Defining the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-800 to-red-600">
                    New Frontier
                  </span>
                </motion.h2>
              </div>
              
              <div className="lg:col-span-4">
                <motion.div 
                  style={{ y: y2 }}
                  className="space-y-8"
                >
                  <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed border-l-2 border-red-600 pl-6">
                    To create visually striking and deeply interactive digital experiences that redefine how users engage with technology.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm">
                      <div className="text-red-500 font-mono text-xs mb-1">01. AUTONOMY</div>
                      <div className="text-[10px] text-gray-500">Self-evolving architectures</div>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm">
                      <div className="text-red-500 font-mono text-xs mb-1">02. SYNERGY</div>
                      <div className="text-[10px] text-gray-500">Neural-linked interfaces</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom HUD */}
            <div className="mt-20 flex flex-wrap gap-8 items-center text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              <div className="flex items-center space-x-2">
                <span>Core Status:</span>
                <span className="text-red-500">Optimal</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>Encryption:</span>
                <span className="text-white">Quantum-Grade</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>Latency:</span>
                <span className="text-white">0.0012ms</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black to-transparent z-1"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent z-1"></div>
    </section>
  );
}
