import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
// import { Dashboard } from "../pages/Dashboard";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/dashboard">
        <Dashboard />
      </Route> */}
      <Route element={<p>Not found!</p>} />
    </Routes>
  );
};
