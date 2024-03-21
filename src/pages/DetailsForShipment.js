import React from "react";

const DetailsForShipment = () => {
  return (
    <>
      <div
        style={{
          width: "400px",
          background: "#fff",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          margin: "auto",
          marginTop: "30px",
          display: "grid",
          rowGap: "10px",
          padding: "1rem",
        }}
      >
        <h1>Fill Information</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Email" />
          <input type="number" placeholder="Mobile number" />
          <input type="text" placeholder="address" />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default DetailsForShipment;
