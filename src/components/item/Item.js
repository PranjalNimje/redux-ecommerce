import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Profile from "../../pages/Profile";
import ProductQuantityCart from "../cart/ProductQuantityCart";
import FreeDelivery from "./FreeDelivery";

import ImageDisplay from "./ImageDisplay";
import Rating from "./Rating";
import ReturnDelivery from "./ReturnDelivery";

const Item = ({ itemsList }) => {
  const { id } = useParams();

  const filteredData = useMemo(() => {
    if (itemsList) {
      return itemsList?.filter((item) => Number(item.id) === Number(id));
    }
  }, [itemsList]);

  const productSelected = filteredData[0];

  return (
    <>
      <Profile />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "100vh",
          margin: "5px",
        }}
      >
        <div style={{ display: "grid", width: "50%", height: "fitContent" }}>
          <ImageDisplay images={productSelected.images} />
        </div>
        <div style={{ display: "grid", width: "50%", height: "fit-content" }}>
          <p className="itemCardTitle">{productSelected.title}</p>
          <p className="itemCardDescp">{productSelected.description}</p>

          <Rating rating={productSelected.rating} />
          <p>{productSelected.rating} / 5</p>
          <div style={{ background: "#f2f2f2", height: "2px" }} />
          <p>
            <span className="itemCardPrice">₹{productSelected.price}</span> or ₹
            99/month
          </p>
          <div style={{ background: "#f2f2f2", height: "2px" }} />
          <ProductQuantityCart />
          <div style={{ display: "flex" }}>
            <button className="buttonBuyNow">Buy Now</button>
            <button className="buttonAddToCart">Add to Cart</button>
          </div>

          <div
            style={{
              border: "1px solid orange",
              borderRadius: "5px",
              border: "2px solid #f2f2f2",
            }}
          >
            <ReturnDelivery />
            <div style={{ background: "#f2f2f2", height: "1px" }} />
            <FreeDelivery />
          </div>

          {/* <p>{productSelected.discount}</p> */}
        </div>
      </div>
    </>
  );
};

export default Item;
