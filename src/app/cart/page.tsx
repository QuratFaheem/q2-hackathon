'use client';

import React, { useEffect, useState } from 'react';
import { TrashIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Header from '../components/header';
import Nikebar from '../components/nikebar';
import Footer from '../components/footer';
import { useRouter } from 'next/navigation';

interface ProductLog {
  _id: string;
  productName: string;
  description: string;
  price: number;
  inventory: number;
  imageUrl?: string;
}

const getCartItems = (): ProductLog[] => {
  return JSON.parse(localStorage.getItem('cart') || '[]');
};

const calculateTotal = (items: ProductLog[]) => {
  return items.reduce((total, item) => total + item.price * item.inventory, 0);
};

const Cartpage = () => {
  const [cartItems, setCartItems] = useState<ProductLog[]>([]);
  const router = useRouter();

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleQuantityChange = (itemId: string, change: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === itemId
          ? { ...item, inventory: Math.max(item.inventory + change, 1) }
          : item
      )
    );
  };

  const handleDeleteItem = (itemId: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <Header />
      <Nikebar />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Your Shopping Bag
      </h1>
      <div className="space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item._id} className="flex flex-col sm:flex-row items-center justify-between border-b pb-6 space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-6 w-full sm:w-auto text-center sm:text-left">
                <Image
                  src={item.imageUrl || '/placeholder-image.jpg'}
                  alt={item.productName}
                  width={100}
                  height={100}
                  className="w-24 h-24 object-cover rounded-lg mx-auto sm:mx-0"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">{item.productName}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange(item._id, -1)}
                  className="px-3 py-1 bg-gray-300 text-gray-700 rounded-full"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.inventory}</span>
                <button
                  onClick={() => handleQuantityChange(item._id, 1)}
                  className="px-3 py-1 bg-gray-300 text-gray-700 rounded-full"
                >
                  +
                </button>
              </div>
              <span className="text-lg font-semibold text-gray-800">
                ${(item.price * item.inventory).toFixed(2)}
              </span>
              <button onClick={() => handleDeleteItem(item._id)} className="text-red-600">
                <TrashIcon className="w-6 h-6" />
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600 text-xl">No items in your cart.</div>
        )}
        <div className="flex flex-col sm:flex-row justify-between mt-6 font-semibold text-xl">
          <span>Subtotal:</span>
          <span>${calculateTotal(cartItems).toFixed(2)}</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mt-2 font-semibold text-xl">
          <span>Delivery Charges:</span>
          <span>$0.00</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mt-2 font-semibold text-xl bg-blue-400 text-white p-2 rounded-lg">
          <span>Total:</span>
          <span>${calculateTotal(cartItems).toFixed(2)}</span>
        </div>
        <button
          onClick={() => router.push('/payment')}
          className="w-full px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 mt-4"
        >
          Proceed to Payment
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Cartpage;
