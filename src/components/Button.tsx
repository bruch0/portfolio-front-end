import { BaseButton } from "./ui/button";

interface ButtonArgs {
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
  onClick?: () => void;
  form?: string;
  label?: string;
  type?: "submit" | "reset" | "button";
}

export const Button = (args: ButtonArgs) => (
  <BaseButton {...args}>{args.label}</BaseButton>
);
