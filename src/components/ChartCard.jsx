import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function ChartCard({ title, data, color }) {
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: title,
        data: data || [12, 19, 8, 15, 22, 30, 25],
        fill: true,
        borderColor: color || "#6b4eff",
        backgroundColor: "rgba(107, 78, 255, 0.1)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: "rgba(200,200,200,0.1)" } },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition-shadow">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <Line data={chartData} options={options} height={100} />
    </div>
  );
}

