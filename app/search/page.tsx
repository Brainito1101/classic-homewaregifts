"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { bestSellers, newArrivals } from "@/lib/data";
import Link from "next/link";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const allProducts = [...bestSellers, ...newArrivals];
  const results = query.trim()
    ? allProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <section className="py-12">
      <div className="container-app">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Search Results
          </h1>
          <p className="text-gray-600">
            {query && (
              <>
                Found <span className="font-semibold text-brand">{results.length}</span> product{results.length !== 1 ? "s" : ""} for{" "}
                <span className="font-semibold">&ldquo;{query}&rdquo;</span>
              </>
            )}
          </p>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 mb-4">
              {query ? "No products found matching your search." : "Enter a search term to find products."}
            </p>
            <Link
              href="/"
              className="inline-block mt-4 px-6 py-2.5 bg-brand text-white rounded-lg hover:bg-brand-hover transition-colors"
            >
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default function SearchPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <Suspense
          fallback={
            <div className="container-app py-12 text-gray-500">Loading results…</div>
          }
        >
          <SearchResults />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
