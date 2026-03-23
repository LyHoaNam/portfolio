"use client";

import type React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

export const Button = ({ children, className = "", ...rest }: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center px-3 py-1.5 border-2 border-[var(--color-navy)] border-b-6 border-r-6 bg-cream text-text-primary font-bold rounded-sm select-none transition-all duration-150 hover:border-b-2 hover:border-r-2 active:translate-y-0 cursor-pointer";

  return (
    <button type="button" className={`${base} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
