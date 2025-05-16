import { FiBell, FiChevronDown } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.svg"
import Avatar from "../assets/avatar.svg"
import { LuArrowUpRight } from "react-icons/lu";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-300 py-3">
      <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
           <img src={Logo} alt="Logo" />
        </div>

        <div className="flex items-center gap-8">
          <Button className="bg-gray-100 hover:bg-gray-200 transition px-4 py-2 rounded text-sm flex items-center gap-2">
            View public channel
            <LuArrowUpRight className="h-4 w-4" />
          </Button>

          <Button className="relative">
            <FiBell className="h-7 w-7 text-gray-600 hover:text-gray-800 transition" />
            <span className="absolute -top-1 -right-2 bg-blue-600 text-white rounded-full text-xs px-1.5">
              3
            </span>
          </Button>

          <div className="flex items-center gap-2 cursor-pointer select-none">
            <img src={Avatar} alt="User Avatar" />
            <span className="font-medium text-gray-700">Jakhongir Rahmonov</span>
            <FiChevronDown className="h-4 w-4 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
