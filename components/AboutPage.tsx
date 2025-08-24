export default function AboutPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-black text-bown">À propos</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl p-6 border border-rose-light">
          <h3 className="font-black mb-2">Histoire</h3>
          <p>
            Afrocosplay est né de la passion commune pour la culture afro et l’univers geek. Notre mission: rendre le cosplay
            accessible, inclusif et joyeux pour tout le monde.
          </p>
        </div>
        <div className="rounded-3xl p-6 border border-rose-light">
          <h3 className="font-black mb-2">Mission</h3>
          <ul className="list-disc ml-6">
            <li>Inclusion & diversité au cœur de chaque collection</li>
            <li>Qualité, confort et créativité</li>
            <li>Communauté otaku afro fière et accueillante</li>
          </ul>
        </div>
      </div>
    </section>
  );
}