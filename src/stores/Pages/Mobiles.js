import React from "react";
import { mobileData } from "../data/mobiles";
import { NavLink } from "react-router-dom";

const Mobiles = () => {
  const fiveImges = mobileData.slice(0, 5);

  return (
    <>
      <h3>Mobiles</h3>
      <div className="pro-section">
        {fiveImges.map((item) => {
          return (
            <div className="imgBox">
              <NavLink to={"mobiles"}>
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

export default Mobiles;
