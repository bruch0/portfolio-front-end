import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Badge } from "@/components/Badge";

describe("Badge component", () => {
  it("Should render with the desired classes", async () => {
    render(
      <Badge className="test">
        <h1>Teste</h1>
      </Badge>
    );
    const badge = screen.getByText("Teste").parentElement;

    expect(badge).toBeDefined();
    expect(badge).toHaveClass("test");
  });

  it("Should render with the desired children", async () => {
    render(<Badge>Teste</Badge>);
    const children = screen.getByText("Teste");

    expect(children).toBeDefined();
  });
});
