import React from "react";
import { womanData } from "../data/woman";
import { NavLink } from "react-router-dom";

const Womens = () => {
  const fiveImges = womanData.slice(0, 5);
  return (
    <>
      <h3>Women Fashion</h3>
      <div className="pro-section">
        {fiveImges.map((item) => {
          return (
            <div className="imgBox " key={item.id}>
              <NavLink to={"women"}>
                <img src={item.image} alt="" className="pro-img" />
              </NavLink>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Womens;
