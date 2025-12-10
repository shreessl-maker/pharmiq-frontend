import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DashboardSuperAdmin() {
  const data = {
    labels: ["Active Users", "Inactive", "Pending", "Banned"],
    datasets: [
      {
        data: [300, 50, 100, 25],
        backgroundColor: ["#10b981", "#f59e0b", "#3b82f6", "#ef4444"],
      },
    ],
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar title="Super Admin Dashboard" />
        <div className="p-8 bg-gradient-to-br from-indigo-50 to-sky-50 flex-1">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">User Distribution</h2>
            <Doughnut data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
