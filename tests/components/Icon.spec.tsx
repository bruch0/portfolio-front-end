import { Icon } from "@/components/Icon";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Icon component", () => {
  it("Should render the icon with desired icon", async () => {
    render(<Icon name="Activity" />);
    const icon = screen.getByRole("img");

    expect(icon).toBeDefined();
    expect(icon).toHaveClass("lucide-activity");
  });

  it("Should render nothing if there is no icon name", async () => {
    render(<Icon />);
    const icon = screen.queryByRole("img");

    expect(icon).toBe(null);
  });

  it("Should render nothing if there is not an valid icon", async () => {
    //@ts-expect-error - Estamos testando justamente um ícone inválido
    render(<Icon name="invalid" />);
    const icon = screen.queryByRole("img");

    expect(icon).toBe(null);
  });
});
