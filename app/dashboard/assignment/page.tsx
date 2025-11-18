"use client";
import React, { useState } from "react";
import {
  Search,
  FileText,
  Clock,
  Flag,
  CheckCircle,
  Eye,
  MessageCircle,
  Trash2,
} from "lucide-react";

const AssignmentExamModeration = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [subjectFilter, setSubjectFilter] = useState("All Subject");

  const stats = [
    {
      label: "Total Submissions",
      value: "10",
      icon: FileText,
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-l-4 border-green-500",
    },
    {
      label: "Pending Review",
      value: "3",
      icon: Clock,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-l-4 border-orange-500",
    },
    {
      label: "Flagged Content",
      value: "2",
      icon: Flag,
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-l-4 border-red-500",
    },
    {
      label: "Approval Rate",
      value: "25.0%",
      icon: CheckCircle,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-l-4 border-yellow-500",
    },
  ];

  const submissions = [
    {
      id: 1,
      title: "Physics Lab Report Assignment",
      questions: "5 questions",
      subject: "Mathematics",
      submittedBy: "Mrs. Adunni Ogundimu",
      type: "exam",
      status: "Pending",
      attempts: 89,
      views: 234,
    },
    {
      id: 2,
      title: "Physics Lab Report Assignment",
      questions: "5 questions",
      subject: "Mathematics",
      submittedBy: "Mrs. Adunni Ogundimu",
      type: "assignment",
      status: "Flagged",
      attempts: 89,
      views: 234,
    },
    {
      id: 3,
      title: "Physics Lab Report Assignment",
      questions: "5 questions",
      subject: "Mathematics",
      submittedBy: "Mrs. Adunni Ogundimu",
      type: "quiz",
      status: "Approved",
      attempts: 89,
      views: 234,
    },
    {
      id: 4,
      title: "Physics Lab Report Assignment",
      questions: "5 questions",
      subject: "Mathematics",
      submittedBy: "Mrs. Adunni Ogundimu",
      type: "exam",
      status: "Pending",
      attempts: 89,
      views: 234,
    },
    {
      id: 5,
      title: "Physics Lab Report Assignment",
      questions: "5 questions",
      subject: "Mathematics",
      submittedBy: "Mrs. Adunni Ogundimu",
      type: "assignment",
      status: "Flagged",
      attempts: 89,
      views: 234,
    },
    {
      id: 6,
      title: "Physics Lab Report Assignment",
      questions: "5 questions",
      subject: "Mathematics",
      submittedBy: "Mrs. Adunni Ogundimu",
      type: "quiz",
      status: "Approved",
      attempts: 89,
      views: 234,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Flagged":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const filteredSubmissions = submissions.filter((sub) => {
    const matchesSearch =
      sub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.submittedBy.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All Status" || sub.status === statusFilter;
    const matchesSubject =
      subjectFilter === "All Subject" || sub.subject === subjectFilter;
    return matchesSearch && matchesStatus && matchesSubject;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Assignment & Exam Moderation
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Review submissions, manage exam bank, and ensure content quality
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

        {/* Submissions Section */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">
              Assignment & Exam Submissions
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
                placeholder="Search course..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-3">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white">
                <option>All Status</option>
                <option>Pending</option>
                <option>Approved</option>
                <option>Flagged</option>
              </select>
              <select
                value={subjectFilter}
                onChange={(e) => setSubjectFilter(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white">
                <option>All Subject</option>
                <option>Mathematics</option>
                <option>Physics</option>
                <option>Chemistry</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Course Title
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Subject
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Submitted By
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Type
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Status
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Stats
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredSubmissions.map((submission) => (
                  <tr
                    key={submission.id}
                    className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-5">
                      <div>
                        <p className="font-medium text-gray-900">
                          {submission.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {submission.questions}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-5">
                      <span className="text-sm text-gray-700">
                        {submission.subject}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <span className="text-sm text-gray-700">
                        {submission.submittedBy}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <span className="text-sm text-gray-700">
                        {submission.type}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          submission.status
                        )}`}>
                        {submission.status}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {submission.attempts} attempts
                        </p>
                        <p className="text-xs text-gray-500">
                          {submission.views} views
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-5">
                      <div className="flex gap-2 items-center">
                        <button
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors group relative"
                          title="View">
                          <Eye size={16} className="text-gray-500" />
                        </button>
                        <button
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors group relative"
                          title="Comment">
                          <MessageCircle size={16} className="text-gray-500" />
                        </button>
                        <button
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors group relative"
                          title="Delete">
                          <Trash2 size={16} className="text-gray-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredSubmissions.length === 0 && (
            <div className="p-12 text-center">
              <FileText size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No submissions found
              </h3>
              <p className="text-gray-500">
                Try adjusting your filters or search query
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssignmentExamModeration;
