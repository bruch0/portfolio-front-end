import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { Breadcrumb } from "@/components/Breadcrumb";

window.PointerEvent = MouseEvent as typeof PointerEvent;

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(jest.fn());
});

describe("Breadcrumb component", () => {
  it("Should render the button trigger", async () => {
    render(<Breadcrumb options={[{ label: "Label", path: "/" }]} />);
    const breadcrumbLabel = screen.getByText("Label");

    expect(breadcrumbLabel).toBeDefined();
  });

  it("Should render all the labels. Two paths means one SVG", async () => {
    render(
      <Breadcrumb
        options={[
          { label: "Label 1", path: "/" },
          { label: "Label 2", path: "/" },
        ]}
      />
    );
    const breadcrumbLabel1 = screen.getByText("Label 1");
    const breadcrumbLabel2 = screen.getByText("Label 2");

    const svg = breadcrumbLabel1.parentElement?.nextElementSibling?.firstChild;

    expect(breadcrumbLabel1).toBeDefined();
    expect(breadcrumbLabel2).toBeDefined();
    expect(svg).toBeDefined();
    expect(svg).toHaveClass("lucide-chevron-right");
  });

  it("Should render all the labels. Three paths means two SVGs", async () => {
    render(
      <Breadcrumb
        options={[
          { label: "Label 1", path: "/" },
          { label: "Label 2", path: "/" },
          { label: "Label 3", path: "/" },
        ]}
      />
    );
    const breadcrumbLabel1 = screen.getByText("Label 1");
    const breadcrumbLabel2 = screen.getByText("Label 2");
    const breadcrumbLabel3 = screen.getByText("Label 2");

    const svg1 = breadcrumbLabel1.parentElement?.nextElementSibling?.firstChild;
    const svg2 = breadcrumbLabel2.parentElement?.nextElementSibling?.firstChild;

    expect(breadcrumbLabel1).toBeDefined();
    expect(breadcrumbLabel2).toBeDefined();
    expect(breadcrumbLabel3).toBeDefined();
    expect(svg1).toBeDefined();
    expect(svg1).toHaveClass("lucide-chevron-right");
    expect(svg2).toBeDefined();
    expect(svg2).toHaveClass("lucide-chevron-right");
  });

  it("Should render some of the labels. Four paths or more means three SVGs and the dropdown with the inner paths", async () => {
    render(
      <Breadcrumb
        options={[
          { label: "Label 1", path: "/" },
          { label: "Label 2", path: "/" },
          { label: "Label 3", path: "/" },
          { label: "Label 4", path: "/" },
          { label: "Label 5", path: "/" },
        ]}
      />
    );
    const breadcrumbLabel1 = screen.getByText("Label 1");
    const breadcrumbLabel4 = screen.getByText("Label 4");
    const breadcrumbLabel5 = screen.getByText("Label 5");

    const svg1 = breadcrumbLabel1.parentElement?.nextElementSibling?.firstChild;
    const svg2 = breadcrumbLabel4.parentElement?.nextElementSibling?.firstChild;
    const svg3 =
      breadcrumbLabel5.parentElement?.previousElementSibling?.firstChild;

    expect(breadcrumbLabel1).toBeDefined();
    expect(breadcrumbLabel4).toBeDefined();
    expect(breadcrumbLabel5).toBeDefined();
    expect(svg1).toBeDefined();
    expect(svg1).toHaveClass("lucide-chevron-right");
    expect(svg2).toBeDefined();
    expect(svg2).toHaveClass("lucide-chevron-right");
    expect(svg3).toBeDefined();
    expect(svg3).toHaveClass("lucide-chevron-right");

    const missingLabel2 = screen.queryByText("Label 2");
    const missingLabel3 = screen.queryByText("Label 3");

    expect(missingLabel2).toEqual(null);
    expect(missingLabel3).toEqual(null);

    const dropdownTrigger = svg1?.parentElement?.nextElementSibling
      ?.firstChild as HTMLElement;
    fireEvent.pointerDown(dropdownTrigger);

    const breadcrumbLabel2 = screen.getByText("Label 2");
    const breadcrumbLabel3 = screen.getByText("Label 3");

    expect(breadcrumbLabel2).toBeDefined();
    expect(breadcrumbLabel3).toBeDefined();
  });
});
