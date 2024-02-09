import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { FaListCheck } from "react-icons/fa6";


const Navbar = () => {
    return (
        <div>
            <ul className="flex gap-8 py-5 justify-center bg-sky-500 text-white font-semibold">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold text-blue-700 underline" : ""
                    }
                >
                   <span className="flex items-center font-bold gap-1"><FaHome /> Home</span>
                </NavLink>
                <NavLink
                    to="/todoList"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold text-blue-700 underline" : ""
                    }
                >
                   <span className="flex items-center font-bold gap-1"><FaListCheck /> Todo List</span>
                </NavLink>
                <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold text-blue-700 underline" : ""
                    }
                >
                    <span className="flex items-center font-bold gap-1">Login <LuLogIn /></span>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;