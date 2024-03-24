import React, { useMemo } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import CategoryHeader from "./CategoryHeader";
import store from "../store/store";
import { useState } from "react";
import Profile from "./Profile";
import { Link } from "react-router-dom";

const ItemList = ({ itemsList }) => {
  const [filter, setFilter] = useState(null);

  const filteredData = useMemo(() => {
    if (filter) {
      return itemsList.filter((item) => item.category === filter);
    }
    return itemsList;
  }, [itemsList, filter]);
  const dispatch = useDispatch();

  const handleAddToCart = (i) => {
    dispatch(addToCart(i));
  };

  const handleItemsFilter = (val) => {
    setFilter(val);
  };

  const cart = useSelector((state) => state.cart);
  return (
    <>
      <Profile />
      <CategoryHeader handleItemsFilter={handleItemsFilter}></CategoryHeader>
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          background: "cadetblue",
        }}
      >
        {filteredData.map((i) => (
          <div
            key={i.id}
            style={{
              width: "250px",
              height: "250px",
              // border: "1px solid grey",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              padding: "1rem",
              margin: "1rem",
              borderRadius: "6px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              background: "#fff",
            }}
          >
            <Link
              to={`/items/${i.id}`}
              style={{
                textDecoration: "none",
                color: "black",
                display: "grid",
                margin: "auto",
                textAlign: "center",
              }}
            >
              <span>
                <img src={i.images[0]} width="150" height="150" />
              </span>
              <span>{i.title}</span>
              <span> ₹ {i.price}</span>
            </Link>
            <button
              style={{
                border: "none",
                padding: "5px 10px",
                borderRadius: "4px",
                background: "lightgrey",
              }}
              onClick={() => handleAddToCart(i)}
            >
              Add to cart
            </button>

            {cart &&
              cart.map(
                (item) =>
                  item.newItem.id === i.id && (
                    <span style={{ color: "forestgreen" }}>
                      {item.quantity} product added to cart
                    </span>
                  )
              )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
