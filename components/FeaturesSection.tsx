import { Boxes, ShieldCheck, BadgeDollarSign, Truck, Lock } from "lucide-react";
import { features } from "@/lib/data";

const icons = [Boxes, ShieldCheck, BadgeDollarSign, Truck, Lock];

export default function FeaturesSection() {
  return (
    <section aria-label="Why shop with us" className="py-10 border-t border-gray-100">
      <div className="container-app grid grid-cols-2 gap-8 md:grid-cols-5">
        {features.map((f, i) => {
          const Icon = icons[i];
          return (
            <div key={f.title} className="flex flex-col items-center text-center gap-2">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-light text-brand">
                <Icon size={22} strokeWidth={1.75} />
              </span>
              <span className="text-xs md:text-sm font-semibold text-gray-800">
                {f.title}
              </span>
              <span className="text-[11px] md:text-xs text-gray-400">
                {f.subtitle}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
