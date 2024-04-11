import React from "react";
import { useData } from "../hooks/useData";
import Signup_Background from "../assets/Signup_Background.jpg";
import Lavendar_bg from "../assets/Lavendar_bg.jpg";
import { useNavigate } from "react-router-dom";
const SignUp = ({ itemsList }) => {
  const {
    accountCreatedFlag,
    setAccountCreatedFlag,
    handleSubmit,
    onSubmitClick,
    register,
    errors,
    getValues,
    setValue,
  } = useData();
  // console.log("ERRORS", errors);
  const navigate = useNavigate();
  const multipleValues = getValues();
  // console.log("multipleValues", multipleValues);
  const GoToLogin = () => {
    navigate(`/login`);
  };
  const handleAccoutErr = () => {
    setAccountCreatedFlag(false);
  };
  return (
    <>
      <div
        className="signupBlock"
        style={{
          backgroundImage: `url(${Lavendar_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="signupLeftBg">
          <p className="signupBgHeader">Welcome to TradeTrove</p>
        </div>
        <div
          style={{
            display: "grid",
            width: "fit-content",
            padding: "4rem",
            // border: "2px solid GAINSBORO",
            paddingTop: "1rem",
            rowGap: "1rem",
            background: "rgba(65, 4, 99, 0.7)",
          }}
        >
          {" "}
          <h1
            style={{
              textAlign: "center",
              marginBottom: "18px",
              color: "#fff",
              fontFamily: "'Poppins', sans-serif",
              marginTop: "10px",
            }}
          >
            SignUp
          </h1>
          <form className="signupForm" onSubmit={handleSubmit(onSubmitClick)}>
            <input
              className="signupName"
              placeholder="UserName"
              // name={name}
              // errors={errors}
              // name="singleErrorInput"
              // render={({ errors }) => <p>{errors.message}</p>}
              {...register("name", {
                onChange: () => setAccountCreatedFlag(false),
                onBlur: () => setAccountCreatedFlag(false),
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
            {errors.name && <p className="signupErrs">{errors.name.message}</p>}
            <input
              placeholder="Email"
              className="signupEmail"
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Please Enter Email",
                },
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter email in the format abc@gmail.com",
                },
                minLength: {
                  value: 5,
                  message: "Email should be greater than 5",
                },
              })}
            />
            {errors.email && (
              <p className="signupErrs">{errors.email.message}</p>
            )}
            <input
              placeholder="Password"
              className="signupPw"
              {...register("password", {
                required: {
                  value: true,
                  message: "Please Enter Password",
                },
                minLength: {
                  value: 8,
                  message: "Password should be greater than 8",
                },
              })}
            />
            {errors.password && (
              <p className="signupErrs">{errors.password.message}</p>
            )}

            <button className="signupBtn" type="submit">
              Create account
            </button>
            {accountCreatedFlag && (
              <p className="signupAccExistsErr">
                Username or Email already in use
              </p>
            )}
          </form>
          <span style={{ margin: "auto", color: "#fff" }}>
            {" "}
            Already a member ?{" "}
          </span>
          <button className="signupBtn" onClick={GoToLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
