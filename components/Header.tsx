"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { User, ShoppingCart, Menu, X, Search } from "lucide-react";
import AnnouncementBar from "./AnnouncementBar";
import SearchBar from "./SearchBar";
import NavMenu from "./NavMenu";
import { navLinks, MAIN_SITE_URL, ACCOUNT_URL } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState("");
  const cartCount = 0;

  const handleMobileSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (mobileSearch.trim()) {
      window.open(
        `${MAIN_SITE_URL}/search?q=${encodeURIComponent(mobileSearch)}`,
        "_blank",
        "noopener,noreferrer"
      );
      setMobileSearch("");
      setMobileOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_16px_rgba(20,40,10,0.06)]">
      <AnnouncementBar />

      <div className="container-app">
        <div className="flex items-center justify-between gap-4 py-4 md:py-5">
          {/* Logo */}
          <Link href="/" className="group flex shrink-0 items-center gap-1">
            <Image
              src="/image/classic-logo.avif"
              alt="Classic Homeware & Gifts"
              width={155}
              height={40}
              priority
              className="h-auto w-auto max-h-[45px]"
            />
          </Link>

          {/* Search */}
          <SearchBar />

          {/* Right actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link
              href={ACCOUNT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2.5 text-sm text-gray-700 sm:flex"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors group-hover:bg-brand-light group-hover:text-brand">
                <User size={19} />
              </span>
              <span className="leading-tight text-left">
                <span className="block text-[11px] text-gray-400">
                  Login / Signup
                </span>
                <span className="block font-semibold text-ink transition-colors group-hover:text-brand">
                  My Account
                </span>
              </span>
            </Link>

            <span className="hidden h-8 w-px bg-gray-200 sm:block" />

            <Link
              href="/cart"
              aria-label={`Cart, ${cartCount} items`}
              className="group relative flex items-center gap-2.5 text-gray-700"
            >
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors group-hover:bg-brand-light group-hover:text-brand">
                <ShoppingCart size={19} />
                <span className="absolute -top-1.5 -right-1.5 flex h-[18px] w-[18px] min-w-[18px] items-center justify-center rounded-full bg-brand px-1 text-[10px] font-bold text-white shadow-sm">
                  {cartCount}
                </span>
              </span>
              <span className="hidden text-sm font-semibold text-ink transition-colors group-hover:text-brand sm:inline">
                Cart
              </span>
            </Link>

            <button
              aria-label="Toggle menu"
              className="text-gray-700 lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <NavMenu />
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="container-app py-4">
            <form onSubmit={handleMobileSearch} className="flex mb-4">
              <label htmlFor="mobile-search" className="sr-only">
                Search products
              </label>
              <input
                id="mobile-search"
                type="search"
                placeholder="Search 5000+ products..."
                value={mobileSearch}
                onChange={(e) => setMobileSearch(e.target.value)}
                className="w-full rounded-l-xl2 border border-gray-200 px-4 py-2.5 text-sm outline-none"
              />
              <button
                type="submit"
                aria-label="Search"
                className="flex items-center justify-center bg-brand px-4 rounded-r-xl2 text-white"
              >
                <Search size={18} />
              </button>
            </form>
            <ul className="flex flex-col gap-1 text-sm font-medium text-gray-700">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="block py-2.5 border-b border-gray-50 hover:text-brand transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}