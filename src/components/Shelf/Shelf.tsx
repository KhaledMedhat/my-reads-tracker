import classes from "./Shelf.module.css";
import { UpdatedShelf } from "../../store/services/bookTypes";
import { useUpdateBookShelfMutation } from "../../store/services/books";
import { ChangeEvent } from "react";

import React from "react";

const Shelf: React.FC<{
  id: string;
  title: string;
  image: string;
  shelf: string;
  authors: string[];
  shelfTitle: string;
}> = (props) => {
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
    <div className={classes["shelf-books"]}>
      <div className={classes.book}>
        <img
          className={classes["book-cover"]}
          src={props.image}
          alt={props.title}
        />
        <div className={classes["book-shelf-changer"]}>
          <select
            placeholder="select"
            onChange={(e) => optionsChangeHandler(e, props.id)}
            name="shelves"
            id="shelves"
          >
            <option
              disabled={props.shelf === "wantToRead" ? true : false}
              value="wantToRead"
            >
              Want to read
            </option>
            <option
              disabled={props.shelf === "currentlyReading" ? true : false}
              value="currentlyReading"
            >
              Currently reading
            </option>
            <option
              disabled={props.shelf === "read" ? true : false}
              value="read"
            >
              Read
            </option>
            <option
              disabled={props.shelf === "none" ? true : false}
              value="none"
            >
              None
            </option>
          </select>
        </div>
      </div>
      <div className={classes["book-info"]}>
        <p className={classes["book-title"]}>{props.title}</p>
        <div className={classes["book-authors"]}>
          {props.authors?.map((author) => (
            <p key={author}>{author}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shelf;
