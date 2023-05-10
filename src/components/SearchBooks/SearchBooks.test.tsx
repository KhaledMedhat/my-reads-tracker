import { fireEvent, render, screen } from "@testing-library/react";
import SearchBooks from "./SearchBooks";

import TestingWrapper from "../../utils/TestUtils/TestUtils";

describe("Book Details", () => {
  it("Render any text in book details", () => {
    render(
      <TestingWrapper>
        <SearchBooks
          filteredBooks={[
            {
              id: "1234",
              title: "asdasd",
              imageLinks: {
                thumbnail: "asdsadsad123",
                smallThumbnail: "123123213",
              },

              authors: ["asodsmdf"],
              shelf: "wdszxvc",
              subtitle: "omsds",
              averageRating: 2,
              canonicalVolumeLink: "12ihnsv",
              categories: ["saojnv"],
              contentVersion: "poje98213e",
              description: "pi123n12piu3",
              allowAnOnLogging: false,
              industryIdentifiers: [{ identifier: "123213", type: "132123" }],
              infoLink: "l12knsdc",
              language: "english",
              maturityRating: "idsnv32132123",
              pageCount: 2231,
              panelizationSummary: true,
              previewLink: "bad",
              printType: "kcnvoi1..cmv",
              publishedDate: "asdadfdabr31//213",
              publisher: "sdink2221e1e",
              ratingsCount: 1,
              readingModes: { text: true, image: false },
            },
          ]}
        />
      </TestingWrapper>,
    );
    const myElement = screen.getByText("asdasd");
    expect(myElement).toBeInTheDocument();
  });
  it("Render option", () => {
    render(
      <TestingWrapper>
        <SearchBooks
          filteredBooks={[
            {
              id: "1234",
              title: "asdasd",
              imageLinks: {
                thumbnail: "asdsadsad123",
                smallThumbnail: "123123213",
              },

              authors: ["asodsmdf"],
              shelf: "wdszxvc",
              subtitle: "omsds",
              averageRating: 2,
              canonicalVolumeLink: "12ihnsv",
              categories: ["saojnv"],
              contentVersion: "poje98213e",
              description: "pi123n12piu3",
              allowAnOnLogging: false,
              industryIdentifiers: [{ identifier: "123213", type: "132123" }],
              infoLink: "l12knsdc",
              language: "english",
              maturityRating: "idsnv32132123",
              pageCount: 2231,
              panelizationSummary: true,
              previewLink: "bad",
              printType: "kcnvoi1..cmv",
              publishedDate: "asdadfdabr31//213",
              publisher: "sdink2221e1e",
              ratingsCount: 1,
              readingModes: { text: true, image: false },
            },
          ]}
        />
      </TestingWrapper>,
    );
    fireEvent.change(screen.getByPlaceholderText("select"), {
      target: { value: "read" },
    });

    expect(screen.getByPlaceholderText("select")).toHaveValue("read");
  });
});
