"use client";

import { useHeroScrollState } from "@src/hooks/useHeroScrollState";
import { HeroClientSection } from "features/introduce/components/HeroClientSection";

export const Hero = () => {
  const { overlayOpacity, isHidden } = useHeroScrollState();

  return (
    <section
      aria-hidden={isHidden}
      className={`${isHidden ? "relative" : "sticky top-0"} z-2 min-h-screen w-full overflow-hidden bg-surface-canvas`}
    >
      <div className="relative mx-auto flex h-screen w-87.5 items-end">
        <div className="absolute bottom-1 left-0 origin-bottom-left -rotate-90">
          <h2 className="font-primary text-6xl text-text-primary uppercase tracking-hero-title">
            FRONT END
          </h2>
          <h2 className="font-primary text-6xl text-text-accent uppercase leading-10 tracking-hero-title">
            DEVELOPER
          </h2>
        </div>

        {!isHidden && <HeroClientSection />}
      </div>

      {/* Scroll-driven black overlay — GPU composited, never blocks pointer events */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-1 bg-black"
        style={{ opacity: overlayOpacity, willChange: "opacity" }}
      />
    </section>
  );
};
