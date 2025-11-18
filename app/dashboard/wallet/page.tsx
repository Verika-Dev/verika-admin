"use client";
import React, { useState } from "react";
import {
  Search,
  Download,
  DollarSign,
  TrendingUp,
  Clock,
  MoreVertical,
} from "lucide-react";

const WalletManagement = () => {
  const [activeTab, setActiveTab] = useState("transactions");
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");

  const stats = [
    {
      label: "Total Balance",
      value: activeTab === "transactions" ? "20" : "0",
      icon: DollarSign,
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-l-4 border-green-500",
    },
    {
      label: "Monthly Inflow",
      value: "0",
      icon: TrendingUp,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-l-4 border-orange-500",
    },
    {
      label: "Pending Payouts",
      value: "0",
      icon: Clock,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-l-4 border-purple-500",
    },
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
    {
      id: "TXN001",
      type: "Live Class",
      amount: "$299.99",
      fee: "$8.99",
      vat: "$59.99",
      date: "2024-01-14",
      status: "pending",
    },
    {
      id: "TXN001",
      type: "Assignment Help",
      amount: "$299.99",
      fee: "$8.99",
      vat: "$59.99",
      date: "2024-01-14",
      status: "pending",
    },
    {
      id: "TXN001",
      type: "Org Billing",
      amount: "$299.99",
      fee: "$8.99",
      vat: "$59.99",
      date: "2024-01-14",
      status: "failed",
    },
    {
      id: "TXN001",
      type: "Course Sale",
      amount: "$299.99",
      fee: "$8.99",
      vat: "$59.99",
      date: "2024-01-14",
      status: "completed",
    },
    {
      id: "TXN001",
      type: "Course Sale",
      amount: "$299.99",
      fee: "$8.99",
      vat: "$59.99",
      date: "2024-01-14",
      status: "pending",
    },
  ];

  const payouts = [
    {
      id: "TXN001",
      amount: "$299.99",
      bankFee: "$8.99",
      requestDate: "2024-01-14",
      status: "completed",
    },
    {
      id: "TXN001",
      amount: "$299.99",
      bankFee: "$8.99",
      requestDate: "2024-01-14",
      status: "pending",
    },
    {
      id: "TXN001",
      amount: "$299.99",
      bankFee: "$8.99",
      requestDate: "2024-01-14",
      status: "pending",
    },
    {
      id: "TXN001",
      amount: "$299.99",
      bankFee: "$8.99",
      requestDate: "2024-01-14",
      status: "processing",
    },
    {
      id: "TXN001",
      amount: "$299.99",
      bankFee: "$8.99",
      requestDate: "2024-01-14",
      status: "completed",
    },
    {
      id: "TXN001",
      amount: "$299.99",
      bankFee: "$8.99",
      requestDate: "2024-01-14",
      status: "pending",
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
      case "processing":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const filteredTransactions = transactions.filter((txn) => {
    const matchesSearch =
      txn.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      txn.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "All Types" || txn.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const filteredPayouts = payouts.filter((payout) => {
    const matchesSearch = payout.id
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType =
      typeFilter === "All Types" || payout.status === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Wallet</h1>
            <p className="text-gray-500 text-sm mt-1">
              Manage your platform finances and payouts
            </p>
          </div>
          <button className="bg-[#0A5DEC] cursor-pointer text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
            Payout Request
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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

        {/* Tabs */}
        <div className="flex gap-1 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("transactions")}
            className={`px-4 py-2 font-medium cursor-pointer transition-colors relative ${
              activeTab === "transactions"
                ? "text-[#0A5DEC]"
                : "text-gray-600 hover:text-gray-900"
            }`}>
            Transactions
            {activeTab === "transactions" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A5DEC]"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab("payout")}
            className={`px-4 py-2 font-medium cursor-pointer transition-colors relative ${
              activeTab === "payout"
                ? "text-[#0A5DEC]"
                : "text-gray-600 hover:text-gray-900"
            }`}>
            Pay out
            {activeTab === "payout" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A5DEC]"></div>
            )}
          </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm">
          {/* Transactions Tab */}
          {activeTab === "transactions" && (
            <>
              <div className="p-5 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">
                  Recent Transactions
                </h2>
              </div>

              {/* Search and Filters */}
              <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search transaction..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A5DEC]"
                  />
                </div>
                <div className="flex gap-3">
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A5DEC] bg-white">
                    <option>All Types</option>
                    <option>Course Sale</option>
                    <option>Live Class</option>
                    <option>Assignment Help</option>
                    <option>Org Billing</option>
                  </select>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download size={18} />
                    Export
                  </button>
                </div>
              </div>

              {/* Transactions Table */}
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
                    {filteredTransactions.map((txn, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-5">
                          <span className="text-sm text-gray-900 font-medium">
                            {txn.id}
                          </span>
                        </td>
                        <td className="py-4 px-5">
                          <span className="text-sm text-gray-700">
                            {txn.type}
                          </span>
                        </td>
                        <td className="py-4 px-5">
                          <span className="text-sm text-gray-900 font-medium">
                            {txn.amount}
                          </span>
                        </td>
                        <td className="py-4 px-5">
                          <span className="text-sm text-gray-700">
                            {txn.fee}
                          </span>
                        </td>
                        <td className="py-4 px-5">
                          <span className="text-sm text-gray-700">
                            {txn.vat}
                          </span>
                        </td>
                        <td className="py-4 px-5">
                          <span className="text-sm text-gray-700">
                            {txn.date}
                          </span>
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
            </>
          )}

          {/* Payout Tab */}
          {activeTab === "payout" && (
            <>
              <div className="p-5 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">
                  Payout Management
                </h2>
              </div>

              {/* Search and Filters */}
              <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search transaction..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A5DEC]"
                  />
                </div>
                <div className="flex gap-3">
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A5DEC] bg-white">
                    <option>All Types</option>
                    <option>completed</option>
                    <option>pending</option>
                    <option>processing</option>
                  </select>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download size={18} />
                    Export
                  </button>
                </div>
              </div>

              {/* Payouts Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                        Payout ID
                      </th>
                      <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                        Amount
                      </th>
                      <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                        Bank Fee
                      </th>
                      <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                        Request Date
                      </th>
                      <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                        Status
                      </th>
                      <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredPayouts.map((payout, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-5">
                          <span className="text-sm text-gray-900 font-medium">
                            {payout.id}
                          </span>
                        </td>
                        <td className="py-4 px-5">
                          <span className="text-sm text-gray-900 font-medium">
                            {payout.amount}
                          </span>
                        </td>
                        <td className="py-4 px-5">
                          <span className="text-sm text-gray-700">
                            {payout.bankFee}
                          </span>
                        </td>
                        <td className="py-4 px-5">
                          <span className="text-sm text-gray-700">
                            {payout.requestDate}
                          </span>
                        </td>
                        <td className="py-4 px-5">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              payout.status
                            )}`}>
                            {payout.status}
                          </span>
                        </td>
                        <td className="py-4 px-5">
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <MoreVertical size={16} className="text-gray-500" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletManagement;
