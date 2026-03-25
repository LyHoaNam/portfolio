"use client";

import { useEffect, useState } from "react";

const HERO_THRESHOLD = 0.75;
const INITIAL_SHOW_DELAY_MS = 3000;

const MouseScrollIcon = () => (
  <svg
    width="22"
    height="30"
    viewBox="0 0 22 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="1.5"
      y="1.5"
      width="19"
      height="27"
      rx="9.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <line
      x1="11"
      y1="1.5"
      x2="11"
      y2="13"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect
      x="9"
      y="7"
      width="4"
      height="7"
      rx="2"
      fill="currentColor"
      className="animate-bounce"
      style={{ animationDuration: "1.5s" }}
    />
  </svg>
);

const ArrowUpIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <polyline
      points="18 15 12 9 6 15"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FloatingScrollButton = () => {
  const [isHeroSection, setIsHeroSection] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showButton = () => setIsVisible(true);

    setIsHeroSection(window.scrollY < window.innerHeight * HERO_THRESHOLD);

    let timerId: ReturnType<typeof setTimeout> | undefined;

    if (window.scrollY > 50) {
      showButton();
    } else {
      timerId = setTimeout(showButton, INITIAL_SHOW_DELAY_MS);
    }

    const handleScroll = () => {
      setIsHeroSection(window.scrollY < window.innerHeight * HERO_THRESHOLD);
      showButton();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timerId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (isHeroSection) {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={
        isHeroSection ? "Scroll down to next section" : "Scroll to top"
      }
      className={`fixed right-[5%] bottom-[5%] z-40 cursor-pointer border-0 bg-transparent p-0 transition-all duration-500 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-2 rounded-sm border-2 border-navy bg-cream px-3 py-2.5 text-navy shadow-[3px_3px_0_0_#000] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#000] active:translate-y-0.5 active:shadow-[1px_1px_0_0_#000]">
        {isHeroSection ? (
          <>
            <MouseScrollIcon />
            <span className="font-mono text-[9px] text-slate uppercase tracking-[0.15em]">
              scroll down
            </span>
          </>
        ) : (
          <ArrowUpIcon />
        )}
      </div>
    </button>
  );
};
