import PrimaryButton from "./PrimaryButton";

export default function CartPage({ cart, onQty, onRemove, onCheckout }: any) {

  const formatPriceCFA = (price: number): string => {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF", // Franc CFA
    minimumFractionDigits: 0, // pas de centimes
    maximumFractionDigits: 0
  }).format(price);
};

  const total = cart.reduce((s: number, c: any) => s + c.price * c.qty, 0);
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-black text-brown">Panier</h2>
      {cart.length === 0 ? (
        <p className="mt-2 opacity-70">Votre panier est vide. Ajoutez des pépites geek ✨</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          <div className="md:col-span-2 space-y-4">
            {cart.map((item: any) => (
              <div key={item.id} className="rounded-3xl p-4 border flex items-center gap-4 border-rose-light">
                <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-2xl" />
                <div className="flex-1">
                  <div className="font-bold text-brown">{item.name}</div>
                  <div className="text-sm opacity-80">{formatPriceCFA(item.price)}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-2 rounded-xl border" onClick={() => onQty(item, Math.max(1, item.qty - 1))}>−</button>
                  <div className="w-10 text-center">{item.qty}</div>
                  <button className="px-3 py-2 rounded-xl border" onClick={() => onQty(item, item.qty + 1)}>＋</button>
                </div>
                <button className="px-3 py-2 rounded-xl border bg-red-500/60 hover:bg-red-500/50 text-white transition-all" onClick={() => onRemove(item)}>Supprimer</button>
              </div>
            ))}
          </div>
          <div className="rounded-3xl p-6 border h-fit border-rose-light">
            <h3 className="font-black">Total</h3>
            <div className="text-2xl font-black mt-2">{formatPriceCFA(total)}</div>
            <p className="text-sm mt-2 opacity-70">Paiement sécurisé: PayPal, Mobile Money, carte bancaire</p>
            <div className="mt-4 space-y-2">
              <PrimaryButton onClick={onCheckout}>Procéder au paiement</PrimaryButton>
              <button className="w-full px-4 py-2 rounded-2xl font-semibold border border-black">PayPal</button>
              <button className="w-full px-4 py-2 rounded-2xl font-semibold border border-black">Mobile Money</button>
              <button className="w-full px-4 py-2 rounded-2xl font-semibold border border-black">Carte bancaire</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}