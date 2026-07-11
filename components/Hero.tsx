import Image from "next/image";
import Link from "next/link";
import { MAIN_SITE_URL } from "@/lib/data";

export default function Hero() {
  return (
    <section aria-label="EOFY Sale promotion" className="relative bg-white">
      <div className="relative aspect-[3/1] w-full min-h-[220px] sm:min-h-[300px] lg:min-h-0">
        <Image
          src="/hero-eofy-sale.webp"
          alt="EOFY Sale — Flat 20% off storewide. No minimum spend needed, valid for limited time only. Special offer — Sydney's favourite food warmers, Maxima products 10% off."
          fill
          priority
          quality={100}
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Real, clickable CTA button positioned over the "SHOP BEFORE IT'S GONE"
            graphic in the image. Percentage-based so it stays aligned at every
            screen size since the image container keeps a fixed aspect ratio. */}
        <Link
          href={`${MAIN_SITE_URL}/collections`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Shop before it's gone — EOFY Sale, flat 20% off storewide"
          className="group absolute rounded-sm outline-offset-4 transition-transform hover:scale-[1.03] focus-visible:scale-[1.03]"
          style={{
            left: "53.5%",
            top: "70%",
            width: "19%",
            height: "10%",
          }}
        >
          <span className="block h-full w-full rounded-sm ring-0 ring-white/0 transition-all group-hover:ring-4 group-hover:ring-white/40" />
        </Link>
      </div>
    </section>
  );
}