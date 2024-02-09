/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Banner = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="relative top-0">
            <img className="h-[90vh] w-full" src='https://media.discordapp.net/attachments/1177886803424976896/1187705575916703764/422a378b65f64cb49771167fa2d611d4.png?ex=6597dc03&is=65856703&hm=ce7ff3c16c24e4b5a04bda96421f4a109c199c51e8af2762e47501e3c8d669e5&=&format=webp&quality=lossless&width=1025&height=342' alt="banner image" />
            <div
                className=" flex flex-col justify-center text-black font-bold absolute lg:bottom-1/3 bottom-3 md:bottom-1/4 left-3 lg:left-12 md:left-5 w-1/3 ">
                <h3 className="justify-center text-xs md:text-base lg:text-3xl flex ">
                    Effortless Productivity with TechnoVision Your Ultimate Task Management
                    Solution
                </h3>
                {user ? (
                    <button className="py-[6px] px-3 rounded-md text-base md:text-xl bg-sky-500 mt-3 text-white">
                        <Link to={"/todoList"}>Let's Explore</Link>
                    </button>
                ) : (
                    <button className="py-[6px] px-3 rounded-md text-base md:text-xl bg-sky-500 mt-3 text-white">
                        <Link to={"/login"}>Let's Explore</Link>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Banner;