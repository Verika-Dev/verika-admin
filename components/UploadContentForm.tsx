/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useRef } from "react";
import { X, ChevronDown, Upload } from "lucide-react";
import Image from "next/image";
import { useUploadCourseContent } from "@/hooks/useUploadCourseContent";

interface UploadContentModalProps {
  onClose: () => void;
}

export default function UploadContentModal({
  onClose,
}: UploadContentModalProps) {
  const [formData, setFormData] = useState({
    course: "",
    contentType: "",
    lessonTitle: "",
    order: "",
    saveToDraft: false,
  });
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const [showContentTypeDropdown, setShowContentTypeDropdown] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { uploadContent } = useUploadCourseContent();

  const FileUpload = () => {};

  const triggerFileSelect = () => fileInputRef.current?.click();
  const courses = [
    "Advanced Mathematics for JAMB",
    "Physics for WAEC",
    "Chemistry Fundamentals",
    "English Language Mastery",
  ];

  const contentTypes = [
    "Video Lesson",
    "PDF Document",
    "Audio Lecture",
    "Quiz",
    "Assignment",
  ];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0])
      setFile(e.dataTransfer.files[0]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.course || !formData.contentType || !formData.lessonTitle) {
      alert("Please fill all required fields");
      return;
    }
    if (!file) {
      alert("Please upload a file");
      return;
    }

    setLoading(true);

    try {
      const payload = new FormData();
      payload.append("course", formData.course);
      payload.append("contentType", formData.contentType);
      payload.append("lessonTitle", formData.lessonTitle);
      payload.append("order", formData.order);
      payload.append("saveToDraft", String(formData.saveToDraft));
      payload.append("file", file);

      const result = await uploadContent(payload);

      if (result) {
        onClose();
      }
    } catch (err) {
      console.error(err);
      alert("Failed to save content");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white  rounded-2xl shadow-lg max-w-lg p-6 sm:p-8 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Upload Content
        </h2>
        <button
          className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
          onClick={onClose}>
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Course Dropdown */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Course
          </label>
          <button
            type="button"
            onClick={() => setShowCourseDropdown(!showCourseDropdown)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg 
              focus:ring-2 focus:ring-blue-500 text-left text-gray-700 flex items-center justify-between">
            <span
              className={formData.course ? "text-gray-900" : "text-gray-400"}>
              {formData.course || "Choose course"}
            </span>
            <ChevronDown size={20} />
          </button>
          {showCourseDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
              {courses.map((course) => (
                <div
                  key={course}
                  onClick={() => {
                    setFormData({ ...formData, course });
                    setShowCourseDropdown(false);
                  }}
                  className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-gray-700">
                  {course}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content Type Dropdown */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content Type
          </label>
          <button
            type="button"
            onClick={() => setShowContentTypeDropdown(!showContentTypeDropdown)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg 
              focus:ring-2 focus:ring-blue-500 text-left text-gray-700 flex items-center justify-between">
            <span
              className={
                formData.contentType ? "text-gray-900" : "text-gray-400"
              }>
              {formData.contentType || "Select type"}
            </span>
            <ChevronDown size={20} />
          </button>
          {showContentTypeDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
              {contentTypes.map((type) => (
                <div
                  key={type}
                  onClick={() => {
                    setFormData({ ...formData, contentType: type });
                    setShowContentTypeDropdown(false);
                  }}
                  className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-gray-700">
                  {type}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload File
          </label>
          <div
            className={`relative border-2 cursor-pointer border-dashed rounded-lg p-6 text-center transition-colors ${
              dragActive
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 bg-white"
            }`}
            onClick={triggerFileSelect}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.mp4,.mp3,.jpg,.jpeg,.png"
            />
            {file ? (
              <div className="space-y-2">
                <Upload size={36} className="mx-auto text-blue-500" />
                <p className="text-sm font-medium text-gray-900">{file.name}</p>
                <p className="text-xs text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFile(null);
                  }}
                  className="text-sm text-red-600 hover:text-red-700">
                  Remove file
                </button>
              </div>
            ) : (
              <div className="space-y-2 flex flex-col items-center">
                <div className="bg-[#F0F2F5] p-3 rounded-full  ">
                  <Image
                    src="/icons/cloud-upload.svg"
                    alt="upload file"
                    width={25}
                    height={25}
                  />
                </div>
                <div>
                  <label
                    htmlFor="file-upload"
                    className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium">
                    Click to upload
                  </label>
                  <span className="text-gray-600"> or drag and drop</span>
                </div>
                <p className="text-xs text-gray-500">
                  .avi, .mov, .mp4, .mpg, .wmv, .jpeg, .jpg or .pdf
                </p>

                <p>Or</p>

                <button className="bg-[#1E40AF] cursor-pointer text-white px-6 py-3 rounded-lg">
                  Browse Files
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Lesson Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Lesson Title
          </label>
          <input
            type="text"
            placeholder="Enter lesson title"
            value={formData.lessonTitle}
            onChange={(e) =>
              setFormData({ ...formData, lessonTitle: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-200 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>

        {/* Order */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Order
          </label>
          <input
            type="text"
            placeholder="Enter lesson order in course"
            value={formData.order}
            onChange={(e) =>
              setFormData({ ...formData, order: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-200 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>

        {/* Save to Draft Toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() =>
              setFormData({ ...formData, saveToDraft: !formData.saveToDraft })
            }
            className={`relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full transition-colors ${
              formData.saveToDraft ? "bg-blue-700" : "bg-gray-200"
            }`}>
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                formData.saveToDraft ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <label className="text-sm font-medium text-gray-700">
            Save to draft
          </label>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            onClick={onClose}
            type="button"
            className="flex-1 px-6 py-3 cursor-pointer bg-blue-50 text-blue-700 font-medium rounded-lg hover:bg-blue-100 transition-colors">
            Go Back
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex-1 px-6 py-3 bg-blue-600 cursor-pointer text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            {loading ? "Saving..." : "Save Content"}
          </button>
        </div>
      </form>
    </div>
  );
}
