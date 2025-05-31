"use client";

import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import {
  ChartAreaIcon,
  Home,
  Calendar,
  ReceiptText,
  User2,
  BedDouble,
  Users,
} from "lucide-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    name: "All Rooms Types",
    icons: <BedDouble className="w-5 h-5" />,
    href: "/admin/room-types",
  },
  {
    name: "Reservations",
    icons: <Calendar className="w-5 h-5" />,
    href: "/admin/bookings",
  },
  {
    name: "All Users",
    icons: <Users className="w-5 h-5" />,
    href: "/admin/users",
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
  const [profile, setProfile] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef();

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

  useEffect(() => {
    // Fetch profile for dropdown
    const token = localStorage.getItem("authToken");
    if (token) {
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/api/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setProfile(res.data?.data || null))
        .catch(() => setProfile(null));
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    if (profileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileOpen]);

  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/";
  };

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
          <div className="flex items-center gap-4 relative" ref={profileRef}>
            <button
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 transition"
              onClick={() => setProfileOpen((v) => !v)}
            >
              <User2 className="w-7 h-7 text-gray-500 dark:text-gray-300" />
            </button>
            {profileOpen && (
              <div className="absolute right-0 top-12 z-50 min-w-[220px] bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-5 flex flex-col gap-2 animate-fade-in">
                <div className="mb-2">
                  <div className="font-semibold text-gray-900 dark:text-white text-base">
                    {profile?.display_name ||
                      profile?.username ||
                      profile?.email ||
                      "User"}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {profile?.role?.name || profile?.role || "Role"}
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="mt-2 px-4 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </header>
        {/* Routed main content */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet context={{ toast }} />
        </main>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
