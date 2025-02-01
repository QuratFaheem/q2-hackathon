import Header from "../components/header";
import Nikebar from "../components/nikebar";
import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";
import Sidemenue from "../components/sidemenue";

export default async function Noproduct() {
  return (
    <div className="font-sans">
      <Header />
      <Nikebar />
      <div className="flex flex-col md:flex-row">
        {/* Side Navigation Bar */}
        <aside className="w-full md:w-64 bg-white text-black p-4 md:h-screen md:sticky top-0">
          <Sidemenue />
        </aside>

        {/* Product List */}
        <div className="flex-1 bg-gray-100 p-6">
          <p className="text-center text-red-900 text-5xl col-span-full">
            No product available for this category.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
