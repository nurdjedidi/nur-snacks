import { useState, useMemo } from "react";
import type { Route } from "./+types/home";
import { ShoppingBag, Candy, CupSoda, Flame } from "lucide-react";

import { productsList, type Product } from "../data/products";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Advantages from "../components/Advantages";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import CartSheet from "../components/CartSheet";
import InfoSections from "../components/InfoSections";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodDeliveryService",
  "name": "Nûr Snacks",
  "image": "https://nur-snacks.fr/images/logo.png",
  "telephone": "+33 6 52 34 89 12",
  "url": "https://nur-snacks.fr",
  "priceRange": "€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Quartier des Couronneries",
    "addressLocality": "Poitiers",
    "postalCode": "86000",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 46.5962,
    "longitude": 0.3544
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Poitiers Couronneries"
  },
  "servesCuisine": "Halal Candies, Chocolates, Cold Drinks, Snacks"
};

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Nûr Snacks | Bonbons, snacks, chocolats & boissons à Poitiers" },
    {
      name: "description",
      content:
        "Commandez vos bonbons, chocolats et boissons fraîches à Poitiers Couronneries. Commande ultra-rapide via WhatsApp.",
    },
    {
      name: "keywords",
      content:
        "bonbons halal poitiers, nur snacks poitiers, epicerie halal couronneries, boisson fraiche poitiers, livraison bonbon poitiers, click and collect poitiers",
    },
    { name: "theme-color", content: "#fdf8f0" },
    { property: "og:title", content: "Nûr Snacks | Bonbons Halal & Boissons Fraîches" },
    {
      property: "og:description",
      content:
        "Découvrez notre catalogue de bonbons halal HCS, chocolats et boissons fraîches à Poitiers. Commande rapide via WhatsApp.",
    },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "drinks" | "sweets" | "snacks">("all");
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const addToCart = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => {
      const next = { ...prev };
      if (!next[id] || next[id] <= 1) {
        delete next[id];
      } else {
        next[id] -= 1;
      }
      return next;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  // Filtering products
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return productsList;
    return productsList.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="min-h-screen pb-32 lg:pb-16 relative">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-0 h-[600px]">
        <div className="absolute top-12 left-[10%] w-72 h-72 rounded-full bg-amber-200/20 blur-3xl animate-float" />
        <div className="absolute top-48 right-[15%] w-80 h-80 rounded-full bg-emerald-200/20 blur-3xl animate-float-delayed" />
        <div className="absolute top-[350px] left-[45%] w-60 h-60 rounded-full bg-rose-200/15 blur-2xl animate-float" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-4 pt-4 sm:px-6 lg:px-8">
        <Header />

        <Hero />

        <Advantages />

        <section id="catalogue" className="mb-14 scroll-mt-24">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 uppercase tracking-wide mb-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" /> Disponible en direct
              </div>
              <h2 className="text-3xl font-extrabold text-slate-950 sm:text-4xl">
                La Carte Gourmande
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-lg">
                Faites votre choix parmi nos boissons fraîches, nos bonbons halal HCS, chocolats et snacks salés. Cliquez sur un produit pour voir ses ingrédients.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 bg-slate-100 p-1.5 rounded-2xl self-start md:self-end">
              {(["all", "drinks", "sweets", "snacks"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${selectedCategory === cat
                    ? "bg-white text-slate-950 shadow-sm tab-active"
                    : "text-slate-500 hover:text-slate-800"
                    }`}
                >
                  {cat === "all" && <span className="flex items-center gap-1.5"><ShoppingBag className="w-3.5 h-3.5" /> Tout</span>}
                  {cat === "drinks" && <span className="flex items-center gap-1.5"><CupSoda className="w-3.5 h-3.5" /> Boissons</span>}
                  {cat === "sweets" && <span className="flex items-center gap-1.5"><Candy className="w-3.5 h-3.5" /> Sucreries</span>}
                  {cat === "snacks" && <span className="flex items-center gap-1.5"><Flame className="w-3.5 h-3.5" /> Salés</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                quantity={cart[product.id] || 0}
                onAddToCart={addToCart}
                onRemoveFromCart={removeFromCart}
                onOpenDetails={setSelectedProduct}
              />
            ))}
          </div>
        </section>

        <InfoSections />

        <FAQ />

        <Footer />
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        quantity={selectedProduct ? cart[selectedProduct.id] || 0 : 0}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
      />

      <CartSheet
        cart={cart}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
        onClearCart={clearCart}
      />
    </main>
  );
}
