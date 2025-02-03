'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '../components/header';
import Nikebar from '../components/nikebar';
import Footer from '../components/footer';
import Swal from 'sweetalert2';

interface ProductLog {
  _id: string;
  productName: string;
  description: string;
  price: number;
  inventory: number;
  imageUrl?: string;
}

const PaymentPage = () => {
  const [cartItems, setCartItems] = useState<ProductLog[]>([]);
  const [orderDetails, setOrderDetails] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    total: 0,
    orderDate: new Date().toISOString(),
  });

  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCart);
    const totalAmount = storedCart.reduce((total: number, item: ProductLog) => total + item.price * item.inventory, 0);
    setOrderDetails((prevDetails) => ({ ...prevDetails, total: totalAmount }));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    const { firstname, lastname, phone, email, address, city, zip } = orderDetails;

    if (!firstname || !lastname || !phone || !email || !address || !city || !zip) {
      alert('Please fill in all required fields.');
      return;
    }

    const orderData = {
      ...orderDetails,
      cartItems,
    };

    console.log('Order Submitted:', orderData);
    Swal.fire({
          position: "top-right",
          icon: "success",
          title: `Ordered Successfully`,
          showConfirmButton: false,
          timer: 3000,
          toast: true, // Corrected: Pass a boolean, not a string
        })
    localStorage.removeItem('cart');
    router.push('/');
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <Header />
      <Nikebar />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Checkout & Payment
      </h1>

      {/* Responsive Grid - Cart first, then Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Cart Summary (Comes First) */}
        <div className="bg-gray-100 p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Your Order</h2>
          <div className="space-y-4">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.imageUrl || '/placeholder-image.jpg'}
                      alt={item.productName}
                      width={60}
                      height={60}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-lg font-medium">{item.productName}</h3>
                      <p className="text-gray-500 text-sm">Qty: {item.inventory}</p>
                    </div>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">
                    ${(item.price * item.inventory).toFixed(2)}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">Your cart is empty.</p>
            )}
          </div>
          <div className="flex justify-between mt-6 font-semibold text-lg">
            <span>Subtotal:</span>
            <span>${orderDetails.total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-2 font-semibold text-lg">
            <span>Delivery Charges:</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between mt-2 font-semibold text-lg bg-blue-400 text-white p-2 rounded-lg">
            <span>Total:</span>
            <span>${orderDetails.total.toFixed(2)}</span>
          </div>
        </div>

        {/* Customer Details Form (Comes Second) */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  value={orderDetails.firstname}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  value={orderDetails.lastname}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Phone</label>
              <input
                type="text"
                name="phone"
                value={orderDetails.phone}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={orderDetails.email}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Address</label>
              <textarea
                name="address"
                value={orderDetails.address}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">City</label>
                <input
                  type="text"
                  name="city"
                  value={orderDetails.city}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Zip Code</label>
                <input
                  type="text"
                  name="zip"
                  value={orderDetails.zip}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Pay Now Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={handlePayment}
          className="w-full sm:w-1/2 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700"
        >
          Pay Now
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentPage;
