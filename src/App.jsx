import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import DashboardSuperAdmin from "./pages/DashboardSuperAdmin";
import DashboardAdmin from "./pages/DashboardAdmin";
import DashboardStaff from "./pages/DashboardStaff";

export default function App() {
  const role = localStorage.getItem("role");

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/superadmin" element={role === "superadmin" ? <DashboardSuperAdmin /> : <Navigate to="/" />} />
      <Route path="/admin" element={role === "admin" ? <DashboardAdmin /> : <Navigate to="/" />} />
      <Route path="/staff" element={role === "staff" ? <DashboardStaff /> : <Navigate to="/" />} />
    </Routes>
  );
}
