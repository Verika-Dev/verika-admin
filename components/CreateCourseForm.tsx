"use client";
import React, { useState } from "react";
import { useCreateCourse } from "@/hooks/useCreateCourse";

export default function CreateCourseForm() {
  const { createCourse, loading, error, data } = useCreateCourse();

  const [form, setForm] = useState({
    title: "",
    subject: "",
    syllabus: "",
    price: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createCourse(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        type="text"
        placeholder="Subject"
        value={form.subject}
        onChange={(e) => setForm({ ...form, subject: e.target.value })}
      />

      <textarea
        placeholder="Syllabus"
        value={form.syllabus}
        onChange={(e) => setForm({ ...form, syllabus: e.target.value })}
      />

      <input
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded">
        {loading ? "Creating..." : "Create Course"}
      </button>

      {error && <p className="text-red-600">{error}</p>}
      {data && <p className="text-green-600">Course created successfully!</p>}
    </form>
  );
}
