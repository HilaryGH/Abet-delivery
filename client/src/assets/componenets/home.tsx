import React from "react";

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Fast & Reliable Delivery</h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          Get your parcels, groceries, or food delivered to your doorstep quickly and safely.
        </p>
        <button className="bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Order Now
        </button>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100 text-center px-4">
        <h2 className="text-3xl font-bold mb-10 text-orange-500">Our Delivery Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Food Delivery</h3>
            <p>Fast delivery from your favorite restaurants directly to your door.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Parcel Delivery</h3>
            <p>Send parcels safely anywhere in the city with real-time tracking.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Grocery Delivery</h3>
            <p>Order groceries online and get them delivered fresh to your home.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-orange-500">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">1. Order</h3>
            <p>Choose your delivery type and place an order online.</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">2. Pickup</h3>
            <p>Our delivery partner collects your order quickly and safely.</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">3. Delivery</h3>
            <p>Your order is delivered to your doorstep with real-time tracking.</p>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="py-8 bg-gray-800 text-white text-center">
        <p>&copy; 2025 Abet Delivery. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
