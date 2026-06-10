import { MapPin, ShoppingBag, Phone, ShieldCheck, Check } from "lucide-react";
import { whatsappConfig } from "../data/products";

export default function Hero() {
  return (
    <section className="mb-14 flex flex-col items-center text-center rounded-[2.5rem] border border-amber-100/50 bg-white/70 p-8 shadow-xl shadow-amber-50/20 backdrop-blur-md sm:p-12 lg:p-16 relative">
      <div className="absolute -right-24 -top-24 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
      <div className="absolute -left-24 -bottom-24 w-64 h-64 rounded-full bg-rose-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1.5 text-xs font-extrabold text-amber-800 uppercase tracking-wider mb-6">
          <MapPin className="w-3.5 h-3.5 text-amber-700 animate-pulse" /> Retrait Rapide • Poitiers Couronneries
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-slate-955 sm:text-5xl lg:text-[3.8rem] leading-[1.1] mb-6">
          Snacks &amp; boissons fraîches à deux pas de chez vous.
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg mb-8">
          Nûr Snacks propose une sélection de bonbons halal, de snacks, de chocolats et de boissons fraîches à Poitiers. Commandez sur WhatsApp et retirez votre commande rapidement près de chez vous.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
          <a
            href="#catalogue"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-amber-500/25 transition hover:bg-amber-600 hover:scale-[1.02] active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" /> Découvrir le Catalogue
          </a>
          <a
            href={whatsappConfig.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50 active:scale-95"
          >
            <Phone className="w-4 h-4" /> Appeler le {whatsappConfig.displayNumber}
          </a>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center items-center gap-3 border-t border-slate-100 pt-8 w-full">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest w-full text-center mb-2">
          Garantie Qualité &amp; Conformité Halal
        </p>

        <div
          className="flex items-center gap-2.5 rounded-2xl border border-rose-100 bg-rose-50/70 px-4 py-3 text-rose-800 shadow-sm transition hover:scale-[1.03] duration-300 group"
          title="Bonbons certifiés Halal par Halal Certification Services (HCS)"
        >
          <ShieldCheck className="w-5 h-5 text-rose-600 group-hover:animate-pulse" />
          <div className="text-left">
            <p className="text-[9px] font-black uppercase tracking-wider text-rose-500">
              Certifié Halal
            </p>
            <p className="text-xs font-extrabold text-slate-800">Organisme HCS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
