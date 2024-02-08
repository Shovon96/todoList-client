import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul className="flex gap-8 py-5 justify-center bg-blue-300 text-white font-semibold">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold text-blue-600 underline" : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/todoList"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold text-blue-600 underline" : ""
                    }
                >
                    Todo List
                </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;