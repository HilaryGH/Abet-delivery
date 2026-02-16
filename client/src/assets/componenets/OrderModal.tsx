import { useState } from "react";
import type { Restaurant, MenuItem } from "../../types/restaurant";
import { X, Plus, Minus, ShoppingCart } from "lucide-react";

interface OrderModalProps {
  restaurant: Restaurant;
  onClose: () => void;
  onConfirmOrder: (items: CartItem[]) => void;
}

interface CartItem extends MenuItem {
  quantity: number;
}

const OrderModal = ({
  restaurant,
  onClose,
  onConfirmOrder,
}: OrderModalProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => {
      const item = prevCart.find((i) => i.id === itemId);
      if (item && item.quantity > 1) {
        return prevCart.map((i) =>
          i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prevCart.filter((i) => i.id !== itemId);
    });
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleConfirmOrder = () => {
    if (cart.length === 0) {
      alert("Please add items to your cart first!");
      return;
    }
    if (getTotal() < restaurant.minimumOrder) {
      alert(
        `Minimum order is ${restaurant.minimumOrder} ETB. Please add more items.`
      );
      return;
    }
    onConfirmOrder(cart);
    onClose();
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[#1565C0] text-white p-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">{restaurant.name}</h2>
            <p className="text-sm text-blue-100">{restaurant.cuisine}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-[#FFA726] transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 grid md:grid-cols-2 gap-6">
          {/* Menu Items */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#1565C0]">
              Menu
            </h3>
            <div className="space-y-4">
              {restaurant.menu.map((item) => {
                const cartItem = cart.find((i) => i.id === item.id);
                return (
                  <div
                    key={item.id}
                    className="border rounded-lg p-4 hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.description}
                        </p>
                        <p className="text-[#FFA726] font-bold mt-2">
                          {item.price} ETB
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-gray-500">
                        {item.category}
                      </span>
                      {cartItem ? (
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-semibold w-8 text-center">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() => addToCart(item)}
                            className="bg-[#FFA726] hover:bg-yellow-500 rounded-full p-1 transition"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(item)}
                          className="bg-[#FFA726] text-[#1565C0] px-4 py-1 rounded-full text-sm font-semibold hover:bg-yellow-500 transition"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cart */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#1565C0]">
              Your Order ({cartItemCount} items)
            </h3>
            {cart.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p>Your cart is empty</p>
                <p className="text-sm mt-2">
                  Add items from the menu to get started
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="border rounded-lg p-3 flex justify-between items-center"
                  >
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        {item.price} ETB × {item.quantity}
                      </p>
                    </div>
                    <p className="font-bold text-[#FFA726]">
                      {item.price * item.quantity} ETB
                    </p>
                  </div>
                ))}
                <div className="border-t pt-3 mt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-semibold">{getTotal()} ETB</span>
                  </div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-gray-500">Minimum Order:</span>
                    <span className="text-gray-500">
                      {restaurant.minimumOrder} ETB
                    </span>
                  </div>
                  {getTotal() < restaurant.minimumOrder && (
                    <p className="text-red-500 text-xs mt-2">
                      Add{" "}
                      {restaurant.minimumOrder - getTotal()} ETB more to meet
                      minimum order
                    </p>
                  )}
                  <div className="flex justify-between mt-4 pt-3 border-t">
                    <span className="font-bold text-lg">Total:</span>
                    <span className="font-bold text-lg text-[#1565C0]">
                      {getTotal()} ETB
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-4 bg-gray-50 flex justify-between items-center">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmOrder}
            disabled={cart.length === 0 || getTotal() < restaurant.minimumOrder}
            className={`px-6 py-2 rounded-full font-semibold transition flex items-center space-x-2 ${
              cart.length === 0 || getTotal() < restaurant.minimumOrder
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#FFA726] text-[#1565C0] hover:bg-yellow-500"
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Confirm Order</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
