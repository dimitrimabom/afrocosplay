"use client"
import React, { useMemo } from "react";
import Pill from "./Pill";
import ProductCard from "./ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { ShopProps, Product } from "../lib/types";

const TESTIMONIALS = [
  {
    name: "Naya",
    text: "Qualité au top et vibes afro‑otaku comme j’aime !",
  },
  {
    name: "Kenji",
    text: "Livraison rapide, perruque parfaite pour mon cosplay Tanjiro x Afro style.",
  },
  {
    name: "Aïcha",
    text: "Inclusif, fun et abordable. Afrocosplay c’est la famille !",
  },
];

export default function Shop({ products, onAdd, onFilter, filter, q, setQ }: ShopProps) {
  const categories = ["tout", "perruques", "accessoires", "costumes", "figurines", "goodies"];
  const filtered = useMemo(() => {
    return products.filter((p: Product) =>
      (filter === "tout" || p.category === filter) &&
      (!q || p.name.toLowerCase().includes(q.toLowerCase()))
    );
  }, [products, filter, q]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-black text-brown">Boutique</h2>
        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((c) => (
            <Pill key={c} onClick={() => onFilter(c)} active={filter === c}>
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </Pill>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rechercher un produit…"
          className="w-full md:w-1/2 px-4 py-3 rounded-2xl border focus:outline-none border-rose-light"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filtered.map((product: Product) => (
          <ProductCard key={product.id} product={product} onAdd={onAdd} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center opacity-70">Aucun résultat. Essaie une autre recherche ✨</div>
        )}
      </div>

      <div className="mt-10 grid md:grid-rows-2 gap-6">

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <div className="rounded-3xl w-full p-6 bg-rose-light">
            <h3 className="font-black text-xl text-brown">Nouveautés</h3>
            <p className="opacity-80">Découvre les dernières sorties de la boutique.</p>
            <CarouselContent className="mt-4 flex gap-3 pb-2">
              {products.filter((product: Product) => product.isNew).map((product: Product) => (
          <CarouselItem key={product.id} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <div className="w-full max-w-[300px] mx-auto">
              <ProductCard product={product} onAdd={onAdd} />
            </div>
          </CarouselItem>
              ))}
              {products.filter((product: Product) => product.isNew).length === 0 && (
          <div className="col-span-full text-center opacity-70 py-8 w-full">
            Aucun nouveau produit pour le moment.
          </div>
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <div className="rounded-3xl w-full p-6 bg-yellow">
            <h3 className="font-black text-xl text-black">Meilleures ventes</h3>
            <p className="opacity-80">Les coups de cœur de la communauté.</p>
            <CarouselContent className="mt-4 flex gap-3 pb-2">
              {products.filter((product: Product) => product.isBest).map((product: Product) => (
          <CarouselItem key={product.id} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <div className="w-full max-w-[300px] mx-auto">
              <ProductCard product={product} onAdd={onAdd} />
            </div>
          </CarouselItem>
              ))}
              {products.filter((product: Product) => product.isBest).length === 0 && (
          <div className="col-span-full text-center opacity-70 py-8 w-full">
            Aucun best-seller pour le moment.
          </div>
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>

      <div className="mt-12 rounded-3xl p-6 border border-rose-light">
        <h3 className="font-black text-xl mb-2 text-brown">Témoignages</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((testimonial, i) => (
            <div key={i} className="rounded-2xl p-4 shadow border border-rose-light">
              <div className="font-bold text-brown">{testimonial.name}</div>
              <div className="text-sm mt-1">“{testimonial.text}”</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
