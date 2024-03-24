import { createSlice } from "@reduxjs/toolkit";
const cartInitialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart: {
      reducer(state, action) {
        const newItem = action.payload;
        const quantity = 0;
        const existingItemIndex = state.findIndex(
          (item) => item.newItem.id === newItem.id
        );
        if (existingItemIndex !== -1) {
          // console.log("ooooooooooooooooooooo", state[existingItemIndex]);
          state[existingItemIndex].newItem = newItem;
          state[existingItemIndex].quantity += 1;
        } else {
          state.push({ newItem, quantity: 1 });
        }
        // const newId = action.payload.id;
      },
    },
    incrementQuantity: {
      prepare(quantity, index) {
        return {
          payload: { quantity, index },
        };
      },
      reducer(state, action) {
        state[action.payload.index].quantity = action.payload.quantity + 1;
      },
    },
    decrementQuantity: {
      prepare(quantity, index, product) {
        return {
          payload: { quantity, index, product },
        };
      },

      reducer(state, action) {
        if (action.payload.quantity === 0 || action.payload.quantity === 1)
          return state?.filter(
            (i) => i.newItem.id !== action.payload.product.id
          );
        const newItem = action.payload?.product;
        const existingItemIndex = state?.findIndex(
          (item) => item.newItem.id === newItem.id
        );
        if (existingItemIndex !== -1) {
          // console.log("ooooooooooooooooooooo", state[existingItemIndex]);
          state[existingItemIndex].quantity -= 1;
        }
        state[action.payload.index].quantity = action.payload.quantity - 1;

        // if (action.payload.quantity < 0 || action.payload.quantity === 0) {
        //   const list = [...state];
        //   list.splice(action.payload.index, 1);
        //   return state;
        // }
      },
    },
    decCartQuantity: {
      reducer(state, action) {
        const prod = state?.map((item, index) =>
          item.id === action.payload.id
            ? (state[index].quantity = action.payload.quantity + 1)
            : addToCart()
        );
      },
    },
    decCartQuantity: {
      reducer(state, action) {
        const prod = state?.map((item, index) =>
          item.id === action.payload.id
            ? (state[index].quantity = action.payload.quantity + 1)
            : addToCart()
        );
      },
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  decCartQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
