"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <div className="rounded-xl2 border border-gray-100 p-6 md:p-8">
      <h3 className="text-sm md:text-base font-bold tracking-widest text-gray-800 mb-4">
        WHAT OUR CUSTOMERS SAY
      </h3>

      <div className="flex items-center gap-4">
        <button
          aria-label="Previous testimonial"
          onClick={() => go(-1)}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-brand hover:text-brand transition-colors"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex-1 text-center">
          <div className="mb-2 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className={
                  i < t.rating ? "fill-brand text-brand" : "fill-gray-200 text-gray-200"
                }
              />
            ))}
          </div>
          <p className="text-sm text-gray-600 italic">&ldquo;{t.quote}&rdquo;</p>
          <p className="mt-2 text-sm font-semibold text-gray-800">— {t.name}</p>
        </div>

        <button
          aria-label="Next testimonial"
          onClick={() => go(1)}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-brand hover:text-brand transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-brand" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
