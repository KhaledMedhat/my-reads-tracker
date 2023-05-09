import { Link } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";
import { SearchedBooks, SearchData } from "../../store/services/books";
import classes from "./SearchPage.module.css";
import { useGetBookSearchMutation } from "../../store/services/books";
import SearchBooks from "../../components/SearchBooks/SearchBooks";
import React from "react";
const SearchPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredBooks, setFilteredBooks] = useState<SearchedBooks | null>(
    null,
  );

  const [searchBooks] = useGetBookSearchMutation();
  const getSearchedBooks = async () => {
    const searchRequestData: SearchData = {
      query: searchValue,
      maxResults: 5,
    };
    try {
      if (!searchValue) return;

      if (searchValue.trim()) {
        const searchedBooks = await searchBooks(searchRequestData).unwrap();
        if (searchedBooks.books?.length > 0) {
          setFilteredBooks(searchedBooks);
        } else {
          setFilteredBooks(null);
        }
      }
    } catch (err) {
      setFilteredBooks(null);
      throw new Error("Something wrong happened");
    }
  };

  useEffect(() => {
    const booksDisplay = setTimeout(() => {
      if (searchValue.trim().length === 0) {
        setFilteredBooks(null);
        return;
      }

      getSearchedBooks();
    }, 500);
    return () => clearTimeout(booksDisplay);
  }, [searchValue]);

  return (
    <>
      <div className={classes["search-books"]}>
        <div className={classes["search-books-bar"]}>
          <Link className={classes["close-search"]} to="/">
            Close
          </Link>
          <div className={classes["search-books-input-wrapper"]}>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearchValue(e.target.value)
              }
              type="text"
              placeholder="Search by title, author, or ISBN"
            />
          </div>
        </div>
        <SearchBooks filteredBooks={filteredBooks?.books} />
      </div>
    </>
  );
};

export default SearchPage;
