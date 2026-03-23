"use client";

import { useScrollVisibility } from "@src/hooks/useScrollVisibility";
import { NAV_ITEMS } from "@src/utils/url";

export default function Navigation() {
  const isVisible = useScrollVisibility();

  return (
    <nav
      className={`fixed top-8 left-1/2 z-50 -translate-x-1/2 rounded-[50px] border-2 border-[rgba(90,156,181,0.4)] bg-[linear-gradient(135deg,rgba(186,223,219,0.95)_0%,rgba(186,223,219,0.9)_100%)] shadow-[0_8px_32px_rgba(90,156,181,0.15),inset_0_1px_2px_rgba(255,255,255,0.5)] backdrop-blur-[10px] transition-all duration-500 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <div className="px-8 py-4">
        <div className="flex items-center justify-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-medium text-[#2D3C59] text-sm uppercase tracking-widest transition-all duration-300 [text-shadow:0_1px_3px_rgba(186,223,219,0.3)] hover:scale-110"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
