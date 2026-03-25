"use client";

import ContactImg from "images/contact.png";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ContactImageCallout = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const section = document.getElementById("contact");
    if (!section) return;

    // Capture the section's natural position in document flow (unaffected by sticky).
    // For sticky bottom-0, this is the scroll position at which the section becomes active.
    const triggerY = section.offsetTop;

    const handleScroll = () => {
      if (window.scrollY + window.innerHeight >= triggerY) {
        setShow(true);
        setTimeout(() => setShow(false), 3000);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-0 left-1/2 z-10 -translate-x-1/2 transition-all duration-700 ease-out ${
        show ? "-translate-y-full opacity-100" : "-translate-y-8 opacity-0"
      }`}
    >
      <Image
        src={ContactImg}
        alt=""
        width={160}
        height={160}
        className="h-auto w-24 xl:w-32"
      />
    </div>
  );
};
