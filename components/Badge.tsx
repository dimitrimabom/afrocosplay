export default function Badge({ children, bg, text }: { children: React.ReactNode; bg: string; text: string }) {
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-semibold shadow ${bg} ${text}`}
    >
      {children}
    </span>
  );
}
