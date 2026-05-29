"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Server, Brain, Globe, Smartphone, Fingerprint, Code2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
  {
    title: "Software Systems",
    description: "Scalable systems shaped by backend engineering, architecture, and careful product thinking.",
    icon: Server,
    tag: "Engineering",
    accent: "text-red-500"
  },
  {
    title: "AI Solutions",
    description: "AI-powered workflows and automation that help ideas move faster and work smarter.",
    icon: Brain,
    tag: "Intelligence",
    accent: "text-blue-500"
  },
  {
    title: "Digital Platforms",
    description: "Modern web experiences that connect engineering quality with design clarity and growth.",
    icon: Globe,
    tag: "Presence",
    accent: "text-emerald-500"
  },
  {
    title: "Mobile Experiences",
    description: "Seamless mobile journeys that carry the same care, speed, and intent across every screen.",
    icon: Smartphone,
    tag: "Reach",
    accent: "text-purple-500"
  },
  {
    title: "UI/UX Design",
    description: "Human-centered interfaces that make technology feel clear, immersive, and purposeful.",
    icon: Fingerprint,
    tag: "Experience",
    accent: "text-cyan-500"
  },
  {
    title: "Engineering Support",
    description: "Technical implementation and long-term product support from a software-first team.",
    icon: Code2,
    tag: "Support",
    accent: "text-orange-500"
  }
];

function ServiceCard({ service, index, globalRotation, isMobile }: { service: typeof services[0], index: number, globalRotation: any, isMobile: boolean }) {
  const angle = (index / services.length) * Math.PI * 2;
  const radius = isMobile ? 160 : 500;

  const currentAngle = useTransform(globalRotation, (r: number) => (angle + (r * Math.PI / 180)));
  
  const x = useTransform(currentAngle, (a: number) => Math.sin(a) * radius);
  const z = useTransform(currentAngle, (a: number) => Math.cos(a) * radius);
  
  const opacity = useTransform(z, [-radius, 0, radius], [0, 0.4, 1]);
  const scale = useTransform(z, [-radius, 0, radius], [0.4, 0.7, 1]);

  return (
    <motion.div
      style={{
        x,
        z,
        opacity,
        scale,
        position: "absolute",
        transformStyle: "preserve-3d",
        willChange: "transform, opacity",
      }}
      className="w-[240px] sm:w-[280px] md:w-[400px] h-[300px] sm:h-[360px] md:h-[460px] group"
    >
      <div className="relative w-full h-full bg-black rounded-[40px] border border-white/5 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)]">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] via-transparent to-white/[0.03] pointer-events-none" />

        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700">
            <div className="w-full h-[1px] bg-red-500 absolute top-0 animate-[scan_4s_linear_infinite]" />
        </div>

        <div className="relative z-10 w-full h-full p-5 sm:p-7 md:p-10 flex flex-col justify-between" style={{ transform: 'translateZ(60px)' }}>
            <div className="flex justify-between items-start">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:border-red-500/30 group-hover:bg-red-500/5 transition-all duration-700" style={{ transform: 'translateZ(30px)' }}>
                    <service.icon className={`w-8 h-8 text-white group-hover:${service.accent} transition-colors duration-500`} />
                </div>
                
                <div className="text-right font-mono text-[9px] text-white/20 uppercase tracking-[0.2em]" style={{ transform: 'translateZ(20px)' }}>
                    <div className="flex items-center gap-2 justify-end">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        SYS.ACTIVE
                    </div>
                    <div className="mt-1">0{index + 1} {"//"} {service.tag}</div>
                </div>
            </div>

            <div className="mt-auto" style={{ transform: 'translateZ(40px)' }}>
                <h3 className="text-xl sm:text-2xl md:text-4xl font-display font-black text-white uppercase tracking-tighter mb-3 group-hover:text-red-500 transition-colors duration-700">
                    {service.title}
                </h3>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed uppercase tracking-widest font-mono">
                    {service.description}
                </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center" style={{ transform: 'translateZ(20px)' }}>
                <div className="flex gap-1">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="w-4 h-1 bg-white/5 rounded-full group-hover:bg-red-500/30 transition-colors" />
                    ))}
                </div>
                <span className="text-[10px] font-bold text-white/10 group-hover:text-red-500 transition-all uppercase tracking-widest">
                    VAKEN // CORE
                </span>
            </div>
        </div>

        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/5 group-hover:border-red-500 transition-colors" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/5 group-hover:border-red-500 transition-colors" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/5 group-hover:border-red-500 transition-colors" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/5 group-hover:border-red-500 transition-colors" />
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const rotation = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 360]),
    { stiffness: 60, damping: 25, restDelta: 0.001 }
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="services" ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        <div className="relative z-20 text-center mb-16 md:mb-32 px-6">
          <motion.div
            style={{
                scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]),
                opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
            }}
          >
            <span className="uppercase tracking-[0.6em] sm:tracking-[1em] text-[10px] font-black text-red-600 block mb-6 opacity-60">
                Shared Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-9xl font-display font-black text-white uppercase tracking-tighter leading-none">
              What We Build
            </h2>
          </motion.div>
        </div>

        <div className="relative w-full h-[420px] sm:h-[600px] flex items-center justify-center perspective-[2000px]">
          <div className="relative w-full h-full flex items-center justify-center preserve-3d">
            {mounted && services.map((s, i) => (
              <ServiceCard 
                key={s.title} 
                service={s} 
                index={i} 
                globalRotation={rotation}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 w-32 sm:w-48 h-[1px] bg-white/5 overflow-hidden">
            <motion.div 
                className="h-full bg-red-600/50"
                style={{ width: useTransform(scrollYProgress, (s) => `${s * 100}%`) }}
            />
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          20%, 80% { opacity: 0.3; }
          100% { transform: translateY(500px); opacity: 0; }
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}
