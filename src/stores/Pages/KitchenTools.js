import React from "react";
import { kitchenData } from "../data/kitchen";
import { NavLink } from "react-router-dom";

const KitchenTools = () => {
  const fiveImges = kitchenData.slice(0, 5);
  return (
    <>
      <h3>Kitchen Tools</h3>
      <div className="pro-section">
        {fiveImges.map((item) => {
          return (
            <div className="imgBox">
              <NavLink to={'kitchen'}>
                <img src={item.image} alt="" className="pro-img" />
              </NavLink>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default KitchenTools;
