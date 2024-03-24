import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
const Profile = () => {
  const selectedUser = useSelector((state) => state.user.selectedUser);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
          backgroundColor: "#fff",
          borderBottom: "1px solid #e3dddd",
          position: "sticky",
          top: "0px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "30%",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
          <span style={{ paddingLeft: " 5px" }}>
            Welcome
            {selectedUser.userName === ""
              ? ` Guest  `
              : ` ${selectedUser.userName}  `}
            {"  "}
          </span>
        </div>
        <span>
          <Cart />
        </span>
      </div>
    </>
  );
};

export default Profile;
