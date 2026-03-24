"use client";

import { useEffect, useRef, useState } from "react";

interface TypeHeroScrollState {
  /** 0–1 black overlay opacity, interpolated across scroll anchor points */
  overlayOpacity: number;
  /** true when scrolled past 100vh — hero should leave the sticky stack */
  isHidden: boolean;
}

/**
 * Linearly interpolate between two values given a 0–1 progress factor.
 */
const lerp = (from: number, to: number, t: number): number =>
  from + (to - from) * t;

/**
 * Maps a 0–1 scroll ratio to a 0–1 overlay opacity using three anchor points:
 *  - ratio < 0.30  → 0.0  (overlay invisible)
 *  - ratio 0.30–0.50 → lerp 0.20 → 0.60
 *  - ratio 0.50–0.80 → lerp 0.60 → 1.00
 *  - ratio ≥ 0.80  → 1.0  (fully opaque)
 */
const computeOverlayOpacity = (ratio: number): number => {
  if (ratio < 0.3) return 0;
  if (ratio < 0.5) return lerp(0.2, 0.6, (ratio - 0.3) / 0.2);
  if (ratio < 0.8) return lerp(0.6, 1.0, (ratio - 0.5) / 0.3);
  return 1;
};

/**
 * Tracks the scroll-driven overlay opacity and hidden state for the Hero section.
 *
 * Performance characteristics:
 * - Passive scroll listener (never blocks the browser's scroll thread)
 * - rAF-gated: at most one state update per animation frame
 * - Functional setState with prev-guard to skip redundant re-renders
 */
export const useHeroScrollState = (): TypeHeroScrollState => {
  const [state, setState] = useState<TypeHeroScrollState>({
    overlayOpacity: 0,
    isHidden: false,
  });

  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const ratio = window.scrollY / window.innerHeight;
      const overlayOpacity = computeOverlayOpacity(ratio);
      const isHidden = ratio >= 1;

      setState((prev) => {
        if (
          prev.overlayOpacity === overlayOpacity &&
          prev.isHidden === isHidden
        ) {
          return prev; // bail out — nothing changed
        }
        return { overlayOpacity, isHidden };
      });

      rafId.current = null;
    };

    const onScroll = () => {
      if (rafId.current !== null) return; // already scheduled
      rafId.current = requestAnimationFrame(update);
    };

    // Sync on mount in case the page loads mid-scroll
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return state;
};
