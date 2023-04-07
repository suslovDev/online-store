import { render } from "@testing-library/react";
import ProductList from "./ProductList";
import { MemoryRouter } from "react-router-dom";

describe("ProductList.tsx", () => {
  it("Выводится и получает массив как проп products", () => {
    const prods = [
      {
        url: "testUrl",
        title: "Test",
        sizeType: "weight",
        size: 100,
        barcode: 12345678910,
        manufacturer: "Example",
        brand: "Brand",
        description: "Test fake description",
        price: 199,
      },
      {
        url: "testUrl",
        title: "Test",
        sizeType: "weight",
        size: 100,
        barcode: 12345678910,
        manufacturer: "Example",
        brand: "Brand",
        description: "Test fake description",
        price: 199,
      },
    ];
    const { getByTestId } = render(
      <MemoryRouter>
        <ProductList products={prods} />
      </MemoryRouter>
    );
    const listElement = getByTestId("list");
    expect(listElement).toBeInTheDocument();
  });
});
