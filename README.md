# Classic Homeware & Gifts — eCommerce Landing Page

A pixel-close, production-ready recreation of the reference design: a premium
homeware storefront built with Next.js 15 (App Router), React 19, TypeScript,
Tailwind CSS, Framer Motion, and Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

> Note: `npm run build` needs internet access to fetch the Poppins font from
> Google Fonts on first build (via `next/font/google`). This is normal and
> only happens once — Next.js self-hosts the font files afterward.

## Project structure

```
app/
  layout.tsx      Root layout, SEO metadata, Poppins font
  page.tsx         Homepage — composes every section
  globals.css      Tailwind layers + base styles
components/
  AnnouncementBar.tsx   Dark green top bar with promo message
  SearchBar.tsx         "Search 5000+ products..." bar
  MegaMenu.tsx          Animated "Shop by Category" mega menu
  NavMenu.tsx           Horizontal nav with hover underline + mega menu trigger
  Header.tsx            Sticky header (logo, search, account, cart, mobile menu)
  Hero.tsx              Auto-playing fade slider banner
  CategoryGrid.tsx      Circular "Shop by Category" grid (responsive columns)
  FeaturedCollections.tsx  4 large overlay cards
  ProductCard.tsx       Reusable product card (wishlist, quick view, add to cart)
  ProductSection.tsx    "Best Sellers" / "New Arrivals" grids
  BrandsSection.tsx     Grayscale-hover brand logos strip
  FeaturesSection.tsx   5 icon trust-badges
  Testimonials.tsx      Review slider with arrows + dots
  Newsletter.tsx         Email signup card
  Footer.tsx             5-column dark green footer + payment icons
lib/
  data.ts          All placeholder content (categories, products, brands,
                    testimonials, nav links) — swap with real API/CMS data here
```

## Design tokens

| Token | Value |
|---|---|
| `brand` (primary green) | `#4B7F2B` |
| `brand-hover` | `#5F9938` |
| `brand-dark` / `brand-darker` | `#2F5A1B` / `#20400F` |
| `gold` (accents) | `#C6A15B` |
| Font | Poppins (300–800) |
| Radius | 16px (`rounded-xl2`) |

All tokens live in `tailwind.config.ts` — change them there to re-theme the
whole site.

## Notes on placeholder content

- Product/category images use `picsum.photos` seeded placeholders so every
  image is stable and unique. Swap the URLs in `lib/data.ts` for real product
  photography (already whitelisted in `next.config.mjs` under
  `images.remotePatterns` — add your CDN/domain there too).
- Copy (product names, prices, testimonials, brand names) is realistic
  placeholder data — replace with your real catalog.
- Cart count, search, wishlist, and "Add to Cart" are wired up visually but
  are not connected to real state/checkout — hook them into your cart
  provider or commerce backend (Shopify, Medusa, custom API, etc.).

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`) and `aria-label`s
  throughout.
- Visible focus rings (`focus-visible`) on all interactive elements.
- `prefers-reduced-motion` is respected globally.
- All icon-only buttons have descriptive `aria-label`s.

## Responsive behavior

- Category grid: 2 columns (mobile) → 4 (tablet) → 6–10 (desktop).
- Header collapses into a mobile menu with search + full nav below `lg`.
- Best Sellers / New Arrivals stack vertically below `lg`, 2-up product grid
  at all sizes.
