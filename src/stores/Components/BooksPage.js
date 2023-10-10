import React, { useState } from "react";
import { booksData } from "../data/books";
import { NavLink } from "react-router-dom";

const BookPage = () => {
  const importData = booksData;
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
      : importData.filter((item) => selectedItem.includes(item.category));

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
                    checked={selectedItem.includes(product.category)}
                    onChange={() => {
                      companyHandler(product.category);
                    }}
                  />
                  {product.category}
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
                  <h4 className="img-caption">{item.category} </h4>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BookPage;
