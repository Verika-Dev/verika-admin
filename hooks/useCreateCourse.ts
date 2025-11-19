/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import axios, { AxiosError } from "axios";

interface CoursePayload {
  title: string;
  subject: string;
  syllabus: string;
  price: number;
}

interface CreateCourseResponse {
  status?: string;
  message?: string;
  data?: any;
}

export const useCreateCourse = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<CreateCourseResponse | null>(null);

  const createCourse = async (
    payload: CoursePayload
  ): Promise<CreateCourseResponse | void> => {
    setLoading(true);
    setError(null);

    try {
      // Get token from localStorage
      const token = localStorage.getItem("accessToken");

      const response = await axios.post<CreateCourseResponse>(
        "http://localhost:8080/api/v1/courses",
        {
          title: payload.title,
          subject: payload.subject,
          syllabus: payload.syllabus,
          price: payload.price,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const resData = response.data;
      console.log(resData);

      setData(resData);

      return resData;
    } catch (err: unknown) {
        console.log(err);
        
      const axiosError = err as AxiosError<{
        message?: string;
        error?: string;
      }>;

      const errorMessage =
        axiosError.response?.data?.message ||
        axiosError.response?.data?.error ||
        axiosError.message ||
        "Course creation failed.";

      setError(errorMessage);
      console.error("Create course error:", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { createCourse, loading, error, data };
};
