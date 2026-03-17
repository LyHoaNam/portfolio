import { SpeechBubble } from "@src/components/ui/SpeechBubble";
import { VisibleOnScreen } from "@src/components/ui/VisibleOnScreen";
import avatar0 from "images/avatar0.png";
import avatar1 from "images/avatar1.png";
import avatar2 from "images/avatar2.png";
import avatar3 from "images/avatar3.png";
import avatar4 from "images/avatar4.png";
import Image from "next/image";

const DEFAULT_AVATAR_INDEX = 0;
const AVATARS = [avatar0, avatar1, avatar2, avatar3, avatar4] as const;

export const Hero = () => {
  return (
    <section
      className={`sticky min-h-screen w-full overflow-hidden bg-surface-canvas`}
    >
      <div className="relative mx-auto flex h-screen w-87.5 items-end">
        <div className="absolute bottom-1 left-0 origin-bottom-left -rotate-90">
          <h2 className="font-primary text-6xl text-text-primary uppercase tracking-hero-title">
            FRONT END
          </h2>
          <h2 className="font-primary text-6xl text-text-accent uppercase leading-10 tracking-hero-title">
            DEVELOPER
          </h2>
        </div>

        <div className="relative">
          <SpeechBubble
            className="-top-2"
            variant="arrow"
            ariaLabel="introduce"
          >
            Hi, I'm Nam! <br />I build vibrant web experiences with React.
          </SpeechBubble>
          <Image
            src={AVATARS[DEFAULT_AVATAR_INDEX]}
            alt="LyHoaNam - Frontend Developer"
            width={350}
            height={350}
            priority
          />
          <h1 className="mt-0 font-display text-5xl text-text-accent uppercase leading-10">
            LY HOA NAM
          </h1>
        </div>

        <VisibleOnScreen
          className="absolute bottom-12.5 left-0 h-250 w-250"
          threshold={0.1}
        >
          <div>Scene3DContainer</div>
        </VisibleOnScreen>
      </div>
    </section>
  );
};
