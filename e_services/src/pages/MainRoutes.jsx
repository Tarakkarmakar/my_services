import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Pricing from "./Pricing/Pricing";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Client from "../Components/Client/Client";
import Billing from "../Components/Billing/Billing";
import Setting from "../Components/Setting/Setting";
import Services from "../../src/Components/Services/Services";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/client" element={<Client />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/services" element={<Services />} />
      <Route path="/settings" element={<Setting />} />
    </Routes>
  );
}

export default MainRoutes;
