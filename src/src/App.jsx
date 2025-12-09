import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import DashboardSuperAdmin from "./pages/DashboardSuperAdmin.jsx";
import DashboardAdmin from "./pages/DashboardAdmin.jsx";
import DashboardStaff from "./pages/DashboardStaff.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/superadmin/dashboard" element={<DashboardSuperAdmin />} />
        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="/staff/dashboard" element={<DashboardStaff />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
