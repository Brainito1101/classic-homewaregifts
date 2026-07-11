import { Sparkles, ChevronRight } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-brand-darker via-brand-dark to-brand text-white text-xs md:text-sm">
      {/* Fine gold hairline for a premium edge */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

      <div className="container-app flex items-center justify-center md:justify-between gap-2 py-2.5">
        <p className="flex items-center gap-2 text-center md:text-left tracking-wide">
          <Sparkles size={13} className="hidden sm:inline text-gold" />
          <span className="font-semibold">EOFY SALE IS LIVE</span>
          <span className="mx-1 h-3 w-px bg-white/30 hidden sm:inline-block" />
          <span className="hidden sm:inline text-white/85">Use Code:</span>
          <span className="hidden sm:inline rounded-full border border-gold/60 px-2.5 py-0.5 text-[11px] font-semibold tracking-wider text-gold">
            EOFY20
          </span>
          <span className="mx-1 h-3 w-px bg-white/30 hidden sm:inline-block" />
          <span className="hidden sm:inline text-white/85">
            Get Flat 20% OFF Storewide
          </span>
        </p>
        <button
          aria-label="Next announcement"
          className="hidden md:inline-flex items-center justify-center rounded-full p-1 text-white/80 transition-all hover:translate-x-0.5 hover:text-gold"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}