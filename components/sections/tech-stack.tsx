"use client";

import { motion } from "motion/react";
import { useRef } from "react";

const technologies = [
  "React", "Next.js", "Spring Boot", "NestJS", "Docker", "PostgreSQL", "AWS", "Three.js", "WebGL", "Kubernetes", "Redis", "TensorFlow"
];

export function TechStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="tech" ref={containerRef} className="relative py-40 overflow-hidden z-20">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter text-[#525252]"
          >
            Core <span className="text-white">Technologies</span>
          </motion.h2>
          <p className="mt-4 text-gray-400 font-mono text-sm tracking-widest uppercase">System Stack Overview</p>
        </div>

        {/* Orbital Animation Container */}
        <div className="relative h-[600px] w-full flex items-center justify-center">
          
          {/* Center glowing core */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], rotate: 360 }}
            transition={{ scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
            className="absolute w-32 h-32 rounded-full border border-red-600/30 flex items-center justify-center bg-red-600/5 shadow-[0_0_50px_rgba(220,38,38,0.5)] z-20"
          >
            <div className="w-16 h-16 rounded-full bg-red-600 blur-[10px] animate-pulse" />
            <div className="absolute w-full h-[1px] bg-red-600/50" />
            <div className="absolute h-full w-[1px] bg-red-600/50" />
          </motion.div>

          {/* Orbit Rings & Tech Items */}
          {[1, 2, 3].map((ringLevel) => {
            const radius = ringLevel * 140;
            const itemsInRing = ringLevel * 4;
            const duration = 20 + (ringLevel * 10);
            
            return (
              <motion.div
                key={ringLevel}
                className="absolute orbit-ring"
                style={{ width: radius * 2, height: radius * 2 }}
                animate={{ rotate: ringLevel % 2 === 0 ? 360 : -360 }}
                transition={{ duration, repeat: Infinity, ease: "linear" }}
              >
                {/* Dots on ring */}
                {Array.from({ length: 4 }).map((_, i) => (
                   <div key={`dot-${i}`} className="absolute w-1 h-1 bg-red-600 rounded-full" style={{ top: -0.5, left: '50%', transform: `rotate(${i * 90}deg) translateY(${radius}px)` }} />
                ))}

                {/* Tech items */}
                {Array.from({ length: itemsInRing }).map((_, itemIndex) => {
                  const techIndex = (ringLevel * 4 + itemIndex) % technologies.length;
                  const angle = (itemIndex / itemsInRing) * 360;
                  
                  return (
                    <motion.div
                      key={itemIndex}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                      }}
                      animate={{ rotate: ringLevel % 2 === 0 ? -360 : 360 }} // Counter rotate to keep text upright
                      transition={{ duration, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="px-4 py-2 glass-panel text-xs font-mono tracking-widest text-[#A3A3A3] whitespace-nowrap border-white/10 opacity-80 hover:opacity-100 hover:text-white hover:border-red-600/50 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all cursor-crosshair">
                        {technologies[techIndex]}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
