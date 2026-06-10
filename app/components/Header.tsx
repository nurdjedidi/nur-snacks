import { Candy, Phone } from "lucide-react";
import { whatsappConfig } from "../data/products";

export default function Header() {
  return (
    <header className="glass-panel sticky top-4 z-40 mb-8 flex items-center justify-between gap-4 rounded-full px-6 py-3 shadow-md">
      <div className="flex items-center gap-2">
        <Candy className="w-6 h-6 text-amber-500 animate-bounce" />
        <div>
          <p className="text-base font-black tracking-tight text-slate-900 uppercase">
            Nûr <span className="text-amber-500 font-extrabold">Snacks</span>
          </p>
          <p className="hidden text-[10px] font-medium text-slate-500 xs:block">
            Poitiers • Couronneries
          </p>
        </div>
      </div>
      
      <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
        <a href="#catalogue" className="hover:text-amber-600 transition">Notre Catalogue</a>
        <a href="#avantages" className="hover:text-amber-600 transition">Pourquoi nous ?</a>
        <a href="#click-collect" className="hover:text-amber-600 transition">Comment commander</a>
        <a href="#faq" className="hover:text-amber-600 transition">FAQ</a>
      </nav>

      <div className="flex items-center gap-2">
        <a
          href={whatsappConfig.phoneHref}
          className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4.5 py-2 text-xs font-bold text-white transition hover:bg-slate-800"
        >
          <Phone className="w-3.5 h-3.5" /> 
          <span className="hidden sm:inline">{whatsappConfig.displayNumber}</span>
          <span className="sm:hidden">Appeler</span>
        </a>
      </div>
    </header>
  );
}
