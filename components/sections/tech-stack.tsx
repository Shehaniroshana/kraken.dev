"use client";

import { useRef, Suspense } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { TechCloud } from "@/components/three/tech-cloud";

export function TechStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Parallax transforms for text layers
  const y1 = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);
  const y2 = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.2, 1]);

  return (
    <section 
      id="tech" 
      ref={containerRef} 
      className="relative h-[300vh] bg-black z-20"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* 3D Interactive Layer */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            <Suspense fallback={null}>
              <TechCloud />
            </Suspense>
          </Canvas>
        </div>

        {/* Foreground Content Layers */}
        <motion.div 
          style={{ opacity }}
          className="container mx-auto px-6 relative z-10 w-full"
        >
          <div className="relative h-screen w-full flex flex-col justify-center">
            
            {/* Background Large Text (Parallax Layer 1) */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute inset-0 flex flex-col justify-around pointer-events-none opacity-[0.03]"
            >
              <div className="text-[20vw] font-black text-white leading-none whitespace-nowrap -ml-[20%] uppercase tracking-tighter">INTELLIGENT</div>
              <div className="text-[20vw] font-black text-white leading-none whitespace-nowrap ml-[10%] uppercase tracking-tighter">ECOSYSTEMS</div>
              <div className="text-[20vw] font-black text-white leading-none whitespace-nowrap -ml-[10%] uppercase tracking-tighter">FOUNDATION</div>
            </motion.div>

            {/* Main Content (Parallax Layer 2) */}
            <motion.div 
              style={{ y: y2, scale }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-block px-3 py-1 border border-red-600/30 rounded-full bg-red-600/5 mb-8">
                <span className="text-[10px] font-mono tracking-[0.4em] text-red-500 uppercase">Tech Stack v4.0</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white uppercase tracking-tighter leading-[0.85] mb-12">
                The Power <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-white">
                    Behind the Core
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                Utilizing the most advanced frameworks and neural architectures to build systems that don&apos;t just scale—they transcend.
              </p>
            </motion.div>

          </div>
        </motion.div>

        {/* Floating Interactive Elements */}
        <div className="absolute bottom-12 left-12 z-20 hidden lg:block">
            <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-[1px] bg-red-600 group-hover:w-20 transition-all duration-500" />
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Scroll to deconstruct</span>
            </div>
        </div>

        <div className="absolute top-1/2 right-12 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-8">
            {["SYSTEMS", "NETWORK", "CLOUD", "AI"].map((label, i) => (
                <div key={i} className="flex items-center space-x-4 justify-end">
                    <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">{label}</span>
                    <div className="w-1.5 h-1.5 rounded-full border border-red-600/50" />
                </div>
            ))}
        </div>

      </div>

      {/* Transitional Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent pointer-events-none z-30" />
    </section>
  );
}
