import { Table } from "@/components/Table";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    footer: {
      description: "Footer da tabela",
      control: "radio",
    },
    headers: { description: "Headers da tabela" },
    rows: { description: "Linhas da tabela" },
    title: { description: "Titulo da tabela" },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    headers: ["Header 1", "Header 2", "Header 3", "Header 4"],
    rows: [
      {
        id: 1,
        name: "Fjallraven ",
        price: "109.95",
        category: "men's clothing",
        rating: 3.9,
      },
      {
        id: 2,
        name: "Mens Casual ",
        price: "22.3",
        category: "men's clothing",
        rating: 4.1,
      },
    ],
  },
};

export const WithImage: Story = {
  args: {
    headers: ["Header 1", "Header 2", "Header 3", "Header 4"],
    rows: [
      {
        id: 1,
        name: "Fjallraven ",
        price: "109.95",
        category: "men's clothing",
        image: {
          url: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          height: 30,
          width: 30,
        },
        rating: 3.9,
      },
      {
        id: 2,
        name: "Mens Casual ",
        price: "22.3",
        category: "men's clothing",
        image: {
          url: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          height: 30,
          width: 30,
        },
        rating: 4.1,
      },
    ],
  },
};

export const WithEllipsis: Story = {
  args: {
    headers: ["Header 1", "Header 2", "Header 3", "Header 4"],
    rows: [
      {
        id: 1,
        name: "Super Long Name of Product To Show Ellipsis",
        price: "109.95",
        category: "men's clothing",
        rating: 3.9,
      },
      {
        id: 2,
        name: "Super Long Name of Product To Show Ellipsis",
        price: "22.3",
        category: "men's clothing",
        rating: 4.1,
      },
    ],
  },
};
