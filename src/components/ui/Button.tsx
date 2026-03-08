import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "cta" | "accent" | "warning" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  href?: string;
  as?: "a" | "button";
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-opacity-90 focus-visible:outline-primary",
  cta:
    "bg-cta text-white hover:bg-cta-hover focus-visible:outline-cta shadow-lg hover:shadow-xl",
  accent:
    "bg-accent text-white hover:bg-opacity-90 focus-visible:outline-accent",
  warning:
    "bg-warning text-white hover:bg-opacity-90 focus-visible:outline-warning",
  outline:
    "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
  ghost:
    "bg-transparent text-primary hover:bg-primary/10",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const classes = [
      base,
      variantClasses[variant],
      sizeClasses[size],
      fullWidth ? "w-full" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

// Link varyantı — harici/dahili bağlantılar için
interface LinkButtonProps extends ButtonProps {
  href: string;
  target?: string;
  rel?: string;
}

export function LinkButton({
  href,
  target,
  rel,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
}: LinkButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const classes = [
    base,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={href} target={target} rel={rel} className={classes}>
      {children}
    </a>
  );
}

export default Button;
