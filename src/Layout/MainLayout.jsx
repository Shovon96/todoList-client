import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Home from "../Pages/Home";
import Footer from "../component/Footer";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar />
            <div className="min-h-[423px]">
                <Outlet>
                    <Home />
                </Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;