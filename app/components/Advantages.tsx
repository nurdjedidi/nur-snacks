import { ShieldCheck, MapPin, Trophy, MessageSquare, Sparkles } from "lucide-react";

const advantages = [
  {
    title: "100% Halal",
    desc: "Tous nos bonbons et sucreries sont rigoureusement sélectionnés et certifiés Halal par des organismes reconnus comme HCS.",
    iconName: "shield",
  },
  {
    title: "Retrait de Proximité",
    desc: "Venez récupérer votre commande directement en bas de chez moi ou à proximité immédiate dans les Couronneries.",
    iconName: "mappin",
  },
  {
    title: "Catalogue Varié",
    desc: "Profitez d'un choix varié parmi vos snacks favoris et bonbons de qualité.",
    iconName: "trophy",
  },
  {
    title: "Commande WhatsApp",
    desc: "Pas d'inscription : préparez votre panier ici et validez en un clic.",
    iconName: "message",
  },
];

export default function Advantages() {
  return (
    <section id="avantages" className="mb-14">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-xs font-black uppercase tracking-widest text-amber-600">Nos engagements</p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Ce qui rend Nûr Snacks unique
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {advantages.map((item, idx) => {
          const AdvIcon = {
            shield: ShieldCheck,
            mappin: MapPin,
            trophy: Trophy,
            message: MessageSquare,
          }[item.iconName] || Sparkles;

          return (
            <div
              key={idx}
              className="group rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm hover:shadow-md hover:border-amber-100/50 transition-all duration-300"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 group-hover:scale-110 transition-transform">
                <AdvIcon className="w-6 h-6 text-amber-600" />
              </span>
              <h3 className="mt-4 text-base font-extrabold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
