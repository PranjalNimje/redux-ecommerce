import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";
import userReducer from "../features/users/userSlice";
import cartReducer from "../features/cart/cartSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
