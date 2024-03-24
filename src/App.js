import "./App.css";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemList from "./pages/ItemList";
import CartModal from "./pages/CartModal";
import OrderModal from "./pages/OrderModal";
import DetailsForShipment from "./pages/DetailsForShipment";
import Item from "./components/item/Item";

import { useProductsList } from "./useProductsList";

function App() {
  const { itemsList } = useProductsList();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp itemsList={itemsList} />} exact />
          <Route
            path="/items"
            element={<ItemList itemsList={itemsList} />}
            exact
          />
          <Route path="/cart" element={<CartModal />} />
          <Route path="/order" element={<OrderModal />} />
          <Route path="/detailsForShipment" element={<DetailsForShipment />} />
          <Route
            path="/items/:id"
            element={<Item itemsList={itemsList} />}
            exact
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
