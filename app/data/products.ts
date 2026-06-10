export interface Product {
  id: string;
  name: string;
  category: "drinks" | "sweets" | "snacks";
  price: number;
  unit: string;
  description: string;
  ingredients: string;
  allergens?: string[];
  nutrition?: {
    calories?: string;
    sugar?: string;
    fat?: string;
  };
  imagePath: string;
  badge?: string;
  colorClass: string;
  bgClass: string;
}

export const whatsappConfig = {
  phoneNumber: "33698947687",
  displayNumber: "+33 6 98 94 76 87",
  phoneHref: "tel:+33698947687",
};

export const productsList: Product[] = [
  // --- BOISSONS ---
  {
    id: "drink-orangina",
    name: "Orangina",
    category: "drinks",
    price: 1.00,
    unit: "Canette 33cl",
    description: "La boisson rafraîchissante à la pulpe d'orange, sans colorant et sans arômes artificiels.",
    ingredients: "eau gazéifiée, jus d'orange et autres agrumes à base de concentrés 10% (orange 9% dont pulpe 1%, pamplemousse, mandarine), sucre, concentré d'écorces d'orange et de mandarine, acidifiant : acide citrique, arômes naturels d'orange.",
    nutrition: {
      calories: "38 kcal / 100ml",
      sugar: "8.9g / 100ml",
      fat: "0g",
    },
    imagePath: "/images/products/orangina.png",
    badge: "Frais",
    colorClass: "text-amber-600 border-amber-100",
    bgClass: "bg-amber-50/60",
  },
  {
    id: "drink-ice-tea",
    name: "Lipton Ice Tea Pêche",
    category: "drinks",
    price: 1.00,
    unit: "Canette 33cl",
    description: "Thé glacé rafraîchissant saveur pêche, faible en calories.",
    ingredients: "eau, sucre, fructose, acidifiants (acide citrique, acide malique), extrait de thé noir( 1) (0,12%), jus de pêche à base de concentré (0,1%), arômes, correcteur d'acidité (citrates de sodium), antioxydant (acide ascorbique), édulcorant (glycosides de steviol issus de stevia).",
    nutrition: {
      calories: "19 kcal / 100ml",
      sugar: "4.3g / 100ml",
      fat: "0g",
    },
    imagePath: "/images/products/ice-tea.png",
    badge: "Frais",
    colorClass: "text-yellow-600 border-yellow-100",
    bgClass: "bg-yellow-50/60",
  },
  {
    id: "drink-eau",
    name: "Eau de Source",
    category: "drinks",
    price: 0.50,
    unit: "Bouteille 50cl",
    description: "Eau de source naturelle pure et légère, idéale pour s'hydrater tout au long de la journée.",
    ingredients: "Eau de source naturelle.",
    nutrition: {
      calories: "0 kcal",
      sugar: "0g",
      fat: "0g",
    },
    imagePath: "/images/products/water.png",
    badge: "Pur",
    colorClass: "text-sky-600 border-sky-100",
    bgClass: "bg-sky-50/60",
  },

  // --- SUCRERIES ---
  {
    id: "candy-damla",
    name: "Bonbon Damla (l'unité)",
    category: "sweets",
    price: 0.05,
    unit: "À l'unité",
    description: "Bonbon tendre fourré aux fruits. Certifié Halal HCS.",
    ingredients: "Sucre, sirop de glucose, fourrage au goût de melon 10% [sucre, sirop de glucose, jus de pomme concentré 15%, correcteur d'acidité (E330), épaississant (E440), arôme (melon)], fourrage au goût pastèque 10% [sucre, sirop de glucose, jus de pomme concentré 15%, correcteur d'acidité (E330), épaississant (E440), arôme (pastèque), colorant (E163)], dextrose, huile de palme totalement hydrogénée, gélatine de boeuf, correcteur d'acidité (E330), arômes [melon, ananas, pastèque, fruits tropicaux (ananas, mangue, fruit de la passion)], colorants (E100, E160a, E163), concentré de spiruline, émulsifiant (lécithine de tournesol). Peut contenir ds traces de lait",
    imagePath: "/images/products/damla.png",
    badge: "Halal HCS",
    colorClass: "text-pink-600 border-pink-100",
    bgClass: "bg-pink-50/60",
  },
  {
    id: "sweet-snickers-original",
    name: "Snickers Original",
    category: "sweets",
    price: 1.00,
    unit: "Barre 50g",
    description: "La fameuse barre chocolatée au noisette.",
    ingredients: "Sucre, Sirop De Glucose, Cacahuètes, LAIT Écrémé En Poudre, Beurre De Cacao, Pâte De Cacao, Huile De Tournesol, LACTOSE, Matière Grasse Du LAIT, Petit- LAIT En Poudre, Matière Grasse De Palme, Sel, Émulsifiant (Lécithine De SOJA), Blanc D' OEUF En Poudre, Protéine De LAIT, Extrait Naturel De Vanille.",
    allergens: ["Peut contenir noisette"],
    nutrition: {
      calories: "481 kcal / 100g (241 kcal par barre)",
      sugar: "52g / 100g",
      fat: "23g / 100g",
    },
    imagePath: "/images/products/snickers-original.png",
    badge: "Classique",
    colorClass: "text-amber-800 border-amber-100",
    bgClass: "bg-amber-100/30",
  },
  {
    id: "sweet-snickers-mini",
    name: "Snickers Mini",
    category: "sweets",
    price: 0.50,
    unit: "Barre 18g",
    description: "La version miniature de la barre Snickers pour un plaisir rapide et dosé.",
    ingredients: "Sucre, Sirop De Glucose, Cacahuètes, LAIT Écrémé En Poudre, Beurre De Cacao, Pâte De Cacao, Huile De Tournesol, Matière Grasse Du LAIT, LACTOSE, Perméat De Lactosérum (LAIT), Matière Grasse De Palme, Sel, Émulsifiant (Lécithine De SOJA), Blanc D' OEUF En Poudre, Protéine De LAIT, Extrait De Vanille.",
    allergens: ["Peut contenir noisette"],
    nutrition: {
      calories: "488 kcal / 100g",
      sugar: "52g / 100g",
      fat: "23g / 100g",
    },
    imagePath: "/images/products/snickers-mini.png",
    badge: "Mini",
    colorClass: "text-amber-700 border-amber-50",
    bgClass: "bg-amber-50/40",
  },

  // --- SNACKS / CHIPS ---
  {
    id: "snack-bugles-nature",
    name: "Lays 3D Bugles Nature",
    category: "snacks",
    price: 1.00,
    unit: "Sachet 85g",
    description: "Cône de maïs 3D croustillant, idéal pour les petites faims.",
    ingredients: "Farine de maïs, huile de tournesol, base aromatisante nature [arôme naturel, oignon en poudre, correcteurs d'acidité (acide citrique, acétates de sodium), ail en poudre, colorant (extrait de paprika)] sel, sucre.",
    allergens: ["Soja", "Blé", "Gluten"],
    nutrition: {
      calories: "519 kcal / 100g",
      sugar: "3.5g / 100g",
      fat: "31g / 100g",
    },
    imagePath: "/images/products/bugles-nature.png",
    badge: "Craquant",
    colorClass: "text-red-600 border-red-100",
    bgClass: "bg-red-50/60",
  },
  {
    id: "snack-bugles-fromage",
    name: "Lays 3D Bugles Fromage",
    category: "snacks",
    price: 1.00,
    unit: "Sachet 85g",
    description: "Cône de maïs 3D au goût de fromage intense pour un snack gourmand.",
    ingredients: "farine de maïs, huile de tournesol, base aromatisante FROMAGE [arômes (FROMAGE en poudre (LAIT), exhausteurs de goût (glutamate monosodique, guanylate disodique, inosinate disodique), chlorure de potassium, poudre de PETIT-LAIT, colorant (extrait de paprika))], sel, sucre.",
    allergens: ["Soja", "Blé", "Gluten"],
    nutrition: {
      calories: "535 kcal / 100g",
      sugar: "4g / 100g",
      fat: "32g / 100g",
    },
    imagePath: "/images/products/bugles-fromage.png",
    badge: "Craquant",
    colorClass: "text-orange-600 border-orange-100",
    bgClass: "bg-orange-50/60",
  },
  {
    id: "snack-bugles-cacahuete",
    name: "Lays 3D Bugles Cacahuète",
    category: "snacks",
    price: 1.00,
    unit: "Sachet 85g",
    description: "Cône de maïs 3D au goût de cacahuète intense pour un snack gourmand.",
    ingredients: "Ingrédients : farine de maïs, huile de tournesol, pâte de CACAHUÈTES (9%), base aromatisante CACAHUÈTE [arômes (dont NOISETTE, CACAHUÈTE, LAIT, ORGE), farine de BLÉ, exhausteur de goût (glutamate monosodique), cacao en poudre, colorant (extrait de paprika)], sucre, sel.",
    allergens: ["Peut contenir du soja"],
    nutrition: {
      calories: "570 kcal / 100g",
      sugar: "4g / 100g",
      fat: "38g / 100g",
    },
    imagePath: "/images/products/bugles-cacahuete.png",
    badge: "Craquant",
    colorClass: "text-orange-600 border-orange-100",
    bgClass: "bg-red-50/60",
  },
];
