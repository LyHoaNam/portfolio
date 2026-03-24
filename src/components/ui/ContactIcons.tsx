import type { TypeContactItemId } from "@src/utils/contact";
import type { ComponentType } from "react";

export interface TypeIconProps {
  size?: number;
}

export const PhoneIcon = ({ size = 16 }: TypeIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.34a2 2 0 0 1 1.91-2.18h3a2 2 0 0 1 2 1.72c.13 1 .37 1.98.72 2.93a2 2 0 0 1-.45 2.11L7.91 8.92a16 16 0 0 0 6 6l.88-.88a2 2 0 0 1 2.11-.45c.95.35 1.93.59 2.93.72a2 2 0 0 1 1.72 2.09z" />
  </svg>
);

export const EmailIcon = ({ size = 16 }: TypeIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const LocationIcon = ({ size = 16 }: TypeIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const LinkedInIcon = ({ size = 16 }: TypeIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const CONTACT_ICON_MAP: Record<
  TypeContactItemId,
  ComponentType<TypeIconProps>
> = {
  phone: PhoneIcon,
  email: EmailIcon,
  location: LocationIcon,
  linkedin: LinkedInIcon,
};
