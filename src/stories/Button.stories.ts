import { Button } from "@/components/Button";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: [
        "link",
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
      ],
      description: "Tipo de botão",
      type: "string",
    },
    className: { description: "Para nomear outras classes Tailwind" },
    disabled: { description: "Desabilita o botão" },
    form: { description: "Indica o form-id para dar Submit" },
    type: { description: "Indicar o tipo de botão para a página" },
    onClick: { description: "Função opcional para clique" },
    label: { description: "Label do botão" },
    size: { description: "Tamanho" },
    icon: {
      description: "Ícono do botão",
      control: "radio",
      options: ["Activity", "AirVent", "Airplay"],
    },
    loading: {
      description:
        "Aponta se o botão deve ser desabilitado e apresentar um ícone de carregamento",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    variant: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    label: "Button",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: "Button",
    loading: true,
  },
};

export const WithIcon: Story = {
  args: {
    label: "Button",
    icon: "Airplay",
  },
};

export const Destructive: Story = {
  args: {
    label: "Button",
    variant: "destructive",
  },
};

export const Ghost: Story = {
  args: {
    label: "Button",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    label: "Button",
    variant: "link",
  },
};

export const Outline: Story = {
  args: {
    label: "Button",
    variant: "outline",
  },
};
