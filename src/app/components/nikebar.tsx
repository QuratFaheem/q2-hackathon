import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nikebar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-4 md:bg-white text-sm">
      {/* Logo Section */}
      <div className="logo">
        <Link href='/'>
          <Image src="/vector.png" alt="Logo" width={30} height={30} />
        </Link>
      </div>
      
      {/* Navigation List */}
      <ul className="hidden md:flex items-center space-x-6 flex-grow justify-center">
        <li className="text-lg text-black">News & Featured</li>
        <Link href='/menshoes'><li className="text-lg text-black">Men</li></Link>
        <Link href='/womenshoes'><li className="text-lg text-black">Women</li></Link>
        <Link href='/kids'><li className="text-lg text-black">Kids</li></Link>
        <Link href='/Sale'><li className="text-lg text-black">Sale</li></Link>
        <Link href='/sneakers'><li className="text-lg text-black">SNKRS</li></Link>
      </ul>
      
      {/* Search & Cart */}
      <div className='flex items-center space-x-2'>
        <input type='text' placeholder='Search' className='rounded px-2 py-1 border border-gray-300' />
        <Image src='/s2.png' alt='' width={50} height={50} />
        <Link href='/cart'><Image src='/s3.png' alt='' width={50} height={50} /></Link>
      </div>
    </nav>
  );
}
