import { BadgeProps } from "../lib/types";

export default function Badge({ children, bg, text }: BadgeProps) {
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-semibold shadow ${bg} ${text}`}
    >
      {children}
    </span>
  );
}
