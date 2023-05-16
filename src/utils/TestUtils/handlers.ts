import { rest } from "msw";
import { BookObject } from "../../store/services/bookTypes";

export const handlers = [
  rest.get(
    "https://reactnd-books-api.udacity.com/books/:id",
    (req, res, ctx) => {
      const { userId } = req.params;
      console.log(userId, "userId");
      return res(
        ctx.status(200),
        ctx.json<BookObject>({
          book: {
            allowAnOnLogging: true,
            authors: ["authors"],
            averageRating: 1,
            canonicalVolumeLink: "",
            categories: [""],
            contentVersion: "",
            description: "",
            id: "",
            imageLinks: {
              thumbnail: "",
              smallThumbnail: " ",
            },
            industryIdentifiers: [
              {
                identifier: "",
                type: "",
              },
            ],
            infoLink: "",
            language: "",
            maturityRating: "",
            pageCount: 1,
            panelizationSummary: 1,
            previewLink: "",
            printType: "",
            publishedDate: "",
            publisher: "",
            ratingsCount: 1,
            readingModes: {
              text: true,
              image: true,
            },
            shelf: "",
            subtitle: "",
            title: "",
          },
        }),
      );
    },
  ),
];
