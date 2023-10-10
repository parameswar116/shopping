import React from "react";
import { watchData } from "../data/watch";
import { NavLink } from "react-router-dom";

const Watches = () => {
  const fiveImges = watchData.slice(0, 5);

  return (
    <>
      <h3>Watches</h3>
      <div className="pro-section">
        {fiveImges.map((item) => {
          return (
            <div className="imgBox">
              <NavLink to={"watches"}>
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

export default Watches;
