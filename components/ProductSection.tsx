import Link from "next/link";
import { productLinkFor, type Product } from "@/lib/data";
import ProductCard from "./ProductCard";

export default function ProductSection({
  title,
  products,
  viewAllHref,
  external = false,
}: {
  title: string;
  products: Product[];
  viewAllHref: string;
  /** When true, "View all" and every product card link out (new tab) instead of using internal routes. */
  external?: boolean;
}) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <div className="rounded-xl2 border border-gray-100 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm md:text-base font-bold tracking-widest text-gray-800">
          {title.toUpperCase()}
        </h3>
        <Link
          href={viewAllHref}
          {...externalProps}
          className="text-xs md:text-sm font-medium text-brand hover:underline"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            // When linking to the live storefront, each card must go to
            // that specific product's page (or its search-by-name URL as
            // a fallback), NOT to the shared collection URL — otherwise
            // every card dumps the visitor on the same collection page.
            linkHref={external ? productLinkFor(p) : undefined}
            external={external}
          />
        ))}
      </div>
    </div>
  );
}
