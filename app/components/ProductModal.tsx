import { useState, useEffect } from "react";
import { X, Plus, Minus, Candy, CupSoda, Flame, MessageSquare, ShieldAlert, Sparkles, Info } from "lucide-react";
import { type Product, whatsappConfig } from "../data/products";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  quantity: number;
  onAddToCart: (id: string) => void;
  onRemoveFromCart: (id: string) => void;
}

export default function ProductModal({
  product,
  onClose,
  quantity,
  onAddToCart,
  onRemoveFromCart,
}: ProductModalProps) {
  const [activeTab, setActiveTab] = useState<"ingredients" | "nutrition">("ingredients");
  const [imgError, setImgError] = useState(false);

  // Close on Escape key
  useEffect(() => {
    if (!product) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    
    document.addEventListener("keydown", handleKeyDown);
    // Lock scroll
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  // Fallback icon based on category
  const CategoryIcon = {
    drinks: CupSoda,
    sweets: Candy,
    snacks: Flame,
  }[product.category] || Candy;

  // Direct WhatsApp Link for 1 item of this product
  const directWhatsappLink = `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(
    `Bonjour Nûr Snacks !\nJe souhaite commander en direct l'article de la fiche produit :\n• 1x ${product.name} (${product.unit}) — ${product.price.toFixed(2)}€\n\nEst-il disponible pour retrait ? Merci !`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md transition-all duration-300 animate-fade-in">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-md md:max-w-2xl max-h-[85vh] md:max-h-[80vh] bg-white rounded-[2rem] shadow-2xl border border-slate-100 flex flex-col md:flex-row overflow-hidden z-10 animate-scale-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition z-20 cursor-pointer shadow-sm"
          title="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Media Column */}
        <div className={`w-full md:w-1/2 flex items-center justify-center p-4 md:p-6 ${product.bgClass} ${product.colorClass} border-b md:border-b-0 md:border-r border-slate-100 h-[180px] md:h-auto flex-shrink-0 relative`}>
          {!imgError ? (
            <img
              src={product.imagePath}
              alt={product.name}
              className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <CategoryIcon className="w-20 h-20 stroke-[1] select-none" />
          )}

          {product.badge && (
            <span className="absolute top-4 left-4 rounded-full bg-slate-900 px-3 py-1 text-xs font-black uppercase tracking-wider text-white">
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Info Column */}
        <div className="w-full md:w-1/2 p-5 md:p-6 flex flex-col justify-between flex-1 overflow-y-auto min-h-0">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              {product.category === "drinks" ? "Boisson Fraîche" : product.category === "sweets" ? "Confiserie & Chocolat" : "Chips & Salé"}
            </span>
            <h2 className="text-xl md:text-2xl font-black text-slate-950 mt-1 leading-tight">{product.name}</h2>
            
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-xl md:text-2xl font-black text-amber-500">{product.price.toFixed(2)}€</span>
              <span className="text-xs text-slate-500 font-bold">{product.unit}</span>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-slate-700 border-b border-slate-100 pb-3">
              {product.description}
            </p>

            {/* Tab Navigation */}
            <div className="mt-3 flex gap-1 border-b border-slate-100 pb-2">
              <button
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  activeTab === "ingredients"
                    ? "bg-slate-900 text-white"
                    : "text-slate-500 hover:text-slate-900"
                }`}
                onClick={() => setActiveTab("ingredients")}
              >
                Ingrédients
              </button>
              {product.nutrition && (
                <button
                  className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                    activeTab === "nutrition"
                      ? "bg-slate-900 text-white"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                  onClick={() => setActiveTab("nutrition")}
                >
                  Valeurs Nutritionnelles
                </button>
              )}
            </div>

            {/* Tab Contents */}
            <div className="mt-3 text-xs leading-relaxed text-slate-600">
              {activeTab === "ingredients" && (
                <div className="space-y-3">
                  <p>{product.ingredients}</p>
                  
                  {product.allergens && product.allergens.length > 0 && (
                    <div className="flex items-start gap-1.5 rounded-xl bg-rose-50 border border-rose-100 p-2.5 text-rose-900 mt-2">
                      <ShieldAlert className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                      <div className="text-[11px]">
                        <span className="font-bold">Allergènes : </span>
                        {product.allergens.join(", ")}
                      </div>
                    </div>
                  )}

                  {product.category === "sweets" && (
                    <div className="flex items-center gap-1.5 text-[10px] font-black uppercase text-emerald-600">
                      <Sparkles className="w-3.5 h-3.5" /> Certifié Halal HCS
                    </div>
                  )}
                </div>
              )}

              {activeTab === "nutrition" && product.nutrition && (
                <table className="w-full text-left border-collapse">
                  <tbody>
                    <tr className="border-b border-slate-50">
                      <td className="py-1.5 font-bold text-slate-500">Énergie</td>
                      <td className="py-1.5 text-slate-900">{product.nutrition.calories || "-"}</td>
                    </tr>
                    <tr className="border-b border-slate-50">
                      <td className="py-1.5 font-bold text-slate-500">Matières grasses</td>
                      <td className="py-1.5 text-slate-900">{product.nutrition.fat || "-"}</td>
                    </tr>
                    <tr className="border-b border-slate-50">
                      <td className="py-1.5 font-bold text-slate-500">Dont sucres</td>
                      <td className="py-1.5 text-slate-900">{product.nutrition.sugar || "-"}</td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-6 pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
            {/* WhatsApp direct order */}
            <a
              href={directWhatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-600 px-4 py-3.5 text-xs font-black text-white shadow-md shadow-emerald-500/10 transition active:scale-95"
            >
              <MessageSquare className="w-4 h-4" /> Commander en direct
            </a>

            {/* Cart Operations */}
            <div className="flex items-center justify-center gap-2">
              {quantity === 0 ? (
                <button
                  type="button"
                  onClick={() => onAddToCart(product.id)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white px-6 py-3.5 text-xs font-bold shadow-sm transition active:scale-95 cursor-pointer"
                >
                  <Plus className="w-4 h-4" /> Panier
                </button>
              ) : (
                <div className="flex items-center gap-2 bg-amber-100 rounded-2xl p-1.5 border border-amber-200">
                  <button
                    type="button"
                    onClick={() => onRemoveFromCart(product.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white hover:bg-amber-50 text-slate-800 text-sm font-bold transition shadow-sm cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center text-xs font-black text-slate-900">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => onAddToCart(product.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white hover:bg-amber-50 text-slate-800 text-sm font-bold transition shadow-sm cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
