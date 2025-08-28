import { ButtonProps } from "../lib/types";

export default function PrimaryButton({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-2xl font-bold shadow-md active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed bg-yellow text-black`}>
        {children}
    </button>
  );
}