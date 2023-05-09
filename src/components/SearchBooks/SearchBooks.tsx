import { Book } from "../../store/services/bookTypes";
import { Link } from "react-router-dom";
import classes from "./SearchBooks.module.css";
import { UpdatedShelf } from "../../store/services/bookTypes";
import React from "react";
import {
  useGetAllBooksQuery,
  useUpdateBookShelfMutation,
} from "../../store/services/books";
import { ChangeEvent } from "react";
const SearchBooks: React.FC<{
  filteredBooks: Book[] | undefined;
}> = (props) => {
  const { data: allBooks } = useGetAllBooksQuery();
  const searchBookId = props.filteredBooks?.map((book) => book.id);
  const existingBooks = allBooks?.books.filter((book) =>
    searchBookId?.includes(book.id),
  );

  const [shelf] = useUpdateBookShelfMutation();
  const optionsChangeHandler = async (
    e: ChangeEvent<HTMLSelectElement>,
    id: string,
  ) => {
    const shelfUpdateRequest: UpdatedShelf = {
      id,
      shelf: e.target.value,
    };

    try {
      await shelf(shelfUpdateRequest).unwrap();
    } catch (err) {
      throw new Error("Something wrong happened");
    }
  };
  return (
    <div className={classes["filtered-books-container"]}>
      {!props.filteredBooks && "No Books has been searched for !"}
      {props.filteredBooks &&
        props.filteredBooks?.map((book) => (
          <div className={classes.book} key={book.id}>
            <Link to={`/books/${book.id}`}>
              <img
                className={classes.image}
                src={
                  book.imageLinks?.smallThumbnail || book.imageLinks?.thumbnail
                }
                alt={book.subtitle}
              />
            </Link>
            <div className={classes["book-info"]}>
              <p className={classes["book-title"]}>{book.title}</p>
              {book.authors?.map((author: string) => (
                <p className={classes["book-authors"]} key={author}>
                  {author || ""}
                </p>
              ))}
              <div className={classes["book-shelf-changer"]}>
                <select
                  onChange={(e) => optionsChangeHandler(e, book.id)}
                  name="shelves"
                  id="shelves"
                >
                  <option value="">--Please choose an option--</option>
                  <option
                    disabled={existingBooks?.some((exist) =>
                      exist.shelf === "wantToRead" && exist.id === book.id
                        ? true
                        : false,
                    )}
                    value="wantToRead"
                  >
                    Want to read
                  </option>
                  <option
                    disabled={existingBooks?.some((exist) =>
                      exist.shelf === "currentlyReading" && exist.id === book.id
                        ? true
                        : false,
                    )}
                    value="currentlyReading"
                  >
                    Currently reading
                  </option>
                  <option
                    disabled={existingBooks?.some((exist) =>
                      exist.shelf === "read" && exist.id === book.id
                        ? true
                        : false,
                    )}
                    value="read"
                  >
                    Read
                  </option>
                  <option
                    disabled={existingBooks?.some((exist) =>
                      exist.id !== book.id ? true : false,
                    )}
                    value="none"
                  >
                    None
                  </option>
                </select>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SearchBooks;
