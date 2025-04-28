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
        <div className="flex flex-col w-full absolute bg-white md:h-[70px] lg:h-[100px] -bottom-50 md:-bottom-8 lg:-bottom-12 rounded-3xl sm:rounded-4xl lg:rounded-full border border-[#118BD3] items-center">
          <div className="w-full lg:border-[#118BD3] border-l-1">
            <Datepicker className="border-l-2 border-[#118bd3]" />
          </div>
          <div className="w-full border-[#118BD3] border-l-1">
            <Datepicker className="border-l-2 border-[#118bd3]" />
          </div>
          <div className="w-full border-[#118BD3] border-l-1">
            <div className="w-full">
              <Select
                defaultValue=""
                onChange={(event) => setModalSize(event.target.value)}
              >
                <option value="sm">sm</option>
                <option value="md">md</option>
                <option value="lg">lg</option>
                <option value="xl">xl</option>
                <option value="2xl">2xl</option>
                <option value="3xl">3xl</option>
                <option value="4xl">4xl</option>
                <option value="5xl">5xl</option>
                <option value="6xl">6xl</option>
                <option value="7xl">7xl</option>
              </Select>
            </div>
          </div>
          <Button className="w-full border-[#118BD3] border-l-1">Search</Button>
        </div>
      </section>
    </main>
  );
}
