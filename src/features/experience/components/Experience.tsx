"use client";

import { Typography } from "@src/components/ui/Typography";
import { useSectionVisibility } from "@src/hooks/useSectionVisibility";
import Work from "images/work.png";
import Image from "next/image";
import type { RefObject } from "react";

import {
  EXPERIENCE_ITEMS,
  type TypeExperienceItem,
} from "../utils/experienceData";

interface TypeTimelineItemProps extends TypeExperienceItem {
  isLast?: boolean;
}

const TimelineItem = ({
  id,
  company,
  project,
  period,
  role,
  highlights,
  isLast = false,
}: TypeTimelineItemProps) => {
  const { isVisible: isDotCentered, sectionRef } = useSectionVisibility(0.5);

  return (
    <div className="relative pb-16 pl-12 last:pb-0">
      {/* Work image callout — fades in when dot is centred in viewport */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-7 right-full z-10 mr-5 hidden transition-all duration-500 ease-out lg:block ${
          isDotCentered
            ? "translate-x-0 opacity-100"
            : "translate-x-4 opacity-0"
        }`}
      >
        <Image
          src={Work}
          alt=""
          width={180}
          height={180}
          className="h-auto w-28 xl:w-36"
        />
      </div>

      {/* Timeline dot */}
      <div
        id={`timeline-dot-${id}`}
        ref={sectionRef as RefObject<HTMLDivElement>}
        className="absolute top-2 left-0 h-4 w-4 rounded-full border-4 border-navy bg-mint shadow-lg"
      />

      {/* Vertical dashed line */}
      {!isLast && (
        <div className="absolute top-6 bottom-0 left-1.75 border-navy/30 border-l-2 border-dashed" />
      )}

      {/* Content */}
      <div className="space-y-3">
        {company && (
          <div className="font-mono text-mint text-sm uppercase tracking-wider">
            {company}
          </div>
        )}

        <Typography as="h3" variant="title" size="lg" className="md:text-3xl">
          {project}
        </Typography>

        <div className="flex flex-wrap gap-3 text-sm">
          <span className="font-mono text-blue tracking-wide">{period}</span>
          <span className="text-navy/60">•</span>
          <span className="font-semibold text-navy/80">{role}</span>
        </div>

        <ul className="mt-4 space-y-2">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-navy/80 text-sm leading-relaxed md:text-base"
            >
              <span className="shrink-0 font-bold text-mint">→</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Experience = () => (
  <section
    id="experience"
    className="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface-canvas px-6 py-24"
  >
    <div className="w-full max-w-4xl">
      <div className="mb-16">
        {/* section_03 */}
        <Typography as="h2" variant="heading" size="hero" className="mb-4">
          Work Experience
        </Typography>

        <div className="mb-8 h-px w-24 bg-linear-to-r from-transparent via-navy/40 to-transparent" />

        <Typography className="max-w-2xl text-navy/80 md:text-lg">
          6+ years building production web applications. From individual
          contributor to team lead, shipping features and improving frontend
          systems.
        </Typography>
      </div>

      {/* Timeline */}
      <div className="mt-12">
        {EXPERIENCE_ITEMS.map((exp, idx) => (
          <TimelineItem
            key={exp.id}
            {...exp}
            isLast={idx === EXPERIENCE_ITEMS.length - 1}
          />
        ))}
      </div>

      <Typography
        as="span"
        variant="mono"
        size="sm"
        className="mt-8 block tracking-widest opacity-50"
      >
        &lt;/experience&gt;
      </Typography>
    </div>
  </section>
);

export default Experience;
