import PrimaryButton from "./PrimaryButton";

export default function ContactPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-black text-brown" >Contact</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Merci ! Nous revenons vers vous très vite ✨");
          }}
          className="rounded-3xl p-6 border space-y-3 border-rose-light"
        >
          <input required placeholder="Nom" className="w-full px-4 py-3 rounded-2xl border" />
          <input type="email" required placeholder="Email" className="w-full px-4 py-3 rounded-2xl border" />
          <textarea required placeholder="Message" className="w-full px-4 py-3 rounded-2xl border h-32" />
          <PrimaryButton type="submit">Envoyer</PrimaryButton>
        </form>
        <div className="rounded-3xl p-6 border border-rose-light">
          <h3 className="font-black mb-2">Réseaux</h3>
          <ul className="space-y-2">
            <li><a className="underline" href="#" onClick={(e)=>e.preventDefault()}>TikTok</a></li>
            <li><a className="underline" href="#" onClick={(e)=>e.preventDefault()}>Instagram</a></li>
            <li><a className="underline" href="#" onClick={(e)=>e.preventDefault()}>Facebook</a></li>
          </ul>
          <p className="mt-4 text-sm opacity-70">Ou écrivez‑nous: hello@afrocosplay.shop</p>
        </div>
      </div>
    </section>
  );
}
