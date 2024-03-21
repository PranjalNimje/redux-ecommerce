import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const OrderModal = () => {
  const cart = useSelector((state) => state.cart);

  //   const [price, setPrice] = useState(0);
  const price = cart.reduce(
    (acc, curr) => acc + Number(curr.newItem.price) * Number(curr.quantity),
    0
  );
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
        <h1>Order</h1>
        {cart.map((i) => {
          // setPrice(price + Number(i.newItem.price));
          if (i.quantity !== 0) {
            return (
              <div style={{ display: "flex" }}>
                <span>{i.newItem.title}</span>
                <span> ₹ {i.newItem.price} </span>
                <span> x {i.quantity}</span>
              </div>
            );
          }
        })}
        <p>Total : ₹ {price}</p>
        <Link
          to="/detailsForShipment"
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
            Order
          </button>
        </Link>
      </div>
      <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
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

export default OrderModal;
