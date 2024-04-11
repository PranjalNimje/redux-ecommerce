import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../features/users/userSlice";
import store from "../store/store";
import { useForm } from "react-hook-form";

export const useData = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const [currUser, setCurrUser] = useState({});
  const [accountCreatedFlag, setAccountCreatedFlag] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitClick = () => {
    const values = getValues();

    console.log("store", store.getState());
    const a = store
      .getState()
      .user.allUsers.filter(
        (i) => i.userName === values.name || i.email === values.email
      );
    console.log("a", a);
    if (a.length === 0) {
      dispatch(addUser(values.name, values.email, values.password));
      navigate("/login");
      setAccountCreatedFlag(false);
    } else {
      setAccountCreatedFlag(true);
    }
  };

  return {
    handleSubmit,
    accountCreatedFlag,
    currUser,
    setCurrUser,
    register,
    errors,
    onSubmitClick,
    getValues,
    setValue,
  };
};
