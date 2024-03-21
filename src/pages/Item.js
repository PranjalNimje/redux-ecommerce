import React, { useEffect, useState } from "react";
import { useProductsList } from "../hooks/useProductsList";
import { useParams } from "react-router-dom";
// import ImageDisplay from "../components/item/ImageDisplay";

const Item = () => {
  const { itemsList } = useProductsList();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  console.log("ID", itemsList);
  useEffect(() => {
    setProduct(itemsList?.filter((prod) => parseInt(prod.id) === parseInt(id)));
    console.log("PRODUCT", product);
  }, []);

  // const prod = productArr[0];

  return (
    <div style={{ display: "grid" }}>
      <div>{/* <ImageDisplay product={productArr[0]} /> */}</div>
      <div>
        hello
        <p>{product[0].title}</p>
        {/* <p>{description}</p>
        <p>{rating} / 5</p>
        <hr></hr>
        <p>{price}</p>
        <p>{discount}</p> */}
      </div>
    </div>
  );
};

export default Item;
