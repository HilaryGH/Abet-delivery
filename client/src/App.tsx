import { useState } from 'react';
import './App.css'
import Home from './assets/componenets/home'
import Navbar from './assets/componenets/Navbar'
import OrderModal from './assets/componenets/OrderModal'
import CommunicationWidget from './assets/componenets/CommunicationWidget'
import type { Restaurant } from './types/restaurant';

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const handleOrderClick = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleCloseModal = () => {
    setSelectedRestaurant(null);
  };

  const handleConfirmOrder = (items: any[]) => {
    // Here you would typically send the order to your backend API
    const orderSummary = {
      restaurant: selectedRestaurant?.name,
      items: items,
      total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      timestamp: new Date().toISOString(),
    };
    
    console.log('Order placed:', orderSummary);
    alert(`Order placed successfully!\nRestaurant: ${selectedRestaurant?.name}\nTotal: ${orderSummary.total} ETB\n\nItems: ${items.map(i => `${i.name} (x${i.quantity})`).join(', ')}`);
    // In a real app, you would make an API call here
  };
 
  return (
    <>
      <Navbar/>
      <Home onOrderClick={handleOrderClick}/>
      <CommunicationWidget />
      {selectedRestaurant && (
        <OrderModal
          restaurant={selectedRestaurant}
          onClose={handleCloseModal}
          onConfirmOrder={handleConfirmOrder}
        />
      )}
    </>
  )
}

export default App
