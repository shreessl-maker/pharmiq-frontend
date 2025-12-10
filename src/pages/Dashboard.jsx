import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ChartCard from "../components/ChartCard";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ChartCard title="Monthly Sales" data={[12, 19, 3, 5, 2, 3]} color="#6366f1" />
          <ChartCard title="User Growth" data={[8, 15, 5, 7, 10, 4]} color="#a855f7" />
        </main>
      </div>
    </div>
  );
}
