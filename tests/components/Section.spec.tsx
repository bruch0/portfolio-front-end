import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Section } from "@/components/Section";

describe("Section component", () => {
  it("Should render with the desired classes", async () => {
    render(
      <Section className="test">
        <h1 role="h1">Teste</h1>
      </Section>
    );
    const section = screen.getByRole("h1").parentElement;

    expect(section).toBeDefined();
    expect(section).toHaveClass("test");
  });

  it("Should render with the desired children", async () => {
    render(<Section>Teste</Section>);
    const heading = screen.getByText("Teste");

    expect(heading).toBeDefined();
  });
});
