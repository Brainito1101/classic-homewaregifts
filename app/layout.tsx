import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Classic Homeware & Gifts | Premium Homeware Store Australia",
  description:
    "Shop 5000+ premium homeware products online — tableware, cookware, decor, bedding and more. EOFY Sale: flat 20% off storewide. Fast Australia-wide shipping.",
  keywords: [
    "homeware",
    "kitchenware",
    "tableware",
    "cookware",
    "home decor",
    "Classic Homeware & Gifts",
  ],
  openGraph: {
    title: "Classic Homeware & Gifts | Premium Homeware Store",
    description:
      "Shop 5000+ premium homeware products online. EOFY Sale: flat 20% off storewide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased bg-white text-ink">
        {children}
      </body>
    </html>
  );
}
