import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "bordered" | "elevated" | "flat";
  padding?: "none" | "sm" | "md" | "lg";
}

const variantClasses = {
  default: "bg-white rounded-xl shadow-md",
  bordered: "bg-white rounded-xl border border-gray-200",
  elevated: "bg-white rounded-xl shadow-xl",
  flat: "bg-surface rounded-xl",
};

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  variant = "default",
  padding = "md",
  className = "",
  ...props
}: CardProps) {
  const classes = [
    variantClasses[variant],
    paddingClasses[padding],
    "transition-shadow duration-200",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

// İkon + başlık + açıklama içeren servis kartı
interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function ServiceCard({ icon, title, description, className = "" }: ServiceCardProps) {
  return (
    <Card
      variant="default"
      padding="lg"
      className={`hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      <div className="flex flex-col items-start gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
          <p className="text-text-light text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
}

export default Card;
