import { Breadcrumb } from "@/components/Breadcrumb";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      description: "Opções para os caminhos das páginas",
      control: "radio",
    },
  },
  args: { options: [{ label: "Caminho", path: "/" }] },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnePath: Story = {
  args: {
    options: [{ label: "Caminho 1", path: "/" }],
  },
};

export const TwoPaths: Story = {
  args: {
    options: [
      { label: "Caminho 1", path: "/" },
      { label: "Caminho 2", path: "/" },
    ],
  },
};

export const ThreePaths: Story = {
  args: {
    options: [
      { label: "Caminho 1", path: "/" },
      { label: "Caminho 2", path: "/" },
      { label: "Caminho 3", path: "/" },
    ],
  },
};

export const FourOrMorePaths: Story = {
  args: {
    options: [
      { label: "Caminho 1", path: "/" },
      { label: "Caminho 2", path: "/" },
      { label: "Caminho 3", path: "/" },
      { label: "Caminho 4", path: "/" },
      { label: "Caminho 5", path: "/" },
      { label: "Caminho 6", path: "/" },
    ],
  },
};
