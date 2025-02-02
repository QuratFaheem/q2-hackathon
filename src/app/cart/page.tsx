'use client';

import React, { useEffect, useState } from 'react';
import { TrashIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Header from '../components/header';
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

const getCartItems = async (): Promise<ProductLog[]> => {
  const items = JSON.parse(localStorage.getItem('cart') || '[]');
  return items;
};

const calculateTotal = (items: ProductLog[]) => {
  return items.reduce((total, item) => total + item.price * item.inventory, 0);
};

const Cartpage = () => {
  const [cartItems, setCartItems] = useState<ProductLog[]>([]);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    address: '',
    city: '',
    zip: '',
    phone: '',
    email: '',
    orderType: 'cash on delivery',
  });

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getCartItems();
      setCartItems(items);
    };

    fetchCartItems();
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

    const handleProceedToPayment = async () => {
      const orderData = {
        _type: 'order',
        firstname: formData.firstname,
        lastname: formData.lastname,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        zip: formData.zip,
        cartItems: cartItems.map(item => ({
          _type: 'reference',
          _ref: item._id,
        })),
        totalAmount: calculateTotal(cartItems),
        orderDate: new Date().toISOString(),
      };
    
      try {
        const response = await fetch('/api/createOrder', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderData),
        });
    
        const data = await response.json();
    
        if (!response.ok) {
          console.error('Order creation failed:', data.error);
          throw new Error(data.error || 'Unknown error');
        }
    
        console.log('Order created successfully:', data);
        localStorage.removeItem('cart');
      } catch (error: unknown) {
        let errorMessage = 'An error occurred while placing the order';
    
        if (error instanceof Error) {
          errorMessage = error.message;
        }
    
        console.error('Error placing order:', errorMessage);
      }
    };
    
    
  
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <Header />
      <Nikebar />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Your Shopping Bag
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item._id} className="flex items-center justify-between border-b pb-6">
                <div className="flex items-center space-x-6">
                  <Image
                    src={item.imageUrl || '/placeholder-image.jpg'}
                    alt={item.productName}
                    width={100}
                    height={100}
                    className="w-24 h-24 object-cover rounded-lg"
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
          <div className="flex justify-between mt-6 font-semibold text-xl">
            <span>Subtotal:</span>
            <span>${calculateTotal(cartItems).toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-2 font-semibold text-xl">
            <span>Delivery Charges:</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between mt-2 font-semibold text-xl bg-blue-400 text-white p-2 rounded-lg">
            <span>Total:</span>
            <span>${calculateTotal(cartItems).toFixed(2)}</span>
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Delivery Details</h2>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full p-2 mb-3 border rounded"
          />
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full p-2 mb-3 border rounded"
          ></textarea>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            placeholder="Zip Code"
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 mb-3 border rounded"
          />
          <select
            name="orderType"
            value={formData.orderType}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded"
          >
            <option value="cash on delivery">Cash on Delivery</option>
            <option value="advance payment">Advance Payment</option>
          </select>
          <button
            onClick={handleProceedToPayment}
            className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cartpage;
