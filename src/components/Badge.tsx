import { PropsWithChildren } from "react";
import { BaseBadge } from "./ui/badge";

export interface BadgeProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | null;
  className?: string;
}

export const Badge = ({
  children,
  variant,
  className,
}: PropsWithChildren<BadgeProps>) => {
  return (
    <BaseBadge variant={variant} className={className}>
      {children}
    </BaseBadge>
  );
};
