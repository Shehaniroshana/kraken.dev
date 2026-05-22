"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/three/hero-scene"), {
  ssr: false,
});

export function SceneWrapper() {
  return <HeroScene />;
}
