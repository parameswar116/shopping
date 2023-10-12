import React from "react";
import { computerData } from "../data/computers";
import { NavLink } from "react-router-dom";

const Computers = () => {
  const fiveImges = computerData.slice(0, 5);
  return (
    <>
      <h3>Computers</h3>
      <div className="pro-section">
        {fiveImges.map((item) => {
          return (
            <div className="imgBox" key={item.id}>
              <NavLink to={'computers'}>
                {" "}
                <img src={item.image} alt="" className="pro-img" />
              </NavLink>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Computers;
