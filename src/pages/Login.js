import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addSelectedUser } from "../features/users/userSlice";
import { useData } from "../hooks/useData";
import ItemList from "./ItemList";

const Login = ({ itemsList }) => {
  const [loginName, setLoginName] = useState("");
  const { currUser, setCurrUser } = useData();

  const [userFlag, setUserFlag] = useState(false);
  //   const { handleLogin } = useData();
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.user.allUsers);

  const navigate = useNavigate();

  let currentUser = [];
  const handleLogin = () => {
    console.log("allUsers", allUsers);
    currentUser = allUsers.filter((ele) => ele.userName === loginName);
    setUserFlag(true);
    setCurrUser(currentUser[0]);
    if (currentUser?.length === 0) {
      console.log("You are not sign up");
    }
    // console.log("currUser", currUser);
    // dispatch(addSelectedUser(currentUser));
    if (currentUser?.length > 0) {
      navigate("/items");
    }
    setLoginName("");
  };
  console.log("currUser", currUser);

  const GoToSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <>
        <div
          style={{
            display: "grid",
            margin: "auto",
            width: "fit-content",
            padding: "4rem",
            // border: "2px solid GAINSBORO",
            paddingTop: "1rem",
            rowGap: "1rem",
            borderRadius: "5px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            marginTop: "5rem",
          }}
        >
          <h1 style={{ textAlign: "center", marginBottom: "18px" }}>Login</h1>
          <input
            style={{
              padding: "0.5rem",
              borderRadius: "3px",
              border: "1px solid",
            }}
            type="text"
            placeholder="Username"
            value={loginName}
            onChange={(e) => setLoginName(e.target.value)}
          />
          <button
            style={{
              padding: "0.5rem",
              borderRadius: "3px",
              border: "none",
              background: "powderblue",
              color: "black",
            }}
            onClick={handleLogin}
          >
            Login
          </button>
          {currentUser?.length === 0 && userFlag === true && (
            <div>
              <p>You are not a user. Please Sign up first</p>
              <button onClick={GoToSignUp}>Sign Up</button>
            </div>
          )}
        </div>
      </>
    </>
  );
};

export default Login;
