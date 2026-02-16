import { useState } from "react";
import type { Restaurant, RestaurantTier } from "../../types/restaurant";
import { restaurants } from "../../data/restaurants";
import RestaurantCard from "./RestaurantCard";
import { Filter } from "lucide-react";

interface RestaurantListProps {
  onOrderClick: (restaurant: Restaurant) => void;
}

const RestaurantList = ({ onOrderClick }: RestaurantListProps) => {
  const [selectedTier, setSelectedTier] = useState<RestaurantTier | "All">(
    "All"
  );

  const filteredRestaurants =
    selectedTier === "All"
      ? restaurants
      : restaurants.filter((r) => r.tier === selectedTier);

  const tier1Count = restaurants.filter((r) => r.tier === "Tier 1").length;
  const tier2Count = restaurants.filter((r) => r.tier === "Tier 2").length;
  const tier3Count = restaurants.filter((r) => r.tier === "Tier 3").length;

  return (
    <section id="restaurants" className="py-14 sm:py-16 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#1565C0]">
            Order from Our Partner Restaurants
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our curated selection of premium restaurants,
            affordable dining options, or budget-friendly meals.
            All restaurants are ready to serve you!
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setSelectedTier("All")}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 ${
              selectedTier === "All"
                ? "bg-[#1565C0] text-white shadow-lg"
                : "bg-white text-[#1565C0] hover:bg-blue-50"
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>All Restaurants ({restaurants.length})</span>
          </button>
          <button
            onClick={() => setSelectedTier("Tier 1")}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
              selectedTier === "Tier 1"
                ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg"
                : "bg-white text-orange-600 hover:bg-orange-50"
            }`}
          >
            Premium ({tier1Count})
          </button>
          <button
            onClick={() => setSelectedTier("Tier 2")}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
              selectedTier === "Tier 2"
                ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg"
                : "bg-white text-blue-600 hover:bg-blue-50"
            }`}
          >
            Affordable ({tier2Count})
          </button>
          <button
            onClick={() => setSelectedTier("Tier 3")}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
              selectedTier === "Tier 3"
                ? "bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg"
                : "bg-white text-green-600 hover:bg-green-50"
            }`}
          >
            Budget ({tier3Count})
          </button>
        </div>

        {/* Restaurant Grid */}
        {filteredRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                onOrderClick={onOrderClick}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No restaurants found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RestaurantList;
