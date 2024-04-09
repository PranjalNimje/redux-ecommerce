import React from "react";
import { useParams } from "react-router-dom";
import { useCategory } from "../../hooks/useCategory";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import Wishlist from "../wishlist/wishlist";

const ProductByCategory = () => {
  const { category } = useParams();
  const cart = useSelector((state) => state.cart);
  const { categoriesSeparatedList } = useCategory();
  const dispatch = useDispatch();
  const productList = categoriesSeparatedList?.[category];
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="CategoryDisplay">
      {productList?.map((product) => (
        <div
          key={product.id}
          style={{
            width: "250px",
            height: "fit-content",
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
          <Wishlist product={product} />
          <Link
            to={`/items/${product.id}`}
            style={{
              textDecoration: "none",
              color: "black",
              display: "grid",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${product.images[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "150px",
                height: "180px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* <img src={i.images[0]} width="150" height="150" /> */}
            </div>
            <span>{product.title}</span>
            <span> ₹ {product.price}</span>
          </Link>
          <button
            style={{
              border: "none",
              padding: "5px 10px",
              borderRadius: "4px",
              background: "lightgrey",
            }}
            onClick={() => handleAddToCart(product)}
          >
            Add to cart
          </button>

          {cart &&
            cart.map(
              (item) =>
                item.newItem.id === product.id && (
                  <span style={{ color: "forestgreen" }}>
                    {`${item.quantity} ${item.newItem.title} added to cart`}
                  </span>
                )
            )}
        </div>
      ))}
    </div>
  );
};

export default ProductByCategory;
