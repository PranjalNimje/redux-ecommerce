import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity } from "../../features/cart/cartSlice";

const ProductQuantityCart = ({ product, setFlag }) => {
  // const [quantity, setQuantity] = useState(0);

  const cart = useSelector((state) => state.cart);
  console.log("CART", cart);

  const [item] = cart?.filter((item) => item.newItem.id === product.id);
  // setQuantity(item.quantity);
  console.log("item", item);
  const quantity = item ? item.quantity : 0;

  const dispatch = useDispatch();
  const handleDecrement = () => {
    dispatch(decrementQuantity(quantity, 0, product));
    setFlag(false);
  };

  const handleInc = () => {
    dispatch(addToCart(product));
    setFlag(false);
  };
  return (
    <div className="quantityCart">
      <button className="quantityCartButton" onClick={handleDecrement}>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-dash"
          viewBox="0 0 16 16"
        >
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
        </svg>{" "}
      </button>
      <span className="quantityCartInput">{item ? item.quantity : 0}</span>
      <button className="quantityCartButton" onClick={handleInc}>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
      </button>
    </div>
  );
};

export default ProductQuantityCart;
