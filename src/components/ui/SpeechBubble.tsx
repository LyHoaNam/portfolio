import type { PropsWithChildren } from "react";

const SPEECH_BUBBLE_VARIANTS = {
  accent: "text-text-primary",
  default: "text-text-accent",
  arrow:
    "relative before:absolute before:-bottom-11 before:left-6 before:border-[24px] before:border-transparent before:border-t-[22px] before:border-t-black before:rotate-350 before:-z-1 after:absolute after:-bottom-8 after:left-6 after:border-[20px] after:border-transparent after:border-t-[20px] after:border-t-cream after:rotate-350 after:z-1",
} as const;

interface TypeSpeechBubbleProps extends PropsWithChildren {
  className?: string;
  variant?: keyof typeof SPEECH_BUBBLE_VARIANTS;
  ariaLabel?: string;
}

export const SpeechBubble = ({
  children,
  className = "",
  variant = "default",
  ariaLabel,
}: TypeSpeechBubbleProps) => {
  return (
    <aside
      className={`rounded-md border-2 border-black bg-cream px-4 py-3 leading-relaxed shadow-[4px_4px_0_0_#000] ${SPEECH_BUBBLE_VARIANTS[variant]} ${className}`}
      aria-label={ariaLabel ?? "Speech bubble"}
    >
      {children}
    </aside>
  );
};
