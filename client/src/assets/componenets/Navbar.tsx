import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-transparent">
      <div className="relative shadow-md">
        {/* Navbar Content */}
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center relative z-10">
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <img
              src="/Abet logo.jpg"
              alt="Abet Logo"
              className="h-10 w-10 rounded-full object-cover border-2 border-[#FFA726] shadow-md animate-swing"
            />
            <span className="ml-3 font-extrabold text-2xl text-[#1565C0] tracking-wide underline decoration-[#FFA726] underline-offset-4">
              ABET
            </span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8 text-[#1565C0] font-medium">
            <li>
              <a
                href="#home"
                className="hover:underline hover:decoration-[#E53935] transition-all"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:underline hover:decoration-[#E53935] transition-all"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="hover:underline hover:decoration-[#E53935] transition-all"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline hover:decoration-[#E53935] transition-all"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Sign In Button */}
          <div className="hidden md:block">
           <button className="px-5 py-2 bg-[#FFA726] text-[#1565C0] rounded-full shadow-md transition font-semibold hover:underline hover:decoration-[#E53935]">
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
            className="w-full h-10"
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
        <div className="md:hidden bg-black shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-6 text-white font-medium">
            <li>
              <a
                href="#home"
                className="hover:underline hover:decoration-[#E53935] transition-all"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:underline hover:decoration-[#E53935] transition-all"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="hover:underline hover:decoration-[#E53935] transition-all"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline hover:decoration-[#E53935] transition-all"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
            <li>
              <button className="px-5 py-2 bg-[#FFA726] text-[#1565C0] rounded-full shadow-md transition font-semibold hover:underline hover:decoration-[#E53935]">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      )}

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
    </nav>
  );
};

export default Navbar;

