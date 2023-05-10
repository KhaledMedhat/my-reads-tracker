import { render, screen } from "@testing-library/react";
import App from "./App";
import TestingWrapper from "./utils/TestUtils/TestUtils";

describe("Loading App", () => {
  test("Rendering App", () => {
    render(
      <TestingWrapper>
        <App />
      </TestingWrapper>,
    );

    expect(
      screen.getByText("Setup your credintials to register"),
    ).toBeInTheDocument();
  });
});
