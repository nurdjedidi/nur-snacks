import { useState } from "react";
import { Plus, Minus, Candy, CupSoda, Flame, MessageSquare } from "lucide-react";
import { type Product, whatsappConfig } from "../data/products";

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAddToCart: (id: string) => void;
  onRemoveFromCart: (id: string) => void;
  onOpenDetails: (product: Product) => void;
}

export default function ProductCard({
  product,
  quantity,
  onAddToCart,
  onRemoveFromCart,
  onOpenDetails,
}: ProductCardProps) {
  const [imgError, setImgError] = useState(false);

  // Fallback icon based on category
  const CategoryIcon = {
    drinks: CupSoda,
    sweets: Candy,
    snacks: Flame,
  }[product.category] || Candy;

  // Direct WhatsApp Link for 1 item of this product
  const directWhatsappLink = `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(
    `Bonjour Nûr Snacks !\nJe souhaite passer une commande rapide en direct de :\n• 1x ${product.name} (${product.unit}) — ${product.price.toFixed(2)}€\n\nEst-il disponible pour un retrait ? Merci !`
  )}`;

  return (
    <article
      className={`group relative rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex flex-col justify-between cursor-pointer ${
        quantity > 0 ? "ring-2 ring-amber-400 border-transparent bg-amber-50/5" : ""
      }`}
      onClick={() => onOpenDetails(product)}
    >
      <div>
        {/* Conteneur d'image / Icône de rechange */}
        <div className={`relative mb-4 flex h-40 w-full items-center justify-center rounded-2xl border ${product.bgClass} ${product.colorClass} overflow-hidden`}>
          {!imgError ? (
            <img
              src={product.imagePath}
              alt={product.name}
              className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-110"
              onError={() => setImgError(true)}
              onClick={(e) => {
                // Prevent trigger parent click twice if they click image
                e.stopPropagation();
                onOpenDetails(product);
              }}
            />
          ) : (
            <CategoryIcon className="w-16 h-16 stroke-[1.5] group-hover:scale-110 transition-transform duration-300 select-none" />
          )}
          
          {product.badge && (
            <span className="absolute top-3 right-3 rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white z-10">
              {product.badge}
            </span>
          )}
        </div>

        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-extrabold text-slate-950 group-hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
          <div className="text-right flex-shrink-0">
            <span className="text-base font-black text-slate-950">{product.price.toFixed(2)}€</span>
            <p className="text-[10px] text-slate-500 font-medium">{product.unit}</p>
          </div>
        </div>

        <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-2">
          {product.description}
        </p>
      </div>

      {/* Contrôles du Panier & Commande Directe */}
      <div className="mt-5 flex items-center justify-between gap-2" onClick={(e) => e.stopPropagation()}>
        {/* Commande Directe WhatsApp */}
        <a
          href={directWhatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 rounded-xl border border-emerald-100 hover:border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-2.5 py-2 text-[10px] font-extrabold transition shadow-sm"
          title="Commander cet article en direct sur WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
          <span className="hidden xs:inline">Direct</span>
        </a>

        {quantity === 0 ? (
          <button
            type="button"
            onClick={() => onAddToCart(product.id)}
            className="inline-flex items-center gap-1 rounded-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 text-xs font-bold shadow-sm transition active:scale-95"
          >
            <Plus className="w-3.5 h-3.5" /> Ajouter
          </button>
        ) : (
          <div className="flex items-center gap-1 bg-amber-100 rounded-full p-1 border border-amber-200">
            <button
              type="button"
              onClick={() => onRemoveFromCart(product.id)}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white hover:bg-amber-50 text-slate-800 text-xs font-bold transition shadow-sm"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-6 text-center text-xs font-extrabold text-slate-900">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => onAddToCart(product.id)}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white hover:bg-amber-50 text-slate-800 text-xs font-bold transition shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
