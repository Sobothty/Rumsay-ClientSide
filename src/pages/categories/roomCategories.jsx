// import React from "react";
import React, { useEffect, useState } from "react";
import RoomCard from "../../components/RoomCard";
import CheckInOut from "../checkInOut";
import axios from "axios";

const Room = ({ filterTypes = [] }) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/rooms/`)
      .then((res) => {
        if (res.data && Array.isArray(res.data.data)) {
          setRooms(res.data.data);
        } else {
          setRooms([]);
        }
      })
      .catch((err) => {
        setRooms([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredRooms =
    !filterTypes || filterTypes.length === 0
      ? rooms
      : rooms.filter((room) => filterTypes.includes(room.room_type?.type));

  return (
    <div>
      {/* <NavbarPage /> */}
      <div className="w-full m-auto max-w-7xl bg-gray-50">
        <CheckInOut />
        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : filteredRooms.length === 0 ? (
          <div className="text-center py-10">No rooms found.</div>
        ) : (
          filteredRooms.map((room) => <RoomCard key={room.id} room={room} />)
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Room;
