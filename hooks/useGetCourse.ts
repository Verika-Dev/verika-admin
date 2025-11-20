/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useCallback } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

interface Course {
  title: string;
  subject: string;
  syllabus: string;
  price: number;
  // add other fields if your API returns more
}

interface GetCoursesResponse {
  status?: string;
  message?: string;
  data?: Course[];
}

export const useGetCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCourses = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const token =
        localStorage.getItem("accessToken")

      const response = await axios.get<GetCoursesResponse>(
        "http://178.128.64.203:8080/api/v1/courses",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const resData = response.data;
      console.log(resData);
      
      setCourses(resData.data || []);
      toast.success("Courses fetched successfully");
    } catch (err: unknown) {
      const axiosError = err as AxiosError<{
        message?: string;
        error?: string;
      }>;
      const errorMessage =
        axiosError.response?.data?.message ||
        axiosError.response?.data?.error ||
        axiosError.message ||
        "Failed to fetch courses.";

      setError(errorMessage);
      toast.error(errorMessage);
      console.error("Fetch courses error:", errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  // Optional: fetch on mount
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return { courses, loading, error, fetchCourses };
};
