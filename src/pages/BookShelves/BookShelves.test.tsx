import { render, screen } from "@testing-library/react";
import BookShelves from "./BookShelves";
import TestingWrapper from "../../utils/TestUtils/TestUtils";

describe("Book Shelves", () => {
  it("Render any text in book shelves", () => {
    render(
      <TestingWrapper>
        <BookShelves />
      </TestingWrapper>,
    );
    const myElement = screen.getByText("Currently Reading");
    expect(myElement).toBeInTheDocument();
  });
});
