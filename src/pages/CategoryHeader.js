import React from "react";
import { useCategory } from "../hooks/useCategory";

const CategoryHeader = ({ handleItemsFilter }) => {
  const { categories } = useCategory();
  const handleFilter = (value) => {
    handleItemsFilter(value);
  };
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#a9d1d1",
        justifyContent: "space-evenly",
        // position: "sticky",
        background: "e5dddd",
        // top: "62px",
      }}
    >
      {categories.map((eachCategory) => (
        <button
          key={eachCategory}
          className="categoryButton"
          onClick={() => handleFilter(eachCategory)}
        >
          {eachCategory}
        </button>
      ))}
    </div>
  );
};

export default CategoryHeader;
