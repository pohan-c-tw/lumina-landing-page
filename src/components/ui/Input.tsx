export function Input(props: React.ComponentPropsWithoutRef<"input">) {
  return (
    <input
      className="h-12 w-full rounded-full border border-neutral-800 bg-white px-6 text-neutral-950 placeholder:text-neutral-400 focus-visible:ring-3 focus-visible:ring-neutral-400/20 focus-visible:outline-none"
      {...props}
    />
  );
}
