"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { shopByCategory, MAIN_SITE_URL } from "@/lib/data";

export default function CategoryGrid() {
  return (
    <section aria-labelledby="shop-by-category" className="py-14">
      <div className="container-app">
        <h2
          id="shop-by-category"
          className="text-center text-xl md:text-2xl font-bold tracking-wide mb-10"
        >
          SHOP BY CATEGORY
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-x-4 gap-y-8">
          {shopByCategory.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 10) * 0.03 }}
            >
              <Link
  href={`${MAIN_SITE_URL}/collections/${cat.slug}`}
  target="_blank"
  rel="noopener noreferrer"
  className="group flex flex-col items-center text-center"
>
                <span className="relative block h-16 w-16 md:h-20 md:w-20 overflow-hidden rounded-full border border-gray-200 group-hover:border-brand transition-colors">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="80px"
                  />
                </span>
                <span className="text-xs md:text-sm text-gray-700 group-hover:text-brand transition-colors">
                  {cat.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
