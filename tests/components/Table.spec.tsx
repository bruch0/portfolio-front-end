import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Table } from "@/components/Table";

window.PointerEvent = MouseEvent as typeof PointerEvent;

describe("Table component", () => {
  it("Should render the table with desired headers", async () => {
    render(<Table headers={["Header 1", "Header 2"]} rows={[]} />);
    const header1 = screen.getByText("Header 1");
    const header2 = screen.getByText("Header 2");

    expect(header1).toBeDefined();
    expect(header2).toBeDefined();
  });

  it("Should render the table with desired rows information", async () => {
    render(
      <Table
        headers={[]}
        rows={[
          {
            id: 1,
            name: "Product Name 1",
            price: "1",
            category: "Category 1",
            rating: 4,
          },
          {
            id: 2,
            name: "Product Name 2",
            price: "2",
            category: "Category 2",
            rating: 5,
          },
        ]}
      />
    );
    const firstRowName = screen.getByText("Product Name 1");
    const firstRowPrice = screen.getByText("R$ 1,00");
    const firstRowCategory = screen.getByText("Category 1");
    const firstRowRating = screen.getByText("4");

    const secondRowName = screen.getByText("Product Name 2");
    const secondRowPrice = screen.getByText("R$ 2,00");
    const secondRowCategory = screen.getByText("Category 2");
    const secondRowRating = screen.getByText("5");

    expect(firstRowName).toBeDefined();
    expect(firstRowPrice).toBeDefined();
    expect(firstRowCategory).toBeDefined();
    expect(firstRowRating).toBeDefined();
    expect(secondRowName).toBeDefined();
    expect(secondRowPrice).toBeDefined();
    expect(secondRowCategory).toBeDefined();
    expect(secondRowRating).toBeDefined();
  });

  it("Should render the table with image", async () => {
    render(
      <Table
        headers={[]}
        rows={[
          {
            id: 1,
            name: "Product Name 1",
            price: "1",
            category: "Category 1",
            rating: 4,
            image: {
              url: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
              height: 30,
              width: 30,
            },
          },
        ]}
      />
    );
    const image = screen.queryByAltText("");

    expect(image).toBeDefined();
  });
});
