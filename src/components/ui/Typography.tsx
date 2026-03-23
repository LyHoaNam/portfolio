import type { ReactNode } from "react";

type TypographyVariant = "body" | "heading" | "subheading" | "mono";
type TypographySize = "sm" | "md" | "lg" | "xl";
type TypographyElement = "div" | "h1" | "h2" | "h3" | "p" | "span";

interface TypographyProps {
  as?: TypographyElement;
  children: ReactNode;
  className?: string;
  size?: TypographySize;
  variant?: TypographyVariant;
}

const DEFAULT_ELEMENT_BY_VARIANT: Record<TypographyVariant, TypographyElement> =
  {
    body: "p",
    heading: "h2",
    subheading: "h3",
    mono: "p",
  };

const VARIANT_STYLES: Record<TypographyVariant, string> = {
  body: "text-base leading-relaxed text-text-primary",
  heading: "font-display text-text-primary uppercase tracking-hero-name",
  subheading: "font-display text-text-primary uppercase tracking-wide",
  mono: "font-mono text-text-primary",
};

const SIZE_STYLES: Record<TypographySize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-2xl leading-tight",
  xl: "text-4xl leading-none",
};

const getTypographyClassName = ({
  className,
  size,
  variant,
}: Required<Pick<TypographyProps, "className" | "size" | "variant">>) => {
  return [VARIANT_STYLES[variant], SIZE_STYLES[size], className]
    .filter(Boolean)
    .join(" ");
};

export const Typography = ({
  as,
  children,
  className = "",
  size = "md",
  variant = "body",
}: TypographyProps) => {
  const Component = as ?? DEFAULT_ELEMENT_BY_VARIANT[variant];

  return (
    <Component
      className={getTypographyClassName({
        className,
        size,
        variant,
      })}
    >
      {children}
    </Component>
  );
};
