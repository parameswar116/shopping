import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import { useDispatch } from "react-redux";
import { authActions } from "../store/AuthSlice";

const LandingPage = () => {
  return (
    <div>
      <Products />
    </div>
  );
};

export default LandingPage;
// export async function fetchUserData() {
//   const response = await fetch(
//     "https://65227fe0f43b17938414903d.mockapi.io/user"
//   );
//   const data = await response.json();
//   return data;
// }
