import { Icon } from "@/components/Icon";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      description: "Ícono do botão",
      control: "radio",
      options: ["Activity", "AirVent", "Airplay"],
    },
    size: {
      description: "Tamanho do ícone",
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "AlarmClock",
  },
};
