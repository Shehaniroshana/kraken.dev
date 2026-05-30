"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, CreditCard } from "lucide-react";
import SoftAurora from "@/components/ui/soft-aurora/SoftAurora";
import { MagnetButton } from "@/components/ui/magnet-button";

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
    popular: false
  }
];

export function PricingSection() {
  const [currency, setCurrency] = useState<"USD" | "LKR">("USD");

  return (
    <section id="pricing" className="relative py-32 bg-black overflow-hidden border-t border-white/5">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <SoftAurora 
          color1="#450a0a" 
          color2="#000000" 
          brightness={0.8}
          speed={0.4}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`relative flex flex-col`}
            >
              <div className={`flex-1 h-full bg-[#050505] rounded-[32px] border ${plan.popular ? 'border-red-600/30 shadow-[0_20px_80px_rgba(220,38,38,0.1)]' : 'border-white/5'} p-10 md:p-12 flex flex-col transition-all duration-700 hover:border-white/10 group`}>
                
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
                  <div className="flex items-baseline gap-2">
                    {plan.price[currency] !== "Custom" && (
                      <span className="text-xl text-white/20 font-display font-black">
                        {currency === "USD" ? "$" : "Rs."}
                      </span>
                    )}
                    <span className="text-6xl font-display font-black text-white tracking-tighter">
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
          ))}
        </div>
      </div>
    </section>
  );
}
