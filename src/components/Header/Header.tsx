import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import React from "react";
const Header = () => {
  const accountName = JSON.parse(localStorage.getItem("account") || "{}");
  const logoutHandler = () => {
    localStorage.removeItem("token");
  };
  return (
    <header className={classes.header}>
      <Link className={classes.title} to="/">
        My-Reads
      </Link>
      <p className={classes.account}>
        Hi, {accountName.name}{" "}
        <Link className={classes.logout} onClick={logoutHandler} to="/SignIn">
          Log out
        </Link>
      </p>
    </header>
  );
};
export default Header;
