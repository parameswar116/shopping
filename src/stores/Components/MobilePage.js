import React, { useState } from "react";
import { mobileData } from "../data/mobiles";
import { NavLink } from "react-router-dom";

const MobilePage = () => {
  const [selectedItem, setSelectedItem] = useState([]);

  const companyHandler = (product) => {
    if (selectedItem.includes(product)) {
      setSelectedItem(selectedItem.filter((item) => item !== product));
    } else {
      setSelectedItem([product]);
    }
  };
  const filteredData =
    selectedItem.length === 0
      ? mobileData
      : mobileData.filter((item) => selectedItem.includes(item.company));

  return (
    <>
      <div className="product-list">
        <div className="prod-filter">
          {mobileData.map((product) => {
            return (
              <div className="prod-input">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedItem.includes(product.company)}
                    onChange={() => {
                      companyHandler(product.company);
                    }}
                  />
                  {product.company}
                </label>
              </div>
            );
          })}
        </div>

        <div className="pagesection">
          {filteredData.map((item) => {
            return (
              <div className="pageimg">
                <NavLink to={item.id}>
                  <img src={item.image} alt="" />
                  <h4 className="img-caption">
                    {item.company},{item.model}{" "}
                  </h4>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MobilePage;
