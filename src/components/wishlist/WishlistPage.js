import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { removeFromWishlist } from "../../features/wishlist/wishlistSlice";
import AddedToCartAlert from "./components/AddedToCartAlert";

const WishlistPage = () => {
  const [alertCart, setAlertCart] = useState(false);
  const productList = useSelector((store) => store.wishlist);
  const dispatch = useDispatch();
  const AddProductToCart = (product) => {
    dispatch(addToCart(product));
    setAlertCart(true);
  };
  const RemoveFromWishlist = (productId) => {
    dispatch(removeFromWishlist(productId));
  };
  return (
    <>
      <div className="wishlist">
        {alertCart && (
          <AddedToCartAlert alertCart={alertCart} setAlertCart={setAlertCart} />
        )}
        <p>My Wishlist</p>
        <div className="wishlistComponent">
          {productList?.map((product) => (
            <div className="wishlistCard">
              <div
                style={{
                  backgroundImage: `url(${product.images[0]})`,
                  width: "150px",
                  height: "150px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  textAlign: "end",
                }}
              >
                <button
                  className="wishlistRemove"
                  onClick={() => RemoveFromWishlist(product.id)}
                >
                  x
                </button>
              </div>
              <div className="wishlistBottom">
                <div className="wishlistText">
                  <p className="wishlistTitle">{product.title}</p>
                  <div className="wishlistPD">
                    <span className="wishlistPrice">Rs. {product.price}</span>
                    <span className="wishlistDisc">
                      {`(${product.discountPercentage}% off)`}
                    </span>
                  </div>
                </div>
                <button
                  className="wishlistBag"
                  onClick={() => AddProductToCart(product)}
                >
                  MOVE TO BAG
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
