"use client";

import { FallbackComponent } from "@src/lib/errorBoudary";
import { SpeechBubble } from "components/ui/SpeechBubble";
import { SCRIPT_INTRODUCE } from "features/introduce/utils/SCRIPT";
import { CONFIG } from "lib/typewriter";
import dynamic from "next/dynamic";

const Typewriter = dynamic(
  () => import("lib/typewriter").then((mod) => mod.Typewriter),
  {
    ssr: false,
  }
);
const ClientErrorBoundary = dynamic(
  () => import("lib/errorBoudary").then((mod) => mod.ClientErrorBoundary),
  {
    ssr: false,
  }
);
const Setting = CONFIG.DEFAULT;

interface TypeIntroduceBubbleProps {
  className?: string;
}
const Content = ({ className }: TypeIntroduceBubbleProps) => {
  return (
    <SpeechBubble className={className} variant="arrow" ariaLabel="introduce">
      <Typewriter
        sequence={SCRIPT_INTRODUCE}
        repeat={Setting.REPEAT}
        speed={Setting.SPEED}
      />
    </SpeechBubble>
  );
};

export const IntroduceBubble = (props: TypeIntroduceBubbleProps) => {
  return (
    <ClientErrorBoundary fallback={<FallbackComponent />}>
      <Content {...props} />
    </ClientErrorBoundary>
  );
};
