import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DashboardAdmin() {
  const data = {
    labels: ["Completed Tests", "Pending Tests", "Failed Tests"],
    datasets: [{ data: [60, 25, 15], backgroundColor: ["#3b82f6", "#facc15", "#ef4444"] }],
  };

  return (
    <div>
      <Navbar title="Admin Dashboard" />
      <div className="flex">
        <Sidebar menu={["Overview", "Manage Staff", "Performance"]} />
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-4">Staff Test Summary</h2>
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
}
