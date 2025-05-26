import React from "react";
import { Link } from "react-router-dom";
import Room from "./rooms/roomCategories";

const Categories = () => {
  return (
    <div>
      <section className="bg-white py-[50px]">
        <h2 className="text-2xl pt-2 font-bold text-gray-800 mb-6">
          Explore Our Hotel
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mx-auto">
          {/* Rooms */}
          <Link to="/categories/rooms">
            <div className="flex flex-col items-center rounded-lg hover:shadow-lg transition cursor-pointer relative">
              <img
                src="src/assets/categories/category-room.jpg"
                alt="Room"
                className="w-full h-40 object-cover rounded-xl"
              />
              {/* Overlapping span */}
              <span className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 text-sm rounded">
                Room
              </span>
            </div>
          </Link>

          {/* Facilities */}
          <Link to="/facilities">
            <div className="flex flex-col items-center rounded-lg hover:shadow-lg transition cursor-pointer relative">
              <img
                src="src/assets/categories/category-facility.jpg"
                alt="Facilities"
                className="w-full h-40 object-cover rounded-xl"
              />
              <span className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 text-sm rounded">
                Facilities
              </span>
            </div>
          </Link>

          {/* Dining */}
          <Link to="/dining">
            <div className="flex flex-col items-center rounded-lg hover:shadow-lg transition cursor-pointer relative ">
              <img
                src="src/assets/categories/dining-category.jpg"
                alt="Dining"
                className="w-full h-40 object-cover rounded-xl"
              />
              <span className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 text-sm rounded">
                Dining
              </span>
            </div>
           
          </Link>

          {/* Attractions */}
          <Link to="/attractions">
            <div className="flex flex-col items-center rounded-lg hover:shadow-lg transition cursor-pointer relative">
              <img
                src="src/assets/categories/nearby-category.jpg"
                alt="Attractions"
                className="w-full h-40 object-cover rounded-xl"
              />
              <span className="absolute bottom-2 left-2 bg-opacity-60 text-white bg-black px-2 py-1 text-sm rounded">
                Nearby
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Categories;
