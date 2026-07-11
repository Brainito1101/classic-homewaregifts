"use client";

import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="relative overflow-hidden rounded-xl2 border border-gray-100 bg-brand-light p-6 md:p-8">
      <div className="relative z-10 max-w-xs">
        <h3 className="text-lg md:text-xl font-bold text-ink mb-2">
          Stay Updated
        </h3>
        <p className="text-sm text-gray-600 mb-5">
          Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
        </p>
        <form
          className="flex overflow-hidden rounded-xl2 shadow-soft"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Enter your email address"
            className="w-full min-w-0 bg-white px-4 py-3 text-sm outline-none"
          />
          <button
            type="submit"
            className="shrink-0 bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="pointer-events-none absolute -right-6 -bottom-6 h-40 w-40 md:h-48 md:w-48 opacity-90">
        <Image
          src="https://picsum.photos/seed/plantpot/300/300"
          alt="Decorative indoor plant in a ceramic pot"
          fill
          className="object-contain"
          sizes="200px"
        />
      </div>
    </div>
  );
}
