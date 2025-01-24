import Header from "../components/header";
import Nikebar from "../components/nikebar";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";

export default function Help() {
  return (
    <div>
      <Header />
      <Nikebar />

      <div className="flex flex-col md:flex-row">
        {/* Main Content Area */}
        <div className="flex-1 p-4">
          <h2 className="font-bold text-black text-3xl text-center w-full">GET HELP</h2>
          <div className="flex px-4 py-3 rounded-md border-2 border-gray-500 overflow-hidden max-w-md mx-auto font-[sans-serif] mb-5">
            <input
              type="email"
              placeholder="What can we help you with?"
              className="w-full outline-none bg-transparent text-gray-600 text-sm"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              className="fill-gray-600"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
            </svg>
          </div>
          <div>
            <h1>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
            <p>
              We want to make buying your favourite shoes and gear online fast and easy, and we accept the following payment options:
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
              Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec
              lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
            </p>
            <div className="flex space-x-4">
              <button className="bg-black text-white py-2 px-10 rounded-full mt-6">
                <Link href="/RegistrationPage">JOIN US</Link>
              </button>
              <button className="bg-black text-white py-2 px-10 rounded-full mt-6">
                <Link href="/Productpage">SHOP NIKE</Link>
              </button>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
              Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec
              lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
            </p>
          </div>
        </div>
        <div className="w-[1px] h-auto bg-gray-500 mx-4 mb-2 mt-2"></div>
        {/* Right-Aligned Sidebar */}
        <aside className="w-full md:w-64 bg-white text-black h-screen p-4">
          <div className="text-center text-sm">
            <h2 className="text-lg font-semibold mb-6">CONTACT US</h2>
            <p className="text-center mx-12">
              <Image src="/cell.png" alt="" width={100} height={50} />
            </p>
            <p>000 800 919 0566</p>
            <p>Products and orders 24 hours a day</p>
            <p>Company Info and Enquiries: 07:30 -</p>
            <p>16:30, Monday - Friday</p>
            <p className="text-center mx-12">
              <Image src="/msg.png" alt="" width={100} height={50} />
            </p>
            <p>24 hours a day</p>
            <p>7 Days a week</p>
            <p className="text-center mx-12">
              <Image src="/env.png" alt="" width={100} height={50} />
            </p>
            <p>We will reply within</p>
            <p>Five business days</p>
            <p className="text-center mx-12">
              <Image src="/pin.jpg" alt="" width={100} height={50} />
            </p>
            <p>STORE LOCATOR</p>
            <p>Find Nike retail stores near you</p>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
