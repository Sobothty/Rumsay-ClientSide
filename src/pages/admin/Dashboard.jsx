"use client";

import React, { useEffect } from "react";
import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import {
  ChartAreaIcon,
  Home,
  Calendar,
  ReceiptText,
  User2,
} from "lucide-react";
import axios from "axios";

const sidebarItems = [
  {
    name: "Dashboard",
    icons: <ChartAreaIcon className="w-5 h-5" />,
    href: "/admin",
  },
  {
    name: "All Rooms",
    icons: <Home className="w-5 h-5" />,
    href: "/admin/rooms",
  },
  {
    name: "Reservations",
    icons: <Calendar className="w-5 h-5" />,
    href: "/admin/bookings",
  },
  {
    name: "Invoices",
    icons: <ReceiptText className="w-5 h-5" />,
    href: "/admin/invoices",
  },
];

export default function AdminDashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Validate admin role
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/");
      return;
    }
    // Fetch profile and check role
    const checkRole = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = res.data;
        // Normalize role name to lower case for comparison
        let role = "";
        if (data?.data?.role?.name) {
          role = String(data.data.role.name).toLowerCase();
        } else if (data?.data?.role) {
          role = String(data.data.role).toLowerCase();
        }
        if (role !== "admin") {
          navigate("/");
        }
      } catch {
        navigate("/");
      }
    };
    checkRole();
  }, [navigate]);

  const linkClass = (path) =>
    `group relative flex items-center gap-4 px-5 py-3 rounded-xl transition-all duration-300 font-medium
    ${
      location.pathname === path
        ? "bg-gradient-to-r from-primary to-blue-500 text-white shadow-lg"
        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow"
    }`;

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-72 h-full p-0 bg-gradient-to-b from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-r border-gray-100 dark:border-gray-800 shadow-xl flex flex-col transition-all duration-300">
        {/* Sidebar Header */}
        <div className="px-7 py-6 border-b border-gray-100 dark:border-gray-800 flex flex-col items-center gap-2 bg-white/80 dark:bg-gray-900/80">
          <img src="/Rumsay-nobg.png" alt="Logo" className="h-20 w-auto" />
        </div>
        {/* Sidebar Navigation */}
        <nav className="flex-1 px-7 py-6">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.name}>
                <Link to={item.href} className={linkClass(item.href)}>
                  {/* Active indicator */}
                  {location.pathname === item.href && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-1 rounded-r bg-blue-500 transition-all duration-300"></span>
                  )}
                  <span className="z-10">{item.icons}</span>
                  <span className="z-10">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto text-center text-xs text-gray-400 dark:text-gray-600 pt-6 pb-4">
          &copy; {new Date().getFullYear()} Rumsay. All rights reserved.
        </div>
      </aside>
      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-4 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex items-center gap-4">
            <img
              src="/Rumsay-nobg.png"
              alt="Logo"
              className="h-10 w-auto hidden md:block"
            />
            <span className="text-xl font-bold text-primary dark:text-white hidden md:block">
              Rumsay Manangements
            </span>
          </div>
          <div className="flex-1 flex justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-xs px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 transition">
              <User2 className="w-7 h-7 text-gray-500 dark:text-gray-300" />
            </button>
          </div>
        </header>
        {/* Routed main content */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
