import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const DashboardSuperAdmin = () => {
  const [stats, setStats] = useState({
    totalClients: 0,
    totalAdmins: 0,
    totalStaff: 0,
    totalTests: 0,
  });
  const [clients, setClients] = useState([]);
  const [logoUrl, setLogoUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  // Backend base URL
  const API_URL = import.meta.env.VITE_API_URL;

  // Fetch stats and clients
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const statsRes = await axios.get(`${API_URL}/api/dashboard`);
        setStats(statsRes.data);

        const clientsRes = await axios.get(`${API_URL}/api/client/all`);
        setClients(clientsRes.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };
    fetchDashboardData();
  }, []);

  // Upload logo
  const handleLogoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("logo", file);

      const response = await axios.post(`${API_URL}/api/upload/logo/superadmin/1234567890`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setLogoUrl(response.data.url);
      setUploading(false);
      alert("✅ Logo uploaded successfully!");
    } catch (err) {
      console.error("Upload failed:", err);
      setUploading(false);
      alert("❌ Upload failed.");
    }
  };

  // Chart Data
  const barData = {
    labels: ["Clients", "Admins", "Staff", "Tests"],
    datasets: [
      {
        label: "Total Count",
        data: [stats.totalClients, stats.totalAdmins, stats.totalStaff, stats.totalTests],
        backgroundColor: ["#3b82f6", "#6366f1", "#8b5cf6", "#a855f7"],
      },
    ],
  };

  const doughnutData = {
    labels: ["Clients", "Admins", "Staff", "Tests"],
    datasets: [
      {
        data: [stats.totalClients, stats.totalAdmins, stats.totalStaff, stats.totalTests],
        backgroundColor: ["#60a5fa", "#818cf8", "#a78bfa", "#c084fc"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">PharmIQ Super Admin Dashboard</h1>
          <p className="text-gray-500 text-sm">Empowering Field Intelligence</p>
        </div>
        <div>
          {logoUrl && <img src={logoUrl} alt="System Logo" className="h-12 mr-4 inline-block" />}
          <label className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition">
            {uploading ? "Uploading..." : "Upload Logo"}
            <input type="file" className="hidden" onChange={handleLogoUpload} />
          </label>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Overall Statistics</h2>
          <Bar data={barData} />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Distribution Overview</h2>
          <Doughnut data={doughnutData} />
        </div>
      </section>

      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Registered Clients</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-600">
            <thead className="border-b bg-gray-100">
              <tr>
                <th className="py-2 px-4">#</th>
                <th className="py-2 px-4">Client Name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Created</th>
              </tr>
            </thead>
            <tbody>
              {clients.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-400">
                    No clients found.
                  </td>
                </tr>
              ) : (
                clients.map((client, index) => (
                  <tr key={client._id} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{client.name}</td>
                    <td className="py-2 px-4">{client.email}</td>
                    <td className="py-2 px-4">
                      {new Date(client.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default DashboardSuperAdmin;
