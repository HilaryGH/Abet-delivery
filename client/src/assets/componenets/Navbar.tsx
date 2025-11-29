import { useState } from "react";
import { Menu, X, Facebook, Instagram, Linkedin } from "lucide-react";
import { Mail, Phone } from "lucide-react";

// TikTok SVG since lucide-react doesn’t have it
const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-5 h-5 fill-current"
  >
    <path d="M448,209.9c-17.7,0-34.6-2.9-50.4-8.2v137.6c0,95.1-77.1,172.2-172.2,172.2S53.2,434.4,53.2,339.3
    c0-77.3,50-143,119.4-165.8v84.4c-22.2,15.9-36.7,41.6-36.7,70.9c0,48,38.9,86.9,86.9,86.9s86.9-38.9,86.9-86.9V0h88.8
    c0,17.7,2.9,34.6,8.2,50.4c11.9,35.6,37.5,65,70.4,82.2C475.1,203.5,462,209.9,448,209.9z"/>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-30">
      {/* Top Contact Bar */}
      <div className="w-full bg-[#1565C0] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-2 flex flex-col sm:flex-row justify-between items-center">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 text-center sm:text-left">
            <a
              href="tel:0911508734"
              className="flex items-center justify-center space-x-2 hover:text-[#FFA726] transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>0911508734</span>
            </a>
            <a
              href="mailto:g.fikre2@gmail.com"
              className="flex items-center justify-center space-x-2 hover:text-[#FFA726] transition-colors duration-200 mt-1 sm:mt-0"
            >
              <Mail className="w-4 h-4" />
              <span>g.fikre2@gmail.com</span>
            </a>
          </div>

          {/* Social Icons (hidden on small screens) */}
          <div className="hidden md:flex space-x-4 mt-2 sm:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFA726] transition-colors duration-200"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFA726] transition-colors duration-200"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFA726] transition-colors duration-200"
            >
              <TikTokIcon />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFA726] transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className=" shadow-md">
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-3 pb-1 flex justify-between items-center relative z-10">
            {/* Logo */}
            <div className="flex items-center cursor-pointer">
              <img
                src="/Abet logo.jpg"
                alt="Abet Logo"
                className="h-16 w-16 rounded-full object-cover border-2 border-[#FFA726] shadow-md animate-swing"
              />
              <span className="ml-3 font-extrabold text-xl sm:text-2xl text-[#1565C0] tracking-wide underline decoration-[#FFA726] underline-offset-4">
                ABET
              </span>
            </div>

            {/* Desktop Links */}
            <ul className="hidden md:flex space-x-6 lg:space-x-10 text-[#1565C0] font-medium">
              {["Home", "Services", "How It Works", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:text-[#E53935] transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Sign In Button */}
            <div className="hidden md:block">
              <button className="px-5 py-2 bg-[#FFA726] text-[#1565C0] rounded-full shadow-md transition transform hover:scale-105 hover:shadow-lg font-semibold">
                Sign In
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <X className="w-7 h-7 text-[#1565C0]" />
                ) : (
                  <Menu className="w-7 h-7 text-[#1565C0]" />
                )}
              </button>
            </div>
          </div>

          {/* Decorative Wavy Bottom */}
          <div className="absolute bottom-0 left-0 w-full z-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 80"
              className="w-full h-8 sm:h-10"
              preserveAspectRatio="none"
            >
              <path
                fill="#FFA726"
                d="M0,32L60,48C120,64,240,96,360,96C480,96,600,64,720,53.3C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              ></path>
            </svg>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#1565C0] shadow-md">
            <ul className="flex flex-col items-center space-y-5 py-6 text-white font-medium">
              {["Home", "Services", "How It Works", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:text-[#FFA726] transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <button className="px-5 py-2 bg-[#FFA726] text-[#1565C0] rounded-full shadow-md transition transform hover:scale-105 hover:shadow-lg font-semibold">
                  Sign In
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hanging Animation */}
      <style>{`
        @keyframes swing {
          0% { transform: rotate(3deg); }
          50% { transform: rotate(-3deg); }
          100% { transform: rotate(3deg); }
        }
        .animate-swing {
          animation: swing 3s infinite ease-in-out;
          transform-origin: top center;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
