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
  const radius = isMobile ? 180 : 550;

  const currentAngle = useTransform(globalRotation, (r: number) => (angle + (r * Math.PI / 180)));
  
  const x = useTransform(currentAngle, (a: number) => Math.sin(a) * radius);
  const z = useTransform(currentAngle, (a: number) => Math.cos(a) * radius);
  
  const opacity = useTransform(z, [-radius, 0, radius], [0, 0.3, 1]);
  const scale = useTransform(z, [-radius, 0, radius], [0.5, 0.75, 1]);

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
      className="w-[260px] sm:w-[320px] md:w-[440px] h-[340px] sm:h-[400px] md:h-[500px] group"
    >
      <div className="relative w-full h-full bg-[#050505] rounded-[32px] border border-white/5 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.8)]">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.02] pointer-events-none" />

        <div className="absolute inset-0 z-0 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity duration-1000">
            <div className="w-full h-[1px] bg-red-600 absolute top-0 animate-[scan_6s_linear_infinite]" />
        </div>

        <div className="relative z-10 w-full h-full p-8 sm:p-10 md:p-12 flex flex-col justify-between" style={{ transform: 'translateZ(50px)' }}>
            <div className="flex justify-between items-start">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center transition-all duration-700 group-hover:border-red-600/30 group-hover:bg-red-600/5">
                    <service.icon className={`w-7 h-7 text-white transition-colors duration-500`} />
                </div>
                
                <div className="text-right font-display font-black text-[9px] text-white/20 uppercase tracking-[0.3em]">
                    <div className="flex items-center gap-2 justify-end">
                        <span className="w-1 h-1 rounded-full bg-red-600 animate-pulse" />
                        SYS.ACTIVE
                    </div>
                    <div className="mt-1">0{index + 1} {"//"} {service.tag}</div>
                </div>
            </div>

            <div className="mt-auto">
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tighter mb-4 transition-colors duration-700 group-hover:text-red-600">
                    {service.title}
                </h3>
                <p className="text-zinc-500 text-[10px] md:text-xs leading-relaxed uppercase tracking-[0.2em] font-medium max-w-[280px]">
                    {service.description}
                </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                <div className="flex gap-1.5">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="w-5 h-0.5 bg-white/5 rounded-full group-hover:bg-red-600/30 transition-all duration-500" />
                    ))}
                </div>
                <span className="text-[9px] font-display font-black text-white/10 group-hover:text-red-600/50 transition-all uppercase tracking-[0.4em]">
                    KRAKEN // CORE
                </span>
            </div>
        </div>

        <div className="absolute top-6 left-6 w-3 h-3 border-t border-l border-white/5 transition-colors duration-700 group-hover:border-red-600/30" />
        <div className="absolute top-6 right-6 w-3 h-3 border-t border-r border-white/5 transition-colors duration-700 group-hover:border-red-600/30" />
        <div className="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-white/5 transition-colors duration-700 group-hover:border-red-600/30" />
        <div className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-white/5 transition-colors duration-700 group-hover:border-red-600/30" />
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
    { stiffness: 40, damping: 30, restDelta: 0.001 }
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="services" ref={containerRef} className="relative h-[600vh]">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        <div className="relative z-20 text-center mb-12 md:mb-24 px-6">
          <motion.div
            style={{
                opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
            }}
          >
            <span className="uppercase tracking-[0.8em] text-[10px] font-display font-black text-red-600 block mb-6">
                Expertise
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-9xl font-display font-black text-white uppercase tracking-tighter leading-none">
              What We Build
            </h2>
          </motion.div>
        </div>

        <div className="relative w-full h-[460px] sm:h-[650px] flex items-center justify-center perspective-[2500px]">
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

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-white/5 overflow-hidden">
            <motion.div 
                className="h-full bg-red-600"
                style={{ width: useTransform(scrollYProgress, (s) => `${s * 100}%`) }}
            />
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          20%, 80% { opacity: 0.2; }
          100% { transform: translateY(600px); opacity: 0; }
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}
