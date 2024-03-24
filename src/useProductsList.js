import { useEffect, useState } from "react";

export const useProductsList = () => {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:4000/items")
        .then((resp) => resp.json())
        .then((data) => {
          setItemsList(data);
        })
        .catch((err) => console.log("Err occured", err));
    };
    fetchData();
  }, []);

  return {
    itemsList,
    setItemsList,
  };
};
