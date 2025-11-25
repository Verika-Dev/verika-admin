"use client";

import React, { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { useCreateCourse } from "@/hooks/useCreateCourse";

interface CreateCourseFormProps {
  onClose: () => void;
  onOpenUploadModal: () => void;
}

export default function CreateCourseForm({
  onClose,
  onOpenUploadModal,
}: CreateCourseFormProps) {
  const { createCourse, loading, error } = useCreateCourse();

  const [formData, setFormData] = useState({
    courseTitle1: "",
    courseTitle2: "",
    subject: "",
    syllabus: "",
    price: "",
  });

  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);
  const [showSyllabusDropdown, setShowSyllabusDropdown] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);

  const subjects = [
    "Mathematics",
    "Science",
    "English",
    "History",
    "Computer Science",
  ];

  const syllabi = ["CBSE", "ICSE", "State Board", "IB", "Cambridge"];

  const prices = [
    "₦1,000.00",
    "₦5,000.00",
    "₦10,000.00",
    "₦25,000.00",
    "₦50,000.00",
  ];

  const convertPrice = (str: string): number =>
    Number(str.replace(/[^0-9]/g, ""));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.courseTitle1 ||
      !formData.subject ||
      !formData.syllabus ||
      !formData.price
    ) {
      alert("Please fill all required fields");
      return;
    }

    const payload = {
      title: `${formData.courseTitle1} ${formData.courseTitle2}`.trim(),
      subject: formData.subject,
      syllabus: formData.syllabus,
      price: convertPrice(formData.price),
    };

    const result = await createCourse(payload);
    console.log(result);

    if (!error && result) {
      onClose();
      onOpenUploadModal();
    }
  };

  return (
    <div className="flex w-full justify-center items-center px-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 sm:p-8 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Add New Course
          </h2>
          <button
            className="text-gray-400 hover:text-gray-600 transition"
            onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-3 mb-4 bg-red-50 text-red-600 border border-red-200 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Course Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course Title
            </label>
            <input
              type="text"
              placeholder="Enter course title"
              value={formData.courseTitle1}
              onChange={(e) =>
                setFormData({ ...formData, courseTitle1: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-200 rounded-lg 
                focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
            />
          </div>

          {/* Subject Dropdown */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>

            <button
              type="button"
              onClick={() => setShowSubjectDropdown(!showSubjectDropdown)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg flex items-center justify-between
                focus:ring-2 focus:ring-blue-500 text-left text-gray-700">
              <span>{formData.subject || "Select subject"}</span>
              <ChevronDown size={20} />
            </button>

            {showSubjectDropdown && (
              <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {subjects.map((subject) => (
                  <div
                    key={subject}
                    onClick={() => {
                      setFormData({ ...formData, subject });
                      setShowSubjectDropdown(false);
                    }}
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-gray-700">
                    {subject}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Syllabus Dropdown */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Syllabus Alignment
            </label>

            <button
              type="button"
              onClick={() => setShowSyllabusDropdown(!showSyllabusDropdown)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg flex items-center justify-between
                focus:ring-2 focus:ring-blue-500 text-left text-gray-700">
              <span>{formData.syllabus || "Select syllabus"}</span>
              <ChevronDown size={20} />
            </button>

            {showSyllabusDropdown && (
              <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {syllabi.map((syllabus) => (
                  <div
                    key={syllabus}
                    onClick={() => {
                      setFormData({ ...formData, syllabus });
                      setShowSyllabusDropdown(false);
                    }}
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-gray-700">
                    {syllabus}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Price Dropdown */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price (₦)
            </label>

            <button
              type="button"
              onClick={() => setShowPriceDropdown(!showPriceDropdown)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg flex items-center justify-between
                focus:ring-2 focus:ring-blue-500 text-left text-gray-700">
              <span>{formData.price || "e.g ₦1,000.00"}</span>
              <ChevronDown size={20} />
            </button>

            {showPriceDropdown && (
              <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {prices.map((price) => (
                  <div
                    key={price}
                    onClick={() => {
                      setFormData({ ...formData, price });
                      setShowPriceDropdown(false);
                    }}
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-gray-700">
                    {price}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 cursor-pointer bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 font-medium transition">
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-6 py-3 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition disabled:opacity-50">
              Upload Content
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
