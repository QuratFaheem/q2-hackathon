import React from 'react';
import Link from 'next/link';
import Image from "next/image";



export default function Header() {
  return (
    <div>
      <nav className="w-full flex felx-wrap justify-between items-center py-2 px-4 md:bg-gray-100 lg:bg-gray-100 text-sm">
        {/* Logo Section */}
        <div className="flex flex-wrap items-center">
         <Link href='/'> <Image
            src="/manlogo.png"
            alt="Logo"
            width={30} // Adjusted size for better visibility
            height={30}
          /></Link>
  
        </div>

        <ul className="hidden md:flex items-center space-x-4">
          <li>
            <Link href="/Newproductpage" className="text-lg text-black">
              Find a Store
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link href="/help" className="text-lg text-black">
              Help
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link href="/RegistrationPage" className="text-lg text-black">
              Join Us
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link href="/Signin" className="text-lg text-black">
              Sign In
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-gray-100 p-4">
        <ul className="space-y-2">
          <li>
            <a href="/Newproductpage" className="text-lg text-black">
              Find a Store
            </a>
          </li>
          <li>
            <a href="/help" className="text-lg text-black">
              Help
            </a>
          </li>
          <li>
            <a href="/RegistrationPage" className="text-lg text-black">
              Join Us
            </a>
          </li>
          <li>
            <a href="/Signin" className="text-lg text-black">
              Sign In
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
