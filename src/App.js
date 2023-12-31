import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./stores/Pages/LandingPage";
import Main from "./stores/Pages/Routing/Main";
import Users from "./stores/data/Users";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions, getData } from "./stores/store/AuthSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  });

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
