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
    title: "Grade 1 Foundation",
    description:
      "KRAKEN was not invented overnight. It grew out of a friendship that started in Grade 1 and never lost its sense of purpose.",
    stat: "01",
    statLabel: "Shared Beginning",
    tag: "ORIGIN",
  },
  {
    icon: Cpu,
    title: "Different Dreams",
    description:
      "One of us wanted to carve wood with precision and care. The other wanted to build ideas as a businessman and lead something meaningful.",
    stat: "02",
    statLabel: "Childhood Ambitions",
    tag: "PATHS",
  },
  {
    icon: Rocket,
    title: "Separate Paths",
    description:
      "After O/Ls, we went into different industries, learned in different ways, and slowly became the people we were meant to be.",
    stat: "03",
    statLabel: "Years of Growth",
    tag: "JOURNEY",
  },
  {
    icon: Shield,
    title: "Skills That Meet",
    description:
      "Those paths became a software engineer focused on backend systems and immersive digital design, bringing different strengths into one software-first company.",
    stat: "04",
    statLabel: "Core Strengths",
    tag: "MERGE",
  },
  {
    icon: Users,
    title: "KRAKEN Returns",
    description:
      "Years later, those separate paths came back together and became KRAKEN: a company built on creativity, engineering, and innovation.",
    stat: "05",
    statLabel: "A Shared Company",
    tag: "RETURN",
  },
  {
    icon: Eye,
    title: "Built for the Future",
    description:
      "Today we build scalable software systems, modern digital platforms, AI-powered solutions, and immersive user experiences with the same trust that started it all.",
    stat: "06",
    statLabel: "Future Facing",
    tag: "VISION",
  },
];

/* ─── Parallax Card ────────────────────────────────────────── */
function ReasonCard({
  reason,
  index,
}: {
  reason: (typeof reasons)[0];
  index: number;
}) {
  return (
    <div className="why-card group relative" data-col={index % 3}>
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
    </div>
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
              We are two friends who built a software company from the truth of who we became.
            </p>
          </motion.div>
        </div>

        {/* ─── Cards Grid ─── */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} index={i} />
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
