import PrimaryButton from "./PrimaryButton";
import GhostButton from "./GhostButton";

const EVENTS = [
  {
    title: "AfroGeek Con Douala",
    date: "2025-10-12",
    place: "Douala – Palais des Sports",
    desc: "Défilé cosplay, ateliers make‑up, scène K‑pop & afrobeat.",
  },
  {
    title: "Paris Manga – Stand Afrocosplay",
    date: "2025-11-22",
    place: "Paris Expo Porte de Versailles",
    desc: "Rencontre de la communauté + remises spéciales.",
  },
  {
    title: "Yaoundé Cosplay Parade",
    date: "2026-02-08",
    place: "Boulevard du 20 Mai",
    desc: "Showcase afro‑futuriste + concours débutants.",
  },
];

export default function EventsPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-black mb-4  text-brown">Événements</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {EVENTS.map((e, i) => (
          <div key={i} className="rounded-3xl overflow-hidden border shadow-sm border-rose-light">
            <div className="p-5 bg-rose-light">
              <h3 className="font-black text-xl  text-brown">{e.title}</h3>
              <div className="text-sm mt-1">📅 {new Date(e.date).toLocaleDateString()}</div>
              <div className="text-sm">📍 {e.place}</div>
            </div>
            <div className="p-5">
              <p>{e.desc}</p>
              <div className="mt-4 flex gap-2">
                <PrimaryButton onClick={() => alert("Inscription ouverte bientôt ✨")}>S&apos;inscrire</PrimaryButton>
                <GhostButton onClick={() => alert("Ajouté au calendrier !")}>Ajouter au calendrier</GhostButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}