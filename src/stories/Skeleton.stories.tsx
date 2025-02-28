import { Skeleton } from "@/components/Skeleton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: { description: "Usado para indicar outras classes Tailwind" },
  },
  args: { className: "w-[100px] h-[100px]" },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    className: "w-[100px] h-[100px]",
  },
};
