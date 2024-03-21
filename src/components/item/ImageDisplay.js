import React from "react";

const ImageDisplay = ({ product }) => {
  //   const prod = product[0];
  console.log("PPPPPPRoduc", product);
  const imgs = product.images;
  return (
    <>
      <div>
        {/* {product.map((prod) => {
        prod.images.map((image) => (
          <img key={prod.id} src={image} width="100" height="100" />
        ));
      })} */}
        {imgs.map((i, index) => (
          <img key={index} src={i} width="100" height="100" />
        ))}
      </div>
    </>
  );
};

export default ImageDisplay;
