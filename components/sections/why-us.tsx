"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { MagnetButton } from "@/components/ui/magnet-button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Shield,
  Rocket,
  Eye,
  Cpu,
  Users,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: Zap,
    title: "System Craftsmanship",
    description:
      "We apply the precision of physical craftsmanship to software engineering, building systems with meticulous attention to every line of code.",
    stat: "01",
    statLabel: "Technical Precision",
    tag: "ENGINEERING",
  },
  {
    icon: Cpu,
    title: "Strategic Growth",
    description:
      "Backed by elite marketing expertise, we build platforms that don't just function—they are engineered to dominate their market segment.",
    stat: "02",
    statLabel: "Market Leadership",
    tag: "STRATEGY",
  },
  {
    icon: Rocket,
    title: "Enterprise Scale",
    description:
      "Our architectures are designed for infinite growth, utilizing cloud-native protocols to ensure stability under heavy neural loads.",
    stat: "03",
    statLabel: "Scalable Core",
    tag: "INFRASTRUCTURE",
  },
  {
    icon: Shield,
    title: "Deep Interaction",
    description:
      "We move beyond static interfaces to create immersive, 3D-driven digital experiences that redefine how users engage with technology.",
    stat: "04",
    statLabel: "User Experience",
    tag: "INTERACTION",
  },
  {
    icon: Users,
    title: "AI Integration",
    description:
      "Implementing cutting-edge neural logic and LLM-powered automation to deliver next-generation intelligence to your workflow.",
    stat: "05",
    statLabel: "Intelligence",
    tag: "NEURAL",
  },
  {
    icon: Eye,
    title: "Lifelong Partnership",
    description:
      "Built on a foundation of trust that spans decades, we offer a level of commitment and stability that goes beyond traditional agencies.",
    stat: "06",
    statLabel: "Built on Trust",
    tag: "PARTNERSHIP",
  },
];

/* ─── Parallax Card ────────────────────────────────────────── */
function ReasonCard({
  reason,
  index,
  scrollYProgress,
}: {
  reason: (typeof reasons)[0];
  index: number;
  scrollYProgress: any;
}) {
  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * ((index % 3) + 1)]);
  const springY = useSpring(y, { stiffness: 60, damping: 20 });

  return (
    <motion.div 
      className="why-card group relative" 
      data-col={index % 3}
      style={{ y: springY }}
    >
      <div className="relative h-full bg-[#050505] rounded-[32px] border border-white/5 overflow-hidden transition-all duration-700 hover:border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        
        {/* Hover Glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-600/0 group-hover:bg-red-600/5 rounded-full blur-[60px] transition-all duration-700 pointer-events-none" />

        <div className="relative z-10 p-10 md:p-12 flex flex-col h-full min-h-[380px]">
          {/* Top Row */}
          <div className="flex justify-between items-start mb-10">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-red-600/30 group-hover:bg-red-600/5 transition-all duration-700">
              <reason.icon className="w-6 h-6 text-white group-hover:text-red-500 transition-colors duration-500" />
            </div>
            <div className="text-right">
              <div className="text-[9px] font-display font-black text-white/10 uppercase tracking-[0.4em] flex items-center gap-2 justify-end group-hover:text-red-600/50 transition-colors duration-500">
                <span className="w-1 h-1 rounded-full bg-red-600 animate-pulse" />
                {reason.tag}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tighter mb-4 group-hover:text-red-600 transition-colors duration-500">
              {reason.title}
            </h3>
            <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed font-display font-black uppercase tracking-[0.2em]">
              {reason.description}
            </p>
          </div>

          {/* Bottom Stat */}
          <div className="mt-10 pt-8 border-t border-white/5 flex items-end justify-between">
            <div className="flex gap-1.5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-4 h-0.5 bg-white/5 rounded-full group-hover:bg-red-600/30 transition-all duration-700"
                />
              ))}
            </div>
            <div className="text-[9px] font-display font-black text-white/10 uppercase tracking-[0.4em] group-hover:text-red-600/50 transition-all duration-700">
              {reason.statLabel}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Section ─────────────────────────────────────────── */
export function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [100, -60]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const smoothHeadingY = useSpring(headingY, { stiffness: 60, damping: 30 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !cardsContainerRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".why-card");

      gsap.from(cards, {
        opacity: 0,
        y: 80,
        stagger: 0.1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative py-32 md:py-44 z-20 overflow-hidden bg-black"
    >

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* ─── Section Header ─── */}
        <div ref={headingRef} className="mb-24 text-center">
          <motion.div
            style={{ y: smoothHeadingY, opacity: headingOpacity }}
            className="flex flex-col items-center"
          >
            <span className="text-red-600 text-[10px] font-display font-black uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              Strategic Advantage
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-display font-black text-white uppercase leading-[0.85] tracking-tighter mb-8">
              Why KRAKEN <br/> <span className="premium-gradient-text">Matters</span>
            </h2>
            <p className="max-w-xl text-gray-500 text-[10px] md:text-xs font-display font-black uppercase tracking-[0.2em] leading-relaxed">
              Engineering excellence and strategic insight built on a foundation of absolute trust.
            </p>
          </motion.div>
        </div>

        {/* ─── Cards Grid ─── */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, i) => (
            <ReasonCard 
              key={reason.title} 
              reason={reason} 
              index={i} 
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* ─── CTA ─── */}
        <div className="mt-32 text-center">
            <MagnetButton variant="primary" onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }}>
                Start Your Project
            </MagnetButton>
        </div>
      </div>
    </section>
  );
}
