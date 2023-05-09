import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Book,
  BookObject,
  SearchData,
  SearchedBooks,
  UpdatedShelf,
} from "./bookTypes";

export type BookResponse = Book[];
export const url = "https://reactnd-books-api.udacity.com";
const token = localStorage.getItem("token");
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
