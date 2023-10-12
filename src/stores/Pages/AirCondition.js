import React from "react";
import { acData } from "../data/ac";
import { NavLink } from "react-router-dom";

const AirCondition = () => {
  const fiveImges = acData.slice(0, 5);
  return (
    <>
      <h3>AirCondition</h3>
      <div className="pro-section">
        {fiveImges.map((item) => {
          return (
            <div className="imgBox" key={item.id}>
              <NavLink to={"ac"}>
                <img src={item.image} alt="" className="pro-img" />
              </NavLink>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AirCondition;
