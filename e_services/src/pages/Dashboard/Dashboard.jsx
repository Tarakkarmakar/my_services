import React from 'react'
import Sidebar from '../../Components/Navbar/Sidebar/Sidebar'
import { Routes, Route} from 'react-router-dom';
import Client from '../../Components/Client/Client'
import Billing from '../../Components/Billing/Billing'
import Setting from '../../Components/Setting/Setting'
const Dashboard = () => {
  return (

    <div className="flex">
      <Sidebar />
     
    </div>
  
  )
}

export default Dashboard
