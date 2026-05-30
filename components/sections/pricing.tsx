"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for single campaigns or landing pages.",
    price: {
      USD: "150",
      LKR: "45,000"
    },
    features: [
      "Single Page (Landing Page)",
      "Custom Premium Design",
      "Mobile Responsive",
      "Contact Form Integration",
      "Basic SEO Setup"
    ],
    accent: "from-zinc-500 to-zinc-800",
    popular: false
  },
  {
    name: "Business",
    description: "Ideal for startups and growing businesses.",
    price: {
      USD: "350",
      LKR: "105,000"
    },
    features: [
      "1-5 Pages Website",
      "Advanced Animations",
      "CMS Integration",
      "Advanced SEO Optimization",
      "Performance Optimization",
      "1 Month Free Support"
    ],
    accent: "from-red-500 to-red-900",
    popular: true
  },
  {
    name: "Enterprise",
    description: "Complex platforms and full-stack web applications.",
    price: {
      USD: "Custom",
      LKR: "Custom"
    },
    features: [
      "Unlimited Pages",
      "Custom Backend / API",
      "Database Architecture",
      "AI Integration (Optional)",
      "Scalable Infrastructure",
      "Priority 24/7 Support"
    ],
    accent: "from-cyan-500 to-cyan-900",
    popular: false
  }
];

export function PricingSection() {
  const [currency, setCurrency] = useState<"USD" | "LKR">("USD");

  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -left-40 top-40 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -right-40 bottom-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="uppercase tracking-[0.4em] text-[10px] font-black text-red-600 block mb-4 opacity-80">
              Transparent Pricing
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter mb-6">
              Invest In <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Quality</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-mono uppercase tracking-widest max-w-xl mx-auto">
              No hidden fees. Just premium engineering and design that elevates your digital presence.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 inline-flex items-center p-1 bg-white/5 border border-white/10 rounded-full"
          >
            <button
              onClick={() => setCurrency("USD")}
              className={`px-6 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest transition-all ${
                currency === "USD" 
                  ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency("LKR")}
              className={`px-6 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest transition-all ${
                currency === "LKR" 
                  ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              LKR (Rs)
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`relative group ${plan.popular ? 'md:-mt-8 md:mb-8' : ''}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${plan.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-[30px] blur-xl`} />
              
              <div className={`relative h-full bg-black/50 backdrop-blur-md rounded-[30px] border ${plan.popular ? 'border-red-500/30' : 'border-white/10'} p-8 sm:p-10 flex flex-col transition-all duration-500 hover:border-white/30 group-hover:transform group-hover:-translate-y-2`}>
                
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-600 text-white text-[10px] font-black font-mono uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight mb-2">
                  {plan.name}
                </h3>
                <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-8 min-h-[40px]">
                  {plan.description}
                </p>

                <div className="mb-8">
                  <div className="flex items-end gap-2">
                    {plan.price[currency] !== "Custom" && (
                      <span className="text-xl text-white/50 font-mono mb-1">
                        {currency === "USD" ? "$" : "Rs."}
                      </span>
                    )}
                    <span className="text-5xl font-display font-black text-white tracking-tighter">
                      {plan.price[currency]}
                    </span>
                  </div>
                </div>

                <div className="flex-grow space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`mt-0.5 p-1 rounded-full ${plan.popular ? 'bg-red-500/20 text-red-500' : 'bg-white/5 text-white/70'}`}>
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-zinc-300 font-mono">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    else window.location.href = "#contact";
                  }}
                  className={`w-full group/btn relative overflow-hidden rounded-full py-4 px-6 font-mono text-xs font-bold uppercase tracking-widest transition-all ${
                  plan.popular 
                    ? 'bg-red-600 text-white hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]' 
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                }`}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
