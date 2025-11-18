"use client";
import React, { useState } from "react";
import { DollarSign, Users, Percent, Clock } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const ReportsAnalytics = () => {
  const stats = [
    {
      label: "Total Revenue",
      value: "₦3.3M",
      icon: DollarSign,
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-l-4 border-green-500",
    },
    {
      label: "Active Users",
      value: "13.8K",
      icon: Users,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-l-4 border-orange-500",
    },
    {
      label: "Churn Rate",
      value: "14.8%",
      icon: Percent,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-l-4 border-yellow-500",
    },
    {
      label: "Avg. Session Time",
      value: "34m",
      icon: Clock,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-l-4 border-purple-500",
    },
  ];

  const revenueData = [
    { month: "Jan", assignmentHelp: 800, courseSales: 650, liveSessions: 550 },
    { month: "Feb", assignmentHelp: 450, courseSales: 700, liveSessions: 400 },
    { month: "Mar", assignmentHelp: 650, courseSales: 550, liveSessions: 500 },
    { month: "Apr", assignmentHelp: 500, courseSales: 600, liveSessions: 450 },
    { month: "May", assignmentHelp: 550, courseSales: 500, liveSessions: 400 },
    { month: "Jun", assignmentHelp: 700, courseSales: 850, liveSessions: 650 },
    { month: "Jul", assignmentHelp: 600, courseSales: 750, liveSessions: 550 },
    { month: "Aug", assignmentHelp: 650, courseSales: 700, liveSessions: 500 },
    { month: "Sep", assignmentHelp: 450, courseSales: 600, liveSessions: 400 },
    { month: "Oct", assignmentHelp: 750, courseSales: 650, liveSessions: 550 },
    { month: "Nov", assignmentHelp: 500, courseSales: 550, liveSessions: 450 },
    { month: "Dec", assignmentHelp: 600, courseSales: 500, liveSessions: 400 },
  ];

  const distributionData = [
    { name: "Course Sales", value: 238000, color: "#FF6B35" },
    { name: "Live Sessions", value: 135000, color: "#FF8C61" },
    { name: "Assignment Help", value: 69000, color: "#FFB499" },
    { name: "Organizations", value: 10000, color: "#FFDAD1" },
  ];

  const totalRevenue = distributionData.reduce(
    (sum, item) => sum + item.value,
    0
  );

  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-200">
          <p className="font-semibold text-gray-900 mb-2">
            {payload[0].payload.month}
          </p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: ₦{entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Accept Recharts' label render props without enforcing an incompatible custom type
  const CustomPieLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props || {};
    const RADIAN = Math.PI / 180;
    const ir = innerRadius ?? 0;
    const or = outerRadius ?? 0;
    const radius = ir + (or - ir) * 0.5;
    const x = (cx ?? 0) + radius * Math.cos(-midAngle * RADIAN);
    const y = (cy ?? 0) + radius * Math.sin(-midAngle * RADIAN);

    if (!percent || percent < 0.05) return null;

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > (cx ?? 0) ? "start" : "end"}
        dominantBaseline="central"
        className="text-sm font-semibold">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Reports & Analytics
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Comprehensive insights into platform performance
          </p>
        </div>

        {/* Stats Cards */}
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Trends Chart */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Revenue Trends
              </h2>
              <div className="flex flex-wrap gap-4 text-sm">
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
            </div>
            <ResponsiveContainer width="100%" height={300}>
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
                  tickFormatter={(value: any) => `${value}`}
                />
                <Tooltip content={CustomTooltip} />
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

          {/* Revenue Distribution Chart */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Revenue Distribution
            </h2>
            <div className="flex items-center justify-center mb-6">
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={CustomPieLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value">
                    {distributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3">
              {distributionData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-gray-700">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    ₦{item.value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;
