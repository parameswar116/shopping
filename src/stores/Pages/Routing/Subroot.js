import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const SubLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default SubLayout;
