import React, { useState } from "react";
import { fridgeData } from "../data/fridge";
import { NavLink } from "react-router-dom";

const FridgePage = () => {
  const importData = fridgeData;
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
      ? importData
      : importData.filter((item) => selectedItem.includes(item.company));

  return (
    <>
      <div className="product-list">
        <div className="prod-filter">
          {importData.map((product) => {
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

export default FridgePage;
