import { Link } from "react-router-dom";
import React, { useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log("cartlength", cart.length);
  return (
    <>
      <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ display: "flex" }}>
          {/* <FaShoppingCart /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>

          <div
            style={{
              fontSize: "small",
              border: "1px solid",
              borderRadius: "8px",
              padding: "1px 5px",
              marginTop: "8px",
            }}
          >
            {cart.length}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Cart;
