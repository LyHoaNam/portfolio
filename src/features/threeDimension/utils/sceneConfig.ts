import { HTML5Icon3D } from "@src/features/threeDimension/components/icons/HTML5Icon3D";
import { NextJSIcon3D } from "@src/features/threeDimension/components/icons/NextJSIcon3D";
import { NuxtIcon3D } from "@src/features/threeDimension/components/icons/NuxtIcon3D";
import { ReactIcon3D } from "@src/features/threeDimension/components/icons/ReactIcon3D";
import { TailwindIcon3D } from "@src/features/threeDimension/components/icons/TailwindIcon3D";
import { TypeScriptIcon3D } from "@src/features/threeDimension/components/icons/TypeScriptIcon3D";
import { ViteIcon3D } from "@src/features/threeDimension/components/icons/ViteIcon3D";
import { VueIcon3D } from "@src/features/threeDimension/components/icons/VueIcon3D";
import type React from "react";

export type TechIconItem = {
  name: string;
  color: string;
  component: React.ComponentType<{ hovered: boolean }>;
};

export const SCENE_COLORS = {
  label: "#2D3C59",
} as const;

export const ORBIT_CONFIG = {
  baseRadius: 2.5,
  expandedRadius: 4.5,
  interpolationSpeed: 3,
  orbitSpeed: 0.3,
  xOffset: 0.5,
  yOffset: -1,
  zVariation: 1.5,
} as const;

export const TECH_ICON_ITEMS: TechIconItem[] = [
  { name: "React", color: "#61DAFB", component: ReactIcon3D },
  { name: "TypeScript", color: "#3178C6", component: TypeScriptIcon3D },
  { name: "Next.js", color: "#000000", component: NextJSIcon3D },
  { name: "Tailwind", color: "#06B6D4", component: TailwindIcon3D },
  { name: "Vue.js", color: "#4FC08D", component: VueIcon3D },
  { name: "HTML5", color: "#E44D26", component: HTML5Icon3D },
  { name: "Vite", color: "#646CFF", component: ViteIcon3D },
  { name: "Nuxt", color: "#00C58E", component: NuxtIcon3D },
];
