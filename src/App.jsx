import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import RootLayout from "./components/layout/RootLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import AdminDashboard from "./pages/admin/Dashboard";
import DashboardHome from "./pages/admin/page/DashboardHome";
import AllRoom from "./pages/admin/page/AllRoom";
import RoomTypes from "./pages/admin/page/RoomTypes";
import AllUsers from "./pages/admin/page/AllUsers";

// import Categories from "./pages/admin/categories/categories";
import Categories from "./components/Categories";
import { Reservation } from "./pages/admin/page/Reservation";
import SingleHotel from "./components/layout/filter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages with RootLayout (navbar/footer) */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Homepage />} />
          <Route path="about-us" element={<About />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="categories" element={<Categories />}>
            <Route path=":roomType" element={<SingleHotel />} />
          </Route>
        </Route>
        {/* Admin pages without RootLayout (no navbar/footer) */}
        <Route path="admin" element={<AdminDashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="rooms" element={<AllRoom />} />
          <Route path="room-types" element={<RoomTypes />} />
          <Route path="users" element={<AllUsers />} />
          <Route path="bookings" element={<Reservation />} />
        </Route>

        {/* filter route */}

        {/* Catch-all route for 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
