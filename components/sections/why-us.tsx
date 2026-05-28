"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
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
    title: "Future-Proof Vision",
    description:
      "We build with the next decade in mind. Leveraging AI-native workflows and emergent frameworks to ensure your stack never goes obsolete.",
    stat: "100%",
    statLabel: "Future Focused",
    tag: "NEURAL",
  },
  {
    icon: Cpu,
    title: "High-Frequency Engine",
    description:
      "Built on battle-tested architectures that handle massive throughput without breaking a sweat. Performance is not a feature; it's our foundation.",
    stat: "3.20m+",
    statLabel: "Queries Per Second",
    tag: "SYSTEMS",
  },
  {
    icon: Rocket,
    title: "Ultra-Low Latency",
    description:
      "Every millisecond matters. We optimize at the hardware and protocol level to deliver experiences that feel instantaneous.",
    stat: "0.01ms",
    statLabel: "System Latency",
    tag: "VELOCITY",
  },
  {
    icon: Shield,
    title: "Quantum Security",
    description:
      "Next-generation protection for a post-quantum world. Your data is armored with the most advanced encryption standards available.",
    stat: "256bit",
    statLabel: "Quantum Encryption",
    tag: "DEFENSE",
  },
  {
    icon: Users,
    title: "Dedicated Partnership",
    description:
      "Beyond code, we provide a strategic alliance. Round-the-clock monitoring and instant communication keep your mission critical.",
    stat: "24/7",
    statLabel: "Technical Support",
    tag: "ALLIANCE",
  },
  {
    icon: Eye,
    title: "Agile Momentum",
    description:
      "Transparency through constant iteration. See your vision come to life in real-time with regular progress showcases and feedback loops.",
    stat: "Weekly",
    statLabel: "Live Demos",
    tag: "DESIGN",
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
      <div className="relative h-full bg-black/60 backdrop-blur-xl rounded-2xl border border-white/[0.06] overflow-hidden transition-all duration-700 hover:border-red-500/30 hover:shadow-[0_0_60px_rgba(220,38,38,0.08)]">
        {/* Corner Brackets */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/[0.08] group-hover:border-red-500/40 transition-colors duration-500" />
        <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/[0.08] group-hover:border-red-500/40 transition-colors duration-500" />
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/[0.08] group-hover:border-red-500/40 transition-colors duration-500" />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/[0.08] group-hover:border-red-500/40 transition-colors duration-500" />

        {/* Scan Line */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-700">
          <div className="w-full h-[1px] bg-red-500 absolute top-0 animate-[scan_3s_linear_infinite]" />
        </div>

        {/* Hover Glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-600/0 group-hover:bg-red-600/10 rounded-full blur-[60px] transition-all duration-700 pointer-events-none" />

        <div className="relative z-10 p-8 md:p-10 flex flex-col h-full min-h-[340px]">
          {/* Top Row */}
          <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-red-500/30 group-hover:bg-red-500/[0.06] transition-all duration-500">
              <reason.icon className="w-6 h-6 text-gray-400 group-hover:text-red-500 transition-colors duration-500" />
            </div>
            <div className="text-right font-mono">
              <div className="text-[9px] text-white/15 uppercase tracking-[0.2em] flex items-center gap-1.5 justify-end">
                <span className="w-1 h-1 rounded-full bg-red-500/50 group-hover:bg-red-500 group-hover:animate-pulse transition-all duration-500" />
                {reason.tag}
              </div>
               <div className="text-[9px] text-white/10 mt-0.5">
                 0{index + 1}
               </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-tight mb-3 group-hover:text-red-500 transition-colors duration-500">
              {reason.title}
            </h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-mono uppercase tracking-wider">
              {reason.description}
            </p>
          </div>

          {/* Bottom Stat */}
          <div className="mt-8 pt-6 border-t border-white/[0.05] flex items-end justify-between">
            <div>
              <div className="text-3xl md:text-4xl font-display font-black text-white tracking-tighter group-hover:text-red-500 transition-colors duration-700">
                {reason.stat}
              </div>
              <div className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.2em] mt-1">
                {reason.statLabel}
              </div>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-3 h-[3px] bg-white/[0.06] rounded-full group-hover:bg-red-500/30 transition-colors duration-500"
                  style={{ transitionDelay: `${i * 50}ms` }}
                />
              ))}
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

  /* Framer Motion scroll values for the heading parallax */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Heading parallax: title moves up slower, subtitle moves up faster
  const headingY = useTransform(scrollYProgress, [0, 1], [120, -80]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [60, -40]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.15, 0.6, 0.85], [0, 1, 1, 0]);

  // Smooth spring for heading
  const smoothHeadingY = useSpring(headingY, { stiffness: 80, damping: 30 });
  const smoothSubtitleY = useSpring(subtitleY, { stiffness: 80, damping: 30 });

  // Divider line width scrubbed to scroll
  const dividerScale = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]);
  const smoothDivider = useSpring(dividerScale, { stiffness: 100, damping: 30 });

  // CTA parallax
  const ctaY = useTransform(scrollYProgress, [0.6, 0.9], [80, 0]);
  const ctaOpacity = useTransform(scrollYProgress, [0.6, 0.78], [0, 1]);
  const smoothCtaY = useSpring(ctaY, { stiffness: 80, damping: 25 });

  useEffect(() => {
    setMounted(true);
  }, []);

  /* GSAP: Differential column parallax + staggered entrance */
  useEffect(() => {
    if (!mounted || !cardsContainerRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".why-card");

      // 1) Staggered entrance with 3D rotation
      gsap.from(cards, {
        opacity: 0,
        y: 100,
        rotateX: 15,
        scale: 0.92,
        stagger: 0.12,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 85%",
        },
      });

      // 2) Differential column parallax — each column drifts at a different speed
      cards.forEach((card) => {
        const col = parseInt(card.getAttribute("data-col") || "0");
        // Column 0 (left): moves up slow, Column 1 (center): stays, Column 2 (right): moves up fast
        const yOffset = (col - 1) * 60; // -60, 0, +60

        gsap.to(card, {
          y: yOffset,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      // 3) Floating decorative elements parallax
      gsap.utils.toArray<HTMLElement>(".why-float").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -180 : -280,
          rotate: i % 2 === 0 ? 45 : -30,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative py-32 md:py-44 z-20 overflow-hidden bg-black"
      style={{ perspective: "1200px" }}
    >

      {/* ─── Floating Parallax Decorations ─── */}
      <div className="why-float absolute top-[10%] left-[5%] w-24 h-24 border border-red-500/[0.06] rounded-full pointer-events-none" />
      <div className="why-float absolute top-[20%] right-[8%] w-16 h-16 border border-white/[0.04] rotate-45 pointer-events-none" />
      <div className="why-float absolute bottom-[25%] left-[12%] w-20 h-20 border border-red-500/[0.04] rounded-full pointer-events-none" />
      <div className="why-float absolute bottom-[15%] right-[15%] w-12 h-12 border border-white/[0.03] rotate-12 pointer-events-none" />
      <div className="why-float absolute top-[50%] left-[50%] w-32 h-[1px] bg-gradient-to-r from-transparent via-red-500/10 to-transparent pointer-events-none" />
      <div className="why-float absolute top-[35%] right-[3%] w-2 h-2 bg-red-500/20 rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* ─── Parallax Section Header ─── */}
        <div ref={headingRef} className="mb-20 md:mb-28">
          <motion.div
            style={{ y: smoothHeadingY, opacity: headingOpacity }}
            className="flex items-center space-x-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-red-600" />
            <span className="text-red-500 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
              Strategic Advantage
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <motion.h2
              style={{ y: smoothHeadingY, opacity: headingOpacity }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white uppercase leading-[0.85] tracking-tighter"
            >
              Why Choose{" "}
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-800">
                KRAKEN
              </span>
            </motion.h2>

            <motion.p
              style={{ y: smoothSubtitleY, opacity: headingOpacity }}
              className="max-w-md text-gray-500 text-xs font-mono uppercase tracking-wider leading-relaxed lg:text-right"
            >
              We don&apos;t just write code — we engineer digital experiences
              that give your business an unfair advantage in the market.
            </motion.p>
          </div>

          {/* Scroll-scrubbed divider */}
          <motion.div
            style={{ scaleX: smoothDivider }}
            className="mt-12 h-[1px] bg-gradient-to-r from-red-500/40 via-white/[0.06] to-transparent origin-left"
          />
        </div>

        {/* ─── Cards Grid with GSAP Parallax ─── */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          style={{ transformStyle: "preserve-3d" }}
        >
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} index={i} />
          ))}
        </div>

        {/* ─── Parallax CTA ─── */}
        <motion.div
          style={{ y: smoothCtaY, opacity: ctaOpacity }}
          className="mt-20 md:mt-28 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.3em]">
              Ready to experience the difference?
            </p>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-transparent border border-red-600/30 text-red-500 text-xs font-bold uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white hover:shadow-[0_0_40px_rgba(220,38,38,0.4)] transition-all duration-500"
            >
              <span>Start Your Project</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500/50" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500/50" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-500/50" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500/50" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scan animation keyframes */}
      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          20%, 80% { opacity: 0.3; }
          100% { transform: translateY(400px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
