import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { FaListCheck } from "react-icons/fa6";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("Logged out successfully");
            })
            .catch((err) => toast.error(err.message));
    };
    return (
        <div>
            <ul className="flex gap-8 py-5 justify-center items-center bg-sky-500 text-white font-semibold">
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
                
                {user ? (
                    <NavLink
                        onClick={handleLogout}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "" : ""
                        }
                    >
                        <span className="flex items-center font-bold gap-1">Logout <img className="h-8 w-8 rounded-full" src={user.photoURL ? user?.photoURL : 'https://e7.pngegg.com/pngimages/419/473/png-clipart-computer-icons-user-profile-login-user-heroes-sphere-thumbnail.png' } alt="" /></span>
                    </NavLink>
                ) : (
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-blue-700 underline" : ""
                        }
                    >
                        <span className="flex items-center font-bold gap-1">Login <LuLogIn /></span>
                    </NavLink>
                )}
            </ul>
        </div>
    );
};

export default Navbar;