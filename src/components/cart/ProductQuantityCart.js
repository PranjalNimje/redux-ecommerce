import React, { useState } from "react";

const ProductQuantityCart = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="quantityCart">
      <button className="quantityCartButton">
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
      <span className="quantityCartInput">{quantity}</span>
      <button className="quantityCartButton">
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
