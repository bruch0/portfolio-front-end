import { Form } from "@/components/Form";
import type { Meta } from "@storybook/react";
import { z } from "zod";

const meta = {
  title: "Example/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValues: { description: "Passa os valores padrão para os campos" },
    formId: { description: "FormId para usar button type submit" },
    schema: { description: "schema do Zod para validação dos inputs" },
    onSubmit: {
      description:
        "Função para ser executada no submit do form, após a validação do Zod",
    },
  },
  args: {},
} satisfies Meta<typeof Form>;

export default meta;

export const Basic = () => (
  <Form onSubmit={() => alert("Enviado!")} schema={z.object({})} formId="form">
    <Form.Input name="field1" />
    <Form.Currency name="field2" />
    <Form.Select name="field3" options={["1", "2"]} />
    <Form.TextArea name="field4" />
    <Form.Image name="field5" />
    <button type="submit" form="form">
      Submit
    </button>
  </Form>
);

export const Input = () => (
  <Form onSubmit={() => null} schema={z.object({})}>
    <Form.Input name="field" />
  </Form>
);

export const Currency = () => (
  <Form onSubmit={() => null} schema={z.object({})}>
    <Form.Currency name="field" />
  </Form>
);

export const Select = () => (
  <Form onSubmit={() => null} schema={z.object({})}>
    <Form.Select name="field" options={["1", "2"]} />
  </Form>
);

export const TextArea = () => (
  <Form onSubmit={() => null} schema={z.object({})}>
    <Form.TextArea name="field" />
  </Form>
);

export const Image = () => (
  <Form onSubmit={() => null} schema={z.object({})}>
    <Form.Image name="field" />
  </Form>
);

export const WithZod = () => (
  <Form
    onSubmit={() => alert("Enviado!")}
    schema={z.object({
      name: z.string().min(1, { message: "Minimo 1 caracter" }),
    })}
    formId="form"
  >
    <Form.Input name="name" />

    <button type="submit" form="form">
      Submit
    </button>
  </Form>
);
