import { icons, Loader2 } from "lucide-react";

import { BaseButton } from "./ui/button";
import { Icon } from "./Icon";
import { forwardRef, LegacyRef } from "react";

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

export const Button = forwardRef(
  ({ disabled, loading, label, icon, ...args }: ButtonArgs, ref) => (
    <BaseButton
      {...args}
      disabled={disabled || loading}
      ref={ref as LegacyRef<HTMLButtonElement> | undefined}
    >
      {loading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <>
          <Icon name={icon} /> {label}
        </>
      )}
    </BaseButton>
  )
);

Button.displayName = "Button";
