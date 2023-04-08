import { render } from "@testing-library/react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import SortCatalog from "./SortCatalog";
import { AppSelector, AppDispatch } from "../../app-selector";

jest.mock("../../hooks/hooks");

const mockAppSelector = useAppSelector;
const mockAppDispatch = useAppDispatch;


describe("SortCatalog.tsx", () => {
  beforeEach(() => {
    mockAppSelector.mockImplementation(AppSelector);
    mockAppDispatch.mockImplementation(AppDispatch);
  });
  it('working...', () => {
    render(<SortCatalog />);
  })
});
