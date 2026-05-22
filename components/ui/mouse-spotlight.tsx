"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";
import { useEffect, useState } from "react";

export function MouseSpotlight() {
  const mousePosition = useMousePosition();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(220, 38, 38, 0.05), transparent 40%)`,
      }}
    />
  );
}
