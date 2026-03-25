"use client";

import { useSectionVisibility } from "@src/hooks/useSectionVisibility";
import ExperienceImg from "images/experience.png";
import Image from "next/image";

export const ExperienceImageCallout = () => {
  const { isVisible, sectionRef } = useSectionVisibility(0.8);

  return (
    <div
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/4 left-6 z-10 hidden -translate-y-1/2 transition-all duration-700 ease-out lg:block xl:left-12 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
      }`}
    >
      <Image
        src={ExperienceImg}
        alt=""
        width={240}
        height={240}
        className="h-auto w-32 xl:w-40"
      />
    </div>
  );
};
