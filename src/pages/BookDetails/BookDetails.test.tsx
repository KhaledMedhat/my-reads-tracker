import { render, screen, waitFor } from "@testing-library/react";
import BookDetails from "./BookDetails";
import { server } from "../../utils/TestUtils/server";

import TestingWrapper from "../../utils/TestUtils/TestUtils";

describe("Book Details", () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it("Render any text in book details", () => {
    render(
      <TestingWrapper>
        <BookDetails />
      </TestingWrapper>,
    );
    const myElement = screen.getByText("Description :");
    expect(myElement).toBeInTheDocument();
  });

  it("Render any text in book details22", async () => {
    render(
      <TestingWrapper>
        <BookDetails />
      </TestingWrapper>,
    );
    expect(await screen.findByText("authors")).toBeInTheDocument();
  });
});
