import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Typography } from "@/components/Typography";

window.PointerEvent = MouseEvent as typeof PointerEvent;

describe("Typography component", () => {
  it("Should render the desired heading", async () => {
    render(<Typography type="h1" />);
    const heading = screen.getByRole("h1");

    expect(heading).toBeDefined();
  });

  it("Should render the desired heading", async () => {
    render(<Typography type="h2" />);
    const heading = screen.getByRole("h2");

    expect(heading).toBeDefined();
  });

  it("Should render the desired heading", async () => {
    render(<Typography type="h3" />);
    const heading = screen.getByRole("h3");

    expect(heading).toBeDefined();
  });

  it("Should render the desired heading", async () => {
    render(<Typography type="h4" />);
    const heading = screen.getByRole("h4");

    expect(heading).toBeDefined();
  });

  it("Should render the desired heading", async () => {
    render(<Typography type="h5" />);
    const heading = screen.getByRole("h5");

    expect(heading).toBeDefined();
  });

  it("Should render the desired heading", async () => {
    render(<Typography type="h6" />);
    const heading = screen.getByRole("h6");

    expect(heading).toBeDefined();
  });

  it("Should render the desired heading", async () => {
    render(<Typography type="p" />);
    const paragraph = screen.getByRole("p");

    expect(paragraph).toBeDefined();
  });

  it("Should render with the desired classes", async () => {
    render(<Typography type="h1" className="test" />);
    const heading = screen.getByRole("h1");

    expect(heading).toBeDefined();
    expect(heading).toHaveClass('test')
  });

  it("Should render with the desired children", async () => {
    render(<Typography type="h1">Teste</Typography>);
    const heading = screen.getByText("Teste");

    expect(heading).toBeDefined();
  });
});
