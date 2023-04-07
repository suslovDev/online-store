import { render, screen } from "@testing-library/react";
import Price from "./Price";

describe("Price.tsx", () => {
  it("должен выводить символ KZT", () => {
    render(<Price currency='KZT' value={200} type='standart' />);
    expect(screen.getByText(/₸/i)).toBeInTheDocument();
  });
  it("должен выводить символ RU", () => {
    render(<Price currency='RUB' value={200} type='standart' />);
    expect(screen.getByText(/₽/i)).toBeInTheDocument();
  });
  it("должен выводить value", () => {
    render(<Price currency='RUB' value={200} type='standart' />);
    expect(screen.getByText(/200/)).toBeInTheDocument();
  });
});
