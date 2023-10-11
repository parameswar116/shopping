import React from "react";
import LandingPage, { fetchUserData } from "../LandingPage";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Mobiles from "../Mobiles";
import RootLayout from "./Root";
import Computers from "../Computers";
import Watches from "../Watches";
import Mens from "../Mens";
import Womens from "../Women";
import Furniture from "../Furniture";
import AirCondition from "../AirCondition";
import KitchenTools from "../KitchenTools";
import MobilePage from "../../Components/MobilePage";
import MobilesDetailes from "../../Components/DetailesPages/MobilesDetailes";
import SubLayout from "./Subroot";
import Cart from "../../store/Cart";
import ComputerPage from "../../Components/ComputerPage";
import WatchPage from "../../Components/WatchPage";
import MensPage from "../../Components/MensPage";
import WomensPage from "../../Components/WomenPage";
import FurniturePage from "../../Components/FurniturePage";
import AcPage from "../../Components/AcPage";
import KitchenPage from "../../Components/KitchenPage";
import TvPage from "../../Components/TvPage";
import BookPage from "../../Components/BooksPage";
import ComputersDetailes from "../../Components/DetailesPages/ComputersDetailes";
import WatchDetailes from "../../Components/DetailesPages/WatchDetailes";
import MensDetailes from "../../Components/DetailesPages/MensDetailes";
import WomenDetailes from "../../Components/DetailesPages/WomenDetailes";
import FurnitureDetailes from "../../Components/DetailesPages/FurnitureDetailes";
import AirConditionDetailes from "../../Components/DetailesPages/AirConditionDetailes";
import KitchenDetailes from "../../Components/DetailesPages/KithcenDetailes";
import BooksDetailes from "../../Components/DetailesPages/BooksDetailes";
import TvDetailes from "../../Components/DetailesPages/TvDetailes";
import SignUp from "../SignUp";
import Login from "../Login";
import LoginPage from "../LoginPage";
import Search from "../Search";
const logged = localStorage.getItem("login");

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "mobiles",
        element: <SubLayout />,
        children: [
          { index: true, element: <MobilePage /> },
          { path: ":id", element: <MobilesDetailes /> },
        ],
      },
      {
        path: "computers",
        element: <SubLayout />,
        children: [
          { index: true, element: <ComputerPage /> },
          { path: ":id", element: <ComputersDetailes /> },
        ],
      },
      {
        path: "watches",
        element: <SubLayout />,
        children: [
          { index: true, element: <WatchPage /> },
          { path: ":id", element: <WatchDetailes /> },
        ],
      },

      {
        path: "menswear",
        element: <SubLayout />,
        children: [
          { index: true, element: <MensPage /> },
          { path: ":id", element: <MensDetailes /> },
        ],
      },
      {
        path: "women",
        element: <SubLayout />,
        children: [
          { index: true, element: <WomensPage /> },
          { path: ":id", element: <WomenDetailes /> },
        ],
      },
      {
        path: "furniture",
        element: <SubLayout />,
        children: [
          { index: true, element: <FurniturePage /> },
          { path: ":id", element: <FurnitureDetailes /> },
        ],
      },
      {
        path: "ac",
        element: <SubLayout />,
        children: [
          { index: true, element: <AcPage /> },
          {
            path: ":id",
            element: <AirConditionDetailes />,
          },
        ],
      },
      {
        path: "kitchen",
        element: <SubLayout />,
        children: [
          { index: true, element: <KitchenPage /> },
          { path: ":id", element: <KitchenDetailes /> },
        ],
      },
      {
        path: "books",
        element: <SubLayout />,
        children: [
          { index: true, element: <BookPage /> },
          { path: ":id", element: <BooksDetailes /> },
        ],
      },
      {
        path: "tv",
        element: <SubLayout />,
        children: [
          { index: true, element: <TvPage /> },
          { path: ":id", element: <TvDetailes /> },
        ],
      },
      { path: "cart", element: <Cart /> },
      { path: "login", element: logged ? <Login /> : <Navigate to="/" /> },
      { path: "search", element: <Search /> },
    ],
  },
]);

const Main = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Main;
