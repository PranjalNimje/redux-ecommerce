import { useState } from "react";
import { useProductsList } from "./useProductsList";

export const useCategory = (handleItemsFilter) => {
  // const { itemsList } = useProductsList();
  const { itemsList } = useProductsList();
  const [categories, setCategories] = useState([]);
  //   const [eachCategoryProduct, setEachCategoryProduct] = useState([]);
  itemsList?.forEach((item) => {
    if (!categories.includes(item.category)) {
      setCategories([...categories, item.category]);
    }
  });
  //   console.log("Category", category);

  // const categoriesSeparatedList = itemsList.reduce((acc, obj) => {
  //   const category = obj.category;
  //   if (!acc[category]) {
  //     acc[category] = [];
  //   }
  //   acc[category].push(obj);
  //   return acc;
  // }, []);

  // console.log("catObject", categoriesSeparatedList);

  return {
    categories,
    // categoriesSeparatedList,
  };
};
