import { render, screen } from "@testing-library/react";
import CartItem from "./CartItem";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { CartItemAppSelector } from "./cart-item-selector";
import { CartPage } from "../../../pages/CartPage";

jest.mock("../../../hooks/hooks");

const mockAppSelector = useAppSelector;

describe("CartItem.tsx:", () => {
  beforeEach(() => {
    mockAppSelector.mockImplementation(CartItemAppSelector);
  });

  it("выводится корректно", () => {
    render(
      <CartItem
        item={{
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
        }}
      />
    );
    const linkElement = screen.getByText(/title/i);
    expect(linkElement).toBeInTheDocument();
  });
});
