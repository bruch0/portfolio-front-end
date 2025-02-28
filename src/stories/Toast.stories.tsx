import { toast } from "@/components/Toast";
import { Toast } from "@/components/Toast/ToastProvider";
import type { Meta } from "@storybook/react";

const meta = {
  title: "Example/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toast>;

export default meta;

export const Info = () => (
  <div>
    <Toast />
    <button
      type="button"
      onClick={() => toast({ title: "Titulo toast", variant: "info" })}
    >
      Submit
    </button>
  </div>
);

export const Success = () => (
  <div>
    <Toast />
    <button
      type="button"
      onClick={() => toast({ title: "Titulo toast", variant: "success" })}
    >
      Submit
    </button>
  </div>
);

export const Error = () => (
  <div>
    <Toast />
    <button
      type="button"
      onClick={() => toast({ title: "Titulo toast", variant: "error" })}
    >
      Submit
    </button>
  </div>
);
