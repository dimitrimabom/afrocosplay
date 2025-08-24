import PrimaryButton from "./PrimaryButton";
import Badge from "./Badge";

export default function ProductCard({ product, onAdd }: { product: any; onAdd: (product: any) => void }) {

const formatPriceCFA = (price: number): string => {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF", // Franc CFA
    minimumFractionDigits: 0, // pas de centimes
    maximumFractionDigits: 0
  }).format(price);
};

  return (
    <div
      className="rounded-3xl overflow-hidden border shadow-sm flex flex-col border-rose-100"
    >
      <div className="relative">
        <img src={product.img} alt={product.name} className="w-full h-52 object-cover" />
        <div className="absolute top-2 left-2 flex gap-2">
          {product.isNew && <Badge bg="bg-yellow" text="text-black">Nouveau</Badge>}
          {product.isBest && <Badge bg="bg-rose-dark" text="text-white">Best</Badge>}
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-bold text-brown-700">{product.name}</h3>
        <div className="text-sm opacity-80">Catégorie : {product.category}</div>
        <div className="mt-auto flex items-center justify-between">
          <div className="font-black text-lg text-black">{formatPriceCFA(product.price)}</div>
          <div className="text-sm opacity-80">⭐ {product.rating}</div>
        </div>
        {product.stock > 0 ? (
          <PrimaryButton onClick={() => onAdd(product)}>Ajouter au panier</PrimaryButton>
        ) : (
          <button
            className="px-4 py-2 rounded-2xl font-bold bg-black text-white"
            disabled
          >
            Rupture de stock
          </button>
        )}
        <div className="text-xs opacity-70">Stock: {product.stock}</div>
      </div>
    </div>
  );
}