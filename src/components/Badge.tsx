import { PropsWithChildren } from "react";
import { BaseBadge } from "./ui/badge";

export interface BadgeArgs {
  variant?: "default" | "destructive" | "outline" | "secondary" | null;
  className?: string;
}

export const Badge = ({
  children,
  variant,
  className,
}: PropsWithChildren<BadgeArgs>) => {
  return (
    <BaseBadge variant={variant} className={className}>
      {children}
    </BaseBadge>
  );
};
