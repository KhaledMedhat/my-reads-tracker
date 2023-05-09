import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Identifiers {
  identifier: string;
  type: string;
}
export interface ReadingModes {
  text: boolean;
  image: boolean;
}
export interface Images {
  thumbnail: string;
  smallThumbnail: string;
}
export interface Book {
  allowAnOnLogging: boolean;
  authors: string[];
  averageRating: number;
  canonicalVolumeLink: string;
  categories: string[];
  contentVersion: string;
  description: string;
  id: string;
  imageLinks: Images;
  industryIdentifiers: Identifiers[];
  infoLink: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  panelizationSummary: boolean;
  previewLink: string;
  printType: string;
  publishedDate: string;
  publisher: string;
  ratingsCount: number;
  readingModes: ReadingModes;
  shelf: string;
  subtitle: string;
  title: string;
}
export interface BookObject {
  book: Book;
}

export interface SearchData {
  query: string;
  maxResults: number;
}
export interface SearchedBooks {
  books: Book[];
}

export interface UpdatedShelf {
  id: string;
  shelf: string | undefined;
}

export type BookResponse = Book[];
export const url = "https://reactnd-books-api.udacity.com";
const token = localStorage.getItem("token");
// if (!token) {
//   token = localStorage.token = Math.random().toString(36).substr(-8);
// } else {
//   token = localStorage.getItem("token");
// }
// console.log(token);
export const booksApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${url}`,
  }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getAllBooks: builder.query<SearchedBooks, void>({
      query: () => ({
        url: `/books`,
        headers: {
          accept: "application/json",
          authorization: token || "",
        },
      }),
      providesTags: ["Books"],
    }),
    getBookSearch: builder.mutation<SearchedBooks, SearchData>({
      query: (credentials) => ({
        url: `/search`,
        method: "POST",
        headers: {
          accept: "application/json",
          authorization: token || "",
        },
        body: credentials,
      }),
      invalidatesTags: ["Books"],
    }),
    updateBookShelf: builder.mutation<Book, UpdatedShelf>({
      query: (args) => ({
        url: `/books/${args.id}`,
        method: "PUT",
        headers: {
          accept: "application/json",
          authorization: token || "",
        },
        body: { shelf: args.shelf },
      }),
      invalidatesTags: ["Books"],
    }),
    getBookDetails: builder.query<BookObject, string | undefined>({
      query: (id) => ({
        url: `/books/${id}`,
        headers: {
          accept: "application/json",
          authorization: token || "",
        },
      }),
      providesTags: ["Books"],
    }),
  }),
});

export const {
  endpoints,
  useGetBookDetailsQuery,
  useUpdateBookShelfMutation,
  useGetAllBooksQuery,
  useGetBookSearchMutation,
} = booksApi;
