import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <div className="bg-sky-500">
                <div className="md:flex justify-evenly flex-row-reverse items-center">
                    <div className="flex justify-center md:justify-normal pt-5 md:pt-0 gap-6 text-2xl text-white">
                        <a
                            className="font-bold pl-2"
                            href="https://github.com/Shovon96"
                            target="_blank"
                        >
                            <FaGithub />
                        </a>
                        <a
                            className="font-bold pl-2"
                            href="https://www.linkedin.com/in/fakhruddin-shovon-3a4b77252"
                            target="_blank"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            className="font-bold pl-2"
                            href="fakhruddinshovon@gmail.com"
                            target="_blank"
                        >
                            <IoMail />
                        </a>
                    </div>
                    <h1 className="md:flex text-center justify-center items-center py-6">© 2024, All Rights Reserved. Designed & Created By{" "}
                        <a
                            className="font-bold text-lg pl-2"
                            href="https://fakruddin_portfolio.surge.sh/"
                            target="_blank"
                        >
                            Fakhruddin Ahmed.
                        </a>{" "}
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Footer;