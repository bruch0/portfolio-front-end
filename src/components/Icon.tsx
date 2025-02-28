import { LucideProps, icons } from "lucide-react";

export interface IconArgs extends LucideProps {
  name?: keyof typeof icons;
  size?: number;
}

export const Icon = ({ name, size, ...props }: IconArgs) => {
  if (!name) return null;
  const LucideIcon = icons[name];
  if (!LucideIcon) return null;

  return <LucideIcon size={size || 20} role="img" {...props} />;
};
