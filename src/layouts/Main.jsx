import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";

const Main = () => (
  <div data-theme="light" className="relative">
    <NavBar />
    <Outlet />
    <Footer />
    <ScrollToTop />
  </div>
);

export default Main;
