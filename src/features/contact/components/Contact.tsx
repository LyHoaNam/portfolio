import { CONTACT_ICON_MAP } from "@src/components/ui/ContactIcons";
import { Typography } from "@src/components/ui/Typography";
import type { TypeContactItem } from "@src/utils/contact";
import { CONTACT_ITEMS, PROFILE } from "@src/utils/contact";

import { ContactImageCallout } from "./ContactImageCallout";

const ContactCard = ({ id, href, label, isExternal }: TypeContactItem) => {
  const Icon = CONTACT_ICON_MAP[id];

  const iconEl = href ? (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="text-mint transition-transform hover:scale-110"
    >
      <Icon size={32} />
    </a>
  ) : (
    <span className="cursor-default text-mint">
      <Icon size={32} />
    </span>
  );

  return (
    <div className="group flex flex-col items-center gap-2">
      {iconEl}
      <span className="font-mono text-white/50 text-xs uppercase tracking-widest opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        {label}
      </span>
    </div>
  );
};

export const Contact = () => (
  <section
    id="contact"
    className="sticky bottom-0 grid h-175 w-full place-items-center overflow-hidden bg-black"
  >
    <div className="w-full max-w-3xl px-8 text-center">
      <div className="relative inline-block">
        <ContactImageCallout />
        <Typography
          as="h2"
          variant="mono"
          size="hero"
          color="inverse"
          className="mb-6 whitespace-pre-line"
        >
          {"Let's work\ntogether"}
        </Typography>
      </div>

      <p className="mb-1 font-mono text-white/40 text-xs uppercase tracking-widest">
        Connect with me:
      </p>
      <a
        href={`mailto:${PROFILE.email}`}
        className="font-mono text-mint text-sm transition-opacity hover:opacity-70"
      >
        {PROFILE.email}
      </a>

      <div className="mt-14 flex flex-wrap justify-center gap-10">
        {CONTACT_ITEMS.map((item) => (
          <ContactCard key={item.id} {...item} />
        ))}
      </div>
    </div>

    <footer className="absolute right-0 bottom-6 left-0 text-center">
      <p className="font-mono text-white/25 text-xs">
        {new Date().getFullYear()} Ly Hoa Nam · Thanks for scrolling!
      </p>
    </footer>
  </section>
);

export default Contact;
