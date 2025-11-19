"use client";

import React, { useState } from "react";
import { Eye, EyeOff, User, LockKeyhole, Shield } from "lucide-react";
import Link from "next/link";
import { useLogin } from "@/hooks/useLogin";
import { useRouter } from "next/navigation";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const { login, loading, error, data } = useLogin();
  const router = useRouter();
  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.username || !formData.password) {
      alert("Please enter both email and password.");
      return;
    }

    const Success = await login({
      email: formData.username,
      password: formData.password,
    });
    if (Success) {
      router.push("/dashboard");
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="w-full mx-auto p-6 bg-white">
      <div className="space-y-6">
        {/* Email Field */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-900 mb-2">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="username"
              type="email"
              value={formData.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
              placeholder="Enter your email"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent"
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-900 mb-2">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LockKeyhole className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              placeholder="Enter password here"
              className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:border-transparent"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 cursor-pointer right-0 pr-3 flex items-center">
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-gradient-to-r cursor-pointer from-[#192BC2] to-[#192BC2] text-white font-medium py-3 px-4 rounded-lg hover:from-[#192BC2] hover:to-[#192BC2] focus:outline-none focus:ring-2 focus:ring-[#192BC2] focus:ring-offset-2 transition-all duration-200 disabled:opacity-50">
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        {/* Success Message */}
        {data?.message && (
          <p className="text-green-600 text-sm mt-2">{data.message}</p>
        )}

        {/* Create Account Link */}
        <div className="text-center">
          <span className="text-gray-600 text-sm">Don’t have an account? </span>
          <Link
            href="/signUp"
            className="text-[#192BC2] hover:text-[#192BC2] cursor-pointer hover:underline font-medium text-sm focus:outline-none focus:underline">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
