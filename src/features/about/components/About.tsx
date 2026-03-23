import { Typography } from "@src/components/ui/Typography";
import AboutMeImg from "images/aboutme.png";
import Image from "next/image";

import { AboutPointingCallout } from "./AboutPointingCalloutClient";

export const About = () => (
  <section
    id="about"
    className="relative flex h-175 items-center justify-center overflow-hidden rounded-t-4xl bg-cream px-6 py-24 shadow-[0_-16px_48px_rgba(45,60,89,0.18)]"
  >
    <AboutPointingCallout />

    <div className="w-full max-w-2xl text-center">
      {/* section_02 */}

      <Typography as="h2" variant="heading" size="hero" className="group mb-4">
        About{" "}
        <span className="relative inline-block">
          Me
          <Image
            src={AboutMeImg}
            alt="About me"
            width={120}
            height={120}
            className="pointer-events-none absolute bottom-[75%] left-1/2 z-10 mb-2 h-auto w-20 -translate-x-1/2 translate-y-2 scale-95 opacity-0 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-100 group-hover:opacity-100"
          />
        </span>
      </Typography>

      <div className="mx-auto mb-8 h-px w-24 bg-linear-to-r from-transparent via-navy/40 to-transparent" />

      <Typography className="mb-8 font-bold text-lg leading-snug md:text-xl">
        Hi, I&apos;m Ly Hoa Nam — a frontend developer who loves building clean,
        purposeful interfaces.
      </Typography>

      <Typography className="mb-6 text-navy/80 md:text-lg">
        Senior Frontend Engineer with 6+ years of experience building and
        scaling production web applications with React / Next.js and Vue / Nuxt.
        I care deeply about frontend architecture, performance, and maintainable
        UI systems.
      </Typography>

      <Typography className="mb-12 text-navy/70 md:text-lg">
        Based in Ho Chi Minh City, Vietnam. Proactive collaborator and trusted
        reviewer who helps teams ship reliably and raise code quality — whatever
        the weather.
      </Typography>

      <Typography
        as="span"
        variant="mono"
        size="sm"
        className="tracking-widest opacity-50"
      >
        &lt;/about&gt;
      </Typography>
    </div>
  </section>
);
