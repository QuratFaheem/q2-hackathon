import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nikebar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-4 md:bg-white text-sm">
      {/* Logo Section */}
      <div className="logo">
        <Link href="/">
          <Image src="/vector.png" alt="Logo" width={30} height={30} />
        </Link>
      </div>

      {/* Navigation List */}
      <ul className="hidden md:flex items-center space-x-6 flex-grow justify-center">
        <li>
          <Link href="/noproduct" className="text-lg text-black">News & Featured</Link>
        </li>
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

      {/* Search & Cart */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="rounded px-2 py-1 border border-gray-300"
        />
        <Image src="/s2.png" alt="Search Icon" width={50} height={50} />
        <Link href="/cart">
          <Image src="/s3.png" alt="Cart Icon" width={50} height={50} />
        </Link>
      </div>
    </nav>
  );
}
