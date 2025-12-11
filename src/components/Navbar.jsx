import React from "react";

export default function Navbar({ onLogout }) {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white flex justify-between items-center px-6 py-3 shadow-md">
      <div className="flex items-center space-x-3">
        <img src="/logo-pillpophq.png" alt="PillPopHQ" className="h-8 w-8" />
        <h1 className="text-xl font-bold">PillPopHQ Dashboard</h1>
      </div>

      <button
        onClick={onLogout}
        className="bg-white text-blue-600 px-4 py-1 rounded-md font-semibold hover:bg-gray-100 transition"
      >
        Logout
      </button>
    </nav>
  );
}

