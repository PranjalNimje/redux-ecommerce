import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
} from "../features/cart/cartSlice";

const CartModal = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleIncrement = (quantity, index) => {
    dispatch(incrementQuantity(quantity, index));
  };
  const handleDecrement = (quantity, index) => {
    dispatch(decrementQuantity(quantity, index));
  };
  return (
    <>
      <div
        style={{
          width: "400px",
          background: "#fff",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          margin: "auto",
          marginTop: "30px",
          display: "grid",
          rowGap: "10px",
          padding: "1rem",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "18px" }}>Cart</h1>
        {cart.map((element, index) => (
          <p
            key={element.newItem.id}
            style={{
              height: "3rem",
              display: "flex",
              alignItems: "center",
              background: "cornflowerblue",
              justifyContent: "space-around",
            }}
          >
            <span>{element.newItem.title} </span>
            <span> ₹ {element.newItem.price}</span>
            <div
              style={{
                width: "25%",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <button
                onClick={() => handleIncrement(element.quantity, index)}
                style={{
                  padding: "0.5rem",
                  borderRadius: "3px",
                  border: "none",
                  background: "#fff",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
              </button>
              <span
                style={{
                  padding: "0.5rem",
                  borderRadius: "3px",
                  border: "none",
                  background: "#fff",
                  color: "black",
                }}
              >
                {" "}
                {element.quantity}{" "}
              </span>
              <button
                onClick={() => handleDecrement(element.quantity, index)}
                style={{
                  padding: "0.5rem",
                  borderRadius: "3px",
                  border: "none",
                  background: "#fff",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-dash"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                </svg>
              </button>
            </div>
          </p>
        ))}
        <Link to="/order" style={{ textDecoration: "none", color: "black" }}>
          <button
            style={{
              padding: "0.7rem",
              borderRadius: "3px",
              border: "none",
              background: "#fff",
              color: "black",
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              justifySelf: "center",
              background: "gainsboro",
            }}
          >
            Proceed to buy
          </button>
        </Link>
      </div>
      <Link to="/items" style={{ textDecoration: "none", color: "black" }}>
        <button
          style={{
            padding: "0.7rem",
            borderRadius: "3px",
            border: "none",
            background: "#fff",
            color: "black",
            display: "flex",
            alignItems: "center",
            width: "fit-content",
            justifySelf: "center",
            background: "gainsboro",
            margin: "4rem",
          }}
        >
          {" "}
          Back{" "}
        </button>
      </Link>
    </>
  );
};

export default CartModal;
