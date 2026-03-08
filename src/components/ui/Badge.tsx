import { HTMLAttributes, ReactNode } from "react";

type BadgeVariant = "primary" | "accent" | "cta" | "warning" | "gray" | "success";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: "sm" | "md";
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  cta: "bg-cta/10 text-cta",
  warning: "bg-warning/10 text-warning",
  gray: "bg-gray-100 text-gray-600",
  success: "bg-green-100 text-green-700",
};

const sizeClasses = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

export function Badge({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: BadgeProps) {
  const classes = [
    "inline-flex items-center gap-1 rounded-full font-medium",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}

export default Badge;
