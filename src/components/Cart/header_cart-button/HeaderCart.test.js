import { screen, render, fireEvent } from "@testing-library/react";
import HeaderCart from "./HeaderCart";
import { click } from "@testing-library/user-event/dist/click";
import { MemoryRouter } from "react-router-dom";
import { CartPage } from "../../../pages/CartPage";

describe("HeaderCart.tsx:", () => {
  beforeEach(() =>
    render(
      <MemoryRouter>
        <HeaderCart total={199} items={[]} />
      </MemoryRouter>
    )
  );
  it("first test", () => {
    expect(screen.getByText(/корзина/i)).toBeInTheDocument();
  });
  it("second-test", () => {
    const button = screen.getByTestId("btn");
    fireEvent.click(button);
    const page = render(
      <MemoryRouter>
        <CartPage />
      </MemoryRouter>
    );
  });
});
