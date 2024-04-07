import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../features/cart/cartSlice";
import Profile from "../../pages/Profile";
import ProductQuantityCart from "../cart/ProductQuantityCart";
import Search from "../search/Search";
import FreeDelivery from "./FreeDelivery";

import ImageDisplay from "./ImageDisplay";
import Rating from "./Rating";
import ReturnDelivery from "./ReturnDelivery";

const Item = ({ itemsList }) => {
  const { id } = useParams();
  const [filterProduct, setFilterProduct] = useState(false);
  console.log("ITEM ID", id);
  const [flag, setFlag] = useState(false);

  // const filteredData = useMemo(() => {
  //   if (itemsList) {
  //     setFilterProduct(true);
  //     console.log("I M RUNNING");
  //     return itemsList?.filter((item) => Number(item.id) === Number(id));
  //   }
  // }, [itemsList]);

  const filteredData = itemsList?.filter(
    (item) => Number(item.id) === Number(id)
  );

  console.log("filteredData", filteredData);

  // setFilterProduct(() => filteredData[0]);
  const productSelected = filteredData[0];

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const [item] = cart?.filter((i) => i.newItem.id === productSelected.id);
    if (item && item.quantity !== 0) {
      setFlag(true);
      return;
    }
    setFlag(false);
    dispatch(addToCart(productSelected));
  };

  useEffect(() => {
    console.log("filterProduct");
  }, [filterProduct]);

  return (
    <>
      {/* <Profile itemsList={itemsList} /> */}
      {/* <Search itemsList={itemsList} /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "5px",
          position: "relative",
          top: "59px",
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
          <ProductQuantityCart product={productSelected} setFlag={setFlag} />
          <div style={{ display: "flex" }}>
            <button className="buttonBuyNow">Buy Now</button>
            <button className="buttonAddToCart" onClick={handleAddToCart}>
              Add to Cart
            </button>
            {flag && (
              <span className="productInCartFlag">
                Product is already in cart
              </span>
            )}
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
