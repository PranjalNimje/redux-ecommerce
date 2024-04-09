import React, { useState } from "react";
import { useSelector } from "react-redux";
import Search from "../components/search/Search";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";
import ProductMenu from "../components/menu/ProductMenu";

const Profile = ({ itemsList }) => {
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [iconActive, setIconActive] = useState("");

  const navigate = useNavigate();
  const GoToProducts = () => {
    navigate(`/items`);
  };
  const GoToHomePage = () => {
    navigate(`/`);
  };
  const GoToWishlistPage = () => {
    navigate(`/wishlist`);
  };
  const handleProfileClick = (e) => {
    console.log("e", e);
    setIconActive(e.target.value);
    setIsOpen(!isOpen);
  };
  const handleHoveredOn = (e) => {
    console.log("e", e.target.value);
    setIconActive(e.target.value);
    setIsHovered(true);
  };
  const handleHoveredOff = (e) => {
    setIconActive(e.target.value);
    setIsHovered(false);
  };
  const handleSignup = () => {
    navigate(`/signup`);
  };
  const handleLogin = () => {
    navigate(`/login`);
  };
  const handleLogout = () => {};
  // const handleProducts = () => {
  //   navigate
  // };
  console.log("isOpen", isOpen);
  console.log("isHovered", isHovered);
  console.log("iconActive", iconActive);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "1rem",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          // borderBottom: "1px solid #e3dddd",
          position: "absolute",
          top: "0px",
          width: "-webkit-fill-available",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <button
            value={"MenuButton"}
            className="profileMenuBtn"
            onMouseEnter={(e) => handleHoveredOn(e)}
            onMouseLeave={(e) => handleHoveredOff(e)}
            onClick={(e) => handleProfileClick(e)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill={isOpen && iconActive === "MenuButton" ? "#000" : "#fff"}
              class="bi bi-list"
              viewBox="0 0 16 16"
              style={{ position: "relative", pointerEvents: "none" }}
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>

          {isOpen && iconActive === "MenuButton" && (
            <ProductMenu setIsOpen={setIsOpen} />
          )}

          {/* <span style={{ paddingLeft: " 5px" }}>
            Welcome
            {selectedUser.userName === ""
              ? ` Guest  `
              : ` ${selectedUser.userName}  `}
            {"  "}
          </span> */}
        </div>

        <Search itemsList={itemsList} />
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="#fff"
          className="bi bi-heart-fill wishlistHeart"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
          />
        </svg> */}
        <span className="profileTabs" onClick={GoToHomePage}>
          HOME
        </span>
        <span className="profileTabs" onClick={GoToProducts}>
          PRODUCTS
        </span>
        <span className="profileTabs" onClick={GoToWishlistPage}>
          WISHLIST
        </span>
        <span>
          <Cart />
        </span>

        <button
          value={"ProfileButton"}
          className="profileMenuBtn"
          onMouseEnter={(e) => handleHoveredOn(e)}
          onMouseLeave={(e) => handleHoveredOff(e)}
          onClick={(e) => handleProfileClick(e)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill={
              (isHovered || isOpen) && iconActive === "ProfileButton"
                ? "#000"
                : "#fff"
            }
            class="bi bi-person-fill"
            viewBox="0 0 16 16"
            style={{ position: "relative", pointerEvents: "none" }}
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
        </button>
      </div>
      {(isHovered || isOpen) && iconActive === "ProfileButton" && (
        <div className="ProfileDiv">
          <p className="profileWelcome">
            Hello
            {selectedUser.userName === ""
              ? ` Guest  `
              : ` ${selectedUser.userName}  `}
          </p>
          <p className="profileLogin" onClick={handleLogin}>
            Login
          </p>
          <p className="profileSignup" onClick={handleSignup}>
            Sign Up
          </p>
          <p className="profileEdit">Edit Profile</p>
          <p className="profileLogout" onClick={handleLogout}>
            Logout
          </p>
        </div>
      )}
    </>
  );
};

export default Profile;
