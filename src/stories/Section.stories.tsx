import { Section } from "@/components/Section";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Section",
  component: Section,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      description: "Largura da seção",
      control: "radio",
      options: ["100px", "200px", "300px"],
    },
    height: {
      description: "Altura da seção",
      control: "radio",
      options: ["100px", "200px", "300px"],
    },
    children: {
      description: "React Children, passado para dentro do componente",
      control: "radio",
    },
    className: { description: "Usado para indicar outras classes Tailwind" },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    width: "50px",
    height: "50px",
    children: <div>Teste</div>,
    className: "flex justify-center items-center h-screen",
  },
};
