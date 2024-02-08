import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Home from "../Pages/Home";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar />
            <div className="min-h-screen">
                <Outlet>
                    <Home />
                </Outlet>
            </div>
        </div>
    );
};

export default MainLayout;