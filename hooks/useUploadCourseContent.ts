/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

interface UploadResponse {
  status?: string;
  message?: string;
  data?: any;
}

export const useUploadCourseContent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<UploadResponse | null>(null);

  const uploadContent = async (
    formData: FormData
  ): Promise<UploadResponse | void> => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("accessToken");

      const response = await axios.post(
        "http://178.128.64.203:8080/api/v1/courses",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setData(response.data);
      toast.success("Content uploaded successfully");
      return response.data;
    } catch (err) {
      console.log(err);

      const axiosError = err as AxiosError<any>;
      const errorMessage =
        axiosError.response?.data?.message ||
        axiosError.message ||
        "Upload failed";

      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { uploadContent, loading, error, data };
};
