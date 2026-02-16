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
      <div className="w-full bg-gradient-to-r from-[#1565C0] to-[#0d47a1] text-white text-sm border-b border-blue-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-2.5 flex flex-col sm:flex-row justify-between items-center">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 text-center sm:text-left">
            <a
              href="tel:0911508734"
              className="flex items-center justify-center space-x-2 hover:text-[#FFA726] transition-all duration-300 group"
            >
              <div className="bg-white/10 group-hover:bg-[#FFA726]/20 rounded-full p-1.5 transition-all duration-300">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">0911508734</span>
            </a>
            <a
              href="mailto:g.fikre2@gmail.com"
              className="flex items-center justify-center space-x-2 hover:text-[#FFA726] transition-all duration-300 group mt-1.5 sm:mt-0"
            >
              <div className="bg-white/10 group-hover:bg-[#FFA726]/20 rounded-full p-1.5 transition-all duration-300">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">g.fikre2@gmail.com</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-2 mt-2 sm:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/10 hover:bg-[#1877F2] rounded-full p-2.5 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#1877F2]/30"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/10 hover:bg-gradient-to-r hover:from-[#E4405F] hover:to-[#FCAF45] rounded-full p-2.5 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#E4405F]/30"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/10 hover:bg-black rounded-full p-2.5 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black/30"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/10 hover:bg-[#0077B5] rounded-full p-2.5 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#0077B5]/30"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center relative z-10">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center cursor-pointer group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFA726] to-[#FFB74D] rounded-full blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <img
                  src="/Abet logo.jpg"
                  alt="Abet Logo"
                  className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover border-[3px] border-[#FFA726] shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="ml-3 flex flex-col">
                <span className="font-extrabold text-xl sm:text-2xl text-[#1565C0] tracking-tight group-hover:text-[#0d47a1] transition-colors">
                  ABET
                </span>
                <span className="text-xs text-[#FFA726] font-semibold -mt-1 tracking-wide">
                  Cook, Share, Connect
                </span>
              </div>
            </a>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {["Home", "Services", "Restaurants", "How It Works", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                    className="relative px-4 py-2 text-[#1565C0] font-semibold text-sm lg:text-base rounded-lg transition-all duration-300 hover:text-[#FFA726] group"
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#FFA726]/10 to-[#FFB74D]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FFA726] to-[#FFB74D] group-hover:w-3/4 transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Sign In Button */}
            <div className="hidden md:block">
              <button className="relative px-6 py-2.5 bg-gradient-to-r from-[#FFA726] to-[#FFB74D] text-[#1565C0] rounded-full shadow-md hover:shadow-xl transition-all duration-300 font-bold text-sm hover:scale-105 group overflow-hidden">
                <span className="relative z-10">Sign In</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#FFB74D] to-[#FFA726] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-7 h-7 text-[#1565C0]" />
                ) : (
                  <Menu className="w-7 h-7 text-[#1565C0]" />
                )}
              </button>
            </div>
          </div>

          {/* Decorative Accent Line */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFA726] via-[#FFB74D] to-[#FFA726]"></div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-b from-[#1565C0] to-[#0d47a1] shadow-xl border-t border-blue-600/20">
            <div className="px-4 py-6">
              <ul className="flex flex-col space-y-4">
                {["Home", "Services", "Restaurants", "How It Works", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                      className="block px-4 py-3 text-white font-semibold rounded-lg hover:bg-white/10 hover:text-[#FFA726] transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-[#FFA726] to-[#FFB74D] text-[#1565C0] rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl font-bold">
                    Sign In
                  </button>
                </li>
                {/* Mobile Social Links */}
                <li className="pt-4 border-t border-white/20">
                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-[#1877F2] rounded-full p-3 transition-all duration-300 hover:scale-110"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-gradient-to-r hover:from-[#E4405F] hover:to-[#FCAF45] rounded-full p-3 transition-all duration-300 hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="https://tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-black rounded-full p-3 transition-all duration-300 hover:scale-110"
                      aria-label="TikTok"
                    >
                      <TikTokIcon />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-[#0077B5] rounded-full p-3 transition-all duration-300 hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>

    </header>
  );
};

export default Navbar;
