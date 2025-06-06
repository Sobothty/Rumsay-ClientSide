import React from "react";

const RoomTypeCard = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-md mb-6 overflow-hidden">
      <div className="grid md:grid-cols-3">
        {/* Room Image */}
        <div className="h-48 md:h-auto">
          <img
            src="/src/assets/categories/category-room.jpg"
            alt="Room"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Room Info */}
        <div className="p-5 col-span-2 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-[#2a1a4a] mb-2">
              Standard Room
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              A cozy room perfect for solo travelers or couples. Enjoy a
              peaceful night with amenities like Wi-Fi, air conditioning, and
              more.
            </p>
            <ul className="text-sm text-gray-700 grid grid-cols-2 gap-y-1 mb-4">
              <li>✔ Free Wi-Fi</li>
              <li>✔ Air Conditioning</li>
              <li>✔ Bathtub</li>
              <li>✔ Balcony</li>
              <li>✔ Breakfast Included</li>
              <li>✔ 2 Guests</li>
            </ul>
          </div>

          {/* Price & Button */}
          <div className="flex justify-between items-center mt-2">
            <span className="text-xl font-semibold text-blue-600">
              $45 / night
            </span>
            <button className="bg-[#2a1a4a] text-white px-5 py-2 rounded-md text-sm hover:bg-[#1d1335] transition">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomTypeCard;
