"use client"
import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Shop from "../components/Shop";
import EventsPage from "../components/EventsPage";
import AboutPage from "../components/AboutPage";
import ContactPage from "../components/ContactPage";
import CartPage from "../components/CartPage";
import PrimaryButton from "../components/PrimaryButton";

// // Palette
// const PALETTE = {
//   rose-light: "#FAD1D8",
//   rose-dark: "#E9958F",
//   brown: "#4A2C24",
//   yellow: "#FFD633",
//   white: "#FFFFFF",
//   black: "#000000",
// };

// Demo data (replace with real backend later)
const PRODUCTS = [
  {
    id: "wig-1",
    name: "Perruque Afro Pink Kawaii",
    price: 6000,
    category: "perruques",
    img: "https://images.unsplash.com/photo-1576378472295-596704e00e19?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 12,
    isNew: true,
    isBest: true,
    rating: 4.7,
  },
  {
    id: "acc-1",
    name: "Cornes de Démon Soft Touch",
    price: 15000,
    category: "accessoires",
    img: "https://images.unsplash.com/photo-1571343220646-cc0bb13cc287?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 30,
    isNew: true,
    isBest: false,
    rating: 4.5,
  },
  {
    id: "cos-1",
    name: "Costume Héroïne Wakanda",
    price: 1200,
    category: "costumes",
    img: "https://images.unsplash.com/photo-1729284439352-1e1d47c311c4?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 6,
    isNew: false,
    isBest: true,
    rating: 4.8,
  },
  {
    id: "fig-1",
    name: "Figurine Mecha Lion d'Afrique",
    price: 4900,
    category: "figurines",
    img: "https://images.unsplash.com/photo-1698930555574-63c63c900eab?q=80&w=833&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 0,
    isNew: false,
    isBest: false,
    rating: 4.2,
  },
  {
    id: "goo-1",
    name: "Goodies Stickers Afro (pack 20)",
    price: 9000,
    category: "goodies",
    img: "https://images.unsplash.com/photo-1551118947-e8ac311d4901?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 50,
    isNew: true,
    isBest: true,
    rating: 4.6,
  },
  {
    id: "cos-2",
    name: "Cape Super‑Sapeur",
    price: 5000,
    category: "costumes",
    img: "https://images.unsplash.com/photo-1641156453619-6772746efab6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 9,
    isNew: true,
    isBest: false,
    rating: 4.4,
  },
];

export default function AfrocosplayApp() {
  const [page, setPage] = useState("accueil");
  const [products, setProducts] = useState(PRODUCTS);
  const [filter, setFilter] = useState("tout");
  const [q, setQ] = useState("");
  const [cart, setCart] = useState<any[]>([]);

  function addToCart(p: any) {
    // decrease stock
    setProducts((prev) => prev.map((x) => (x.id === p.id ? { ...x, stock: x.stock - 1 } : x)));
    setCart((prev) => {
      const found = prev.find((i) => i.id === p.id);
      if (found) return prev.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { ...p, qty: 1 }];
    });
  }

  function updateQty(item: any, qty: number) {
    setCart((prev) => prev.map((i) => (i.id === item.id ? { ...i, qty } : i)));
  }

  function removeItem(item: any) {
    setCart((prev) => prev.filter((i) => i.id !== item.id));
  }

  function checkout() {
    alert("Paiement simulé ✅ — Intégrer PayPal/Mobile Money/CB côté serveur.");
  }

  const cartCount = cart.reduce((s, c) => s + c.qty, 0);

  return (
    <div className="bg-white text-black">
      {/* Font imports */}
      
      <Header cartCount={cartCount} onNav={setPage} current={page} />

      {page === "accueil" && (
        <>
          <Hero onShop={() => setPage("boutique")} />
          <Shop products={products} onAdd={addToCart} onFilter={setFilter} filter={filter} q={q} setQ={setQ} />
        </>
      )}

      {page === "boutique" && (
        <Shop products={products} onAdd={addToCart} onFilter={setFilter} filter={filter} q={q} setQ={setQ} />
      )}
      {page === "evenements" && <EventsPage />}
      {page === "apropos" && <AboutPage />}
      {page === "contact" && <ContactPage />}
      {page === "panier" && (
        <CartPage cart={cart} onQty={updateQty} onRemove={removeItem} onCheckout={checkout} />
      )}

      <footer className="mt-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-6">
          <div>
            <div className="font-black text-xl">AfroCosplay</div>
            <p className="text-sm opacity-80 mt-2">Cosplay inclusif, joyeux et accessible à tous.</p>
          </div>
          <div>
            <div className="font-bold mb-2">Boutique</div>
            <ul className="space-y-1 text-sm opacity-90">
              <li>Perruques</li>
              <li>Accessoires</li>
              <li>Costumes</li>
              <li>Figurines</li>
              <li>Goodies</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Entreprise</div>
            <ul className="space-y-1 text-sm opacity-90">
              <li>À propos</li>
              <li>Événements</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Newsletter</div>
            <div className="flex gap-2">
              <input placeholder="Email" className="px-4 py-2 rounded-xl text-black" />
              <PrimaryButton onClick={() => alert("Merci, checke ta boîte mail !")}>OK</PrimaryButton>
            </div>
          </div>
        </div>
        <div className="px-4 py-4 text-center text-xs opacity-70">className © {new Date().getFullYear()} Afrocosplay - Design by altplus</div>
      </footer>
    </div>
  );
}
