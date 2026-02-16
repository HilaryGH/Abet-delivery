import { useEffect, useState } from "react";
import { Mail, Instagram, Facebook, Twitter, UtensilsCrossed, Clock, MapPin, Sparkles } from "lucide-react";
import RestaurantList from "./RestaurantList";
import type { Restaurant } from "../../types/restaurant";

interface HomeProps {
  onOrderClick: (restaurant: Restaurant) => void;
}

const Home = ({ onOrderClick }: HomeProps) => {
  const images = ["/food1.jpg", "/food2.jpg", "/food3.jpg", "/food4.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change background every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center relative text-white text-center overflow-hidden"
      >
        {/* Background Images with Fade */}
        <div className="absolute inset-0">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 max-w-2xl">
          <div className="mb-4">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FFA726] mb-2 tracking-wide">
              Cook, Share, Connect
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
            Fast & Reliable Delivery
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-200">
            Get your favorite food delivered to your doorstep quickly and safely.
          </p>
          <a 
            href="#restaurants"
            className="bg-[#FFA726] text-white px-6 py-3 rounded-full font-semibold hover:text-[#1565C0] hover:bg-yellow-500 transition w-full sm:w-auto inline-block text-center"
          >
            Order Now
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-orange-50 text-center px-4 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFA726]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1565C0]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#1565C0] to-[#0d47a1] bg-clip-text text-transparent">
              Our Delivery Service
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FFA726] to-[#FFB74D] mx-auto rounded-full"></div>
          </div>

          <div className="relative group">
            {/* Main Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border border-gray-100">
              {/* Icon Container */}
              <div className="relative mb-6 flex justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFA726] to-[#FFB74D] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-[#FFA726] to-[#FFB74D] rounded-full p-6 shadow-lg group-hover:shadow-xl transition-all">
                  <UtensilsCrossed className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#1565C0] to-[#0d47a1] bg-clip-text text-transparent">
                Food Delivery
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Fast delivery from your favorite restaurants directly to your door.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-col items-center space-y-2">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Clock className="w-6 h-6 text-[#1565C0]" />
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">Fast Delivery</p>
                  <p className="text-xs text-gray-500">Quick & Reliable</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="bg-orange-100 rounded-full p-3">
                    <MapPin className="w-6 h-6 text-[#FFA726]" />
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">Door to Door</p>
                  <p className="text-xs text-gray-500">Direct Delivery</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="bg-green-100 rounded-full p-3">
                    <Sparkles className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">Fresh Food</p>
                  <p className="text-xs text-gray-500">Quality Assured</p>
                </div>
              </div>
            </div>

            {/* Decorative Corner Accents */}
            <div className="absolute -top-2 -right-2 w-20 h-20 border-t-4 border-r-4 border-[#FFA726] rounded-tr-3xl opacity-20"></div>
            <div className="absolute -bottom-2 -left-2 w-20 h-20 border-b-4 border-l-4 border-[#1565C0] rounded-bl-3xl opacity-20"></div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-14 sm:py-16 px-4 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-blue-800">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-yellow-100 rounded-lg p-6 border-l-4 border-yellow-500">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">1. Order</h3>
            <p className="text-sm sm:text-base">Browse restaurants and place your food order online.</p>
          </div>
          <div className="bg-yellow-100 rounded-lg p-6 border-l-4 border-yellow-500">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">2. Pickup</h3>
            <p className="text-sm sm:text-base">Our delivery partner collects your order quickly and safely.</p>
          </div>
          <div className="bg-yellow-100 rounded-lg p-6 border-l-4 border-yellow-500">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">3. Delivery</h3>
            <p className="text-sm sm:text-base">Your order is delivered to your doorstep with real-time tracking.</p>
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <RestaurantList onOrderClick={onOrderClick} />

      {/* Footer */}
      <footer className="relative bg-black text-white pt-12 px-4">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            {/* About */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1565C0] underline decoration-[#FFA726] underline-offset-4 mb-2">
                ABET
              </h2>
              <p className="text-[#FFA726] font-semibold text-sm mb-3 tracking-wide">
                Cook, Share, Connect
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Abet Delivery provides fast and reliable food delivery services across
                the city. Order from your favorite restaurants and get it delivered fresh!
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#FFA726] mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {["Home", "Services", "Restaurants", "How It Works", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                      className="hover:underline hover:decoration-[#E53935] transition-all text-sm sm:text-base"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#FFA726] mb-4">
                Subscribe
              </h3>
              <p className="text-gray-300 mb-3 text-sm sm:text-base">
                Get the latest updates and offers directly in your inbox.
              </p>
              <form className="flex flex-col sm:flex-row justify-center md:justify-start gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-full text-black focus:outline-none w-full sm:w-auto text-sm sm:text-base"
                />
                <button className="px-5 py-2 bg-[#FFA726] text-black rounded-full font-semibold hover:bg-yellow-500 transition text-sm sm:text-base">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start mt-8 space-x-5">
            <a href="#" className="text-white hover:text-[#FFA726] transition">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="text-white hover:text-[#FFA726] transition">
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="text-white hover:text-[#FFA726] transition">
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="text-white hover:text-[#FFA726] transition">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-gray-400 text-xs sm:text-sm text-center">
            &copy; 2025{" "}
            <span className="text-red-600 font-bold">Abet Delivery</span>. All
            rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

