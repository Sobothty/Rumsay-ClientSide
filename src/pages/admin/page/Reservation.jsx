import React, { useEffect, useState } from "react";
import axios from "axios";

export const Reservation = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setBookings([]);
        setLoading(false);
        return;
      }
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/bookings`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.data && Array.isArray(res.data.data)) {
          setBookings(res.data.data);
        } else if (res.data && res.data.data) {
          setBookings([res.data.data]);
        } else {
          setBookings([]);
        }
      } catch (err) {
        setBookings([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  const handleEdit = (bookingId) => {
    // TODO: Implement edit logic or navigation
    alert(`Edit booking ${bookingId}`);
  };

  const handleDelete = (bookingId) => {
    // TODO: Implement delete logic
    alert(`Delete booking ${bookingId}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Booking List</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-900 rounded-xl shadow border border-gray-200 dark:border-gray-700">
            <thead>
              <tr className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-900">
                <th className="py-3 px-4 text-left font-semibold">
                  Booking ID
                </th>
                <th className="py-3 px-4 text-left font-semibold">Username</th>
                <th className="py-3 px-4 text-left font-semibold">
                  Room Numbers
                </th>
                <th className="py-3 px-4 text-left font-semibold">Status</th>
                <th className="py-3 px-4 text-center font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-4 text-center text-gray-500">
                    No bookings found.
                  </td>
                </tr>
              )}
              {bookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-t border-gray-100 dark:border-gray-800 hover:bg-blue-50 dark:hover:bg-gray-800 transition"
                >
                  <td className="py-3 px-4">{booking.id}</td>
                  <td className="py-3 px-4">
                    {booking.user?.email || booking.user?.username || "N/A"}
                  </td>
                  <td className="py-3 px-4">
                    {booking.rooms && booking.rooms.length > 0
                      ? booking.rooms.map((r) => r.room_number).join(", ")
                      : "N/A"}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        booking.booking_status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : booking.booking_status === "confirmed"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {booking.booking_status}
                    </span>
                  </td>
                  <td className="py-3 px-4 flex gap-2 justify-center">
                    <button
                      onClick={() => handleEdit(booking.id)}
                      className="px-4 py-1 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(booking.id)}
                      className="px-4 py-1 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
