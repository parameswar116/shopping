import React from "react";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "./CartSlice";

const CartIrtem = (props) => {
  const { product, price, id, image, quantity, model } = props;

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
        </header>
        <div className={classes.details}>
          <div className={classes.item_image}>
            <img src={image} />
          </div>

          <div className={classes.actions}>
            <button onClick={removeItemFromCart}>-</button>
            <div className={classes.quantity}>
              <span>{quantity}</span>
            </div>
            <button onClick={addItemToCart}>+</button>
          </div>
          <div className={classes.price}>
            <p className={classes.item_model}>{model}</p>

            <span className={classes.itemprice}>{price}</span>
          </div>
        </div>
      </li>
      <hr />
    </div>
  );
};

export default CartIrtem;
