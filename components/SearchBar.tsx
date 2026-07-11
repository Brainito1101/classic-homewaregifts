"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { bestSellers, newArrivals, MAIN_SITE_URL } from "@/lib/data";

function goToMainSiteSearch(query: string) {
  window.open(
    `${MAIN_SITE_URL}/search?q=${encodeURIComponent(query)}`,
    "_blank",
    "noopener,noreferrer"
  );
}

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const allProducts = [...bestSellers, ...newArrivals];

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      goToMainSiteSearch(query);
      setQuery("");
    }
  };

  const searchResults = query.trim()
    ? allProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <form
      role="search"
      aria-label="Site search"
      className="relative hidden md:flex w-full max-w-xl items-stretch"
      onSubmit={handleSearch}
    >
      <label htmlFor="site-search" className="sr-only">
        Search products
      </label>
      <input
        id="site-search"
        type="search"
        placeholder="Search 5000+ products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-l-xl2 border border-gray-200 bg-gray-50/60 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand focus:bg-white"
      />
      <button
        type="submit"
        aria-label="Search"
        className="flex items-center justify-center rounded-r-xl2 bg-brand px-4 text-white transition-colors hover:bg-brand-hover"
      >
        <Search size={18} />
      </button>

      {/* Search suggestions dropdown — clicking a suggestion also sends
          the visitor to that product's search results on the live site */}
      {query.trim() && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <ul className="py-2">
            {searchResults.slice(0, 5).map((product) => (
              <li key={product.id}>
                <button
                  type="button"
                  onClick={() => {
                    goToMainSiteSearch(product.name);
                    setQuery("");
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-brand transition-colors flex items-center gap-2"
                >
                  <Search size={14} className="text-gray-400" />
                  {product.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {query.trim() && searchResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 py-4">
          <p className="text-center text-sm text-gray-500">No products found</p>
        </div>
      )}
    </form>
  );
}
