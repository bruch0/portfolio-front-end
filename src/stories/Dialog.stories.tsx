import { Dialog } from "@/components/Dialog";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    description: { description: "Texto descritivo da ação a ser confirmada" },
    cancelText: { description: "Texto do botão de cancelar" },
   confirmText: { description: "Texto do botão de confirmar" },
   title: { description: "Título" },
   trigger: { description: "Element gatinho para ativar o dialog" },
   confirmFunction: { description: "Função ao confirmar" }   
  },
  args: { 
    trigger:<div>Acionar dialog</div>,
    title: "Confirmar exclusão",
    description: "Ao confirmar, esse produto será excluído para sempre",
    cancelText: "Cancelar",
    confirmText: "Confirmar",
    confirmFunction: () => alert('Confirmada!'),
   },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    trigger:<button className="bg-primary text-primary-foreground shadow hover:bg-primary/90" >Acionar dialog</button>,
    title: "Confirmar exclusão",
    description: "Ao confirmar, esse produto será excluído para sempre",
    cancelText: "Cancelar",
    confirmText: "Confirmar",
    confirmFunction: () => alert('Confirmada!'),
  },
};


