import Header from "../../components/Header/Header";
import SearchButton from "../../components/SearchButton/SearchButton";
import Shelf from "../../components/Shelf/Shelf";
import classes from "./BookShelves.module.css";
import React from "react";
import { UpdatedShelf } from "../../store/services/bookTypes";
import {
  useGetAllBooksQuery,
  useUpdateBookShelfMutation,
} from "../../store/services/books";
import { useRef, useState } from "react";
interface draggingBook {
  id: string;
  shelf: EventTarget | string;
}
const BookShelves: React.FC = () => {
  const [shelf] = useUpdateBookShelfMutation();
  const currentlyReading = useRef<HTMLDivElement>(null);
  const wantToRead = useRef<HTMLDivElement>(null);
  const read = useRef<HTMLDivElement>(null);
  const [tracer, setTracer] = useState<string>("");
  const [dragData, setDragData] = useState<draggingBook>({ id: "", shelf: "" });
  const { data: books } = useGetAllBooksQuery();
  const currentlyReadingShelfBooks = books?.books.filter(
    (book) => book.shelf === "currentlyReading",
  );
  const wantToReadShelfBooks = books?.books.filter(
    (book) => book.shelf === "wantToRead",
  );
  const readShelfBooks = books?.books.filter((book) => book.shelf === "read");
  const startDragging = (e: React.DragEvent, id: string) => {
    setDragData({ id: id, shelf: e.currentTarget });
  };

  const enterDragging = (e: React.DragEvent) => {
    e.preventDefault();
  };
  const dropHandler = async () => {
    let shelfUpdateRequest: UpdatedShelf;
    if (tracer === "wantToRead") {
      shelfUpdateRequest = {
        id: dragData.id,
        shelf: "wantToRead",
      };
    } else if (tracer === "currentlyReading") {
      shelfUpdateRequest = {
        id: dragData.id,
        shelf: "currentlyReading",
      };
    } else if (tracer === "read") {
      shelfUpdateRequest = {
        id: dragData.id,
        shelf: "read",
      };
    } else {
      return;
    }
    try {
      await shelf(shelfUpdateRequest).unwrap();
    } catch (err) {
      throw new Error("Something wrong happened");
    }
  };
  const idTracerHandler = (e: React.DragEvent) => {
    e.preventDefault();
    setTracer(e.currentTarget.id);
  };
  return (
    <>
      <Header />
      <div
        data-testid="draggable"
        role="draggedDiv"
        id="currentlyReading"
        ref={currentlyReading}
        onDragOver={idTracerHandler}
        onDragEnd={dropHandler}
        className={classes.shelf}
      >
        <h2 className={classes["books-category"]}>Currently Reading</h2>
        <div className={classes.container}>
          {currentlyReadingShelfBooks?.map((books) => (
            <div
              draggable
              onDragStart={(e) => startDragging(e, books.id)}
              onDragEnter={enterDragging}
              key={books.id}
            >
              <Shelf
                id={books.id}
                title={books.title}
                image={books.imageLinks.smallThumbnail}
                shelf={books.shelf}
                authors={books.authors}
                shelfTitle="Currently Reading"
              />
            </div>
          ))}
        </div>
      </div>
      <div
        data-testid="draggable"
        id="wantToRead"
        ref={wantToRead}
        onDragOver={idTracerHandler}
        onDragEnd={dropHandler}
        className={classes.shelf}
      >
        <h2 className={classes["books-category"]}>Want to read</h2>
        <div className={classes.container}>
          {wantToReadShelfBooks?.map((books) => (
            <div
              draggable
              onDragStart={(e) => startDragging(e, books.id)}
              onDragEnter={enterDragging}
              key={books.id}
            >
              <Shelf
                key={books.id}
                id={books.id}
                title={books.title}
                image={books.imageLinks.smallThumbnail}
                shelf={books.shelf}
                authors={books.authors}
                shelfTitle="Currently Reading"
              />
            </div>
          ))}
        </div>
      </div>
      <div
        data-testid="draggable"
        id="read"
        ref={read}
        onDragOver={idTracerHandler}
        onDragEnd={dropHandler}
        className={classes.shelf}
      >
        <h2 className={classes["books-category"]}>Read</h2>
        <div className={classes.container}>
          {readShelfBooks?.map((books) => (
            <div
              draggable
              onDragStart={(e) => startDragging(e, books.id)}
              onDragEnter={enterDragging}
              key={books.id}
            >
              <Shelf
                key={books.id}
                id={books.id}
                title={books.title}
                image={books.imageLinks.smallThumbnail}
                shelf={books.shelf}
                authors={books.authors}
                shelfTitle="Currently Reading"
              />
            </div>
          ))}
        </div>
      </div>
      <SearchButton />
    </>
  );
};

export default BookShelves;
