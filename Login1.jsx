import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in with: ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-[2px] rounded-xl shadow-lg w-[380px]">
        <div className="bg-white rounded-lg p-8">
          <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            PharmIQ Login
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 rounded-md shadow hover:opacity-90 transition"
            >
              Sign In
            </button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-3">
            © {new Date().getFullYear()} PharmIQ — Empowering Field Intelligence
          </p>
        </div>
      </div>
    </div>
  );
}
