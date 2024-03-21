import "./App.css";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemList from "./pages/ItemList";
import CartModal from "./pages/CartModal";
import OrderModal from "./pages/OrderModal";
import DetailsForShipment from "./pages/DetailsForShipment";
import Item from "./pages/Item";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} exact />
          <Route path="/items" element={<ItemList />} exact />
          <Route path="/cart" element={<CartModal />} />
          <Route path="/order" element={<OrderModal />} />
          <Route path="/detailsForShipment" element={<DetailsForShipment />} />
          <Route path="/item/:id" element={<Item />} exact />
        </Routes>
      </BrowserRouter>

      {/* <SignUp /> */}
    </>
  );
}

export default App;
