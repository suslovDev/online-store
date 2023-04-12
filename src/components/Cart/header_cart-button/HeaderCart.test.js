import { screen, render, fireEvent } from "@testing-library/react";
import HeaderCart from "./HeaderCart";
import { click } from "@testing-library/user-event/dist/click";
import { MemoryRouter } from "react-router-dom";
import { CartPage } from "../../../pages/CartPage";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { CartItemAppSelector } from "../cart-item/cart-item-selector";
import userEvent from "@testing-library/user-event";

jest.mock("../../../hooks/hooks");

const mockAppSelector = useAppSelector;

describe("HeaderCart.tsx:", () => {
  const items = [
    {
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
    },
  ];
  const total = 199;

  beforeEach(() => {
    mockAppSelector.mockImplementation(CartItemAppSelector);
    render(
      <MemoryRouter>
        <HeaderCart total={199} items={items} />
      </MemoryRouter>
    );
  });

  it("изменения total отображаются", () => {
    expect(screen.getByText(/199/)).toBeInTheDocument();
  });
});
