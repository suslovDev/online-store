import { render } from "@testing-library/react";
import Accordeon from "./Accordeon";

describe("Accordeon", () => {
  it("отображается", () => {
    const component = render(<Accordeon />);
    expect(component).toMatchSnapshot();
  });
});
