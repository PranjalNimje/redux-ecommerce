import React, { useState } from "react";
// import womenFashion1 from "../../assets/womenFashion1";
import womenFashion1 from "../../assets/womenFashion1.png";
import womenFashion2 from "../../assets/womenFashion2.png";
import womenFashion3 from "../../assets/womenFashion3.jpg";

const Banner = () => {
  const bannerImgs = [womenFashion1, womenFashion2, womenFashion3];
  const [position, setPosition] = useState(0);
  const moveLeft = () => {
    let value = position === 0 ? 2 : position - 1;
    setPosition(value);
  };
  const moveRight = () => {
    let value = position === 2 ? 0 : position + 1;
    setPosition(value);
  };
  return (
    <div
      className="bannerImg"
      style={{
        backgroundImage: `url(${bannerImgs[position]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "130vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* <p className="bannerMotto">Bring Joy to Every Purchase</p> */}
      {/* <p className="bannerMotto">Explore, Shop, Enjoy - It's That Simple</p> */}
      <button className="bannerBtn" onClick={moveLeft}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="#fff"
          class="bi bi-arrow-left-circle"
          viewBox="0 0 16 16"
          className="bannerSvg"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
          />
        </svg>
      </button>
      <p className="bannerMotto">Your One-Stop Shop for Everything You Need</p>
      <button className="bannerBtn" onClick={moveRight}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="#fff"
          class="bi bi-arrow-right-circle"
          viewBox="0 0 16 16"
          className="bannerSvg"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Banner;
