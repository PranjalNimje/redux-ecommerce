import React, { useState } from "react";

const ImageDisplay = ({ images }) => {
  const [selectedImg, setSelectedImg] = useState(images[0]);
  const handleImg = (image) => {
    setSelectedImg(image);
  };

  const arr = images.filter((pic) => pic === selectedImg);

  if (arr.length === 0) {
    setSelectedImg(images[0]);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "10px",
          background: "#f2f2f2",
          height: "100%",
          width: "80%",
          borderRadius: "6px",
          margin: "10px auto",
        }}
      >
        <img
          src={selectedImg}
          style={{ width: "300px", height: "300px", margin: "auto" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {images.map((i, index) => (
          <img
            key={index}
            src={i}
            className="imageSeriesDisplay"
            onClick={() => handleImg(i)}
          />
        ))}
      </div>
    </>
  );
};

export default ImageDisplay;
