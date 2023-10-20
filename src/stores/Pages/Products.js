import React from "react";
import Mobiles from "./Mobiles";
import Computers from "./Computers";
import Watches from "./Watches";
import Mens from "./Mens";
import Womens from "./Women";
import Furniture from "./Furniture";
import AirCondition from "./AirCondition";
import KitchenTools from "./KitchenTools";

const Products = () => {
  return (
    <div className="main-page">
      <Mobiles />
      <Computers />
      <Watches />
      <Mens />
      <Womens />
      <Furniture />
      <AirCondition />
      <KitchenTools />
    </div>
  );
};

export default Products;
