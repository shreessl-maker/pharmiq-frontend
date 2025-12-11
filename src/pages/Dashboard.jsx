import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ChartCard from "../components/ChartCard";
import Loader from "../components/Loader";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);

  // Demo logout logic
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // clear auth if used
    window.location.href = "/login";
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <Navbar onLogout={handleLogout} />

        {/* Dashboard Content */}
        <main className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <ChartCard title="Daily Engagement" color="#6b4eff" />
          <ChartCard title="Prescription Trends" color="#00c6ff" />
          <ChartCard title="Revenue Growth" color="#28a745" />
          <div className="bg-white rounded-xl shadow-md p-6 col-span-1 md:col-span-2 xl:col-span-3">
            <h2 className="text-xl font-semibold mb-3 text-gray-700">Performance Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to your <strong>PillPopHQ Dashboard</strong>!  
              Here you can monitor system-wide performance metrics, visualize user activity,
              and track key growth indicators. Reports and insights are automatically refreshed
              every 24 hours based on backend sync.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
