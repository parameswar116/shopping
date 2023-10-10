import React, { useState } from "react";
import { furnitureData } from "../data/furniture";
import { NavLink } from "react-router-dom";

const FurniturePage = () => {
  const importData = furnitureData;
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
      : importData.filter((item) => selectedItem.includes(item.brand));

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
                    checked={selectedItem.includes(product.brand)}
                    onChange={() => {
                      companyHandler(product.brand);
                    }}
                  />
                  {product.brand}
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
                  <div className="img-only">
                    {" "}
                    <img src={item.image} alt="" />
                  </div>

                  <h4 className="img-caption">
                    {item.brand},{item.model}{" "}
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

export default FurniturePage;
