import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import classes from "./SignUp.module.css";
import React from "react";
// import { setToken } from "../../store/slices/tokenSlice";
const SignUp = () => {
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const usernameInput = useRef<HTMLInputElement>(null);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const signupSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const formValues = {
      name: usernameInput.current?.value,
      password: passwordInput.current?.value,
      email: emailInput.current?.value,
    };
    localStorage.setItem("account", JSON.stringify(formValues));
    // const token = localStorage.setItem("token", JSON.stringify("12321321"));
    // dispatch(setToken(token));
    navigate("/SignIn");
  };
  return (
    <div className={classes["form-container"]}>
      <h3 className={classes.title}>Setup your credintials to register</h3>
      <form className={classes.form} onSubmit={signupSubmitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            placeholder="Setup your email"
            ref={emailInput}
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <br />
          <input
            placeholder="Setup your username"
            ref={usernameInput}
            type="text"
            name="username"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            placeholder="Setup your password"
            ref={passwordInput}
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button className={classes.btn} type="submit">
          SignUp
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <Link className={classes.link} to="/SignIn">
          Log In
        </Link>
      </p>
    </div>
  );
};
export default SignUp;
