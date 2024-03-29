import React from "react";
import { Link } from "react-router-dom";
import { Dashboard, Person, CreditCard, Settings } from "@mui/icons-material";
import InventoryIcon from "@mui/icons-material/Inventory";
const Sidebar = () => {
  return (
    <div className="bg-gray-800 p-1 text-white h-screen w-30 md:w-64 lg:w-64 flex flex-col">
      <div className="p-4 text-2xl font-bold">Dashboard</div>
      <div className=" flex  w-10/12  flex-col justify-around">
        <Link
          to="/dashboard"
          className="sidebar-link mt-5 hover:bg-gray-600"
          title="Dashboard"
        >
          <Dashboard className="mr-2" />
          Dashboard
        </Link>
        <Link
          to="/client"
          className="sidebar-link mt-2 hover:bg-gray-600"
          title="Clients"
        >
          <Person className="mr-2" />
          Clients
        </Link>
        <Link
          to="/services"
          className="sidebar-link mt-2 hover:bg-gray-600"
          title="Clients"
        >
          <InventoryIcon className="mr-2" />
          Services
        </Link>
        <Link
          to="/billing"
          className="sidebar-link mt-2 hover:bg-gray-600"
          title="Billing"
        >
          <CreditCard className="mr-2" />
          Billing
        </Link>
        <Link
          to="/settings"
          className="sidebar-link mt-2 hover:bg-gray-600"
          title="Settings"
        >
          <Settings className="mr-2" />
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
