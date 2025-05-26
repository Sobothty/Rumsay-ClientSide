import DatePickerForm from "../components/DatePickerForm";
import Categories from "./categories/categories";
import CheckInOut from "./checkInOut";

export default function Homepage() {
  return (
    <main className="w-full m-auto max-w-7xl bg-gray-50 ">
      {/* Hero Section */}

      <section className=" w-full h-[200px] md:h-[300px] lg:h-[500px] bg-[url('src/assets/banner.jpg')] bg-cover bg-center flex items-center justify-center rounded-2xl mt-10 shadow-lg relative">
        {/* Mask/Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-2xl"></div>

        {/* Your content here */}
        <div className="relative z-10 text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Welcome</h1>
          <p className="mt-4 text-lg">This is a masked background</p>
        </div>
        {/* Datepicker and Button */}
        {/* <DatePickerForm /> */}
      </section>

      {/* checkin checkout guests and room */}
      <section>
        <CheckInOut />
      </section>

      {/* categories */}

      <section>
        <Categories />
      </section>
    </main>
  );
}
