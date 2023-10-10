import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import AuthSlice from "./AuthSlice";

const store = configureStore({
  reducer: { cartslice: CartSlice.reducer, authentication: AuthSlice.reducer },
});
export default store;
