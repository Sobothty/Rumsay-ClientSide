import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const Categories = () => {
  const { roomType } = useParams(); // this will be undefined on /categories, but defined on /categories/:roomType

  if (roomType) {
    return <Outlet />;
  }

  return (
    <div>
      <section className="bg-white py-[50px]">
        <h2 className="text-3xl pt-2 font-semibold text-gray-800 mb-[60px]">
          Explore Our Hotel
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mx-auto">
          {/* Room Types */}
          <Link to="/categories/normal">
            <div className="flex flex-col items-center rounded-lg hover:shadow-lg transition cursor-pointer relative">
              <img
                src="src/assets/categories/category-room.jpg"
                alt="Normal Room"
                className="w-full h-40 object-cover rounded-xl"
              />
              <span className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 text-sm rounded">
                Normal Room
              </span>
            </div>
          </Link>

          <Link to="/categories/vip">
            <div className="flex flex-col items-center rounded-lg hover:shadow-lg transition cursor-pointer relative">
              <img
                src="src/assets/categories/category-room.jpg"
                alt="VIP Room"
                className="w-full h-40 object-cover rounded-xl"
              />
              <span className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 text-sm rounded">
                VIP Room
              </span>
            </div>
          </Link>

          <Link to="/categories/premium">
            <div className="flex flex-col items-center rounded-lg hover:shadow-lg transition cursor-pointer relative">
              <img
                src="src/assets/categories/category-room.jpg"
                alt="Premium Room"
                className="w-full h-40 object-cover rounded-xl"
              />
              <span className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 text-sm rounded">
                Premium Room
              </span>
            </div>
          </Link>

          <Link to="/categories/luxury">
            <div className="flex flex-col items-center rounded-lg hover:shadow-lg transition cursor-pointer relative">
              <img
                src="src/assets/categories/category-room.jpg"
                alt="Luxury Room"
                className="w-full h-40 object-cover rounded-xl"
              />
              <span className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 text-sm rounded">
                Luxury Room
              </span>
            </div>
          </Link>
        </div>
      </section>

      <Outlet />
    </div>
  );
};

export default Categories;
