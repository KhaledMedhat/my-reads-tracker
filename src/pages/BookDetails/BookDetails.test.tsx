import { render, screen } from "@testing-library/react";
import BookDetails from "./BookDetails";

import TestingWrapper from "../../utils/TestUtils/TestUtils";

describe("Book Details", () => {
  it("Render any text in book details", () => {
    render(
      <TestingWrapper>
        <BookDetails />
      </TestingWrapper>,
    );
    const myElement = screen.getByText("Description :");
    expect(myElement).toBeInTheDocument();
  });
});
