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
  const handleDecrement = (quantity, index, product) => {
    dispatch(decrementQuantity(quantity, index, product));
  };
  return (
    <>
      <div className="cartBlock">
        <div className="cartLeftBlock">
          <h1 className="cartHeading">Shoppping Cart</h1>
          <hr className="cartLine"></hr>
          {cart.map((element, index) => (
            <>
              <p key={element.newItem.id} className="cartCard">
                <div className="cartImage">
                  <img src={element.newItem.images[0]} className="cartImg" />{" "}
                </div>
                <div className="cartTitle">
                  <span className="cartCategory">
                    {element.newItem.category}
                  </span>
                  <span className="cartTitleH">{element.newItem.title}</span>
                </div>
                <div className="cartPrice"> ₹ {element.newItem.price}</div>
                <div className="cartQuantity">
                  <button
                    onClick={() => handleIncrement(element.quantity, index)}
                    className="cartIncBtn"
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
                      padding: "0.5rem 0.8rem",
                      borderRadius: "3px",
                      // border: "1px solid black",
                      background: "rgb(119 116 116)",
                      color: "#fff",
                    }}
                  >
                    {element.quantity}
                  </span>
                  <button
                    className="cartIncBtn"
                    onClick={() =>
                      handleDecrement(element.quantity, index, element.newItem)
                    }
                    style={{}}
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
              <hr className="cartLine"></hr>
            </>
          ))}
          {cart.length === 0 ? (
            <>
              <p className="cartModalNothinCart">Nothing in cart</p>
              <Link
                to="/items"
                style={{
                  textDecoration: "none",
                  color: "black",
                  justifySelf: "center",
                }}
              >
                <button className="addProdCartModal">Add Products</button>
              </Link>
            </>
          ) : (
            <Link
              to="/order"
              style={{ textDecoration: "none", color: "black" }}
            >
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
          )}
        </div>
        <div className="cartRightBlock">
          <div>
            <h5>
              <b>Summary</b>
            </h5>
          </div>
          <hr />
          <div className="row">
            <div className="col" style={{ paddingLeft: "0" }}>
              ITEMS 3
            </div>
            <div className="col text-right">&euro; 132.00</div>
          </div>
          <form>
            <p>SHIPPING</p>
            <select>
              <option className="text-muted">
                Standard-Delivery- &euro;5.00
              </option>
            </select>
            <p>GIVE CODE</p>
            <input id="code" placeholder="Enter your code" />
          </form>
          <div
            className="row"
            style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
          >
            <div className="col">TOTAL PRICE</div>
            <div className="col text-right">&euro; 137.00</div>
          </div>
          <button className="btn">CHECKOUT</button>
        </div>
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
