import type { Restaurant } from "../../types/restaurant";
import { Star, Clock, MapPin, Phone, ShoppingCart } from "lucide-react";

interface RestaurantCardProps {
  restaurant: Restaurant;
  onOrderClick: (restaurant: Restaurant) => void;
}

const RestaurantCard = ({ restaurant, onOrderClick }: RestaurantCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Restaurant Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        {/* Tier Badge */}
        <div
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white ${
            restaurant.tier === "Tier 1"
              ? "bg-gradient-to-r from-yellow-400 to-orange-500"
              : restaurant.tier === "Tier 2"
              ? "bg-gradient-to-r from-blue-400 to-blue-600"
              : "bg-gradient-to-r from-green-400 to-green-600"
          }`}
        >
          {restaurant.tier.replace("Tier ", "")}
        </div>
        {/* Status Badge */}
        <div
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
            restaurant.isOpen
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {restaurant.isOpen ? "Open" : "Closed"}
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-[#1565C0] mb-2">
          {restaurant.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {restaurant.description}
        </p>

        {/* Rating and Delivery Time */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold">{restaurant.rating}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{restaurant.deliveryTime}</span>
          </div>
        </div>

        {/* Cuisine and Minimum Order */}
        <div className="flex items-center justify-between mb-3 text-sm">
          <span className="text-gray-600">Cuisine: {restaurant.cuisine}</span>
          <span className="font-semibold text-[#FFA726]">
            Min: {restaurant.minimumOrder} ETB
          </span>
        </div>

        {/* Address and Phone */}
        <div className="space-y-1 mb-4 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <MapPin className="w-3 h-3" />
            <span className="truncate">{restaurant.address}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Phone className="w-3 h-3" />
            <span>{restaurant.phone}</span>
          </div>
        </div>

        {/* Order Button */}
        <button
          onClick={() => onOrderClick(restaurant)}
          disabled={!restaurant.isOpen}
          className={`w-full py-2 px-4 rounded-full font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
            restaurant.isOpen
              ? "bg-[#FFA726] text-[#1565C0] hover:bg-yellow-500 hover:scale-105"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          <span>{restaurant.isOpen ? "Order Now" : "Currently Closed"}</span>
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;
