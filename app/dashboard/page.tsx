"use client";
import React, { useState } from "react";
import {
  Users,
  Award,
  DollarSign,
  Building2,
  FileCheck,
  Video,
  Download,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const [revenueView, setRevenueView] = useState("Monthly");
  const [typeFilter, setTypeFilter] = useState("All Types");

  const stats = [
    {
      label: "Total Students",
      value: "0",
      icon: Users,
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-l-4 border-green-500",
    },
    {
      label: "Total Tutors",
      value: "0",
      icon: Award,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-l-4 border-orange-500",
    },
    {
      label: "Total Revenue",
      value: "0",
      icon: DollarSign,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-l-4 border-purple-500",
    },
    {
      label: "Active Organizations",
      value: "0",
      icon: Building2,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-l-4 border-blue-500",
    },
    {
      label: "Assignments Submitted",
      value: "0",
      icon: FileCheck,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-l-4 border-yellow-500",
    },
    {
      label: "Live Sessions Conducted",
      value: "0",
      icon: Video,
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-l-4 border-red-500",
    },
  ];

  const revenueData = [
    { month: "Jan", assignmentHelp: 800, courseSales: 450, liveSessions: 350 },
    { month: "Feb", assignmentHelp: 550, courseSales: 700, liveSessions: 400 },
    { month: "Mar", assignmentHelp: 700, courseSales: 600, liveSessions: 450 },
    { month: "Apr", assignmentHelp: 500, courseSales: 650, liveSessions: 550 },
    { month: "May", assignmentHelp: 650, courseSales: 500, liveSessions: 400 },
    { month: "Jun", assignmentHelp: 550, courseSales: 600, liveSessions: 500 },
    { month: "Jul", assignmentHelp: 900, courseSales: 850, liveSessions: 700 },
    { month: "Aug", assignmentHelp: 700, courseSales: 750, liveSessions: 600 },
    { month: "Sep", assignmentHelp: 600, courseSales: 650, liveSessions: 500 },
    { month: "Oct", assignmentHelp: 750, courseSales: 550, liveSessions: 450 },
    { month: "Nov", assignmentHelp: 500, courseSales: 600, liveSessions: 500 },
    { month: "Dec", assignmentHelp: 550, courseSales: 500, liveSessions: 400 },
  ];

  const transactions = [
    {
      id: "TXN001",
      type: "Course Sale",
      amount: "$299.99",
      fee: "$8.99",
      vat: "$59.99",
      date: "2024-01-14",
      status: "completed",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "failed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const CustomTooltip = ({
    active,
    payload,
  }: {
    active?: boolean;
    payload?: any[];
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-200">
          <p className="font-semibold text-gray-900 mb-2">
            {payload[0].payload.month}
          </p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        {/* <AdminNav */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">
            Comprehensive overview of your educational platform
          </p>
        </div>

        {/* Stats Cards - 2x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-5 shadow-sm ${stat.borderColor}`}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
                  <stat.icon size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Revenue Trends Chart */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Revenue Trends
              </h2>
              <select
                value={revenueView}
                onChange={(e) => setRevenueView(e.target.value)}
                className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0A5DEC] bg-white">
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Yearly</option>
              </select>
            </div>
            <div className="flex flex-wrap gap-4 text-sm mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-600">Assignment Help</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-gray-600">Course Sales</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-600">Live Sessions</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                  axisLine={{ stroke: "#e5e7eb" }}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                  axisLine={{ stroke: "#e5e7eb" }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="assignmentHelp"
                  fill="#ef4444"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="courseSales"
                  fill="#f97316"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="liveSessions"
                  fill="#eab308"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Weekly Engagement Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Weekly Engagement
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-48 h-48">
                {/* Circular progress ring */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="#fee2e2"
                    strokeWidth="16"
                    fill="none"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="#f97316"
                    strokeWidth="16"
                    fill="none"
                    strokeDasharray="552.92"
                    strokeDashoffset="165.88"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900">70%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-8 bg-orange-500 rounded"></div>
                  <div>
                    <p className="text-sm text-gray-500">Student</p>
                    <p className="text-xl font-bold text-gray-900">
                      80 <span className="text-xs text-gray-400">%</span>
                    </p>
                  </div>
                </div>
                <TrendingUp size={20} className="text-green-500" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-8 bg-purple-500 rounded"></div>
                  <div>
                    <p className="text-sm text-gray-500">Tutor</p>
                    <p className="text-xl font-bold text-gray-900">
                      40 <span className="text-xs text-gray-400">%</span>
                    </p>
                  </div>
                </div>
                <TrendingDown size={20} className="text-red-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-5 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Transactions
            </h2>
            <div className="flex gap-3">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A5DEC] bg-white text-sm">
                <option>All Types</option>
                <option>Course Sale</option>
                <option>Live Class</option>
                <option>Assignment Help</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                <Download size={18} />
                Export
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Transaction ID
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Type
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Amount
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Fee
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    VAT
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Date
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {transactions.map((txn, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-5">
                      <span className="text-sm text-gray-900 font-medium">
                        {txn.id}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <span className="text-sm text-gray-700">{txn.type}</span>
                    </td>
                    <td className="py-4 px-5">
                      <span className="text-sm text-gray-900 font-medium">
                        {txn.amount}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <span className="text-sm text-gray-700">{txn.fee}</span>
                    </td>
                    <td className="py-4 px-5">
                      <span className="text-sm text-gray-700">{txn.vat}</span>
                    </td>
                    <td className="py-4 px-5">
                      <span className="text-sm text-gray-700">{txn.date}</span>
                    </td>
                    <td className="py-4 px-5">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          txn.status
                        )}`}>
                        {txn.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
