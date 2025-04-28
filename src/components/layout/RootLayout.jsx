import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import NavbarPage from "../Navbar"

const RootLayout = () => {
  return (
    <>
     <NavbarPage />
      <div className="Container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
