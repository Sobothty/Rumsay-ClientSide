import { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardHome() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/users`)
      .then((response) => {
        const allUsers = response.data.data;
        const filtered = allUsers.filter(
          (user) => user.role?.name === "Regular User"
        );
        setData(filtered);
        setCount(filtered.length);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch users:", error);
        setError("Failed to load data.");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid"></div>
      </div>
    );

  if (error)
    return <div className="text-center text-red-500 py-10">{error}</div>;

  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-800 dark:to-blue-900 rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105">
          <span className="text-4xl font-bold text-primary">{count}</span>
          <span className="mt-2 text-gray-700 dark:text-gray-200">
            Regular Users
          </span>
        </div>
        {/* Add more animated cards/widgets here as needed */}
      </div>
      <div className="transition-all duration-500">
        <h2 className="text-lg font-semibold mb-4">User List</h2>
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white dark:bg-gray-900 rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">
                  Name
                </th>
                <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">
                  Email
                </th>
                <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">
                  Role
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, idx) => (
                <tr
                  key={user._id}
                  className="transition-colors duration-300 hover:bg-blue-50 dark:hover:bg-gray-800"
                  style={{
                    animation: `fadeInUp 0.4s ease ${idx * 0.05}s both`,
                  }}
                >
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.role?.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Add more dashboard widgets/components here */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fadeInUp 0.7s cubic-bezier(.4,0,.2,1) both;
          }
        `}
      </style>
    </div>
  );
}
