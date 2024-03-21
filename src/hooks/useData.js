import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/users/userSlice";
import store from "../store/store";

export const useData = () => {
  //   const [userData, setUserData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currUser, setCurrUser] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addUser(name, email));
    console.log(store.getState());
    // setUserData([...userData, store.getState()]);
    setEmail("");
    setName("");
  };

  return {
    // userData,
    // setUserData,
    name,
    setName,
    email,
    setEmail,
    handleSubmit,
    // handleLogin,
    currUser,
    setCurrUser,
  };
};
