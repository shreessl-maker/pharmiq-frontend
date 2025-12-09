import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import DashboardSuperAdmin from "./pages/DashboardSuperAdmin.jsx";
import DashboardAdmin from "./pages/DashboardAdmin.jsx";
import DashboardStaff from "./pages/DashboardStaff.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route → Login Page */}
        <Route path="/" element={<Login />} />

        {/* Dashboard Routes */}
        <Route path="/superadmin/dashboard" element={<DashboardSuperAdmin />} />
        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="/staff/dashboard" element={<DashboardStaff />} />

        {/* Fallback Route */}
        <Route path="*" element={<div>404 Page Not Found (React Router)</div>} />
      </Routes>
    </Router>
  );
}

export default App;
