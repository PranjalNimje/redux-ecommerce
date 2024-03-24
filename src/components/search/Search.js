import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Item from "../item/Item";

const Search = ({ itemsList }) => {
  const [title, setTitle] = useState("");
  const [flag, setFlag] = useState(false);
  const [filteredData, setfilteredData] = useState();
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
    // setFlag(true);
    // navigate(`/items/${id}`);
    setfilteredData(null);
  };

  //   const handleSearchClick =()=>{

  //   }
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
          <div className="filteredDataInSeach">
            {filteredData?.map((i) => (
              <>
                <Link
                  key={i.id}
                  to={`/items/${i.id}`}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <option
                    key={i.id}
                    className="optionInSeach"
                    onClick={() => handleSearchClick(i.id)}
                  >
                    {i.title}
                  </option>
                </Link>
              </>
            ))}
          </div>
        )}
        {/* {filteredData?.map((i) => (
        <li>{i.title}</li>
      ))} */}
        {/* {flag && <Item itemsList={itemsList} />} */}
      </div>
    </>
  );
};

export default Search;
