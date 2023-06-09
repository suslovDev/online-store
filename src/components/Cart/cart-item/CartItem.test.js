import { cleanup, render, screen } from "@testing-library/react";

import CartItem from "./CartItem";

import { useAppSelector } from "../../../hooks/hooks";
import { CartItemAppSelector } from "./cart-item-selector";

jest.mock("../../../hooks/hooks");

const mockAppSelector = useAppSelector;

afterEach(cleanup);

describe("CartItem.tsx:", () => {
  const item = {
    id: 1,
    barcode: 12345,
    brand: "Brand",
    description: "description",
    manufacturer: "Manufacturer",
    price: 199,
    size: 367,
    sizeType: "weight",
    title: "Title",
    url: "/url",
    care: [],
  };
  beforeEach(() => {
    mockAppSelector.mockImplementation(CartItemAppSelector);
    render(<CartItem item={item} />);
  });

  it("title выводится корректно", () => {
    const title = screen.getByText(/title/i);
    expect(title).toBeInTheDocument();
  });
  it("size выводится корректно", () => {
    const size = screen.getByText(/367/);
    expect(size).toBeInTheDocument();
  });
  it("price выводится корректно", () => {
    const price = screen.getByText(/199/);
    expect(price).toBeInTheDocument();
  });
});
