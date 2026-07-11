"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Eye } from "lucide-react";
import type { Product } from "@/lib/data";

export default function ProductCard({
  product,
  linkHref,
  external = false,
}: {
  product: Product;
  /** Override the default internal /product/{id} link, e.g. to send to the live storefront. */
  linkHref?: string;
  /** Open the link in a new tab with rel="noopener noreferrer" — use alongside an external linkHref. */
  external?: boolean;
}) {
  const href = linkHref ?? `/product/${product.id}`;
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <div className="group relative rounded-xl2 border border-gray-100 bg-white p-3 transition-shadow hover:shadow-card">
      <div className="relative aspect-square overflow-hidden rounded-xl2 bg-gray-50">
        <Link href={href} {...externalProps}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </Link>

        <button
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-soft opacity-0 transition-opacity group-hover:opacity-100 hover:text-brand"
        >
          <Heart size={15} />
        </button>

        <button
          className="absolute inset-x-2 bottom-2 flex items-center justify-center gap-1.5 rounded-lg bg-white/95 py-2 text-xs font-medium text-gray-700 opacity-0 shadow-soft transition-opacity group-hover:opacity-100 hover:text-brand"
        >
          <Eye size={14} />
          Quick View
        </button>
      </div>

      <div className="mt-3">
        <Link
          href={href}
          {...externalProps}
          className="block text-sm font-medium text-gray-800 transition-colors line-clamp-2 hover:text-brand"
        >
          {product.name}
        </Link>

        <Link
          href={href}
          {...externalProps}
          className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-brand px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
        >
          View Product
        </Link>
      </div>
    </div>
  );
}
