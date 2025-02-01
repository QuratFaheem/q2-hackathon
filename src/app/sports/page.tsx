import Header from "../components/header";
import Nikebar from "../components/nikebar";
import Footer from "../components/footer";
import { Getsports } from "@/sanity/sanity.query";
import Link from "next/link";
import Image from "next/image";
import Sidemenue from "../components/sidemenue";

export default async function Sports() {
  const productsData = await Getsports();
  const products = productsData;

  // Define the interface for Product
  interface ProductLog {
    _id: string;
    productName: string;
    description?: string;
    price: number;
    category: string;
    inventory: number;
    productUrl: string;
    imageUrl?: string;
  }

  return (
    <div className="font-sans">
      <Header />
      <Nikebar />
      <div className="flex flex-col md:flex-row">
        {/* Side Navigation Bar */}
        {/* Side Navigation Bar */}
        <aside className="w-full md:w-64 bg-white text-black p-4 md:h-screen md:sticky top-0">
         <Sidemenue/>
        </aside>

        {/* Product List */}
        <main className="flex-1 bg-gray-100 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.length > 0 ? (
              products.map((product: ProductLog) => (
                <div
                  key={product._id}
                  className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
                >
                  <Link href={`/${product.productUrl}`}>
                    {product.imageUrl ? (
                      <Image
                        src={product.imageUrl}
                        alt={product.productName}
                        width={400}
                        height={400}
                        className="rounded w-full h-64 object-cover"
                      />
                    ) : (
                      <div className="bg-gray-200 w-full h-64 flex items-center justify-center rounded">
                        <p>No Image Available</p>
                      </div>
                    )}
                  </Link>
                  <h2 className="text-red-600 mt-2">Just In</h2>
                  <h1 className="text-black font-bold mt-1 text-lg">
                    {product.productName}
                  </h1>
                  <h2 className="text-gray-600 text-sm">{product.category}</h2>
                  <h1 className="text-black font-bold mt-1">
                    MPR: ${product.price}
                  </h1>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">
                No products found.
              </p>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
