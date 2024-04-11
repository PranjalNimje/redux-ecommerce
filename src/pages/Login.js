import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addSelectedUser } from "../features/users/userSlice";
import { useData } from "../hooks/useData";
import ItemList from "./ItemList";

const Login = ({ itemsList }) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const [loginName, setLoginName] = useState("");
  const { currUser, setCurrUser } = useData();

  const [userFlag, setUserFlag] = useState(false);
  //   const { handleLogin } = useData();
  const dispatch = useDispatch();
  const { allUsers, selectedUser } = useSelector((state) => state.user);

  const navigate = useNavigate();

  let currentUser = [];
  const handleLogin = () => {
    const values = getValues();
    console.log("values", values);
    console.log("allUsers", allUsers);
    currentUser = allUsers.filter(
      (ele) =>
        ele.userName === values.LoginUsername &&
        ele.password === values.LoginPassword
    );
    console.log("currentUser", currentUser);
    setUserFlag(true);
    setCurrUser(currentUser[0]);
    if (currentUser?.length === 0) {
      setUserFlag(true);
      console.log(
        "Username or password does not match. Or You are not a member"
      );
    } else if (currentUser?.length > 0) {
      setUserFlag(false);
      dispatch(addSelectedUser(currentUser[0]));
      navigate("/items");
    }

    // console.log("currUser", currUser);
    // dispatch(addSelectedUser(currentUser));
    // if (currentUser?.length > 0) {

    // }
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
          <form onSubmit={handleSubmit(handleLogin)} className="loginformBlock">
            <input
              className="loginName"
              type="text"
              placeholder="Username"
              {...register("LoginUsername", {
                required: {
                  value: true,
                  message: "Please Enter Username",
                },
                minLength: {
                  value: 5,
                  message: "Username should be greater than 5",
                },
              })}
            />
            {errors.LoginUsername && (
              <p className="signupErrs">{errors.LoginUsername.message}</p>
            )}
            <input
              className="loginPw"
              type="text"
              placeholder="Password"
              {...register("LoginPassword", {
                required: {
                  value: true,
                  message: "Please Enter Password",
                },
                minLength: {
                  value: 5,
                  message: "Password should be greater than 5",
                },
              })}
            />
            {errors.LoginPassword && (
              <p className="signupErrs">{errors.LoginPassword.message}</p>
            )}
            <button className="loginBtnLog" onClick={handleLogin}>
              Login
            </button>
          </form>

          {currentUser?.length === 0 && userFlag === true && (
            <div className="loginSignupBtn">
              {/* <p>You are not a user. Please Sign up first</p> */}
              <p>Username or password does not match.</p>
              <p>Or You are not a member.</p>
              <button onClick={GoToSignUp}>Sign Up</button>
            </div>
          )}
        </div>
      </>
    </>
  );
};

export default Login;
