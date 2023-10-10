import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceActions } from "./CartSlice";
import CartIrtem from "./CartIrtem";
import CartImage from "../Assets/CartImage.png";

const Cart = () => {
  const data = useSelector((state) => state.cartslice.items);

  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(cartSliceActions.removeItemFromCart(data));
  };
  return (
    <div className="cart-page">
      <div className="cart-header">
        <div className="cart-image">
          <img src={CartImage} />
        </div>
        <div className="cart-title">
          <h2>My Cart</h2>
        </div>
      </div>

      {data.map((item) => {
        return (
          <CartIrtem
            product={item.product}
            quantity={item.quantity}
            model={item.model}
            image={item.image}
            price={item.price}
            key={item.id}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export default Cart;
