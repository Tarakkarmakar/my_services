import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import MenuIcon from "@mui/icons-material/Menu";
function Navbar() {
  const navigate = useNavigate();
  const handleMenuClick = (route) => {
    navigate(route);
  };

  return (
    <div
      className=" flex flex-row lg:justify-between items-center h-18 pl-6 
    border bottom-2 bg-blue-300"
    >
      <AdminPanelSettingsIcon fontSize="large" />

      <ul className="flex w-8/12  ml-auto text-gray-700 justify-between font-semibold p-4 items-center list-none">
        <li
          className="hidden hover:cursor-pointer  lg:flex items-center ml-4"
          onClick={() => handleMenuClick("/")}
        >
          Home
        </li>
        <li
          className="hidden hover:cursor-pointer lg:flex items-center ml-4"
          onClick={() => handleMenuClick("/dashboard")}
        >
          Dashboard
        </li>
        <li
          className="hidden hover:cursor-pointer  lg:flex items-center ml-4"
          onClick={() => handleMenuClick("/about")}
        >
          About
        </li>
        <li
          className="hidden hover:cursor-pointer lg:flex items-center ml-4"
          onClick={() => handleMenuClick("/contact")}
        >
          Contact
        </li>
        <li
          className="hidden hover:cursor-pointer lg:flex items-center ml-4"
          onClick={() => handleMenuClick("/pricing")}
        >
          Pricing
        </li>

        <li
          className="hidden hover:cursor-pointer lg:flex items-center ml-4"
          onClick={() => handleMenuClick("/login")}
        >
          Login/Signup
        </li>

        <li className=" block ml-auto sm:block md:hidden lg:hidden mr-3">
          <MenuIcon />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
