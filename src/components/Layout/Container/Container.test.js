import { screen, render } from "@testing-library/react";
import Container from "./Container";

describe("Container.tsx:", () => {
  it("Children выводятся", () => {
    render(
      <Container>
        <h1>test heading</h1>
      </Container>
    );
    expect(screen.getByText(/test heading/i)).toBeInTheDocument();
  });
});
