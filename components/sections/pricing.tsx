"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Check, CreditCard } from "lucide-react";
import SoftAurora from "@/components/ui/soft-aurora/SoftAurora";
import { MagnetButton } from "@/components/ui/magnet-button";
import { useIsMobile } from "@/hooks/use-mobile";

const plans = [
  {
    name: "Essential",
    description: "High-impact single page systems for focused objectives.",
    price: {
      USD: "250",
      LKR: "75,000"
    },
    features: [
      "Single Page Architecture",
      "Custom UI/UX Framework",
      "Mobile First Syntax",
      "Standard Performance",
      "Basic SEO Protocol"
    ],
    popular: false,
    speed: 1.1
  },
  {
    name: "Professional",
    description: "Multi-page platforms for established professional entities.",
    price: {
      USD: "650",
      LKR: "195,000"
    },
    features: [
      "1-5 Page Architecture",
      "Advanced Motion Layers",
      "Content Management (CMS)",
      "Technical SEO Protocol",
      "Speed Optimization",
      "1 Month Maintenance"
    ],
    popular: false,
    speed: 1.2
  },
  {
    name: "Business",
    description: "Full-scale digital ecosystems for market dominance.",
    price: {
      USD: "1,250",
      LKR: "375,000"
    },
    features: [
      "Unlimited Architecture",
      "Elite Interaction Design",
      "Custom Backend / APIs",
      "User Authentication",
      "Database Integration",
      "Priority Support Core"
    ],
    popular: true,
    speed: 1.4
  },
  {
    name: "Custom Engine",
    description: "Complex SaaS, AI, and enterprise-grade platforms.",
    price: {
      USD: "Custom",
      LKR: "Custom"
    },
    features: [
      "SaaS Architecture",
      "AI / Neural Integration",
      "Complex Logic Flows",
      "Infrastructure Scaling",
      "Advanced Data Security",
      "Dedicated Dev Ops"
    ],
    popular: false,
    speed: 1.3
  }
];

export function PricingSection() {
  const [currency, setCurrency] = useState<"USD" | "LKR">("USD");
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={sectionRef} id="pricing" className="relative py-32 bg-black overflow-hidden border-t border-white/5">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <SoftAurora 
          color1="#8b0000" 
          color2="#450a0a" 
          brightness={1.0}
          speed={0.3}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-red-600 text-[10px] font-display font-black uppercase tracking-[0.4em] block mb-6">Transparent Pricing</span>
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-display font-black text-white uppercase tracking-tighter leading-none mb-12">
              Invest in <br /> <span className="premium-gradient-text">Quality</span>
            </h2>
            <p className="text-[10px] md:text-xs text-gray-500 font-display font-black uppercase tracking-[0.2em] max-w-xl mx-auto leading-relaxed mb-16">
              No hidden fees. Just premium engineering and design that elevates your digital presence to the next dimension.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center p-1.5 bg-white/5 border border-white/5 rounded-full backdrop-blur-xl"
          >
            <button
              onClick={() => setCurrency("USD")}
              className={`px-8 py-2.5 rounded-full text-[10px] font-display font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                currency === "USD" 
                  ? "bg-white text-black shadow-[0_10px_20px_rgba(0,0,0,0.5)]" 
                  : "text-white/40 hover:text-white"
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency("LKR")}
              className={`px-8 py-2.5 rounded-full text-[10px] font-display font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                currency === "LKR" 
                  ? "bg-white text-black shadow-[0_10px_20px_rgba(0,0,0,0.5)]" 
                  : "text-white/40 hover:text-white"
              }`}
            >
              LKR (Rs)
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
          {plans.map((plan, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -100 * plan.speed]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const springY = useSpring(y, { stiffness: 100, damping: 30 });

            return (
              <motion.div
                key={plan.name}
                style={{ y: isMobile ? 0 : springY }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className={`relative flex flex-col h-full`}
              >
                <div className={`flex-1 flex flex-col h-full bg-[#050505] rounded-[32px] border ${plan.popular ? 'border-red-600/30 shadow-[0_20px_80px_rgba(220,38,38,0.1)]' : 'border-white/5'} p-10 md:p-8 xl:p-10 transition-all duration-700 hover:border-white/10 group`}>
                  
                  {plan.popular && (
                    <div className="mb-8 inline-block w-fit px-4 py-1.5 bg-red-600 text-white text-[9px] font-display font-black uppercase tracking-[0.3em] rounded-full">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-2xl font-display font-black text-white uppercase tracking-tighter mb-4">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 text-[10px] font-display font-black uppercase tracking-[0.2em] mb-12 min-h-[40px] leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mb-12">
                    <div className="flex items-baseline gap-1 sm:gap-2 overflow-hidden">
                      {plan.price[currency] !== "Custom" && (
                        <span className="text-lg sm:text-xl text-white/20 font-display font-black">
                          {currency === "USD" ? "$" : "Rs."}
                        </span>
                      )}
                      <span className="text-4xl sm:text-5xl xl:text-6xl font-display font-black text-white tracking-tighter truncate">
                        {plan.price[currency]}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-5 mb-12 flex-1">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className={`w-1.5 h-1.5 rounded-full ${plan.popular ? 'bg-red-600' : 'bg-white/10'}`}></div>
                        <span className="text-[10px] text-gray-400 font-display font-black uppercase tracking-[0.2em]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <MagnetButton 
                    variant={plan.popular ? "primary" : "glass"}
                    onClick={() => {
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full"
                  >
                    Get Started
                  </MagnetButton>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
