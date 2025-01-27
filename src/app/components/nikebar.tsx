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
       <Link href={'/menshoes'}> <li className="text-lg text-black">Men</li></Link>
       <Link href={'/womenshoes'}> <li className="text-lg text-black">
          Women
        </li></Link>
        <Link href={'/kids'}><li className="text-lg text-black">Kids</li></Link>
        <Link href={'/Sale'}><li className="text-lg text-black">
          Sale
        </li></Link>
        <Link href={'/sneakers'}><li className="text-lg text-black">SNKRS</li></Link>
      </ul>
      <div className='flex flex-row justify-around space-x-2'>
  <input type='textbox' value='Search' className='rounded'
  />
  <Image 
    src={'/s2.png'}
    alt=''
    width={50}
    height={50}
  />
  <Link href='/cart'><Image 
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
