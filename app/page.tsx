import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedCollections from "@/components/FeaturedCollections";
import ProductSection from "@/components/ProductSection";
import FeaturesSection from "@/components/FeaturesSection";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { bestSellers, newArrivals, BEST_SELLERS_URL, NEW_ARRIVALS_URL } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <CategoryGrid />
        <FeaturedCollections />

        <section aria-label="Best sellers and new arrivals" className="py-8">
          <div className="container-app grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProductSection
              title="Best Sellers"
              products={bestSellers}
              viewAllHref={BEST_SELLERS_URL}
              external
            />
            <ProductSection
              title="New Arrivals"
              products={newArrivals}
              viewAllHref={NEW_ARRIVALS_URL}
              external
            />
          </div>
        </section>

        <FeaturesSection />

        <section aria-label="Testimonials and newsletter" className="py-10">
          <div className="container-app grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Testimonials />
            <Newsletter />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
