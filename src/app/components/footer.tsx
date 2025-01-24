

import Image from "next/image"

export default function Footer(){
    return(
      <div className="w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12 max-w-[1440px] mx-auto">
      <div>
        <h4 className="text-sm font-medium">FIND A STORE</h4>
        <ul className="mt-2 space-y-2 text-xs">
          <li>Become a Member</li>
          <li>Sign Up for Email</li>
          <li>Send Us Feedback</li>
          <li>Student Discounts</li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-medium">GET HELP</h4>
        <ul className="mt-2 space-y-2 text-xs">
          <li>Order Status</li>
          <li>Delivery</li>
          <li>Returns</li>
          <li>Payment Options</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-medium">ABOUT NIKE</h4>
        <ul className="mt-2 space-y-2 text-xs">
          <li>News</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>Sustainability</li>
        </ul>
      </div>
    
      <div className="w-full md:w-auto mt-2">
        <div className="flex justify-between space-x-3">
          <Image src={'/1.png'} alt="" width={20} height={20} />
          <Image src={'/2.png'} alt="" width={20} height={20} />
          <Image src={'/3.png'} alt="" width={20} height={20} />
          <Image src={'/4.png'} alt="" width={20} height={20} />
        </div>
      </div>

      <div className="w-full mt-8 text-left text-xs mx-5">
        <p>© 2023 Nike, Inc. All Rights Reserved</p>
      </div>
  
    
    
    </div>
    
    )
}