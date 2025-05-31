

const RoomCategoriesChild = () => {
  return (
    <div className="container mx-auto px-4 py-[50px] flex gap-8">

      {/* Card Section */}
      <section className="w-full">
        <div className="mb-6">
          <div className="bg-white shadow-md rounded-lg overflow-hidden flex">
            {/* Image - Left Half */}
            <div className="md:w-1/4 w-full h-60">
              <img
                src="/src/assets/categories/category-room.jpg"
                alt="Room"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details - Right Half */}
            <div className="md:w-1/2 w-full p-4 flex flex-col justify-center">
              <h4 className="text-xl font-semibold mb-2">Deluxe Room</h4>
              <p className="text-gray-600 mb-4">From $80/night</p>
              <p className="text-gray-500 mb-4">
                Enjoy a luxurious stay with modern amenities, spacious
                interiors, and a relaxing atmosphere.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-max">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomCategoriesChild;
