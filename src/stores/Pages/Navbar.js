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
// const areEqual = (prevProps, nextProps) => true;

const Navbar = React.memo((props) => {
  const totalQuantity = useSelector((state) => state.cartslice.totalQuantity);
  const authentication = useSelector((state) => state.authentication);
  const isLogin = authentication.isLogin;

  const user = authentication.user_accounts.map((user) => user);
  // console.log(user);

  const [userData, setUserData] = useState([]);
  const [disable, setDisable] = useState(false);

  // console.log(isLogin);

  const location = useLocation();
  const login = localStorage.getItem("login");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // let btn = document.getElementsByClassName("login-button")[0];
  // console.log(div1);
  // const fetchData = async () => {
  //   const response = await fetch(
  //     "https://65227fe0f43b17938414903d.mockapi.io/user"
  //   );
  //   const data = await response.json();
  //   dispatch(authActions.loadData(data));
  // };
  // useEffect(() => {
  //   setUserData(userData);

  //   dispatch(fetchData);
  // }, []);

  const loginHandler = () => {
    localStorage.setItem("login", false);
    setDisable(true);
    navigate("/login");
  };
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  const loginButton = (
    <button
      className="login-button button"
      onClick={loginHandler}
      // disabled={disable}
    >
      {" "}
      <h4>Hello, Log in</h4>
    </button>
  );
  const logoutButton = (
    <button className="button" onClick={logoutHandler}>
      <h4>Hello,Parameswar Log out</h4>
    </button>
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
});

export default Navbar;
