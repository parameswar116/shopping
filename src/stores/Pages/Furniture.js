import React from "react";
import { furnitureData } from "../data/furniture";
import { NavLink } from "react-router-dom";

const Furniture = () => {
  const fiveImges = furnitureData.slice(0, 5);
  return (
    <>
      <h3>Furniture</h3>
      <div className="pro-section">
        {fiveImges.map((item) => {
          return (
            <div className="imgBox" key={item.id}>
             
              <NavLink to={'furniture'}>
              <img src={item.image} alt="" className="pro-img" />
              </NavLink>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Furniture;
