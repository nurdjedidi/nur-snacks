import { ChevronDown } from "lucide-react";

const faqList = [
  {
    question: "Comment récupérer ma commande ?",
    answer: "Le fonctionnement principal est le retrait sur place : vous venez chercher votre commande directement en bas de chez moi ou à proximité immédiate. On se met d'accord sur le point de rendez-vous par WhatsApp après votre commande.",
  },
  {
    question: "Faites-vous de la livraison à domicile ?",
    answer: "La livraison est exceptionnelle et uniquement disponible pour les commandes d'au minimum 5€ et dans un rayon de 500 mètres. Au-delà de ce périmètre ou en dessous de ce montant, le retrait est obligatoire. En cas de doute, contactez-moi par WhatsApp avant de commander.",
  },
  {
    question: "Les bonbons et confiseries sont-ils réellement Halal ?",
    answer: "Oui, absolument. Nous attachons une grande importance à la conformité religieuse. Nos bonbons de marque Damla possèdent le certificat officiel de conformité Halal de l'organisme HCS (Halal Certification Services).",
  },
  {
    question: "Où se situe le point de retrait ?",
    answer: "Le point de retrait est situé dans le quartier des Couronneries à Poitiers. Une fois votre commande passée sur WhatsApp, je vous communique l'adresse exacte du point de retrait.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="mb-14 scroll-mt-24">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-xs font-black uppercase tracking-widest text-amber-600">FAQ</p>
        <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
          Questions Fréquentes
        </h2>
      </div>

      <div className="grid gap-4 max-w-3xl mx-auto">
        {faqList.map((item, idx) => (
          <details
            key={idx}
            className="faq-item group rounded-3xl border border-slate-200/60 bg-white p-5.5 shadow-sm transition-all duration-300"
          >
            <summary className="flex cursor-pointer items-center justify-between list-none text-sm font-extrabold text-slate-950 outline-none">
              <span>{item.question}</span>
              <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
