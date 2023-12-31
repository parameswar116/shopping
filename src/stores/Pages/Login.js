import React, { useEffect, useState } from "react";
import classes from "../Pages/Login.module.css";
import { Button } from "@mui/material";
import {
  NavLink,
  redirect,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Signup from "./SignUp";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../store/Cart";
import { authActions } from "../store/AuthSlice";

const Login = () => {
  const [account, setAccount] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [input, setInput] = useState({ username: "", password: "" });
  const { username, password } = input;
  const navigate = useNavigate();
  const location = useLocation();
  const data = useSelector((state) => state.authentication.user_accounts);

  // const Logged = useSelector((state) => state.authentication.isLogin);
  const dispatch = useDispatch();
  const logged = localStorage.getItem("login");

  useEffect(() => {
    if (logged == "true" && location.pathname == "/login") {
      navigate("/");
    }
  }, []);

  const createAccountHanlder = () => {
    setAccount(false);
  };
  const loginHandler = () => {
    setAccount(!account);
  };
  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  let showLogin = false;
  console.log(data);
  const submitHandler = (event) => {
    console.log(input);
    event.preventDefault();

    let user = input && data.find((person) => person.email === input.username);
    console.log(user);
    if (
      user &&
      user.email === input.username &&
      user.password === input.password
    ) {
      setIsLogin(!isLogin);
      dispatch(authActions.login(user));
      showLogin = true;
      localStorage.setItem("login", showLogin);
      console.log(input);
      navigate("/");
    } else {
      alert("Enter valid information");
    }
  };

  const login = (
    <div className={classes.loginPage}>
      <h3>Log In</h3>
      <form onSubmit={submitHandler}>
        <div className={classes.userinput}>
          <input
            type="email"
            name="username"
            placeholder="Email"
            value={username}
            onChange={changeHandler}
            required
          />{" "}
        </div>
        <div className={classes.userinput}>
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
            placeholder="Password"
          />
        </div>
        <div className={classes.btn}>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
      <div className={classes.forgot}>
        <NavLink>Forgotten Password</NavLink>
      </div>
      <hr />
      <div className={classes.create}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={createAccountHanlder}
        >
          Create new account
        </button>
      </div>
    </div>
  );

  let show = account ? login : <Signup loginHandler={loginHandler} />;

  return (
    <>
      <div className={classes.login}>{show}</div>
    </>
  );
};

export default Login;
