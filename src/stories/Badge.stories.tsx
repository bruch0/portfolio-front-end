import { Badge } from "@/components/Badge";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: { description: "Usado para indicar outras classes Tailwind" },
    variant: {
      control: "radio",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
      ],
      description: "Tipo de badge",
    },
  },
  args: { className: "w-[100px] h-[100px]", variant: 'default' },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Teste'
  },
};

export const Secondary: Story = {
  args: {
    children: 'Teste',
    variant: 'secondary'
  },
};

export const Outline: Story = {
  args: {
    children: 'Teste',
    variant: 'outline'
  },
};

export const Destructive: Story = {
  args: {
    children: 'Teste',
    variant: 'destructive'
  },
};
