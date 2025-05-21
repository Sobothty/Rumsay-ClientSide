import React, { useState } from "react";

// Dummy data for room types (replace with API data as needed)
const roomTypes = [
  {
    type: "Regular",
    description: "Affordable comfort for everyday travelers.",
    color: "from-blue-100 to-blue-300",
    icon: "🛏️",
  },
  {
    type: "VIP",
    description: "Exclusive rooms with premium amenities.",
    color: "from-purple-100 to-purple-300",
    icon: "👑",
  },
  {
    type: "Premium",
    description: "Luxury experience with top-tier service.",
    color: "from-yellow-100 to-yellow-300",
    icon: "🌟",
  },
];

const AllRoom = () => {
      const [selectedType, setSelectedType] = useState("Regular");

  // Placeholder for rooms (replace with API call/filter by selectedType)
  const rooms = [
    { id: 1, name: "Room 101", type: "Regular" },
    { id: 2, name: "Room 102", type: "Regular" },
    { id: 3, name: "VIP Suite 1", type: "VIP" },
    { id: 4, name: "Premium Suite 1", type: "Premium" },
    { id: 5, name: "VIP Suite 2", type: "VIP" },
    { id: 6, name: "Premium Suite 2", type: "Premium" },
  ];

  const filteredRooms = rooms.filter((room) => room.type === selectedType);

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">All Room Types</h1>
      {/* Room Type Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {roomTypes.map((rt) => (
          <button
            key={rt.type}
            className={`flex flex-col items-center p-6 rounded-2xl shadow-lg bg-gradient-to-br ${
              rt.color
            } transition-all duration-300 hover:scale-105 border-2 ${
              selectedType === rt.type
                ? "border-primary ring-2 ring-primary/30"
                : "border-transparent"
            }`}
            onClick={() => setSelectedType(rt.type)}
          >
            <span className="text-4xl mb-2">{rt.icon}</span>
            <span className="text-lg font-semibold">{rt.type}</span>
            <span className="text-sm text-gray-600 mt-1 text-center">
              {rt.description}
            </span>
          </button>
        ))}
      </div>
      {/* Room List */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 transition-all duration-300">
        <h2 className="text-xl font-semibold mb-4">{selectedType} Rooms</h2>
        {filteredRooms.length === 0 ? (
          <div className="text-gray-500 text-center py-8">
            No rooms available for this type.
          </div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredRooms.map((room) => (
              <li
                key={room.id}
                className="p-4 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 shadow hover:shadow-lg transition"
              >
                <div className="font-bold text-primary">{room.name}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {room.type} Class
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllRoom;
