/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import axios, { AxiosError } from "axios";

interface LoginData {
  email: string;
  password: string;
}

interface Profile {
  _id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  [key: string]: any;
}

interface LoginResponse {
  status?: string;
  message?: string;
  data?: {
    accessToken?: string;
    refreshToken?: string;
    role?: string;
    userId?: string;
    profile?: Profile;
    [key: string]: any;
  };
}

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<LoginResponse | null>(null);

  const login = async (formData: LoginData): Promise<LoginResponse | void> => {
    setLoading(true);
    setError(null);

    console.log("payload", formData);

    try {
      const response = await axios.post<LoginResponse>(
        "http://178.128.64.203:8080/api/v1/auth/admin-login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const resData = response.data;
      console.log("login admin response", resData);

      setData(resData);

      // ✅ Extract needed fields
      const { accessToken, refreshToken, profile, role } = resData.data || {};

      // ✅ Save to localStorage
      if (accessToken) localStorage.setItem("accessToken", accessToken);
      if (refreshToken) localStorage.setItem("refreshToken", refreshToken);
      if (profile) localStorage.setItem("userProfile", JSON.stringify(profile));

      return resData;
    } catch (err: unknown) {
      console.log("login error", err);

      const axiosError = err as AxiosError<{
        message?: string;
        error?: string;
      }>;

      const errorMessage =
        axiosError.response?.data?.message ||
        axiosError.response?.data?.error ||
        axiosError.message ||
        "Login failed. Please try again.";

      setError(errorMessage);
      console.error("Login error:", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, data };
};
