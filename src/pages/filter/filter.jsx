import React, { useState } from "react";
import NormalRoom from "../categories/rooms/roomCategories";

// Sample room data
const rooms = [
  { id: 1, name: "Room 101", type: "Normal" },
  { id: 2, name: "Room 102", type: "VIP" },
  { id: 3, name: "Room 103", type: "Premium" },
  { id: 4, name: "Room 104", type: "Luxury" },
  { id: 5, name: "Room 105", type: "VIP" },
  { id: 6, name: "Room 106", type: "Normal" },
];

const roomTypes = ["All", "Normal", "VIP", "Premium", "Luxury"];

const SingleHotel = () => {
  const [selectedType, setSelectedType] = useState("All");

  const filteredRooms =
    selectedType === "All"
      ? rooms
      : rooms.filter((room) => room.type === selectedType);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 p-4 bg-gray-100 border-r">
        <h2 className="text-xl font-bold mb-4">Filter by Room Type</h2>
        <ul className="space-y-2">
          {roomTypes.map((type) => (
            <li key={type}>
              <button
                onClick={() => setSelectedType(type)}
                className={`w-full text-left px-3 py-2 rounded ${
                  selectedType === type
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-100"
                }`}
              >
                {type} Room
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4">
          {selectedType} Rooms
        </h1>

        <div >
          <NormalRoom />
        </div>
      </main>
    </div>
  );
};

export default SingleHotel;
