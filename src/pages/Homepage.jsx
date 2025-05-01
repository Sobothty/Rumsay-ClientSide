import { Button, Datepicker, Select } from "flowbite-react";

export default function Homepage() {
  return (
    <main className="w-full m-auto max-w-7xl h-screen bg-gray-50 px-5 md:px-10 lg:px-16">
      {/* Hero Section */}
      <section className="w-full h-[200px] md:h-[300px] lg:h-[500px] bg-[url('src/assets/banner.jpg')] bg-cover bg-center flex items-center justify-center rounded-2xl mt-10 shadow-lg relative">
        {/* Mask/Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-2xl"></div>

        {/* Your content here */}
        <div className="relative z-10 text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Welcome</h1>
          <p className="mt-4 text-lg">This is a masked background</p>
        </div>
        {/* Datepicker and Button */}
        <div className="flex flex-col w-full absolute p-2 bg-white shadow-xl gap-2 md:h-[70px] lg:h-[100px] -bottom-70 md:-bottom-8 lg:-bottom-12 rounded-xl sm:rounded-4xl lg:rounded-fullitems-center">
          <h2 className="text-xl text-blue-700 font-bold mx-auto my-2">Choose your perfect days</h2>
          <div className="w-full">
            <Datepicker title="Check-in date"/>
          </div>
          <div className="w-full">
            <Datepicker title="Check-out date"/>
          </div>
          <div className="w-full">
            <div className="w-full">
              <Select
                id="modalSize"
                className="w-full text-primary font-bold"
                required={true}
                defaultValue={1}
                title="Number of guests"
                onChange={(event) => setModalSize(event.target.value)}
              >
                <option value="1" className="hover:bg-[#11bdc3]">1</option>
                <option value="2" className="hover:bg-[#11bdc3]">2</option>
                <option value="3" className="hover:bg-[#11bdc3]">3</option>
                <option value="4" className="hover:bg-[#11bdc3]">4</option>
                <option value="5" className="hover:bg-[#11bdc3]">5</option>
                <option value="6" className="hover:bg-[#11bdc3]">6</option>
                <option value="7" className="hover:bg-[#11bdc3]">7</option>
                <option value="8" className="hover:bg-[#11bdc3]">8</option>
                <option value="9" className="hover:bg-[#11bdc3]">9</option>
                <option value="10" className="hover:bg-[#11bdc3]">10</option>
              </Select>
            </div>
          </div>
          <Button className="w-full border-[#118BD3] border-l-1">Search</Button>
        </div>
      </section>
    </main>
  );
}
