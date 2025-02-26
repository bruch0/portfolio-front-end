import { Typography } from "@/components/Typography";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: "Indica o tipo de input",
      control: "radio",
      options: ["h1", "h2", "h3", "h4"],
    },
    className: { description: "Usado para indicar outras classes Tailwind" },
    children: {
      description: "React Children, passado para dentro do componente",
    },
  },
  args: { type: "h1" },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    type: "h1",
    className: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    children: "Texto",
  },
};

export const H2: Story = {
  args: {
    type: "h2",
    children: "Texto",
  },
};

export const H3: Story = {
  args: {
    type: "h3",
    children: "Texto",
  },
};

export const H4: Story = {
  args: {
    type: "h4",
    children: "Texto",
  },
};

export const H5: Story = {
  args: {
    type: "h5",
    children: "Texto",
  },
};

export const H6: Story = {
  args: {
    type: "h6",
    children: "Texto",
  },
};

export const P: Story = {
  args: {
    type: "p",
    children: "Texto",
  },
};

