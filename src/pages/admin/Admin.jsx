import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import './Admin.scss'

const Admin = () => {
  return (
    <div className="admin__layout">
      <Sidebar />
      <div className="admin__content">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
