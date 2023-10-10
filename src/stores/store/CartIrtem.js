import React from "react";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "./CartSlice";

const CartIrtem = (props) => {
  const { product, price, id, image, quantity } = props;

  console.log(quantity);
  const dispatch = useDispatch();
  const removeItemFromCart = () => {
    dispatch(cartSliceActions.removeItemFromCart(id));
  };
  const addItemToCart = () => {};
  return (
    <div className={classes.CartItem}>
      <hr />
      <li className={classes.item}>
        <header>
          <h3>{product}</h3>
          <div className={classes.price}>
            <span className={classes.itemprice}>{price}</span>
          </div>
        </header>
        <div className={classes.details}>
          <img src={image} />
          <div className={classes.quantity}>
            <span>{quantity}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={removeItemFromCart}>-</button>
            <button onClick={addItemToCart}>+</button>
          </div>
        </div>
      </li>
      <hr />
    </div>
  );
};

export default CartIrtem;
