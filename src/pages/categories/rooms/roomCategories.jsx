// import React from "react";
import RoomChild from "./roomCategoriesChild";
import CheckInOut from "../../checkInOut";

const Room = () => {
  return (
    <div>
      {/* <NavbarPage /> */}
      <div className="w-full m-auto max-w-7xl bg-gray-50">
        <CheckInOut />
        <RoomChild />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Room;
