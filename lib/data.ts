// Centralized placeholder content for the storefront.
// Swap image URLs and copy with real catalog data when wiring up a CMS/API.

export type Category = {
  name: string;
  slug: string;
  image: string;
};

export const shopByCategory: Category[] = [
  { name: "Tableware", slug: "tableware", image: "/image/Tableware.jpg" },
  { name: "Serveware", slug: "serveware", image: "/image/Serveware.png" },
  { name: "Glassware", slug: "glassware", image: "/image/Glasssware.jpg" },
  { name: "Cookware", slug: "cookware", image: "/image/Cookware.jpg" },
  { name: "Bakeware", slug: "bakeware", image: "/image/Bakeware.jpg" },
  { name: "Kitchen Utensils & Tools", slug: "kitchen-utensils", image: "/image/Kitchenware and Utensil.png" },
  { name: "Kitchen Storage", slug: "kitchen-storage", image: "/image/Kitchen storage.png" },
  { name: "Chef And Cook", slug: "chef-cook", image: "/image/Chef and cook.png" },
  { name: "Melamine", slug: "melamine", image: "/image/Melamine.png" },
  { name: "Salt & Pepper", slug: "salt-pepper", image: "/image/Salt and pepper.png" },
  { name: "Crystal Decor", slug: "crystal-decor", image: "/image/crystal decor.jpg" },
  { name: "Sculpture & Statue", slug: "sculpture", image: "/image/Sculputure and statue.png" },
  { name: "Islamic Decor", slug: "islamic-decor", image: "/image/Islam Decor.png" },
  { name: "Home Storage", slug: "home-storage", image: "/image/Home storage.jpg" },
  { name: "Home Cleaning", slug: "home-cleaning", image: "/image/Home cleaning.jpg" },
  { name: "Bathroom", slug: "bathroom", image: "/image/Bathroom.jpg" },
  { name: "Bedding", slug: "bedding", image: "/image/Bedding.jpg" },
  { name: "Bins", slug: "bins", image: "/image/Bins.jpg" },
  { name: "Outdoor & BBQ", slug: "outdoor-bbq", image: "/image/Outdoor and BBQ.png" },
  { name: "Rugs & Mats", slug: "rugs-mats", image: "/image/Rugs and Mats.png" },
];

export type MegaMenuLink = {
  name: string;
  url: string;
};

export type MegaMenuColumn = {
  title: string;
  icon: "utensils" | "sofa" | "bath" | "archive" | "sun";
  links: MegaMenuLink[];
};

export const megaMenuColumns: MegaMenuColumn[] = [
  {
    title: "Kitchen & Dining",
    icon: "utensils",
    links: [
      {
        name: "Cookware",
        url: "https://classichomewaregifts.com.au/collections/cookware",
      },
      {
        name: "Bakeware",
        url: "https://classichomewaregifts.com.au/collections/bakeware",
      },
      {
        name: "Tableware",
        url: "https://classichomewaregifts.com.au/collections/white-tableware",
      },
      {
        name: "Serveware",
        url: "https://classichomewaregifts.com.au/collections/serving-tray",
      },
      {
        name: "Glassware",
        url: "https://classichomewaregifts.com.au/collections/glassware",
      },
      {
        name: "Melamine",
        url: "https://classichomewaregifts.com.au/collections/melamine-ware",
      },
      {
        name: "Chef And Cook",
        url: "https://classichomewaregifts.com.au/collections/chef-and-cook",
      },
      {
        name: "Kitchen Storage",
        url: "https://classichomewaregifts.com.au/collections/kitchen-storage-organization",
      },
      {
        name: "Kitchen Utensils",
        url: "https://classichomewaregifts.com.au/collections/utensils",
      },
      {
        name: "Salt & Pepper",
        url: "https://classichomewaregifts.com.au/collections/salt-pepper",
      },
    ],
  },
  {
    title: "Home Living",
    icon: "sofa",
   links: [
  { name: "Home Decor", url: "https://classichomewaregifts.com.au/collections/home-decor" },
  { name: "Crystal Decor", url: "https://classichomewaregifts.com.au/collections/crystal-decor" },
  { name: "Sculpture", url: "https://classichomewaregifts.com.au/collections/statue" },
  { name: "Islamic Decor", url: "https://classichomewaregifts.com.au/collections/islamic-deco" },
  { name: "Rugs & Mats", url: "https://classichomewaregifts.com.au/collections/rugs" },
],
  },
  {
    title: "Bedroom & Bathroom",
    icon: "bath",
    links: [
    {
      name: "Bedding",
      url: "https://classichomewaregifts.com.au/collections/bedding",
    },
    {
      name: "Bathroom",
      url: "https://classichomewaregifts.com.au/collections/bathroom",
    },
  ],
  },
  {
    title: "Storage & Cleaning",
    icon: "archive",
    links: [
      { name: "Home Storage", url: "https://classichomewaregifts.com.au/collections/home-storage-organization" },
      { name: "Bins", url: "https://classichomewaregifts.com.au/collections/paddle-bin" },
      { name: "Home Cleaning", url: "https://classichomewaregifts.com.au/collections/household-cleaning-tools" }
    ],
  },
  {
    title: "Outdoor",
    icon: "sun",
     links: [
    {
      name: "Outdoor BBQ",
      url: "https://classichomewaregifts.com.au/collections/bbq",
    },
  ],
  },

];  

export type Product = {
  id: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  /**
   * Absolute URL to this product's page on the live storefront.
   * Optional — when omitted, cards fall back to a search-by-name URL
   * on the main site (see productLinkFor() below) so a click still
   * lands the visitor on the *right product*, not the collection page.
   * Fill this in per-product once you have the real Shopify URLs.
   */
  productUrl?: string;
};

// Your live storefront — used for any card/link that should send visitors
// off to the real shopping site instead of a placeholder internal route.
export const MAIN_SITE_URL = "https://classichomewaregifts.com.au";

// Canonical main-site URLs for the top navigation destinations.
// Keep these in one place so every component uses the same links.
export const ABOUT_URL = `${MAIN_SITE_URL}/pages/about-us`;
export const BEST_SELLERS_URL = `${MAIN_SITE_URL}/collections/best-sellers-over-20`;
export const NEW_ARRIVALS_URL = `${MAIN_SITE_URL}/collections/all-new-arrivals`;
export const STORES_URL = `${MAIN_SITE_URL}/pages/stores`;
export const CONTACT_URL = `${MAIN_SITE_URL}/pages/contact`;
export const ACCOUNT_URL = `${MAIN_SITE_URL}/account/login`;

/**
 * Returns the best link we can build for a product card:
 * - a real product page if `productUrl` is set on the product, else
 * - a main-site search for the product name (so at least the visitor
 *   lands on that product's search result on the live site rather
 *   than being dumped on the collection page).
 */
export function productLinkFor(product: Product): string {
  return (
    product.productUrl ??
    `${MAIN_SITE_URL}/search?q=${encodeURIComponent(product.name)}`
  );
}

export const bestSellers: Product[] = [
  {
    id: "bs-1",
    name: "Maxima Oval Hot Pot Set of 3",
    price: 129,
    image: "/image/products/bestseller-1.jpg",
    rating: 5,
    reviewCount: 128,
    productUrl: `${MAIN_SITE_URL}/collections/best-sellers-over-20/products/maxima-royale-stainless-steel-hot-pot-set`,
  },
  {
    id: "bs-2",
    name: "Gold Cage Tealight Holder",
    price: 39,
    image: "/image/products/bestseller-2.jpg",
    rating: 4,
    reviewCount: 96,
    productUrl: `${MAIN_SITE_URL}/collections/best-sellers-over-20/products/contemporary-style-gold-metal-utensil-cutelry-holder-11-5-11-5-13-cm`,
  },
  {
    id: "bs-3",
    name: "Flower Shaped Bowl Set, 7 Pcs",
    price: 59,
    image: "/image/products/bestseller-3.jpg",
    rating: 5,
    reviewCount: 74,
    productUrl: `${MAIN_SITE_URL}/collections/best-sellers-over-20/products/dessert-and-nuts-bowl-flower-shape-set-of-7-pcs-big-bowl-10-inch-small-bowls-5-25-inch`,
  },
  {
    id: "bs-4",
    name: "Greek Key Dinner Plate",
    price: 24,
    image: "/image/products/bestseller-4.jpg",
    rating: 5,
    reviewCount: 63,
    productUrl: `${MAIN_SITE_URL}/products/white-ceramic-tableware-ceramic-round-dinner-plate-9`,
  },
];

export const newArrivals: Product[] = [
  {
    id: "na-1",
    name: "Marble & Gold Stripe Vase",
    price: 45,
    image: "/image/products/new-1.jpg",
    rating: 5,
    reviewCount: 12,
    productUrl: `${MAIN_SITE_URL}/collections/all-new-arrivals/products/home-decor-ceramic-vase-40-cm-4`,
  },
  {
    id: "na-2",
    name: "Glass Top Single Burner Gas Stove",
    price: 79,
    image: "/image/products/new-2.jpg",
    rating: 4,
    reviewCount: 18,
    productUrl: `${MAIN_SITE_URL}/collections/all-new-arrivals/products/glass-single-burner-stove`,
  },
  {
    id: "na-3",
    name: "Acrylic Storage Container Set",
    price: 35,
    image: "/image/products/new-3.jpg",
    rating: 4,
    reviewCount: 22,
    productUrl: `${MAIN_SITE_URL}/products/acrylic-airtight-food-canister-set-4-pcs-250-450-350-350ml`,
  },
  {
    id: "na-4",
    name: "Console Table with Mirror",
    price: 249,
    image: "/image/products/new-4.jpg",
    rating: 5,
    reviewCount: 10,
    productUrl: `${MAIN_SITE_URL}/products/elit-artistic-navy-blue-hallway-bedroom-dresser-table-consile-table-and-mirror-sideboard-set-100-75-cm`,
  },
];

export type FeaturedCollection = {
  title: string;
  image: string;
  href: string;
};

export const featuredCollections: FeaturedCollection[] = [
  { title: "Kitchen", image: "/image/rooms/kitchen.png", href: MAIN_SITE_URL },
  { title: "Dining", image: "/image/rooms/dining.png", href: MAIN_SITE_URL },
  { title: "Living Room", image: "/image/rooms/living-room.png", href: MAIN_SITE_URL },
  { title: "Bed Room", image: "/image/rooms/bedroom.png", href: MAIN_SITE_URL },
];

export const brands = ["Maxima", "Pasabahce", "LAV", "Borcam", "Danny Home"];

export type Testimonial = {
  name: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  { name: "Sarah A.", quote: "Excellent quality and fast delivery. Highly recommended!", rating: 5 },
  { name: "James T.", quote: "The dinner set looks even better in person. Beautiful packaging too.", rating: 5 },
  { name: "Amina K.", quote: "Great range of homeware and the prices are very fair for the quality.", rating: 4 },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "New Arrivals", href: NEW_ARRIVALS_URL, external: true },
  { label: "Best Sellers", href: BEST_SELLERS_URL, external: true },
  {
    label: "Shop by Category",
    href: `${MAIN_SITE_URL}/collections`,
    hasMegaMenu: true,
    external: true,
  },
  { label: "About Us", href: ABOUT_URL, external: true },
  { label: "Stores", href: STORES_URL, external: true },
  { label: "Contact Us", href: CONTACT_URL, external: true },
];

export const features = [
  { title: "Wide Range", subtitle: "5000+ Products" },
  { title: "Best Quality", subtitle: "Premium & Durable" },
  { title: "Affordable Prices", subtitle: "Great Value for Money" },
  { title: "Fast Shipping", subtitle: "Australia Wide" },
  { title: "Secure Shopping", subtitle: "Safe & Trusted" },
];
