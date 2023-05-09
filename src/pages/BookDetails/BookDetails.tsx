import { useParams } from "react-router-dom";
import { useGetBookDetailsQuery } from "../../store/services/books";
import classes from "./BookDetails.module.css";
import Header from "../../components/Header/Header";
import React from "react";

const BookDetails = () => {
  const params = useParams();
  const { data: bookDetails } = useGetBookDetailsQuery(params.bookid);

  return (
    <>
      <Header />

      <section className={classes.container}>
        <img
          className={classes["book-image"]}
          src={bookDetails?.book.imageLinks.smallThumbnail}
          alt={bookDetails?.book.title}
        />

        <div className={classes["book-details"]}>
          <h1 className={classes.title}>{bookDetails?.book.title}</h1>

          {bookDetails?.book.authors.map((author) => (
            <p className={classes.authors} key={author}>
              {author}
            </p>
          ))}
          <h4 className={classes.header}>Description :</h4>
          <p>{bookDetails?.book.description}</p>
          <div className={classes.publish}>
            <p>{bookDetails?.book.publisher}</p>
            <p>{bookDetails?.book.publishedDate}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDetails;
