export const PROFILE = {
  phone: "0338463252",
  email: "lyhoanam@gmail.com",
  location: "TP. HCM",
  linkedin: "https://www.linkedin.com/in/nam-ly-587130208/",
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
