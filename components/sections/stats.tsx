"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";

const stats = [
    { value: "100", suffix: "%", label: "Shared Purpose" },
    { value: "3.2", suffix: "m+", label: "Paths Shaped" },
    { value: "0", suffix: ".01ms", label: "Built for Speed" },
    { value: "256", suffix: "bit", label: "Trust First" },
];

function AnimatedCounter({ value, suffix }: { value: string, suffix: string }) {
    const [count, setCount] = useState("0");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const target = parseFloat(value);
            const isFloat = value.includes(".");
            const duration = 2000;
            const startTime = performance.now();

            const updateCounter = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                const ease = 1 - Math.pow(1 - progress, 4);
                
                const currentVal = target * ease;
                
                setCount(isFloat ? currentVal.toFixed(2) : Math.floor(currentVal).toString());

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            };

            requestAnimationFrame(updateCounter);
        }
    }, [isInView, value]);

    return (
        <span ref={ref} className="text-5xl md:text-8xl font-display font-black tracking-tighter text-white">
            {count}
            <span className="text-2xl md:text-4xl text-red-600 font-black ml-1 uppercase">{suffix}</span>
        </span>
    );
}

export function StatsSection() {
  return (
    <section className="relative py-32 bg-black z-20 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {stats.map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="flex flex-col items-center justify-center p-6"
                  >
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                        <span className="mt-6 text-[10px] font-display font-black uppercase tracking-[0.4em] text-gray-500">{stat.label}</span>
                  </motion.div>
              ))}
          </div>
      </div>
    </section>
  );
}
