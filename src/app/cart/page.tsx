'use client'; // This is the "use client" directive for client-side code

import React, { useEffect, useState } from 'react';
import { TrashIcon } from '@heroicons/react/outline'; // Heroicons Trash icon
import Image from 'next/image';
import Nikebar from '../components/nikebar';
import Footer from '../components/footer';

interface ProductLog {
  _id: string;
  productName: string;
  description: string;
  price: number;
  category: string;
  inventory: number;
  productUrl: string;
  imageUrl?: string;
}

// Dummy function to simulate fetching cart items, replace with actual data fetching logic
const getCartItems = async (): Promise<ProductLog[]> => {
  const items = JSON.parse(localStorage.getItem('cart') || '[]');
  return items;
};

// Helper function to calculate total price
const calculateTotal = (items: ProductLog[]) => {
  return items.reduce((total, item) => total + item.price * item.inventory, 0);
};

const Cartpage = () => {
  const [cartItems, setCartItems] = useState<ProductLog[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getCartItems(); // Fetch the cart items
      setCartItems(items); // Update state
    };

    fetchCartItems(); // Call the async function
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Function to handle quantity change
  const handleQuantityChange = (itemId: string, change: number) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item._id === itemId) {
          // Ensure inventory doesn't go below 1
          const newInventory = Math.max(item.inventory + change, 1);
          return { ...item, inventory: newInventory };
        }
        return item;
      });
    });
  };

  // Function to handle deleting an item from the cart
  const handleDeleteItem = (itemId: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCart);

    // Update localStorage with the new cart
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleProceedToPayment = () => {
    console.log('Proceeding to payment...');
  };

  return (
   
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8"> <Nikebar/>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Your Shopping Bag
      </h1>
      {cartItems.length > 0 ? (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row items-center justify-between border-b pb-6 gap-4"
            >
              {/* Product Image */}
              <div className="flex items-center space-x-6">
                <Image
                  src={item.imageUrl || '/placeholder-image.jpg'}
                  alt={item.productName}
                  width={200}
                  height={200}
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                    {item.productName}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Quantity and Price */}
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(item._id, -1)}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.inventory}</span>
                  <button
                    onClick={() => handleQuantityChange(item._id, 1)}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
                <span className="text-lg font-semibold text-gray-800">
                  ${(item.price * item.inventory).toFixed(2)}
                </span>
              </div>

              {/* Delete Icon */}
              <button
                onClick={() => handleDeleteItem(item._id)}
                className="text-red-600 hover:text-red-800"
              >
                <TrashIcon className="w-6 h-6" />
              </button>
            </div>
          ))}

          {/* Total Price */}
          <div className="flex justify-between mt-6 font-semibold text-xl">
            <span>Total:</span>
            <span>${calculateTotal(cartItems).toFixed(2)}</span>
          </div>

          {/* Proceed to Payment Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleProceedToPayment}
              className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 w-full md:w-auto"
            >
              Proceed to Payment
            </button>
          </div>
          <Footer/>
        </div>
      ) : (
        <div className="text-center text-gray-600 text-xl">No items in your cart.</div>
      )}
    </div>
  );
};

export default Cartpage;
