import { useState } from "react";
import Room from "../../pages/categories/roomCategories";

const roomTypes = ["Normal Room", "VIP Room", "Premium Rooms"];

const SingleHotel = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="flex min-h-screen justify-center pt-10">
      <div className="flex w-full max-w-7xl">
        {/* Sidebar */}
        <aside className="w-72 p-8 bg-white shadow-xl rounded-2xl flex flex-col items-start mt-5 h-fit sticky top-25 transition-all duration-300">
          <h2 className="text-3xl font-black mb-8 text-blue-700 tracking-tight drop-shadow-sm">
            Filter Rooms
          </h2>
          <div className="flex flex-col gap-5 w-full">
            {roomTypes.map((type) => (
              <label
                key={type}
                className={`flex items-center gap-4 px-5 py-3 rounded-xl cursor-pointer transition-all duration-200 text-lg font-semibold ${
                  selectedTypes.includes(type)
                    ? "bg-blue-500 text-white shadow-md"
                    : "bg-blue-50 hover:bg-blue-100 text-blue-800"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleTypeChange(type)}
                  className="accent-blue-600 w-5 h-5 rounded border-2 border-blue-400 focus:ring-2 focus:ring-blue-400 transition"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
          <button
            className="mt-10 w-full py-3 bg-blue-600 text-white rounded-xl font-bold shadow hover:bg-blue-700 transition disabled:opacity-50"
            onClick={() => setSelectedTypes([])}
            disabled={selectedTypes.length === 0}
          >
            Clear Filters
          </button>
        </aside>
        {/* Main content */}
        <main className="flex-1 p-12">
          <h1 className="text-4xl font-extrabold mb-10 text-gray-800 drop-shadow">
            {selectedTypes.length === 0 ? "All Room" : selectedTypes.join(", ")}{" "}
          </h1>
          <div>
            <Room filterTypes={selectedTypes} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SingleHotel;
