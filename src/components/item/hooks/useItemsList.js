import { useEffect, useState } from "react";

export const useItemsList = () => {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:4000/items")
        .then((resp) => resp.json())
        .then((data) => {
          setItemsList(data);
          console.log("ill", itemsList);
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
