import { fireEvent, render, screen } from "@testing-library/react";
import SearchPage from "./SearchPage";
import TestingWrapper from "../../utils/TestUtils/TestUtils";

describe("Search Page", () => {
  it("Render any text in search page", () => {
    render(
      <TestingWrapper>
        <SearchPage />
      </TestingWrapper>,
    );
    const myElement = screen.getByPlaceholderText(
      "Search by title, author, or ISBN",
    );
    expect(myElement).toBeInTheDocument();
  });

  it("Search results", () => {
    render(
      <TestingWrapper>
        <SearchPage />
      </TestingWrapper>,
    );
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "x" } });

    expect(screen.getByRole("textbox")).toHaveValue("x");
  });
});
