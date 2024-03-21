import React from "react";
import { useSelector } from "react-redux";
// import { CgProfile } from "react-icons/cg";
// import { FaUserLarge } from "react-icons/fa6";
import Cart from "./Cart";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import account from "../assets/account";
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
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          position: "sticky",
          top: "0px",
          alignItems: "center",
        }}
      >
        {/* <div
          style={{
            // width: "22%",
            display: "flex",
            justifyContent: "space-between",
          }}
        > */}
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
            class="bi bi-person-circle"
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
            {/* </span> */}
            {/* <span> */}
            {/* <FaUserLarge /> */}
          </span>
        </div>
        <span>
          <Cart />
        </span>
        {/* </div> */}
      </div>
    </>
  );
};

export default Profile;
