import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cartslice",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(State, action) {
      const newItem = action.payload;
      const existingItem = State.items.find((item) => item.id === newItem.id);
      State.totalQuantity++;
      if (!existingItem) {
        State.items.push({
          id: newItem.id,
          product: newItem.product,
          image: newItem.image,
          model: newItem.model,
          category: newItem.category,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
    },
    removeItemFromCart(State, action) {
      const newItem = action.payload;
      console.log(newItem);
      const existingItem = State.items.find((item) => item.id === newItem);

      State.totalQuantity--;
      if (existingItem.quantity === 1) {
        console.log("11");
        State.items = State.items.filter((item) => item.id !== newItem);
      } else {
        console.log("22");
        existingItem.quantity--;
      }
    },
  },
});
export const cartSliceActions = CartSlice.actions;
export default CartSlice;
