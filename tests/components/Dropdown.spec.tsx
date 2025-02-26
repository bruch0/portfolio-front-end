import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { Dropdown } from "@/components/Dropdown";

window.PointerEvent = MouseEvent as typeof PointerEvent;

describe("Dropdown component", () => {
  it("Should render the button trigger", async () => {
    render(<Dropdown />);
    const button = screen.getByRole("button");

    expect(button).toBeDefined();
  });

  it("Should render the button trigger with expected label", async () => {
    render(<Dropdown triggerProps={{ label: "Label" }} />);
    const button = screen.getByRole("button");
    const buttonLabel = screen.getByText("Label");

    expect(button).toBeDefined();
    expect(buttonLabel).toBeDefined();
  });

  it("Should render the custom trigger", async () => {
    render(<Dropdown customTrigger={<>oi</>} />);
    const button = screen.queryByRole("button");
    const customTrigger = screen.getByText("oi");

    expect(button).toBe(null);
    expect(customTrigger).toBeDefined();
  });

  it("Should render the options after the trigger click", async () => {
    render(
      <Dropdown triggerProps={{ label: "Label" }} options={["Option 1"]} />
    );
    const button = screen.getByRole("button");
    fireEvent.pointerDown(button);

    const option = screen.getByText("Option 1");

    expect(option).toBeDefined();
  });
});
