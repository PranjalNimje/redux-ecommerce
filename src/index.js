import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";
import { Provider } from "react-redux";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useProductsList } from "./useProductsList";
import SignUp from "./pages/SignUp";
import ItemList from "./pages/ItemList";
import CartModal from "./pages/CartModal";
import OrderModal from "./pages/OrderModal";
import DetailsForShipment from "./pages/DetailsForShipment";
import Item from "./components/item/Item";

// const { itemsList } = useProductsList();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </RouterProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
