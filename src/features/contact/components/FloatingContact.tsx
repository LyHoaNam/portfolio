"use client";

import type { TypeIconProps } from "@src/components/ui/ContactIcons";
import {
  EmailIcon,
  LinkedInIcon,
  LocationIcon,
  PhoneIcon,
} from "@src/components/ui/ContactIcons";
import type { TypeContactItemId } from "@src/utils/contact";
import { CONTACT_ITEMS } from "@src/utils/contact";
import type { ComponentType } from "react";
import { useState } from "react";

const CONTACT_ICON_MAP: Record<
  TypeContactItemId,
  ComponentType<TypeIconProps>
> = {
  phone: PhoneIcon,
  email: EmailIcon,
  location: LocationIcon,
  linkedin: LinkedInIcon,
};

interface TypeContactDetailRowProps {
  id: TypeContactItemId;
  label: string;
  value: string;
  href?: string;
  isExternal?: boolean;
}

const ContactDetailRow = ({
  id,
  label,
  value,
  href,
  isExternal,
}: TypeContactDetailRowProps) => {
  const Icon = CONTACT_ICON_MAP[id];

  const content = (
    <div className="flex items-center gap-2">
      <span className="shrink-0 text-blue">
        <Icon size={13} />
      </span>
      <div className="flex flex-col leading-none">
        <span className="font-mono text-[8px] text-slate uppercase tracking-[0.15em]">
          {label}
        </span>
        <span className="mt-px whitespace-nowrap text-[11px] text-navy">
          {value}
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="no-underline transition-opacity duration-200 hover:opacity-70"
      >
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
};

export const FloatingContact = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed top-12.5 left-0 z-40"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="min-w-14 select-none overflow-hidden rounded-tl-none rounded-tr-none rounded-br-none rounded-bl-sm border border-slate bg-paper">
        {/* Collapsed strip: "CONTACT" label + icon row */}
        <div className="flex items-stretch">
          {/* Vertical "CONTACT" tag */}
          <div className="flex min-h-12 items-center justify-center bg-navy px-2 py-3">
            <span className="rotate-180 font-mono text-[10px] text-mint uppercase tracking-[0.25em] [text-orientation:mixed] [writing-mode:vertical-rl]">
              CONTACT
            </span>
          </div>

          {/* Icon column — fades out when expanded */}
          <div
            className={`flex min-w-10 flex-col items-center justify-center gap-1 px-3 py-3 transition-opacity duration-300 ${
              hovered ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            {CONTACT_ITEMS.map(({ id }) => {
              const Icon = CONTACT_ICON_MAP[id];
              return (
                <span
                  key={id}
                  className="flex items-center justify-center text-blue"
                >
                  <Icon size={14} />
                </span>
              );
            })}
          </div>

          {/* Expanded detail panel — CSS grid expand trick */}
          <div
            className={`grid overflow-hidden transition-[grid-template-columns] duration-300 ease-in-out ${
              hovered ? "grid-cols-[1fr]" : "grid-cols-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="flex min-w-55 flex-col justify-center gap-2 py-3 pr-5 pl-1">
                {CONTACT_ITEMS.map((item) => (
                  <ContactDetailRow key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom retro accent stripe */}
        <div className="h-0.75 bg-linear-to-r from-navy via-blue to-mint" />
      </div>
    </div>
  );
};
