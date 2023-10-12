import React from "react";
import { menData } from "../data/men";
import { NavLink } from "react-router-dom";

const Mens = () => {
  const fiveImges = menData.slice(0, 5);
  return (
    <>
      <h3>Mens Fashion</h3>
      <div className="pro-section">
        {fiveImges.map((item) => {
          return (
            <div className="imgBox" key={item.id}>
              <NavLink to={"menswear"}>
                <img src={item.image} alt="" className="pro-img" />
              </NavLink>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Mens;
