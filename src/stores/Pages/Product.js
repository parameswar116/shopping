import React from "react";

const Product = (data) => {
  const arrData = Object.values(data);
  const fiveItems = arrData[0].slice(0, 5);
  const title = fiveItems[0].product;
  console.log(title);

  return (
    <>
      <h3>{title}</h3>
      <div className="pro-section">
        {fiveItems.map((item) => {
          return (
            <div className="imgBox" key={item.id}>
              <img src={item.image} alt="" className="pro-img" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
