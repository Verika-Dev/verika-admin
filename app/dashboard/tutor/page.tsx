"use client"
import React, { useState } from 'react';
import { Search, Users, FileText, DollarSign, Star, Eye, UserX, MoreVertical, Send, AlertCircle } from 'lucide-react';

const TutorManagement = () => {
  const [activeTab, setActiveTab] = useState('applications');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const stats = [
    {
      label: 'Total Tutors',
      value: '8',
      icon: Users,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-l-4 border-green-500'
    },
    {
      label: 'Total Applications',
      value: '8',
      icon: FileText,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-l-4 border-orange-500'
    },
    {
      label: 'Total Payouts',
      value: '₦2.3M',
      icon: DollarSign,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-l-4 border-purple-500'
    },
    {
      label: 'Average Rating',
      value: '4.9',
      icon: Star,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-l-4 border-yellow-500'
    }
  ];

  const applications = [
    {
      id: 1,
      name: 'Dr. Amanda Rodriguez',
      avatar: 'https://i.pravatar.cc/150?img=1',
      subject: 'Computer Science',
      subjectCount: '+2 more',
      experience: '12 years',
      education: 'PhD Computer Science, Stanford',
      appliedDate: '2024-01-14',
      status: 'pending'
    },
    {
      id: 2,
      name: 'Dr. Amanda Rodriguez',
      avatar: 'https://i.pravatar.cc/150?img=2',
      subject: 'Computer Science',
      subjectCount: '+2 more',
      experience: '12 years',
      education: 'PhD Computer Science, Stanford',
      appliedDate: '2024-01-14',
      status: 'pending'
    },
    {
      id: 3,
      name: 'Dr. Amanda Rodriguez',
      avatar: 'https://i.pravatar.cc/150?img=3',
      subject: 'Computer Science',
      subjectCount: '+2 more',
      experience: '12 years',
      education: 'PhD Computer Science, Stanford',
      appliedDate: '2024-01-14',
      status: 'pending'
    },
    {
      id: 4,
      name: 'Dr. Amanda Rodriguez',
      avatar: 'https://i.pravatar.cc/150?img=4',
      subject: 'Computer Science',
      subjectCount: '+2 more',
      experience: '12 years',
      education: 'PhD Computer Science, Stanford',
      appliedDate: '2024-01-14',
      status: 'pending'
    },
    {
      id: 5,
      name: 'Dr. Amanda Rodriguez',
      avatar: 'https://i.pravatar.cc/150?img=5',
      subject: 'Computer Science',
      subjectCount: '+2 more',
      experience: '12 years',
      education: 'PhD Computer Science, Stanford',
      appliedDate: '2024-01-14',
      status: 'pending'
    },
    {
      id: 6,
      name: 'Dr. Amanda Rodriguez',
      avatar: 'https://i.pravatar.cc/150?img=6',
      subject: 'Computer Science',
      subjectCount: '+2 more',
      experience: '12 years',
      education: 'PhD Computer Science, Stanford',
      appliedDate: '2024-01-14',
      status: 'pending'
    }
  ];

  const activeTutors = [
    {
      id: 1,
      name: 'Prof. David Kim',
      email: 'david.kim@email.com',
      avatar: 'https://i.pravatar.cc/150?img=11',
      subject: 'Computer Science',
      students: 145,
      rating: 5,
      earnings: '$8,900',
      progress: 30,
      status: 'active'
    },
    {
      id: 2,
      name: 'Dr. Amanda Rodriguez',
      email: 'amanda.r@email.com',
      avatar: 'https://i.pravatar.cc/150?img=12',
      subject: 'Mathematics',
      students: 145,
      rating: 4,
      earnings: '$8,900',
      progress: 50,
      status: 'suspended'
    },
    {
      id: 3,
      name: 'Dr. Amanda Rodriguez',
      email: 'amanda.r@email.com',
      avatar: 'https://i.pravatar.cc/150?img=13',
      subject: 'Mathematics',
      students: 145,
      rating: 4,
      earnings: '$8,900',
      progress: 30,
      status: 'warning'
    },
    {
      id: 4,
      name: 'Dr. Amanda Rodriguez',
      email: 'amanda.r@email.com',
      avatar: 'https://i.pravatar.cc/150?img=14',
      subject: 'Mathematics',
      students: 145,
      rating: 4,
      earnings: '$8,900',
      progress: 30,
      status: 'active'
    },
    {
      id: 5,
      name: 'Dr. Amanda Rodriguez',
      email: 'amanda.r@email.com',
      avatar: 'https://i.pravatar.cc/150?img=15',
      subject: 'Mathematics',
      students: 145,
      rating: 4,
      earnings: '$8,900',
      progress: 50,
      status: 'suspended'
    },
    {
      id: 6,
      name: 'Dr. Amanda Rodriguez',
      email: 'amanda.r@email.com',
      avatar: 'https://i.pravatar.cc/150?img=16',
      subject: 'Mathematics',
      students: 145,
      rating: 4,
      earnings: '$8,900',
      progress: 30,
      status: 'warning'
    }
  ];

  const issues = [
    {
      id: 1,
      priority: 'high',
      title: 'Late Session Start - Dr. Ahmed Abdullahi',
      description: 'Student reported tutor was 15 minutes late for scheduled session. This is the 3rd occurrence this month.',
      tutor: 'Dr. Ahmed Abdullahi'
    },
    {
      id: 2,
      priority: 'medium',
      title: 'Quality Concern - Prof. Michael Chen',
      description: 'Student feedback indicates lesson quality has declined. Average rating dropped from 4.9 to 4.6.',
      tutor: 'Prof. Michael Chen'
    },
    {
      id: 3,
      priority: 'resolved',
      title: 'Issue Resolved - Dr. Amara Okafor',
      description: 'Technical issues during sessions have been resolved. Student satisfaction improved.',
      tutor: 'Dr. Amara Okafor'
    }
  ];

  interface StatusColorMap {
    [key: string]: string;
  }

  type TutorStatus = 'active' | 'suspended' | 'warning' | 'pending' | string;

  const getStatusColor = (status: TutorStatus): string => {
    const statusColors: StatusColorMap = {
      active: 'bg-green-100 text-green-700',
      suspended: 'bg-red-100 text-red-700',
      warning: 'bg-yellow-100 text-yellow-700',
      pending: 'bg-yellow-100 text-yellow-700',
    };
    return statusColors[status] || 'bg-gray-100 text-gray-700';
  };

  const getPriorityStyles = (priority:string) => {
    switch (priority) {
      case 'high':
        return { bg: 'bg-red-50', border: 'border-l-4 border-red-500', label: 'bg-red-100 text-red-700', text: 'High Priority' };
      case 'medium':
        return { bg: 'bg-yellow-50', border: 'border-l-4 border-yellow-500', label: 'bg-yellow-100 text-yellow-700', text: 'Medium Priority' };
      case 'resolved':
        return { bg: 'bg-green-50', border: 'border-l-4 border-green-500', label: 'bg-green-100 text-green-700', text: 'Resolved' };
      default:
        return { bg: 'bg-gray-50', border: 'border-l-4 border-gray-500', label: 'bg-gray-100 text-gray-700', text: 'Normal' };
    }
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Tutor Management</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage tutor applications, performance, and status
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

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("applications")}
            className={`px-4 py-2 flex items-center cursor-pointer rounded-lg font-medium transition-colors ${
              activeTab === "applications"
                ? "bg-[#C4CAFD] text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}>
            Applications
            <span className="ml-2 flex items-center justify-center bg-[#1E40AF] text-white px-2 py-0.5 rounded-full text-xs font-semibold">
              8
            </span>
          </button>
          <button
            onClick={() => setActiveTab("active")}
            className={`px-4 py-2 flex items-center cursor-pointer rounded-lg font-medium transition-colors ${
              activeTab === "active"
                ? "bg-[#C4CAFD] text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}>
            Active Tutors
            <span className="ml-2 bg-[#1E40AF] flex items-center justify-center text-white px-2 py-0.5 rounded-full text-xs font-semibold">
              8
            </span>
          </button>
          <button
            onClick={() => setActiveTab("issues")}
            className={`px-4 py-2 rounded-lg font-medium cursor-pointer transition-colors ${
              activeTab === "issues"
                ? "bg-[#C4CAFD] text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}>
            Issues & Reports
          </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm">
          {/* Applications Tab */}
          {activeTab === "applications" && (
            <>
              <div className="p-5 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">
                  Tutor Applications
                </h2>
              </div>
              <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search application"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white">
                  <option>All Status</option>
                  <option>Pending</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                </select>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                        Name
                      </th>
                      <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                        Subject
                      </th>
                      <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                        Experience
                      </th>
                      <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                        Education
                      </th>
                      <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                        Applied Date
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
                    {applications.map((app) => (
                      <tr
                        key={app.id}
                        className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-5">
                          <div className="flex items-center gap-3">
                            <img
                              src={app.avatar}
                              alt={app.name}
                              className="w-10 h-10 rounded-full"
                            />
                            <span className="font-medium text-gray-900">
                              {app.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-5">
                          <div>
                            <p className="text-sm text-gray-900">
                              {app.subject}
                            </p>
                            <p className="text-xs text-gray-500">
                              {app.subjectCount}
                            </p>
                          </div>
                        </td>
                        <td className="py-4 px-5">
                          <span className="text-sm text-gray-700">
                            {app.experience}
                          </span>
                        </td>
                        <td className="py-4 px-5">
                          <span className="text-sm text-gray-700">
                            {app.education}
                          </span>
                        </td>
                        <td className="py-4 px-5">
                          <span className="text-sm text-gray-700">
                            {app.appliedDate}
                          </span>
                        </td>
                        <td className="py-4 px-5">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              app.status
                            )}`}>
                            {app.status}
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

          {/* Active Tutors Tab */}
          {activeTab === "active" && (
            <>
              <div className="p-5 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">
                  Active Tutors
                </h2>
              </div>
              <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search application"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Suspended</option>
                  <option>Warning</option>
                </select>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                        Tutor
                      </th>
                      <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                        Subject
                      </th>
                      <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                        Students
                      </th>
                      <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                        Rating
                      </th>
                      <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                        Earnings
                      </th>
                      <th className="text-left py-3 px-5 text-xs font-semibold text-gray-600 uppercase">
                        Progress
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
                    {activeTutors.map((tutor) => (
                      <tr
                        key={tutor.id}
                        className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-5">
                          <div className="flex items-center gap-3">
                            <img
                              src={tutor.avatar}
                              alt={tutor.name}
                              className="w-10 h-10 rounded-full"
                            />
                            <div>
                              <p className="font-medium text-gray-900">
                                {tutor.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {tutor.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-5">
                          <span className="text-sm text-gray-700">
                            {tutor.subject}
                          </span>
                        </td>
                        <td className="py-4 px-5">
                          <span className="text-sm text-gray-900 font-medium">
                            {tutor.students}
                          </span>
                        </td>
                        <td className="py-4 px-5">
                          <StarRating rating={tutor.rating} />
                        </td>
                        <td className="py-4 px-5">
                          <span className="text-sm text-gray-900 font-medium">
                            {tutor.earnings}
                          </span>
                        </td>
                        <td className="py-4 px-5">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[80px]">
                              <div
                                className="bg-purple-600 h-2 rounded-full"
                                style={{ width: `${tutor.progress}%` }}
                              />
                            </div>
                            <span className="text-xs text-gray-600">
                              {tutor.progress}%
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-5">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              tutor.status
                            )}`}>
                            {tutor.status}
                          </span>
                        </td>
                        <td className="py-4 px-5">
                          <div className="flex gap-2">
                            <button
                              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                              title="View">
                              <Eye size={16} className="text-gray-500" />
                            </button>
                            <button
                              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                              title="Suspend">
                              <UserX size={16} className="text-gray-500" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Issues & Reports Tab */}
          {activeTab === "issues" && (
            <>
              <div className="p-5 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">
                  Issues & Report
                </h2>
              </div>
              <div className="p-6 space-y-4">
                {issues.map((issue) => {
                  const styles = getPriorityStyles(issue.priority);
                  return (
                    <div
                      key={issue.id}
                      className={`${styles.bg} ${styles.border} rounded-lg p-5`}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${styles.label}`}>
                            {styles.text}
                          </span>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {issue.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {issue.description}
                          </p>
                        </div>
                        {issue.priority !== "resolved" && (
                          <div className="flex gap-2 ml-4">
                            <button className="bg-[#0A5DEC] cursor-pointer text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                              <Send size={16} />
                              Send Warning
                            </button>
                            <button className="bg-[#EAF2FF] text-[#0A5DEC] px-4 py-2 cursor-pointer rounded-lg text-sm font-medium transition-colors">
                              View Details
                            </button>
                          </div>
                        )}
                        {issue.priority === "resolved" && (
                          <div className="flex gap-2 ml-4">
                            <button className="bg-[#0A5DEC] text-white cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                              Contact Tutor
                            </button>
                            <button className="bg-[#EAF2FF] text-[#0A5DEC]  cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                              View Feedbacks
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TutorManagement;