import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Item from "../item/Item";

const Search = ({ itemsList }) => {
  const [title, setTitle] = useState("");
  const [flag, setFlag] = useState(false);
  const [filteredData, setfilteredData] = useState([]);
  const handleChange = (e) => {
    setTitle(e.target.value);
    setFlag(false);
    setfilteredData(() =>
      itemsList?.filter(
        (item) =>
          item.title.toLowerCase().includes(title.toLowerCase()) ||
          item.description.toLowerCase().includes(title.toLowerCase()) ||
          item.category.toLowerCase().includes(title.toLowerCase()) ||
          item.brand.toLowerCase().includes(title.toLowerCase())
      )
    );
    console.log(filteredData);
  };

  const navigate = useNavigate();

  const handleSearchClick = (id) => {
    navigate(`/items/${id}`);
    setfilteredData();
  };

  return (
    <>
      <div className="searchList">
        <input
          type="text"
          placeholder="Search for products, brand and more"
          className="searchListInput"
          value={title}
          onChange={(e) => handleChange(e)}
        />
        {title && (
          <div
            className={
              filteredData?.length === undefined
                ? "filteredDataInSeachHide"
                : "filteredDataInSeachShow"
            }
          >
            {filteredData?.map((i) => (
              <>
                <option
                  key={i.id}
                  className="optionInSeach"
                  onClick={() => handleSearchClick(i.id)}
                >
                  {i.title}
                </option>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
