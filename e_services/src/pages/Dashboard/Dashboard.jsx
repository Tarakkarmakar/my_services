import React from "react";
import Sidebar from "../../Components/Navbar/Sidebar/Sidebar";
import Support from "../../Components/Support/Support";
import "../../Components/styles.css";
import GrowthChart from "../../Components/growthchart/GrowthChart";
const Dashboard = () => {
  const data = [1000, 2000, 3000, 4958, 6090, 7909, 6087, 5979, 4805, 2506];
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col p-4">
        <GrowthChart SalesData={data} />
        <Support />
      </div>
    </div>
  );
};

export default Dashboard;
