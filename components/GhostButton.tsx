export default function GhostButton({ children, ...props }: any) {
  return (
    <button
      {...props}
      className="px-4 py-2 rounded-2xl font-semibold border transition hover:shadow border-rose-dark text-brown bg-white hover:bg-rose-light"
    >
      {children}
    </button>
  );
}