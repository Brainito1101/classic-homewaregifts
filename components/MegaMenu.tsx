"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  UtensilsCrossed,
  Sofa,
  Bath,
  Archive,
  Sun,
} from "lucide-react";
import Link from "next/link";
import { megaMenuColumns } from "@/lib/data";

const iconMap = {
  utensils: UtensilsCrossed,
  sofa: Sofa,
  bath: Bath,
  archive: Archive,
  sun: Sun,
};

export default function MegaMenu({
  open,
  onMouseEnter,
  onMouseLeave,
}: {
  open: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute left-0 right-0 top-full z-40"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="container-app">
            <div className="bg-white rounded-b-xl2 shadow-card border border-gray-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 p-8">
              {megaMenuColumns.map((col) => {
                const Icon = iconMap[col.icon];
                return (
                  <div key={col.title}>
                    <div className="flex items-center gap-2 mb-3 text-brand-dark font-semibold text-sm">
                      <Icon size={18} className="text-brand" />
                      <span>{col.title}</span>
                    </div>
                    <ul className="space-y-2">
                      {col.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-600 hover:text-brand transition-colors"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
