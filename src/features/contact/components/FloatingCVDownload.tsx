"use client";

import { useState } from "react";

const PdfIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Document body */}
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    {/* Folded corner */}
    <polyline points="14 2 14 8 20 8" />
    {/* PDF lines */}
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9" y1="17" x2="15" y2="17" />
    <line x1="9" y1="9" x2="11" y2="9" />
  </svg>
);

export const FloatingCVDownload = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="/cv.pdf"
      download="LyHoaNam-CV.pdf"
      className="fixed bottom-0 left-0 z-40 no-underline"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Download my CV as PDF"
    >
      <div
        className={`select-none overflow-hidden rounded-tr-sm border border-slate bg-paper transition-all duration-150 ${
          hovered
            ? "-translate-y-0.5 shadow-[4px_4px_0_0_#000]"
            : "shadow-[2px_2px_0_0_#000]"
        }`}
      >
        <div className="flex items-stretch">
          {/* Icon strip — navy bg, mirrors FloatingContact "CONTACT" tag */}
          <div className="flex min-h-12 min-w-10 items-center justify-center bg-navy px-3 py-3 text-cream">
            <PdfIcon />
          </div>

          {/* Expandable label — CSS grid expand trick */}
          <div
            className={`grid overflow-hidden transition-[grid-template-columns] duration-300 ease-in-out ${
              hovered ? "grid-cols-[1fr]" : "grid-cols-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="flex min-w-36 flex-col justify-center gap-0.5 py-3 pr-4 pl-3">
                <span className="whitespace-nowrap font-bold text-navy text-sm">
                  Get my CV
                </span>
                <span className="font-mono text-[9px] text-slate uppercase tracking-[0.15em]">
                  PDF download
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom retro accent stripe */}
        <div className="h-0.75 bg-linear-to-r from-navy via-blue to-mint" />
      </div>
    </a>
  );
};
