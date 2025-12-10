import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ChartCard from "../components/ChartCard";

export default function Reports() {
  const sampleData = [
    { name: "Alice", score: 89, test: "Cardiology Basics" },
    { name: "Bob", score: 76, test: "Pharma Regulations" },
    { name: "Carol", score: 92, test: "Antibiotics Overview" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-8 space-y-8">
          <ChartCard title="Average Test Scores" data={[89, 76, 92, 81, 84, 78]} color="#4f46e5" />

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Test Reports</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3 border-b">Employee</th>
                  <th className="p-3 border-b">Test</th>
                  <th className="p-3 border-b">Score</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-3 border-b">{row.name}</td>
                    <td className="p-3 border-b">{row.test}</td>
                    <td className="p-3 border-b font-medium text-blue-600">{row.score}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
