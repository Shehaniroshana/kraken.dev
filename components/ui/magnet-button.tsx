"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "glass" | "outline";
  children: React.ReactNode;
  className?: string;
}

export function MagnetButton({ variant = "primary", children, className, ...props }: ButtonProps) {
  const baseClasses = "relative inline-flex items-center justify-center overflow-hidden px-8 py-4 font-bold uppercase tracking-[0.2em] transition-all duration-300 text-xs";
  
  const variants = {
    primary: "border border-red-600/30 bg-red-600/10 text-red-500 hover:bg-red-600 hover:text-white",
    glass: "glass-panel glass-panel-hover text-white hover:text-[var(--color-red)] border-red-600/50",
    outline: "border border-[var(--color-red)] text-[var(--color-red)] hover:bg-[var(--color-red-muted)] shadow-[inset_0_0_10px_rgba(220,38,38,0.2)]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
