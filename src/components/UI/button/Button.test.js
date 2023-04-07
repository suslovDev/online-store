import { cleanup } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Button from "./Button";
afterEach(cleanup);
describe("Button.jsx:", () => {
  it("Выводится корректно с variant: 'standart'", () => {
    const tree = TestRenderer.create(<Button variant='standart' />);
    expect(tree).toMatchSnapshot();
  });
  it("Выводится корректно с variant: 'buy'", () => {
    const tree = TestRenderer.create(<Button variant='buy' />);
    expect(tree).toMatchSnapshot();
  });
  it("Выводится корректно с variant: 'buy-large'", () => {
    const tree = TestRenderer.create(<Button variant='buy-large' />);
    expect(tree).toMatchSnapshot();
  });
  it("Выводится корректно с variant: 'search'", () => {
    const tree = TestRenderer.create(<Button variant='search' />);
    expect(tree).toMatchSnapshot();
  });
  it("Выводится корректно с variant: 'download'", () => {
    const tree = TestRenderer.create(<Button variant='download' />);
    expect(tree).toMatchSnapshot();
  });
  it("Выводится корректно с variant: 'remove'", () => {
    const tree = TestRenderer.create(<Button variant='remove' />);
    expect(tree).toMatchSnapshot();
  });
  it("Выводится корректно с variant: 'catalog'", () => {
    const tree = TestRenderer.create(<Button variant='catalog' />);
    expect(tree).toMatchSnapshot();
  });
});
