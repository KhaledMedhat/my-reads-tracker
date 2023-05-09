import classes from "./SearchButton.module.css";
import { Link } from "react-router-dom";
import React from "react";

const SearchButton: React.FC = () => {
  return (
    <div className={classes["open-search"]}>
      <Link to="/BookSearch">Add a book</Link>
    </div>
  );
};

export default SearchButton;
