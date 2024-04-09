import React from "react";
import { useNavigate } from "react-router-dom";
import { useCategory } from "../../hooks/useCategory";

const ProductMenu = ({ setIsOpen }) => {
  const navigate = useNavigate();
  const handleProductByCategoryNavigation = (category) => {
    navigate(`/products/${category}`);
    setIsOpen(false);
  };
  const { categories } = useCategory();
  console.log("inside product menu");
  return (
    <div className="MenuProductBlock">
      {categories.map((category) => (
        <p
          className="MenuProductList"
          onClick={() => handleProductByCategoryNavigation(category)}
        >
          {category.toUpperCase()}
        </p>
      ))}
    </div>
  );
};

export default ProductMenu;
