import React from "react";
import "./Sidebar.scss";
import { GoArrowLeft } from "react-icons/go";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { LuPencilLine } from "react-icons/lu";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("x-auth-token");
    navigate("/login");
  };
  return (
    <nav className="sidebar">
      <div className="sidebar__title">
        <GoArrowLeft size={28} onClick={handleLogout} />
        <h2>Admin Dashboard</h2>
      </div>
      <div className="sidebar__links">
        <NavLink to={"create-product"}>
          <HiOutlineSquaresPlus size={24} />
          <p>Create product</p>
        </NavLink>
        <NavLink to={"manage-product"}>
          <LuPencilLine size={24} />
          <p>Manage product</p>
        </NavLink>
        <NavLink to={"create-category"}>
          <HiOutlineSquaresPlus size={24} />
          <p>Create category</p>
        </NavLink>
        <NavLink to={"manage-category"}>
          <LuPencilLine size={24} />
          <p>Manage category</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
