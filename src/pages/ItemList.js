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
              {/* <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>
              </span> */}
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
                      {`${item.quantity} ${item.newItem.title} added to cart`}
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
