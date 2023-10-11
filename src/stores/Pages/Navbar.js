import React, { useEffect, useState } from "react";
import {
  NavLink,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import CartButton from "../store/Cart";
import { useDispatch, useSelector } from "react-redux";
import CartImage from "../Assets/CartIcon.png";
import { authActions } from "../store/AuthSlice";
import { inputSearch } from "./Search";

const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cartslice.totalQuantity);
  const isLogin = useSelector((state) => state.authentication.isLogin);
  const [userData, setUserData] = useState([]);

  console.log(isLogin);

  const location = useLocation();
  const login = localStorage.getItem("login");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // if (login && location.pathname === "/login") {
  //   //console.log("reject");
  //   console.log(`reject ===nav ${isLogin}`);

  //   navigate("/");
  // }
  // useEffect(() => {
  //   if (login && location.pathname === "/login") {
  //     console.log(`reject ===logo ${isLogin}`);

  //     navigate("/");
  //   }
  // }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://65227fe0f43b17938414903d.mockapi.io/user"
    );
    const data = await response.json();
    setUserData(data);
  };

  const loginHandler = () => {
    localStorage.setItem("login", false);
    fetchData();
    navigate("/login");
  };
  // console.log(userData);

  const sendData = (userData) => {
    dispatch(authActions.getData(userData));
  };
  sendData(userData);
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  const loginButton = (
    <div className="user-detailes c-pointer" onClick={loginHandler}>
      Log in
    </div>
  );
  const logoutButton = (
    <div className="user-detailes c-pointer" onClick={logoutHandler}>
      Logout
    </div>
  );
  let showLogin = !isLogin ? loginButton : logoutButton;

  return (
    <>
      <div className="nav-header">
        <div className="navSection">
          <div className="title">
            <NavLink to={"/"}>
              <h2>E-Cart</h2>
            </NavLink>
          </div>
          <div className="search">
            <NavLink to={"search"}>{inputSearch}</NavLink>
          </div>
          {/* <NavLink to={"login"}> */}
          <div className="user">{showLogin}</div>
          {/* </NavLink> */}

          <NavLink to={"cart"}>
            <div className="cart">
              Cart
              <span className="cart-item-number">{totalQuantity}</span>
            </div>
          </NavLink>
        </div>
        <div className="submenu">
          <ul>
            <li>
              <NavLink to={"/mobiles"}>Mobiles</NavLink>
            </li>
            <li>
              <NavLink to={"/computers"}>Computers</NavLink>
            </li>
            <li>
              <NavLink to={"/watches"}>Watches</NavLink>
            </li>
            <li>
              <NavLink to={"/menswear"}>Mens Fashion</NavLink>
            </li>
            <li>
              <NavLink to={"/women"}>Women Dressing</NavLink>
            </li>
            <li>
              <NavLink to={"/furniture"}>Furniture</NavLink>
            </li>
            <li>
              <NavLink to={"/ac"}>AC</NavLink>
            </li>
            <li>
              <NavLink to={"/kitchen"}>Kitchen Tools</NavLink>
            </li>
            <li>
              <NavLink to={"/books"}>Books</NavLink>
            </li>
            <li>
              <NavLink to={"/tv"}>TV</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
