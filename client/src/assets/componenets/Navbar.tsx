import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <img
            src="/Abet logo.jpg"
            alt="Abet Logo"
            className="h-10 w-10 rounded-full object-cover border-2 border-orange-500 shadow-md"
          />
          <span className="ml-3 font-extrabold text-2xl text-orange-600 tracking-wide">
            Abet
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <a href="#home" className="hover:text-orange-500 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-orange-500 transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#how-it-works"
              className="hover:text-orange-500 transition-colors"
            >
              How It Works
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-orange-500 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Sign In Button */}
        <div className="hidden md:block">
          <button className="px-5 py-2 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition font-semibold">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-7 h-7 text-gray-700" />
            ) : (
              <Menu className="w-7 h-7 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium">
            <li>
              <a
                href="#home"
                className="hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
            <li>
              <button className="px-5 py-2 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition font-semibold">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
