import { ElementType, HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  as?: ElementType;
}

const sizeClasses = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full",
};

export function Container({
  children,
  size = "lg",
  className = "",
  as: Tag = "div",
  ...props
}: ContainerProps) {
  const classes = [
    "w-full mx-auto px-4 sm:px-6 lg:px-8",
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}

// Bölüm sarmalayıcı — Container + dikey padding
interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  bg?: string;
  as?: "section" | "div" | "article";
}

export function Section({
  children,
  size = "lg",
  bg = "",
  className = "",
  as: Tag = "section",
  ...props
}: SectionProps) {
  return (
    <Tag className={`py-16 md:py-24 ${bg} ${className}`} {...props}>
      <Container size={size}>{children}</Container>
    </Tag>
  );
}

export default Container;
