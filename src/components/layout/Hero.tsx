import { HeroClientSection } from "features/introduce/components/HeroClientSection";

export const Hero = () => {
  return (
    <section
      className={`sticky min-h-screen w-full overflow-hidden bg-surface-canvas`}
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

        <HeroClientSection />
      </div>
    </section>
  );
};
