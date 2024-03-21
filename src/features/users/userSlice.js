import { createSlice } from "@reduxjs/toolkit";
import { cartSlice } from "../cart/cartSlice";
// import store from "../../store/store";
// import { order } from "../orders/orderSlice";
// import { wishlist } from "../wishlist/wishlistSlice";
const wishlistInitialState = [
  {
    itemID: null,
    itemName: "",
  },
];
const orderInitialState = [
  {
    orderID: null,
    itemID: null,
    itemName: "",
  },
];

const userInitialState = {
  users: {
    userName: "",
    email: "",
    orders: orderInitialState,
    wishlist: wishlistInitialState,
  },
  allUsers: [],
  selectedUser: {
    userName: "",
    email: "",
    orders: orderInitialState,
    wishlist: wishlistInitialState,
  },
  // cart: cartSlice.name,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: wishlistInitialState,
  reducers: {
    addItemsInWishlist: () => {},
  },
});

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    addUser: {
      prepare(userName, email) {
        return {
          payload: { userName, email },
        };
      },
      reducer(state, action) {
        const newUser = {
          ...state.users,
          userName: action.payload.userName,
          email: action.payload.email,
        };
        // state.users.userName = action.payload.userName;
        // state.users.email = action.payload.email;
        // state.users.push(newUser);
        state.allUsers.push(newUser);
      },
    },
    addSelectedUser: (state, action) => {
      console.log(action);
      state.selectedUser.email = action.payload[0].email;
      state.selectedUser.userName = action.payload[0].userName;
    },
  },
});

export const { addUser, addSelectedUser } = userSlice.actions;

export default userSlice.reducer;

console.log(userSlice, "userSlice");
// store.dispatch(addUser("Lilly", "lilly@gmail.com"));
