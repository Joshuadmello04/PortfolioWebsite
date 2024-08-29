import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


const Navbar = () => {
    return (
        <div>
            <nav className="mb-20 flex items-center justify-between pt-6">
                <div className="flex flex-shrink-0 items-center">
                    <span className="self-center mx-2 w-10 text-5xl font-semibold whitespace-nowrap dark:text-white">Jd</span>
                </div>
                <div className="m-4 flex items-center justify-center gap-4 text-4xl">
                    <a href="https://www.linkedin.com/in/joshua-dmello-a48aa0264/" className="hover:text-[#0077b5]">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Joshuadmello04" className="hover:text-[#333]">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/joshuadmello04/" className="hover:text-[#e1306c]">
                        <FaInstagram />
                    </a>
                    <a href="mailto:joshuadmello777@gmail.com" className="hover:text-teal-900">
                        <button>
                            <SiGmail />
                        </button>
                    </a>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;
