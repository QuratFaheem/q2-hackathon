import React from 'react'
import Link from 'next/link'

const Sidemenue = () => {
  return (
    <div> <h2 className="text-lg font-semibold mb-6">New (500)</h2>
    <ul className="space-y-4 text-sm">
      <Link href={'/allshoes'}><li className="hover:text-gray-500 cursor-pointer">Shoes</li></Link>
      <Link href={'/sports'}><li className="hover:text-gray-500 cursor-pointer">Sports Bras</li></Link>
      <Link href={'/noproduct'}><li className="hover:text-gray-500 cursor-pointer">Tops and T-Shirts</li></Link>
      <Link href={'/noproduct'}><li className="hover:text-gray-500 cursor-pointer">Hoodies and Sweatshirts</li></Link>
      <Link href={'/noproduct'}><li className="hover:text-gray-500 cursor-pointer">Jackets</li></Link>
      <Link href={'/noproduct'}><li className="hover:text-gray-500 cursor-pointer">Trousers and Tights</li></Link>
      <Link href={'/noproduct'}><li className="hover:text-gray-500 cursor-pointer">Shorts</li></Link>
      <Link href={'/noproduct'}><li className="hover:text-gray-500 cursor-pointer">Tracksuits</li></Link>
      <Link href={'/noproduct'}><li className="hover:text-gray-500 cursor-pointer">Jumpsuits and Rompers</li></Link>
      <Link href={'/noproduct'}><li className="hover:text-gray-500 cursor-pointer">Shirts and Dresses</li></Link>
      <Link href={'/socks'}><li className="hover:text-gray-500 cursor-pointer">Socks</li></Link>
      <Link href={'/noproduct'}><li className="hover:text-gray-500 cursor-pointer">Accessories and Equipment</li></Link>
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