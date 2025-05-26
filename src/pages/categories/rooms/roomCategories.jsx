import React from "react";
import RoomChild from "./roomCategoriesChild";
import NavbarPage from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CheckInOut from "../../checkInOut";

const Room = () => {
  return (
    <div>
      <NavbarPage />

      <main className="w-full m-auto max-w-7xl bg-gray-50">
        <CheckInOut />
        <RoomChild />
      </main>

      <Footer />
    </div>
  );
};

export default Room;
