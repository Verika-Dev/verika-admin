"use client";
import React, { useState } from "react";
import {
  LayoutDashboard,
  Award,
  Building2,
  BookOpen,
  Users,
  Wallet,
  MessageSquare,
  BarChart3,
  HelpCircle,
  Settings,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    id: "tutor",
    label: "Tutor Management",
    icon: Award,
    href: "/dashboard/tutor",
  },
  {
    id: "organization",
    label: "Organization",
    icon: Building2,
    href: "/dashboard/organization",
  },
  {
    id: "course",
    label: "Course and Content",
    icon: BookOpen,
    href: "/dashboard/course",
  },
  {
    id: "assignment",
    label: "Assignment Modulation",
    icon: Users,
    href: "/dashboard/assignment",
  },
  {
    id: "wallet",
    label: "Wallet",
    icon: Wallet,
    href: "/dashboard/wallet",
  },
  {
    id: "community",
    label: "Community Moderation",
    icon: MessageSquare,
    href: "/dashboard/community",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    href: "/dashboard/analytics",
  },
];

const bottomItems = [
  {
    id: "support",
    label: "Support & Comms",
    icon: HelpCircle,
    href: "/dashboard/support",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* <AdminNav /> */}
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-1">
            {menuItems.map(({ id, label, icon: Icon, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={id}
                  href={href}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition ${
                    isActive
                      ? "bg-[#1E40AF] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}>
                  <Icon size={18} />
                  <span>{label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom Items */}
        <div className=" p-4 space-y-1">
          {bottomItems.map(({ id, label, icon: Icon, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={id}
                href={href}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition ${
                  isActive
                    ? "bg-[#1E40AF] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}>
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            );
          })}

          {/* Profile Footer */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-md">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                <Image
                  src="/icons/admin.png"
                  alt="User Avatar"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-800">Alison Eyo</p>
                <p className="text-xs text-gray-500">Super admin</p>
              </div>
              <ChevronRight
                size={20}
                className="text-gray-400 cursor-pointer "
              />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
