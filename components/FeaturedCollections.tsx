"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { featuredCollections, MAIN_SITE_URL } from "@/lib/data";

export default function FeaturedCollections() {
  return (
    <section aria-labelledby="shop-by-room" className="py-8">
      <div className="container-app">
        <div className="flex items-center justify-between mb-6">
          <h2
            id="shop-by-room"
            className="text-sm md:text-base font-bold tracking-widest text-gray-800"
          >
            SHOP BY ROOM
          </h2>
          {/* Sends visitors to the live storefront rather than an internal page */}
          <Link
            href={MAIN_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm font-medium text-brand hover:underline"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredCollections.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl2 shadow-soft"
            >
              <Link
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full w-full"
              >
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-white font-bold text-base md:text-lg leading-snug mb-3">
                    {c.title}
                  </h3>
                  <span className="inline-block rounded-lg bg-brand group-hover:bg-brand-hover transition-colors text-white text-xs font-semibold px-3.5 py-2">
                    Shop Now
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
