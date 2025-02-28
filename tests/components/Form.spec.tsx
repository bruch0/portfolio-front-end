import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { Form } from "@/components/Form";
import { z } from "zod";
import { act } from "react";

window.PointerEvent = MouseEvent as typeof PointerEvent;

describe("Form component", () => {
  it("Should render the form", async () => {
    render(
      <Form onSubmit={() => null} schema={z.object({})}>
        <div></div>
      </Form>
    );
    const form = screen.getByRole("form");

    expect(form).toBeDefined();
  });

  it("Should render the children", async () => {
    render(
      <Form onSubmit={() => null} schema={z.object({})}>
        <button type="submit" form="form-id">
          Submit
        </button>
      </Form>
    );
    const children = screen.getByText("Submit");

    expect(children).toBeDefined();
  });

  it("Should render the error when submitted without required data", async () => {
    render(
      <Form
        onSubmit={() => null}
        schema={z.object({ field: z.string().min(1) })}
        formId="form-id"
      >
        <Form.Input name="field" label="field" />
        <button type="submit" form="form-id">
          Submit
        </button>
      </Form>
    );

    const submitButton = screen.getByRole("button");
    await act(async () => {
      fireEvent.click(submitButton);
    });

    const errors = await screen.findAllByText("Required");

    expect(errors).toHaveLength(1);
  });

  it("Should not call the submit function if the form has errors", async () => {
    const mocked = jest.fn();

    render(
      <Form
        onSubmit={mocked}
        schema={z.object({ field: z.string().min(1) })}
        formId="form-id"
      >
        <Form.Input name="field" label="field" />
        <button type="submit" form="form-id">
          Submit
        </button>
      </Form>
    );

    const submitButton = screen.getByRole("button");
    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(mocked).toHaveBeenCalledTimes(0);
  });

  it("Should call the onSubmit function when succesfully submitted", async () => {
    const mocked = jest.fn();

    render(
      <Form onSubmit={mocked} schema={z.object({})} formId="form-id">
        <Form.Input name="field" label="field" />
        <button type="submit" form="form-id">
          Submit
        </button>
      </Form>
    );

    const submitButton = screen.getByRole("button");
    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(mocked).toHaveBeenCalledTimes(1);
  });

  it("Should call the onSubmit function when succesfully submitted", async () => {
    const mocked = jest.fn();

    render(
      <Form onSubmit={mocked} schema={z.object({})} formId="form-id">
        <Form.Input name="field" label="field" />
        <button type="submit" form="form-id">
          Submit
        </button>
      </Form>
    );

    const submitButton = screen.getByRole("button");
    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(mocked).toHaveBeenCalledTimes(1);
  });
});
