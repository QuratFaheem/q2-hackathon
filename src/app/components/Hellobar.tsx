import React from "react";
import Image from "next/image";

export default function Hellobar() {
  return (
    <div className="flex flex-col items-center text-center bg-gray-100 py-4 px-4 sm:px-6 md:px-8">
      <div className="text-lg sm:text-xl md:text-2xl font-semibold text-black">
        Hello Nike App
      </div>
      <div className="text-sm sm:text-base mt-2">
        Download the app to access everything Nike. <u>Get Your Great</u>
      </div>
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen mt-4">
        {/* Fullscreen Background Image */}
        <Image
          className="z-0"
          src="/Image.png"
          alt="Landing Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
}
