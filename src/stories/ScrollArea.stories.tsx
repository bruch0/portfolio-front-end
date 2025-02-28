import { ScrollArea } from "@/components/ScrollArea";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: { description: "Usado para indicar outras classes Tailwind" },
  },
  args: { className: "w-[100px] h-[100px]" },
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    className: 'w-[100px] h-[100px]',
    children: Array.from(Array(50).keys()).map((i) => <div key={i}>oi</div>)
  },
};
