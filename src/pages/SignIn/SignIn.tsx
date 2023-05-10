import { useRef, useState } from "react";
import classes from "./SignIn.module.css";
import { useNavigate, Link } from "react-router-dom";
import React from "react";
const SignIn = () => {
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const signupSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const account = JSON.parse(localStorage.getItem("account") || "{}");
    const emailValue = emailInput.current?.value;
    const passwordValue = passwordInput.current?.value;
    if (emailValue === account?.email && passwordValue === account?.password) {
      localStorage.setItem("token", JSON.stringify(emailValue));
      navigate("/");
    } else {
      setError("Email or Password is Incorrect!");
    }
  };
  return (
    <div className={classes["form-container"]}>
      <h3 className={classes.title}>Enter your credentials</h3>
      <form className={classes.form} onSubmit={signupSubmitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            placeholder="Enter your email"
            ref={emailInput}
            type="text"
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            placeholder="Enter your password"
            ref={passwordInput}
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button className={classes.btn} type="submit">
          Log In
        </button>
      </form>
      <p>
        Dont have an account?{" "}
        <Link className={classes.link} to="/SignUp">
          Sign Up
        </Link>
      </p>
      <p className={classes.error}>{error}</p>
    </div>
  );
};
export default SignIn;
