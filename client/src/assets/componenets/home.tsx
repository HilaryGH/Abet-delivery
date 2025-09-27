import { useEffect, useState } from "react";
import { Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Home = () => {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
            Fast & Reliable Delivery
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-200">
            Get your parcels, groceries, or food delivered to your doorstep
            quickly and safely.
          </p>
          <button className="bg-[#FFA726] text-white px-6 py-3 rounded-full font-semibold hover:text-[#1565C0] hover:bg-yellow-500 transition w-full sm:w-auto">
            Order Now
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-14 sm:py-16 bg-gray-100 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-blue-800">
          Our Delivery Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-red-600">
              Food Delivery
            </h3>
            <p className="text-sm sm:text-base">
              Fast delivery from your favorite restaurants directly to your door.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-red-600">
              Parcel Delivery
            </h3>
            <p className="text-sm sm:text-base">
              Send parcels safely anywhere in the city with real-time tracking.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-red-600">
              Grocery Delivery
            </h3>
            <p className="text-sm sm:text-base">
              Order groceries online and get them delivered fresh to your home.
            </p>
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
            <p className="text-sm sm:text-base">Choose your delivery type and place an order online.</p>
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

      {/* Footer */}
      <footer className="relative bg-black text-white pt-12 px-4">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            {/* About */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1565C0] underline decoration-[#FFA726] underline-offset-4 mb-4">
                ABET
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Abet Delivery provides fast and reliable delivery services across
                the city. Stay connected and never miss a delivery!
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#FFA726] mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {["Home", "Services", "How It Works", "Contact"].map((link) => (
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

