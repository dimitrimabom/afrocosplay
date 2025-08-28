import PrimaryButton from "./PrimaryButton";
import GhostButton from "./GhostButton";
import Badge from "./Badge";
import Image from "next/image";

export default function Hero({ onShop }: { onShop: () => void }) {
  return (
    <section className="relative overflow-hidden bg-rose-light">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight text-brown">
            Cosplay pour tout le monde -{" "}
            <span className="text-rose-dark">Afro</span>, Geek &amp; Fier !
          </h1>
          <p className="mt-4 text-lg opacity-90 text-black">
            Des perruques, accessoires, costumes, figurines et goodies qui
            célèbrent la culture otaku.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <PrimaryButton onClick={onShop}>Acheter maintenant</PrimaryButton>
            <GhostButton
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
            >
              Rejoindre l&apos;aventure
            </GhostButton>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Badge bg={"bg-yellow"} text={"text-black"}>
              ✨ Nouveautés
            </Badge>
            <Badge bg={"bg-rose-dark"} text={"text-white"}>
              🔥 Meilleures ventes
            </Badge>
            <Badge bg={"bg-brown"} text={"text-white"}>
              ✅ Inclusif
            </Badge>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-3xl p-2 shadow-xl bg-white">
            <Image
              src="https://images.unsplash.com/photo-1605663839223-7fe37a3755a5?q=80&w=953&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cosplayers Afro & Kawaii"
              width={600}
              height={400}
              priority
              quality={100}
              className="rounded-2xl object-cover w-full h-[320px] md:h-[420px]"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rotate-[-6deg] px-3 py-2 rounded-2xl text-sm font-bold shadow bg-yellow text-black">
            #AfroGeek 💛
          </div>
          <div className="absolute -top-4 -right-4 rotate-[6deg] px-3 py-2 rounded-2xl text-sm font-bold shadow bg-rose-dark text-white">
            #Kawaii 💖
          </div>
        </div>
      </div>
    </section>
  );
}
