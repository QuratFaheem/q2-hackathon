import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nikebar() {
  return (
    <div className="w-full flex justify-between items-center py-4 md:bg-white text-sm px-4">
      {/* Logo Section */}
      <div className="logo">
       <Link href='/'> <Image
          src="/vector.png"
          alt="Logo"
          width={30} // Adjust size for better visibility on smaller screens
          height={30}
        /></Link>
      </div>

      {/* Navigation List */}
      <ul className="hidden md:flex items-center space-x-6 justify-center flex-grow">
        <li className="text-lg text-black">
          News & Featured
        </li>
        <li className="text-lg text-black">Men</li>
        <li className="text-lg text-black">
          Women
        </li>
        <li className="text-lg text-black">Kids</li>
        <li className="text-lg text-black">
          Sale
        </li>
        <li className="text-lg text-black">SNKRS</li>
      </ul>
      <div className='flex flex-row justify-around space-x-2'>
  <Image 
    src={'/s1.png'}
    alt=''
    width={100}
    height={100}
  />
  <Image 
    src={'/s2.png'}
    alt=''
    width={50}
    height={50}
  />
  <Link href='/bag'><Image 
    src={'/s3.png'}
    alt=''
    width={50}
    height={50}
  /></Link>
</div>


      {/* Mobile Menu Icon 
      <div className="md:hidden">
        <button className="text-black text-lg">
          ☰ {/* Replace this with a proper hamburger menu icon if needed 
        </button>

        
      </div>*/}
    </div>
  );
}
