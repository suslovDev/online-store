import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";
import { AppSelector } from "../app-selector";
import { CartPage } from "./CartPage";

jest.mock("../hooks/hooks");

const mockAppSelector = useAppSelector;
mockAppSelector.mockImplementation(AppSelector);

describe("CartPage.tsx:", () => {
  beforeEach(() => {
    mockAppSelector.mockImplementation(AppSelector);
  });
  it("корзина наполняется товарами", () => {
    const component = render(
      <MemoryRouter>
        <CartPage />
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
