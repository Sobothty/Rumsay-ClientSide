import React from "react";

const AllRoomsCard = () => {
  return (
    <div className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100">
      <img
        src="src/assets/categories/category-room.jpg"
        alt="Room"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#2a1a4a] mb-1">
          Deluxe River View
        </h3>
        <p className="text-gray-600 text-sm mb-2">
          Overlooking the serene riverside of Phnom Penh, perfect for couples.
        </p>
        <ul className="text-sm text-gray-500 mb-3">
          <li>🛏️ 1 King Bed</li>
          <li>🛁 Private Bathroom</li>
          <li>📶 Free Wi-Fi</li>
          <li>❄️ Air Conditioning</li>
        </ul>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-[#2a1a4a]">$85/night</span>
          <button className="px-4 py-1 bg-[#2a1a4a] text-white rounded-full text-sm hover:bg-[#1f1233]">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllRoomsCard;
