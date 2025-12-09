import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Replace this URL with your live backend API base
  const API_BASE = "https://pillpop-backend.onrender.com/api/auth/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_BASE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setLoading(false);

      if (!response.ok) {
        setError(data.message || "Invalid credentials");
        return;
      }

      // ✅ Save token to localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      // ✅ Redirect based on role
      if (data.role === "superadmin") {
        navigate("/dashboard-superadmin");
      } else if (data.role === "admin") {
        navigate("/dashboard-admin");
      } else if (data.role === "staff") {
        navigate("/dashboard-staff");
      } else {
        setError("Unknown role. Please contact support.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-white">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-96 text-center border border-purple-200">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
          PillPopHQ
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Your daily dose of knowledge check
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold transition ${
              loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"
            }`}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {error && <p className="mt-4 text-sm text-red-500">{error}</p>}

        <p className="mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} PillPopHQ. All rights reserved.
        </p>
      </div>
    </div>
  );
}
