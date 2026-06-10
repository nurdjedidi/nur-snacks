import { useState, useMemo } from "react";
import { ShoppingBag, ChevronUp, ChevronDown, Info, Trash2, MessageSquare, Minus, Plus } from "lucide-react";
import { type Product, productsList, whatsappConfig } from "../data/products";

interface CartSheetProps {
  cart: { [key: string]: number };
  onAddToCart: (id: string) => void;
  onRemoveFromCart: (id: string) => void;
  onClearCart: () => void;
}

export default function CartSheet({
  cart,
  onAddToCart,
  onRemoveFromCart,
  onClearCart,
}: CartSheetProps) {
  const [isOpen, setIsOpen] = useState(false);

  const cartItems = useMemo(() => {
    return Object.entries(cart)
      .map(([id, qty]) => {
        const product = productsList.find((p) => p.id === id);
        return product ? { product, qty } : null;
      })
      .filter((item): item is { product: Product; qty: number } => item !== null && item.qty > 0);
  }, [cart]);

  const totalItemsCount = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.qty, 0);
  }, [cartItems]);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  }, [cartItems]);

  // WhatsApp link generator
  const whatsappOrderHref = useMemo(() => {
    if (cartItems.length === 0) return "#";

    const itemsText = cartItems.map(
      (item) => `• ${item.qty}x ${item.product.name} (${item.product.unit}) — ${(item.product.price * item.qty).toFixed(2)}€`
    );

    const deliveryNote = totalPrice >= 5
      ? `Mode : Retrait ou Livraison (~500m max) si dispo`
      : `Mode : Retrait uniquement (total < 5€)`;

    const messageText = `Bonjour Nûr Snacks !\nJe souhaite passer une commande :\n\n${itemsText.join(
      "\n"
    )}\n\nTotal : ${totalPrice.toFixed(2)}€\n${deliveryNote}\n\nPouvez-vous me confirmer la disponibilite et le point de RDV ? Merci !`;

    return `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(messageText)}`;
  }, [cartItems, totalPrice]);

  if (totalItemsCount === 0) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 bg-slate-950 text-white shadow-2xl border-t border-slate-800 transition-all duration-300">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">

        {isOpen && (
          <div className="py-4 border-b border-slate-800 max-h-[300px] overflow-y-auto animate-fade-in">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Détail du panier</h4>
              <button
                onClick={onClearCart}
                className="inline-flex items-center gap-1 text-[10px] font-bold text-rose-400 hover:text-rose-300 transition"
              >
                <Trash2 className="w-3.5 h-3.5" /> Vider
              </button>
            </div>

            <div className="space-y-3">
              {cartItems.map(({ product, qty }) => (
                <div key={product.id} className="flex items-center justify-between text-xs py-1">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-amber-400">{qty}x</span>
                    <div>
                      <p className="font-bold">{product.name}</p>
                      <p className="text-[9px] text-slate-500">{product.unit}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-extrabold">{(product.price * qty).toFixed(2)}€</span>

                    <div className="flex items-center gap-1 bg-slate-900 rounded-full p-0.5 border border-slate-800">
                      <button
                        type="button"
                        onClick={() => onRemoveFromCart(product.id)}
                        className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-white transition cursor-pointer"
                      >
                        <Minus className="w-2.5 h-2.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onAddToCart(product.id)}
                        className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-white transition cursor-pointer"
                      >
                        <Plus className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`flex items-start gap-2 rounded-2xl px-4 py-2.5 text-xs font-semibold mt-4 ${totalPrice >= 5
                ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                : "bg-amber-500/10 text-amber-300 border border-amber-500/20"
              }`}>
              <Info className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
              {totalPrice >= 5
                ? `Félicitations ! Vous êtes éligible à la livraison si vous habitez à moins de 500m.`
                : `Retrait uniquement en dessous de 5€ — ajoutez encore ${(5 - totalPrice).toFixed(2)}€ pour la livraison.`
              }
            </div>
          </div>
        )}

        <div className="py-4 flex items-center justify-between gap-4">
          <div
            className="flex items-center gap-2 cursor-pointer select-none group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative rounded-2xl bg-amber-500 p-2.5 text-white shadow-md group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 border border-white text-[10px] font-black">
                {totalItemsCount}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-400">Total panier</span>
                {isOpen ? <ChevronDown className="w-3.5 h-3.5 text-slate-400" /> : <ChevronUp className="w-3.5 h-3.5 text-slate-400" />}
              </div>
              <p className="text-xl font-black text-amber-400 leading-tight">
                {totalPrice.toFixed(2)}€
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hidden sm:inline-flex rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-xs font-extrabold text-slate-400 hover:text-white transition cursor-pointer"
            >
              {isOpen ? "Masquer détails" : "Détails"}
            </button>

            <a
              href={whatsappOrderHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-600 px-5 py-3 text-xs font-black text-white shadow-lg shadow-emerald-500/20 transition active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Commander <span className="hidden xs:inline">sur WhatsApp</span></span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
