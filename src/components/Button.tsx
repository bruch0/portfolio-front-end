import { icons, Loader2 } from "lucide-react";

import { BaseButton } from "./ui/button";
import { Icon } from "./Icon";

export interface ButtonArgs {
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null;
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: keyof typeof icons;
  onClick?: () => void;
  form?: string;
  label?: string;
  type?: "submit" | "reset" | "button";
}

export const Button = ({
  disabled,
  loading,
  label,
  icon,
  ...args
}: ButtonArgs) => (
  <BaseButton {...args} disabled={disabled || loading}>
    {loading ? (
      <Loader2 className="animate-spin" />
    ) : (
      <>
        <Icon name={icon} /> {label}
      </>
    )}
  </BaseButton>
);
