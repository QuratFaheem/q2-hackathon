import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nikebar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-4 md:bg-white text-sm">
      {/* Logo Section */}
      <div className="logo">
        <Link href="/">
          <Image src="/Vector.png" alt="Logo" width={30} height={30} />
        </Link>
      </div>

      {/* Navigation List */}
      <ul className="hidden md:flex items-center space-x-6 flex-grow justify-center">
        <li>
          <Link href="/menshoes" className="text-lg text-black">Men</Link>
        </li>
        <li>
          <Link href="/womenshoes" className="text-lg text-black">Women</Link>
        </li>
        <li>
          <Link href="/kids" className="text-lg text-black">Kids</Link>
        </li>
        <li>
          <Link href="/Sale" className="text-lg text-black">Sale</Link>
        </li>
        <li>
          <Link href="/sneakers" className="text-lg text-black">SNKRS</Link>
        </li>
      </ul>

      {/* Cart Icon */}
      <div className="flex items-center">
        <Link href="/cart">
          <Image 
            src="/s3.png" 
            alt="Cart Icon" 
            width={50} 
            height={50} 
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18"
          />
        </Link>
      </div>
    </nav>
  );
}
