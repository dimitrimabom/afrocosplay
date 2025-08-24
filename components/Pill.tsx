export default function Pill({ active, children, onClick }: { active?: boolean; children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm border transition-all
        ${active ? "scale-105 bg-rose-100 text-brown border-rose-800" : "opacity-80 hover:opacity-100 bg-white text-black border-rose-800"}
      `}
    >
      {children}
    </button>
  );
}
