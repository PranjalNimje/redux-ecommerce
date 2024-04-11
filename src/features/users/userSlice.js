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
    password: "",
    orders: orderInitialState,
    wishlist: wishlistInitialState,
  },
  allUsers: [],
  selectedUser: {
    userName: "",
    email: "",
    password: "",
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
      prepare(userName, email, password) {
        return {
          payload: { userName, email, password },
        };
      },
      reducer(state, action) {
        const newUser = {
          ...state.users,
          userName: action.payload.userName,
          email: action.payload.email,
          password: action.payload.password,
        };
        // state.users.userName = action.payload.userName;
        // state.users.email = action.payload.email;
        // state.users.push(newUser);
        state.allUsers.push(newUser);
      },
    },
    addSelectedUser: (state, action) => {
      console.log(action);
      state.selectedUser.email = action.payload.email;
      state.selectedUser.userName = action.payload.userName;
      state.selectedUser.password = action.payload.password;
    },
    deleteSelectedUser: (state) => {
      state.selectedUser.email = "";
      state.selectedUser.userName = "";
      state.selectedUser.password = "";
    },
  },
});

export const { addUser, addSelectedUser, deleteSelectedUser } =
  userSlice.actions;

export default userSlice.reducer;

console.log(userSlice, "userSlice");
// store.dispatch(addUser("Lilly", "lilly@gmail.com"));
