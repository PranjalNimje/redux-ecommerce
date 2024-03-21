import React, { useState } from "react";
import { useData } from "../hooks/useData";
import Login from "./Login";

const SignUp = () => {
  const { name, setName, email, setEmail, handleSubmit } = useData();
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? (
        <Login />
      ) : (
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
            {" "}
            <h1 style={{ textAlign: "center", marginBottom: "18px" }}>
              SignUp
            </h1>
            <input
              style={{
                padding: "0.5rem",
                borderRadius: "3px",
                border: "1px solid",
              }}
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              style={{
                padding: "0.5rem",
                borderRadius: "3px",
                border: "1px solid",
              }}
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              style={{
                padding: "0.5rem",
                borderRadius: "3px",
                border: "none",
                background: "powderblue",
                color: "black",
              }}
              onClick={handleSubmit}
            >
              Submit
            </button>
            <span style={{ margin: "auto" }}> Already a member ? </span>
            <button
              style={{
                padding: "0.5rem",
                borderRadius: "3px",
                border: "none",
                background: "powderblue",
                color: "black",
              }}
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default SignUp;
