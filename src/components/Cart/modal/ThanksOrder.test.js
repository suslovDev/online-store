import { render, screen } from "@testing-library/react";
import ThanksOrderModal from "./ThanksOrderModal";

describe("Модальное окно:", () => {
  beforeEach(() => render(<ThanksOrderModal />));

  it("Выводится заголовок", () => {
    const headingModal = screen.getByRole("heading");
    expect(headingModal).toBeInTheDocument();
  });
  it("Выводится сообщение", () => {
    const headingText = screen.getByText(/спасибо за заказ/i);
    expect(headingText).toBeInTheDocument();
  });
});
