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
      prepare(quantity, index) {
        return {
          payload: { quantity, index },
        };
      },

      reducer(state, action) {
        if (action.payload.quantity === 0) return;
        state[action.payload.index].quantity = action.payload.quantity - 1;

        // if (action.payload.quantity < 0 || action.payload.quantity === 0) {
        //   const list = [...state];
        //   list.splice(action.payload.index, 1);
        //   return state;
        // }
      },
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
