import React from "react";
import Profile from "./Profile";
import { Outlet } from "react-router-dom";

const Layout = ({ itemsList }) => {
  return (
    <div>
      <Profile itemsList={itemsList} />
      <Outlet />
    </div>
  );
};

export default Layout;
