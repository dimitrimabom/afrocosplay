import Pill from "./Pill";
import { HeaderProps } from "../lib/types";
import Image from "next/image";

export default function Header({ cartCount, onNav, current }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-b-rose-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-2xl grid place-items-center font-black text-white">
            <Image
              src="/logo.png"
              alt="logo"
              width={400}
              height={400}
              className="w-12 h-12 object-cover"
            />
          </div>
          <div className="leading-tight">
            <p className="font-black text-xl text-brown">Afrocosplay</p>
          </div>
        </div>
        <nav className="ml-auto hidden md:flex items-center gap-2">
          {[
            ["accueil", "Accueil"],
            ["boutique", "Boutique"],
            ["evenements", "Événements"],
            ["apropos", "À propos"],
            ["contact", "Contact"],
          ].map(([k, label]) => (
            <Pill key={k} active={current === k} onClick={() => onNav(k)}>
              {label}
            </Pill>
          ))}
        </nav>
        <div className="ml-2">
          <Pill active={current === "panier"} onClick={() => onNav("panier")}>
            🛒 Panier ({cartCount})
          </Pill>
        </div>
      </div>
    </header>
  );
}
