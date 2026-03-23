export const PROFILE = {
  phone: "+84 123 456 789",
  email: "lyhoanan@example.com",
  location: "Ho Chi Minh City, Vietnam",
  linkedin: "https://linkedin.com/in/lyhoanam",
  linkedinHandle: "lyhoanam",
} as const;

export type TypeContactItemId = "phone" | "email" | "location" | "linkedin";

export interface TypeContactItem {
  id: TypeContactItemId;
  label: string;
  value: string;
  href: string | undefined;
  isExternal?: boolean;
}

/**
 * Ordered list of contact details for display.
 *
 * @example
 * CONTACT_ITEMS.map(({ label, value }) => `${label}: ${value}`)
 */
export const CONTACT_ITEMS: TypeContactItem[] = [
  {
    id: "phone",
    label: "PHONE",
    value: PROFILE.phone,
    href: `tel:${PROFILE.phone.replace(/\s/g, "")}`,
  },
  {
    id: "email",
    label: "EMAIL",
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
  },
  {
    id: "location",
    label: "LOCATION",
    value: PROFILE.location,
    href: undefined,
  },
  {
    id: "linkedin",
    label: "LINKEDIN",
    value: `/${PROFILE.linkedinHandle}`,
    href: PROFILE.linkedin,
    isExternal: true,
  },
];
