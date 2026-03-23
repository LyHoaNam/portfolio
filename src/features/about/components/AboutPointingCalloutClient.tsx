"use client";

import { useSectionVisibility } from "@src/hooks/useSectionVisibility";
import Pointing from "images/pointing.png";
import Image from "next/image";
export const AboutPointingCallout = () => {
  const { isVisible, sectionRef } = useSectionVisibility(1);

  return (
    <div
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/2 right-6 z-10 hidden -translate-y-1/2 transition-all duration-700 ease-out lg:block xl:right-12 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
      }`}
    >
      <div
        className={`mb-2 inline-block bg-navy px-2 py-1 font-mono text-[10px] text-mint uppercase tracking-widest transition-all delay-150 duration-500 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        }`}
      >
        Attention
      </div>
      <Image
        src={Pointing}
        alt=""
        width={240}
        height={240}
        className="h-auto w-36 xl:w-44"
      />
    </div>
  );
};
