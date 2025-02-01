import React from 'react'

const Sidemenue = () => {
  return (
    <div> <h2 className="text-lg font-semibold mb-6">New (500)</h2>
    <ul className="space-y-4 text-sm">
      <li className="hover:text-gray-500 cursor-pointer">Shoes</li>
      <li className="hover:text-gray-500 cursor-pointer">Sports Bras</li>
      <li className="hover:text-gray-500 cursor-pointer">Tops and T-Shirts</li>
      <li className="hover:text-gray-500 cursor-pointer">Hoodies and Sweatshirts</li>
      <li className="hover:text-gray-500 cursor-pointer">Jackets</li>
      <li className="hover:text-gray-500 cursor-pointer">Trousers and Tights</li>
      <li className="hover:text-gray-500 cursor-pointer">Shorts</li>
      <li className="hover:text-gray-500 cursor-pointer">Tracksuits</li>
      <li className="hover:text-gray-500 cursor-pointer">Jumpsuits and Rompers</li>
      <li className="hover:text-gray-500 cursor-pointer">Shirts and Dresses</li>
      <li className="hover:text-gray-500 cursor-pointer">Socks</li>
      <li className="hover:text-gray-500 cursor-pointer">Accessories and Equipment</li>
      <hr className="border-gray-300 my-4" />
    </ul>
    <div>
      <h2 className="font-bold mt-2">Gender</h2>
      <ul>
        <li className="flex items-center">
          <input type="checkbox" className="mr-2 accent-gray-800" />
          <label className="cursor-pointer">Men</label>
        </li>
        <li className="flex items-center">
          <input type="checkbox" className="mr-2 accent-gray-800" />
          <label className="cursor-pointer">Women</label>
        </li>
        <li className="flex items-center">
          <input type="checkbox" className="mr-2 accent-gray-800" />
          <label className="cursor-pointer">Unisex</label>
        </li>
      </ul>
    </div></div>
  )
}

export default Sidemenue