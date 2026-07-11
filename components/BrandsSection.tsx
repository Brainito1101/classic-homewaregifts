import Link from "next/link";
import { brands } from "@/lib/data";

export default function BrandsSection() {
  return (
    <section aria-label="Featured brands" className="py-12 border-t border-gray-100">
      <div className="container-app">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-lg md:text-xl font-semibold tracking-wide text-gray-400 grayscale transition-all hover:grayscale-0 hover:text-gray-700 cursor-pointer"
            >
              {brand}
            </span>
          ))}
          <Link
            href="/brands"
            className="text-sm font-medium text-brand hover:underline"
          >
            View all brands
          </Link>
        </div>
      </div>
    </section>
  );
}
