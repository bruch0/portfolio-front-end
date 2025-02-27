import { Dropdown } from "@/components/Dropdown";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    customTrigger: {
      description: "Caso seja necessário algo além de um botão como trigger",
      control: "radio",
    },
    triggerProps: { description: "Props de um botão, para personalizar" },
    options: { description: "Opções para o dropdown" },
    disabled: { description: "Desabilita o dropdown" },
    dropdownTitle: { description: "Adiciona um título" },
  },
  args: {
    options: [
      { label: "Opção 1" },
      { label: "Opção 2" },
      { label: "Opção 3" },
      { label: "Opção 4" },
    ],
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    options: [
      { label: "Opção 1" },
      { label: "Opção 2" },
      { label: "Opção 3" },
      { label: "Opção 4" },
    ],
    triggerProps: { label: "Abrir" },
  },
};

export const CustomTrigger: Story = {
  args: {
    customTrigger: <button>Trigger Customizado</button>,
    options: [
      { label: "Opção 1" },
      { label: "Opção 2" },
      { label: "Opção 3" },
      { label: "Opção 4" },
    ],
    triggerProps: { label: "Abrir" },
  },
};

export const Disabled: Story = {
  args: {
    options: [
      { label: "Opção 1" },
      { label: "Opção 2" },
      { label: "Opção 3" },
      { label: "Opção 4" },
    ],
    disabled: true,
    triggerProps: { label: "Abrir" },
  },
};

export const WithTite: Story = {
  args: {
    options: [
      { label: "Opção 1" },
      { label: "Opção 2" },
      { label: "Opção 3" },
      { label: "Opção 4" },
    ],
    triggerProps: { label: "Abrir" },
    dropdownTitle: "Título",
  },
};

export const WithAlertOnOption: Story = {
  args: {
    options: [
      { label: "Opção 1", onClick: () => alert("Olá") },
      { label: "Opção 2", onClick: () => alert("Olá") },
      { label: "Opção 3", onClick: () => alert("Olá") },
      { label: "Opção 4", onClick: () => alert("Olá") },
    ],
    triggerProps: { label: "Abrir" },
    dropdownTitle: "Título",
  },
};
