"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "glass" | "outline";
  children: React.ReactNode;
  className?: string;
}

export function MagnetButton({ variant = "primary", children, className, ...props }: ButtonProps) {
  const baseClasses = "relative inline-flex items-center justify-center overflow-hidden px-8 py-4 font-display font-black uppercase tracking-[0.25em] transition-all duration-500 text-[10px]";
  
  const variants = {
    primary: "bg-white text-black hover:bg-red-600 hover:text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    glass: "glass-panel bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20",
    outline: "border border-white/10 text-white hover:bg-white hover:text-black transition-colors"
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
