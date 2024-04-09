import React from "react";

const AddedToCartAlert = ({ alertCart, setAlertCart }) => {
  const handleClose = () => {
    setAlertCart(false);
  };
  return (
    <div className="AddedToCartAlertCont">
      <p>Product added to bag</p>
      <button onClick={handleClose}>OK</button>
    </div>
  );
};

export default AddedToCartAlert;
