import { createSlice } from "@reduxjs/toolkit";

export const wishlist = [
  {
    itemID: null,
    itemName: "",
  },
];

const initialState = [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const newProduct = action.payload;
      const flag = state?.filter((prod) => prod.id === newProduct.id);
      if (flag.length === 0) {
        state.push(newProduct);
      }
      return state;
    },
    removeFromWishlist(state, action) {
      const productID = action.payload;
      console.log(state[0], "state");
      const arr = state?.filter((item) => item.id !== productID);
      console.log(arr, "arr");
      return arr;
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
