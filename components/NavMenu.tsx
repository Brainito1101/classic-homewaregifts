"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { navLinks } from "@/lib/data";
import MegaMenu from "./MegaMenu";

export default function NavMenu() {
  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setMegaOpen(true);
  };

  // Small delay before closing so moving the cursor from the trigger down
  // into the dropdown doesn't register as "leaving" the menu and close it
  // before a sub-category link can be clicked.
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 150);
  };

  return (
    <nav aria-label="Primary" className="relative border-t border-gray-100">
      <div className="container-app">
        <ul className="hidden lg:flex items-center gap-7 py-3 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.hasMegaMenu && openMenu()}
              onMouseLeave={() => link.hasMegaMenu && scheduleClose()}
            >
              <Link
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group inline-flex items-center gap-1 py-1 transition-colors hover:text-brand"
              >
                {link.label}
                {link.hasMegaMenu && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      megaOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
                <span className="absolute left-0 -bottom-0.5 h-0.5 bg-brand transition-all w-0 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <MegaMenu open={megaOpen} onMouseEnter={openMenu} onMouseLeave={scheduleClose} />
    </nav>
  );
}
