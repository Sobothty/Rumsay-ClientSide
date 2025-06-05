// import React from "react";
import RoomCategoriesChild from "../../components/RoomCard";
import CheckInOut from "../checkInOut";

const Room = () => {
  return (
    <div>
      {/* <NavbarPage /> */}
      <div className="w-full m-auto max-w-7xl bg-gray-50">
        <CheckInOut />
        <RoomCategoriesChild />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Room;
