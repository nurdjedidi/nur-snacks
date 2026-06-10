import { MessageSquare, Phone } from "lucide-react";
import { whatsappConfig } from "../data/products";

export default function Footer() {
  return (
    <section
      id="contact"
      className="rounded-[2.5rem] bg-slate-950 px-8 py-10 text-white shadow-2xl relative overflow-hidden"
    >
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center relative z-10">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-amber-400">Une envie de dernière minute ?</p>
          <h2 className="mt-2 text-3xl font-black">Contactez Nûr Snacks</h2>
          <p className="mt-3 max-w-xl text-xs leading-relaxed text-slate-400">
            Vous avez une question sur nos stocks, nos produits ou tout autre sujet ? Nous sommes disponibles et répondons très vite.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`https://wa.me/${whatsappConfig.phoneNumber}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-600 px-6 py-3.5 text-xs font-bold text-white shadow-lg transition active:scale-95"
          >
            <MessageSquare className="w-4 h-4" /> WhatsApp Direct
          </a>
          <a
            href={whatsappConfig.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 hover:bg-white/15 px-6 py-3.5 text-xs font-bold text-white transition active:scale-95"
          >
            <Phone className="w-4 h-4" /> Nous téléphoner
          </a>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[11px] text-slate-500">
        <p>© {new Date().getFullYear()} Nûr Snacks Poitiers. Tous droits réservés.</p>
        <p>Conçu pour une expérience mobile ultra-rapide.</p>
      </div>
    </section>
  );
}
