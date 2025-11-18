"use client";

import { useState } from "react";
import LoginForm from "@/components/LoginForm";
import AuthAsideBg from "@/components/authAsideBg";
import DynamicHeader from "@/components/dynamicHeader";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Aside */}
      <div className="w-1/2 hidden md:block">
        <AuthAsideBg />
      </div>

      {/* Right Content */}
      <div className="flex items-center flex-col justify-center md:w-1/2 w-full px-6">
        <DynamicHeader />
        <LoginForm />
      </div>
    </div>
  );
}
