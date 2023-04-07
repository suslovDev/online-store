import { screen, render } from "@testing-library/react";
import ProductItem from "./ProductItem";
import { MemoryRouter } from "react-router-dom";

describe("ProductItem.tsx:", () => {
  it("Данные из пропсов выводятся на свои места", () => {
    const { getByText } = render(
      <MemoryRouter>
        <ProductItem
          item={{
            url: "testUrl",
            title: "Test",
            sizeType: "weight",
            size: 100,
            barcode: 12345678910,
            manufacturer: "Example",
            brand: "Brand",
            description: "Test fake description",
            price: 199,
          }}
        />
      </MemoryRouter>
    );
    const brand = getByText(/бренд/i);;
    expect(brand).toBe('Brand');
  });
});
