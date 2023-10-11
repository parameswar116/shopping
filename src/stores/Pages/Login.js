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
  console.log(data);
  // const Logged = useSelector((state) => state.authentication.isLogin);
  const dispatch = useDispatch();
  const logged = localStorage.getItem("login");

  useEffect(() => {
    if (logged == "true" && location.pathname == "/login") {
      navigate("/");
    }
  }, []);

  // useEffect for getting user-data from Api

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
  const submitHandler = (event) => {
    event.preventDefault();
    let user = input && data.find((person) => person.email === input.username);

    if (user.email === input.username && user.password === input.password) {
      setIsLogin(!isLogin);
      dispatch(authActions.login());
      showLogin = true;
      localStorage.setItem("login", showLogin);
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
          <button type="submit" class="btn btn-primary">
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
          class="btn btn-primary"
          onClick={createAccountHanlder}
        >
          Create new account
        </button>
      </div>
    </div>
  );

  let show = account ? login : <Signup loginHandler={loginHandler} />;

  return <>{show}</>;
};

export default Login;
