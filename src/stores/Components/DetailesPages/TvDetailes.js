import React from "react";
import { mobileData } from "../../data/mobiles";
import { tvData } from "../../data/tv";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../store/CartSlice";

const TvDetailes = () => {
  const importData = tvData;
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = importData.find((item) => item.id === id);
  console.log(product.image);

  const addToCartHandler = () => {
    dispatch(cartSliceActions.addToCart(product));
  };

  return (
    <div className="detaile-section">
      <div className="img-section">
        <img src={product.image} />
      </div>
      <div className="data-section">
        <div className="prod-title">{product.company}</div>
        <div className="prod-model">{product.model}</div>
        <div className="prod-price">{product.price}</div>
        <div className="prod-description">{product.description}</div>

        <div className="btn-cart">
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default TvDetailes;
