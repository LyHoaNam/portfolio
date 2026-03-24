import type { ReactNode } from "react";

type TypographyVariant = "body" | "heading" | "subheading" | "mono" | "title";
type TypographySize = "sm" | "md" | "lg" | "xl" | "hero";
type TypographyColor = "primary" | "inverse";
type TypographyElement = "div" | "h1" | "h2" | "h3" | "p" | "span";

interface TypographyProps {
  as?: TypographyElement;
  children: ReactNode;
  className?: string;
  color?: TypographyColor;
  size?: TypographySize;
  variant?: TypographyVariant;
}

const DEFAULT_ELEMENT_BY_VARIANT: Record<TypographyVariant, TypographyElement> =
  {
    body: "p",
    heading: "h2",
    subheading: "h3",
    mono: "p",
    title: "h3",
  };

const VARIANT_STYLES: Record<TypographyVariant, string> = {
  body: "text-base leading-relaxed",
  heading: "font-display uppercase tracking-hero-name",
  subheading: "font-display uppercase tracking-wide",
  mono: "font-mono",
  title: "font-bold",
};

const COLOR_STYLES: Record<TypographyColor, string> = {
  primary: "text-text-primary",
  inverse: "text-paper",
};

const SIZE_STYLES: Record<TypographySize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-2xl leading-tight",
  xl: "text-4xl leading-none",
  hero: "text-6xl leading-none md:text-8xl",
};

const getTypographyClassName = ({
  className,
  color,
  size,
  variant,
}: Required<
  Pick<TypographyProps, "className" | "color" | "size" | "variant">
>) => {
  return [
    VARIANT_STYLES[variant],
    COLOR_STYLES[color],
    SIZE_STYLES[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");
};

export const Typography = ({
  as,
  children,
  className = "",
  color = "primary",
  size = "md",
  variant = "body",
}: TypographyProps) => {
  const Component = as ?? DEFAULT_ELEMENT_BY_VARIANT[variant];

  return (
    <Component
      className={getTypographyClassName({
        className,
        color,
        size,
        variant,
      })}
    >
      {children}
    </Component>
  );
};
