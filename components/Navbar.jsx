import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ clientLogo }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-500 text-white shadow-md">
      {/* Left: PillPopHQ logo */}
      <div className="flex items-center gap-3">
        <img
          src="/logo-pillpophq.png"
          alt="PillPopHQ"
          className="w-10
