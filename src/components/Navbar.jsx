import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <span className="self-center mx-2 w-10 text-4xl font-semibold whitespace-nowrap dark:text-white">J d</span>
            </div>
            <div className="m-4 flex items-center justify-center gap-4 text-3xl">
                <a href="https://www.linkedin.com/in/joshua-dmello-a48aa0264/" className="hover:text-[#0077b5]">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Joshuadmello04" className="hover:text-[#333]">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/joshuadmello04/" className="hover:text-[#e1306c]">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
