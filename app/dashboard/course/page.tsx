"use client";
import React, { useState } from "react";
import {
  Search,
  BookOpen,
  Users,
  FileText,
  Star,
  Eye,
  Edit2,
  Copy,
  Trash2,
} from "lucide-react";

const CourseContentManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [subjectFilter, setSubjectFilter] = useState("All Subject");

  const stats = [
    {
      label: "Total Courses",
      value: "500",
      icon: BookOpen,
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-l-4 border-green-500",
    },
    {
      label: "Total Enrollments",
      value: "10,000",
      icon: Users,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-l-4 border-orange-500",
    },
    {
      label: "Content Items",
      value: "524",
      icon: FileText,
      color: "text-gray-500",
      bgColor: "bg-gray-50",
      borderColor: "border-l-4 border-gray-500",
    },
    {
      label: "Average Rating",
      value: "4.9",
      icon: Star,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-l-4 border-yellow-500",
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Advanced Mathematics for JAMB",
      details: "24 lessons • 8 weeks",
      subject: "Mathematics",
      enrollments: 1247,
      rating: 5,
      price: "₦156,000",
      status: "Published",
    },
    {
      id: 2,
      title: "Advanced Mathematics for JAMB",
      details: "24 lessons • 8 weeks",
      subject: "Mathematics",
      enrollments: 1247,
      rating: 5,
      price: "₦156,000",
      status: "Published",
    },
    {
      id: 3,
      title: "Advanced Mathematics for JAMB",
      details: "24 lessons • 8 weeks",
      subject: "Mathematics",
      enrollments: 1247,
      rating: 5,
      price: "₦156,000",
      status: "Under Review",
    },
    {
      id: 4,
      title: "Advanced Mathematics for JAMB",
      details: "24 lessons • 8 weeks",
      subject: "Mathematics",
      enrollments: 1247,
      rating: 5,
      price: "₦156,000",
      status: "Published",
    },
    {
      id: 5,
      title: "Advanced Mathematics for JAMB",
      details: "24 lessons • 8 weeks",
      subject: "Mathematics",
      enrollments: 1247,
      rating: 5,
      price: "₦156,000",
      status: "Draft",
    },
    {
      id: 6,
      title: "Advanced Mathematics for JAMB",
      details: "24 lessons • 8 weeks",
      subject: "Mathematics",
      enrollments: 1247,
      rating: 5,
      price: "₦156,000",
      status: "Published",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-700";
      case "Under Review":
        return "bg-yellow-100 text-yellow-700";
      case "Draft":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }
        />
      ))}
    </div>
  );

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All Status" || course.status === statusFilter;
    const matchesSubject =
      subjectFilter === "All Subject" || course.subject === subjectFilter;
    return matchesSearch && matchesStatus && matchesSubject;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Course & Content Management
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Manage educational content, courses, and learning materials
            </p>
          </div>
          <button className="bg-[#0A5DEC] cursor-pointer text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Add New Course
          </button>
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

        {/* Courses Section */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Courses</h2>
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
                <option>Published</option>
                <option>Under Review</option>
                <option>Draft</option>
              </select>
              <select
                value={subjectFilter}
                onChange={(e) => setSubjectFilter(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white">
                <option>All Subject</option>
                <option>Mathematics</option>
                <option>Physics</option>
                <option>Chemistry</option>
                <option>English</option>
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
                    Enrollments
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Rating
                  </th>
                  <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                    Price
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
                {filteredCourses.map((course) => (
                  <tr
                    key={course.id}
                    className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-5">
                      <div>
                        <p className="font-medium text-gray-900">
                          {course.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {course.details}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-5">
                      <span className="text-sm text-gray-700">
                        {course.subject}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <span className="text-sm text-gray-900 font-medium">
                        {course.enrollments}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <StarRating rating={course.rating} />
                    </td>
                    <td className="py-4 px-5">
                      <span className="text-sm text-gray-900 font-medium">
                        {course.price}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          course.status
                        )}`}>
                        {course.status}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <div className="flex gap-2 items-center">
                        <button
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="View">
                          <Eye size={16} className="text-gray-500" />
                        </button>
                        <button
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Edit">
                          <Edit2 size={16} className="text-gray-500" />
                        </button>
                        <button
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Duplicate">
                          <Copy size={16} className="text-gray-500" />
                        </button>
                        <button
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
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
          {filteredCourses.length === 0 && (
            <div className="p-12 text-center">
              <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No courses found
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

export default CourseContentManagement;
