import "./App.css";
import SignUp from "./pages/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemList from "./pages/ItemList";
import CartModal from "./pages/CartModal";
import OrderModal from "./pages/OrderModal";
import Profile from "./pages/Profile";
import DetailsForShipment from "./pages/DetailsForShipment";
import Item from "./components/item/Item";

import { useProductsList } from "./useProductsList";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import WishlistPage from "./components/wishlist/WishlistPage";
import Login from "./pages/Login";
import ProductByCategory from "./components/productByCategory/ProductByCategory";

function App() {
  const { itemsList } = useProductsList();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout itemsList={itemsList} />,
      children: [
        {
          path: "/",
          element: <HomePage itemsList={itemsList} />,
        },
        {
          path: "/signup",
          element: <SignUp itemsList={itemsList} />,
        },
        // {
        //   path: "/products",
        //   element: <SignUp itemsList={itemsList} />,
        // },
        {
          path: "/products/:category",
          element: <ProductByCategory />,
        },
        {
          path: "/cart",
          element: <CartModal />,
        },
        {
          path: "/order",
          element: <OrderModal />,
        },
        {
          path: "/items",
          element: <ItemList itemsList={itemsList} />,
        },
        {
          path: "/items/:id",
          element: <Item itemsList={itemsList} />,
        },
        {
          path: "/wishlist",
          element: <WishlistPage />,
        },
        {
          path: "/login",
          element: <Login itemsList={itemsList} />,
        },
      ],
    },
  ]);

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp itemsList={itemsList} />} exact />
          <Route
            path="/items"
            element={<ItemList itemsList={itemsList} />}
            // exact
          />
          <Route path="/cart" element={<CartModal />} />
          <Route path="/order" element={<OrderModal />} />
          <Route path="/detailsForShipment" element={<DetailsForShipment />} />
          <Route
            path="/items/:id"
            element={<Item itemsList={itemsList} />}
            // exact
          />
        </Routes>
      </BrowserRouter> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
