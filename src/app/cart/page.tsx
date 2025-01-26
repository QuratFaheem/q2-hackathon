'use client';  // This is the "use client" directive for client-side code

import React, { useEffect, useState } from 'react';

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
  // You can replace this with your logic to fetch cart items (e.g., from localStorage or an API)
  const items = JSON.parse(localStorage.getItem('cart') || '[]');
  return items;
};

const Cartpage = () => {
  const [cartItems, setCartItems] = useState<ProductLog[]>([]);

  useEffect(() => {
    // Define an async function inside the useEffect hook
    const fetchCartItems = async () => {
      const items = await getCartItems(); // Await the data
      setCartItems(items); // Set the cart items to the state
    };

    fetchCartItems(); // Call the async function
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div>
      <h1>Cart Items</h1>
      <div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item._id}>{item.productName}</div>
          ))
        ) : (
          <div>No items in the cart.</div>
        )}
      </div>
    </div>
  );
};

export default Cartpage;
