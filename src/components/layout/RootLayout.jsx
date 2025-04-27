import NavbarPage from "../Navbar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

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
