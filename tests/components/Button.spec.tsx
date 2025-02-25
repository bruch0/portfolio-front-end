import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Button } from "@/components/Button";

describe("Button component", () => {
  it("Should render the component with desired label", async () => {
    render(<Button label="Label" />);
    const button = await screen.findByText("Label");

    render(<Button label="Label2" />);
    const button2 = await screen.findByText("Label2");

    expect(button).toBeDefined();
    expect(button2).toBeDefined();
  });

  it("Should render the disabled component", async () => {
    render(<Button disabled />);
    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });

  it("Should render the component with desired classes", async () => {
    render(<Button className="test" />);
    const button = screen.getByRole("button");

    expect(button).toHaveClass("test");
  });

  it("Should render the component with loading", async () => {
    render(<Button label="Label" loading />);
    const button = screen.getByRole("button");
    const buttonByText = screen.queryByText("Label");

    expect(buttonByText).toEqual(null);
    expect(button).toBeDisabled();
  });

  it("Should render the component with an Icon", async () => {
    render(<Button label="Label" icon="Activity" />);
    const icon = screen.getByRole("img");

    expect(icon).toBeDefined();
  });

  it("Should call the function once it is clicked", async () => {
    const mockFn = jest.fn();
    render(<Button onClick={mockFn} />);
    screen.getByRole("button").click();

    expect(mockFn).toHaveBeenCalled();
  });

  it("Should call the function everytime it is clicked", async () => {
    const mockFn = jest.fn();
    render(<Button onClick={mockFn} />);

    const button = screen.getByRole("button");
    button.click();
    button.click();
    button.click();

    expect(mockFn).toHaveBeenCalledTimes(3);
  });

  it("Should not call the function after it has been disabled", async () => {
    const mockFn = jest.fn();
    const { rerender } = render(<Button onClick={mockFn} />);

    const button = screen.getByRole("button");
    button.click();

    rerender(<Button onClick={mockFn} disabled />);
    const reRenderedButton = screen.getByRole("button");
    reRenderedButton.click();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("Should submit the form when it is clicked", async () => {
    const mockFn = jest.fn((e) => e.preventDefault());
    render(
      <form id="form-test" onSubmit={mockFn}>
        <Button form="form-test" />
      </form>
    );
    screen.getByRole("button").click();

    expect(mockFn).toHaveBeenCalled();
  });
});
