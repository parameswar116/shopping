import React, { useState } from "react";
import classes from "../Pages/Signup.module.css";
import { Button } from "@mui/material";
import { NavLink, redirect } from "react-router-dom";
import { red } from "@mui/material/colors";
import { authActions } from "../store/AuthSlice";
import { useDispatch } from "react-redux";

const Signup = (props) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [login, setLogin] = useState(false);
  const [valid, isValid] = useState(false);
  const { username, email, password, confirmpassword } = data;
  const changeHandlerr = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandlerr = (e) => {
    e.preventDefault();
    // This is validation part
    if (username < 4) {
      alert("username must be at least 5 characters");
    } else if (password !== confirmpassword) {
      alert("passwords are not matching");
    } else {
      console.log(data);
      isValid(!valid);
    }
    dispatch(authActions.Signin(data));
  };

  const SignUp = (
    <div className={classes.signup}>
      <div className={classes.title}>
        <h3>Sign Up</h3>
      </div>

      <center>
        <form onSubmit={submitHandlerr}>
          <div className={classes.userinput}>
            <input
              type="text"
              name="username"
              value={username}
              onChange={changeHandlerr}
              placeholder="Username"
            />{" "}
          </div>
          <div className={classes.userinput}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={changeHandlerr}
              placeholder="Email"
            />{" "}
          </div>
          <div className={classes.userinput}>
            <input
              type="password"
              name="password"
              value={password}
              onChange={changeHandlerr}
              placeholder="Password"
            />
            <br />
          </div>
          <div className={classes.userinput}>
            <input
              type="password"
              name="confirmpassword"
              value={confirmpassword}
              onChange={changeHandlerr}
              placeholder="Confirmpassword"
            />{" "}
          </div>
          {password !== confirmpassword ? (
            <p style={{ color: "red" }}>passwords are not matching</p>
          ) : null}
          <div className={classes.btn}>
            <button type="submit">Sign Up</button>
          </div>
          <div>
            <Button onClick={props.loginHandler}>Do you have account</Button>
          </div>
        </form>
      </center>
    </div>
  );
  const successful = (
    <div>
      <center>
        <h3>Sccuesfully Created</h3>
        <NavLink to={"/"}>
          {" "}
          <Button>back</Button>
        </NavLink>
      </center>
    </div>
  );

  return <>{!valid ? SignUp : successful}</>;
};

export default Signup;
