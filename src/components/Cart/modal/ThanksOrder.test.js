import { render, screen, fireEvent } from "@testing-library/react";
import ThanksOrderModal from "./ThanksOrderModal";

describe("Модальное окно:", () => {
  beforeEach(() => render(<ThanksOrderModal />));

  test("Выводится заголовок", () => {
    const headingModal = screen.getByRole("heading");
    expect(headingModal).toBeInTheDocument();
  });
  test("Выводится сообщение", () => {
    const headingText = screen.getByText(/спасибо за заказ/i);
    expect(headingText).toBeInTheDocument();
  });
});
