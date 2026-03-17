import { TypeAnimation } from "react-type-animation";

const Typewriter = TypeAnimation;

const CONFIG = {
  DEFAULT: {
    REPEAT: Infinity,
    SPEED: 75 as const,
  },
};

export { CONFIG, Typewriter };
