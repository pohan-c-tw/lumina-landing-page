import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "inverse";
};

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "inverse";
  href: string;
};

function getButtonClassName({
  className,
  variant = "primary",
}: {
  className?: string;
  variant?: "primary" | "inverse";
}) {
  return cn(
    "inline-flex cursor-pointer items-center justify-center rounded-full px-5 py-2 font-medium",
    "focus-visible:ring-2 focus-visible:outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-65",
    variant === "primary" &&
      "bg-neutral-950 text-white hover:bg-neutral-900/90 focus-visible:ring-neutral-400/45",
    variant === "inverse" &&
      "bg-white text-neutral-950 hover:bg-neutral-100 focus-visible:ring-white/30",
    className,
  );
}

export function Button(props: ButtonProps | ButtonLinkProps) {
  if ("href" in props) {
    const { variant, className, children, ...linkProps } = props;

    return (
      <a className={getButtonClassName({ className, variant })} {...linkProps}>
        {children}
      </a>
    );
  }

  const { variant, className, children, ...buttonProps } = props;

  return (
    <button
      className={getButtonClassName({ className, variant })}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
