"use client";
import React, { useMemo } from "react";
import Pill from "./Pill";
import ProductCard from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ShopProps, Product } from "../lib/types";

// Types pour les témoignages
interface Testimonial {
  name: string;
  text: string;
}

// Données des témoignages
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Naya",
    text: "Qualité au top et vibes afro‑otaku comme j'aime !",
  },
  {
    name: "Kenji",
    text: "Livraison rapide, perruque parfaite pour mon cosplay Tanjiro x Afro style.",
  },
  {
    name: "Aïcha",
    text: "Inclusif, fun et abordable. Afrocosplay c'est la famille !",
  },
];

// Catégories disponibles
const CATEGORIES = [
  "tout",
  "perruques",
  "accessoires",
  "costumes",
  "figurines",
  "goodies",
] as const;

// Composant pour la barre de recherche
const SearchBar = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => (
  <div className="mt-4">
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Rechercher un produit…"
      className="w-full md:w-1/2 px-4 py-3 rounded-2xl border focus:outline-none border-rose-light"
    />
  </div>
);

// Composant pour les filtres de catégories
const CategoryFilters = ({
  categories,
  activeFilter,
  onFilterChange,
}: {
  categories: readonly string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}) => (
  <div className="flex items-center gap-2 flex-wrap">
    {categories.map((category) => (
      <Pill
        key={category}
        onClick={() => onFilterChange(category)}
        active={activeFilter === category}
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </Pill>
    ))}
  </div>
);

// Composant pour la grille de produits
const ProductGrid = ({
  products,
  onAdd,
}: {
  products: Product[];
  onAdd: (product: Product) => void;
}) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} onAdd={onAdd} />
    ))}
    {products.length === 0 && (
      <div className="col-span-full text-center opacity-70">
        Aucun résultat. Essaie une autre recherche ✨
      </div>
    )}
  </div>
);

// Composant pour un carousel de produits
const ProductCarousel = ({
  title,
  description,
  products,
  onAdd,
  bgColor,
  textColor,
}: {
  title: string;
  description: string;
  products: Product[];
  onAdd: (product: Product) => void;
  bgColor: string;
  textColor: string;
}) => (
  <Carousel opts={{ align: "start" }} className="w-full overflow-hidden">
    <div className={`rounded-xl w-full p-6 ${bgColor}`}>
      <h3 className={`font-black text-xl ${textColor}`}>{title}</h3>
      <p className="opacity-80">{description}</p>
      <CarouselContent className="mt-4 -ml-2 md:-ml-4 w-full">
        {products.length > 0 ? (
          products.map((product) => (
            <CarouselItem
              key={product.id}
              className="pl-2 md:pl-4 basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/3"
            >
              <div className="h-full">
                <ProductCard product={product} onAdd={onAdd} />
              </div>
            </CarouselItem>
          ))
        ) : (
          <div className="col-span-full text-center opacity-70 py-8 w-full">
            Aucun produit pour le moment.
          </div>
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </div>
  </Carousel>
);

// Composant pour les témoignages
const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => (
  <div className="mt-12 rounded-xl p-6 border border-rose-light">
    <h3 className="font-black text-xl mb-2 text-brown">Témoignages</h3>
    <div className="grid md:grid-cols-3 gap-4">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="rounded-2xl p-4 shadow border border-rose-light"
        >
          <div className="font-bold text-brown">{testimonial.name}</div>
          <div className="text-sm mt-1">&ldquo;{testimonial.text}&rdquo;</div>
        </div>
      ))}
    </div>
  </div>
);

// Composant principal Shop
export default function Shop({
  products,
  onAdd,
  onFilter,
  filter,
  q,
  setQ,
}: ShopProps) {
  // Filtrage des produits avec useMemo pour optimiser les performances
  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        (filter === "tout" || product.category === filter) &&
        (!q || product.name.toLowerCase().includes(q.toLowerCase()))
    );
  }, [products, filter, q]);

  // Produits nouveaux et best-sellers
  const newProducts = useMemo(
    () => products.filter((product) => product.isNew),
    [products]
  );

  const bestProducts = useMemo(
    () => products.filter((product) => product.isBest),
    [products]
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* En-tête avec titre et filtres */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-black text-brown">Boutique</h2>
        <CategoryFilters
          categories={CATEGORIES}
          activeFilter={filter}
          onFilterChange={onFilter}
        />
      </div>

      {/* Barre de recherche */}
      <SearchBar value={q} onChange={setQ} />

      {/* Grille de produits filtrés */}
      <ProductGrid products={filteredProducts} onAdd={onAdd} />

      {/* Carousels de produits */}
      <div className="mt-10 grid md:grid-rows-2 gap-6">
        <ProductCarousel
          title="Nouveautés"
          description="Découvre les dernières sorties de la boutique."
          products={newProducts}
          onAdd={onAdd}
          bgColor="bg-rose-light"
          textColor="text-brown"
        />

        <ProductCarousel
          title="Meilleures ventes"
          description="Les coups de cœur de la communauté."
          products={bestProducts}
          onAdd={onAdd}
          bgColor="bg-yellow"
          textColor="text-black"
        />
      </div>

      {/* Section témoignages */}
      <Testimonials testimonials={TESTIMONIALS} />
    </section>
  );
}
