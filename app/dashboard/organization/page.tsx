"use client";
import React, { useState } from "react";
import {
  Search,
  Download,
  Eye,
  Edit2,
  TrendingUp,
  Users,
  DollarSign,
  UserCheck,
  X,
} from "lucide-react";

const OrganizationManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All Types");
  const [showModal, setShowModal] = useState(false);

  const stats = [
    {
      label: "Total Organizations",
      value: "4",
      icon: TrendingUp,
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      label: "Total Students",
      value: "4,000",
      icon: Users,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      label: "Monthly Revenue",
      value: "₦469,500",
      icon: DollarSign,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      label: "Avg. Retention",
      value: "87.3%",
      icon: UserCheck,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
  ];

  const organizations = [
    {
      id: 1,
      name: "Lagos State College",
      enrolled: "2021-03-15",
      type: "Government School",
      contact: "Mrs. Aduni Ogundimu",
      email: "admin@lagosstatecollege.edu.ng",
      students: 450,
      revenue: "₦155,000",
      plan: "Premium",
      planColor: "text-orange-600 bg-orange-50",
    },
    {
      id: 2,
      name: "Erudite College",
      enrolled: "2023-04-16",
      type: "Private School",
      contact: "Dr. Michael Adebayo",
      email: "admin@eruditeschool.com",
      students: 450,
      revenue: "₦155,000",
      plan: "Standard",
      planColor: "text-blue-600 bg-blue-50",
    },
  ];

  const filteredOrgs = organizations.filter((org) => {
    const matchesSearch =
      org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      org.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
      org.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "All Types" || org.type === filterType;
    return matchesSearch && matchesType;
  });

  const handleAddOrganization = (e: React.FormEvent) => {
    e.preventDefault();
    // Add submit logic here (e.g. send to API)
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Organization Management
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Manage institutional partnerships and group accounts
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#1E40AF] text-white px-4 py-2 rounded-lg font-medium transition-colors hover:bg-[#1E3A8A]">
            Add Institution
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
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

        {/* Directory Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="p-5 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">
              Organization Directory
            </h2>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <Download size={18} />
              Export
            </button>
          </div>

          {/* Search */}
          <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search organization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white">
              <option>All Types</option>
              <option>Government School</option>
              <option>Private School</option>
              <option>NGO</option>
              <option>University</option>
            </select>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Organization
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Type
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Contact Person
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Students
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Revenue
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Plan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredOrgs.map((org) => (
                  <tr
                    key={org.id}
                    className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-5 font-medium text-gray-900">
                      {org.name}
                    </td>
                    <td className="py-4 px-5 text-sm text-gray-700">
                      {org.type}
                    </td>
                    <td className="py-4 px-5 text-sm text-gray-700">
                      {org.contact}
                    </td>
                    <td className="py-4 px-5 text-sm text-gray-700">
                      {org.students}
                    </td>
                    <td className="py-4 px-5 text-sm text-gray-700">
                      {org.revenue}
                    </td>
                    <td className="py-4 px-5">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${org.planColor}`}>
                        {org.plan}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-800">
              <X size={20} />
            </button>

            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Add New Organization
            </h2>

            <form onSubmit={handleAddOrganization} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Organization Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter institution name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Organization Type
                </label>
                <select
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required>
                  <option value="">Select type</option>
                  <option>Government School</option>
                  <option>Private School</option>
                  <option>University</option>
                  <option>NGO</option>
                </select>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter contact name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expected Students
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Expected number of students"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subscription Plan
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required>
                    <option value="">Select type</option>
                    <option>Government School</option>
                    <option>Private School</option>
                    <option>University</option>
                    <option>NGO</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gray-300 w-1/2 cursor-pointer text-[#1E40AF] rounded-md bg-[#EAF2FF]">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#1E40AF] text-white w-1/2 cursor-pointer rounded-md hover:bg-[#1E3A8A]">
                  Register Organization
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganizationManagement;
