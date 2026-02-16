export type RestaurantTier = "Tier 1" | "Tier 2" | "Tier 3";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  tier: RestaurantTier;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  minimumOrder: number;
  menu: MenuItem[];
  address: string;
  phone: string;
  isOpen: boolean;
}
