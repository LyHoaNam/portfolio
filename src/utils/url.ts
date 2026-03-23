export const SECTION_HASHES = {
  HOME: "#home",
  SKILLS: "#skills",
  EXPERIENCE: "#experience",
  ABOUT: "#about",
  CONTACT: "#contact",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: SECTION_HASHES.HOME },
  { label: "Skills", href: SECTION_HASHES.SKILLS },
  { label: "Experience", href: SECTION_HASHES.EXPERIENCE },
  { label: "About", href: SECTION_HASHES.ABOUT },
  { label: "Contact", href: SECTION_HASHES.CONTACT },
] as const;

export type TypeSectionHash =
  (typeof SECTION_HASHES)[keyof typeof SECTION_HASHES];
