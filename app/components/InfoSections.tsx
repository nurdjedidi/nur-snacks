import { Navigation, AlertCircle } from "lucide-react";

export default function InfoSections() {
  return (
    <>
      <section id="click-collect" className="mb-14 rounded-[2.5rem] border border-slate-100 bg-white/70 p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-sm backdrop-blur-sm scroll-mt-24">
        <Navigation className="absolute right-[5%] -top-8 w-32 h-32 text-amber-500 opacity-[0.06] select-none animate-float-delayed" />

        <div className="relative z-10">
          <p className="text-xs font-black uppercase tracking-widest text-amber-700">Simple &amp; Rapide</p>
          <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
            Comment passer commande ?
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 font-black text-lg">1</span>
              <h3 className="font-extrabold text-slate-950 text-sm">Composez votre panier</h3>
              <p className="text-xs leading-relaxed text-slate-600">Sélectionnez vos bonbons, chocolats et boissons fraîches directement depuis le catalogue et ajustez les quantités.</p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 font-black text-lg">2</span>
              <h3 className="font-extrabold text-slate-950 text-sm">Envoyez sur WhatsApp</h3>
              <p className="text-xs leading-relaxed text-slate-600">Un message récapitulatif est pré-rempli. Vous n'avez qu'à l'envoyer et je vous confirme la disponibilité.</p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 font-black text-lg">3</span>
              <h3 className="font-extrabold text-slate-950 text-sm">Retrait ou livraison</h3>
              <p className="text-xs leading-relaxed text-slate-600">Passez récupérer votre commande à proximité ou faites-vous livrer si vous êtes à moins de 500m et que votre commande atteint 5€.</p>
            </div>
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
            <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="text-xs leading-relaxed text-amber-900">
              <span className="font-black">Note de livraison : </span>
              La livraison à domicile est disponible uniquement pour les commandes d'au moins <span className="font-black">5€</span> et dans un rayon de <span className="font-black">500 mètres</span> autour de chez moi (Couronneries, Poitiers). En dehors de ces conditions, le <span className="font-black">retrait sur place</span> est la seule option disponible.
            </div>
          </div>
        </div>
      </section>

      <section className="mb-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-100 bg-white/70 p-6 shadow-sm backdrop-blur-sm">
          <p className="text-xs font-black uppercase tracking-widest text-amber-600">Retrait &amp; Livraison</p>
          <h3 className="mt-2 text-lg font-black text-slate-950">Couronneries, Poitiers</h3>
          <p className="mt-3 text-xs leading-relaxed text-slate-600">
            Le <span className="font-bold text-slate-800">retrait sur place</span> est le mode de fonctionnement principal : vous venez chercher votre commande directement en bas de chez moi ou à proximité immédiate dans les Couronneries. La <span className="font-bold text-slate-800">livraison à domicile</span> est proposée en bonus pour les commandes ≥ 5€ situées dans un rayon de 500 mètres maximum.
          </p>
        </div>
        <div className="rounded-[2rem] border border-slate-100 bg-white/70 p-6 shadow-sm backdrop-blur-sm">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-600">Qualité Certifiée</p>
          <h3 className="mt-2 text-lg font-black text-slate-950">Marques de confiance &amp; Hygiène</h3>
          <p className="mt-3 text-xs leading-relaxed text-slate-600">
            Tous nos produits sont stockés dans des conditions d'hygiène irréprochables (conservation au frais pour les boissons). Nous sélectionnons avec soin nos produits pour garantir une traçabilité totale et des certifications halal authentiques (comme le label HCS pour nos bonbons) sur l'ensemble du catalogue.
          </p>
        </div>
      </section>
    </>
  );
}
