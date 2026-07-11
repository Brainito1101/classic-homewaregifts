import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";
import {
  ABOUT_URL,
  CONTACT_URL,
  STORES_URL,
  BEST_SELLERS_URL,
  NEW_ARRIVALS_URL,
  ACCOUNT_URL,
  MAIN_SITE_URL,
} from "@/lib/data";

type FooterLink = { name: string; url: string };

const customerServiceLinks: FooterLink[] = [
  { name: "About Us", url: ABOUT_URL },
  { name: "Contact Us", url: CONTACT_URL },
  { name: "My Account", url: ACCOUNT_URL },
];

const informationLinks: FooterLink[] = [
  { name: "Stores", url: STORES_URL },
  { name: "New Arrivals", url: NEW_ARRIVALS_URL },
  { name: "Best Sellers", url: BEST_SELLERS_URL },
  { name: "Privacy Policy", url: `${MAIN_SITE_URL}/policies/privacy-policy` },
  { name: "Terms & Conditions", url: `${MAIN_SITE_URL}/policies/terms-of-service` },
];

const paymentIcons = ["Visa", "Mastercard", "PayPal", "Afterpay", "Zip"];

export default function Footer() {
  return (
    <footer className="bg-brand-darker text-white">
      <div className="container-app py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <Image
              src="/image/classic-logo.avif"
              alt="Classic Homeware & Gifts"
              width={155}
              height={40}
              className="h-auto w-auto max-h-[40px] brightness-0 invert"
            />
          </div>
          <p className="text-sm text-white/70 mb-4">
            Bringing style, quality and affordable homeware &amp; gifts to every home.
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="https://www.facebook.com/classichomewaregifts/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Facebook size={18} />
            </Link>
            <Link
              href="https://www.instagram.com/classichomewaregifts/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Instagram size={18} />
            </Link>
          </div>
        </div>

        <FooterColumn title="Customer Service" links={customerServiceLinks} />
        <FooterColumn title="Information" links={informationLinks} />

        <div>
          <h4 className="text-sm font-semibold tracking-widest mb-4">CONTACT US</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Phone size={15} className="mt-0.5 shrink-0" />
              <Link href="tel:0413788805" className="hover:text-white transition-colors">
                0413 788 805
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={15} className="mt-0.5 shrink-0" />
              <Link
                href="mailto:office@classichomewaregifts.com.au"
                className="hover:text-white transition-colors"
              >
                office@classichomewaregifts.com.au
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-app py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Classic Homeware &amp; Gifts. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="rounded border border-white/20 px-2 py-1 text-[10px] font-medium tracking-wide"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold tracking-widest mb-4">{title.toUpperCase()}</h4>
      <ul className="space-y-2.5 text-sm text-white/70">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
