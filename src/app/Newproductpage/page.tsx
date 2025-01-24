import Header from "../components/header";
import Nikebar from "../components/nikebar";
import Footer from "../components/footer";
import { GetAllProducts } from "@/sanity/sanity.query";
import Link from "next/link";
import Image from "next/image";



export default async function Newproductpage(){
    const productsData = await GetAllProducts();
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
      console.log('sdjhfsjdg',products)
return(
    <div>
        <Header/>
        <Nikebar/>
        <div className="flex">
      {/* Side Navigation Bar */}
      <aside className="w-64 bg-white text-black h-screen p-4">
        <h2 className="text-lg font-semibold mb-6">New (500)</h2>
        <ul className="space-y-4 text-sm">
          <li className="hover:text-gray-300">Shoes</li>
          <li className="hover:text-gray-300">Sports Bras</li>
          <li className="hover:text-gray-300">Tops and T-Shirts</li>
          <li className="hover:text-gray-300">Hoodies and Sweatshirts</li>
          <li className="hover:text-gray-300">Jackets</li>
          <li className="hover:text-gray-300">Trousers and Tights</li>
          <li className="hover:text-gray-300">Shorts</li>
          <li className="hover:text-gray-300">Tracksuits</li>
          <li className="hover:text-gray-300">Jumpsuits and Rompers</li>
          <li className="hover:text-gray-300">Shirts and Dresses</li>
          <li className="hover:text-gray-300">Socks</li>
          <li className="hover:text-gray-300">Accessories and Equipment</li>
          <hr className="border-2 border-gray-300 my-4" />
        </ul>
        <div>
          <h2 className="font-bold mt-2">Gender</h2>
          <ul>
            <li className="flex items-center hover:text-gray-300">
              <input type="checkbox" className="mr-2 accent-gray-800" />
              <label className="cursor-pointer">Men</label>
            </li>
            <li className="flex items-center hover:text-gray-300">
              <input type="checkbox" className="mr-2 accent-gray-800" />
              <label className="cursor-pointer">Women</label>
            </li>
            <li className="flex items-center hover:text-gray-300">
              <input type="checkbox" className="mr-2 accent-gray-800" />
              <label className="cursor-pointer">Unisex</label>
            </li>
          </ul>
        </div>
        <div>
          <hr className="border-2 border-gray-300 my-4" />
          <h2 className="font-bold mt-2">Kids</h2>
          <ul>
            <li className="flex items-center hover:text-gray-300">
              <input type="checkbox" className="mr-2 accent-gray-800" />
              <label className="cursor-pointer">Boys</label>
            </li>
            <li className="flex items-center hover:text-gray-300">
              <input type="checkbox" className="mr-2 accent-gray-800" />
              <label className="cursor-pointer">Girls</label>
            </li>
          </ul>
        </div>
        <div>
          <hr className="border-2 border-gray-300 my-4" />
          <h2 className="font-bold mt-2">Shop By Price</h2>
          <ul>
            <li className="flex items-center hover:text-gray-300">
              <input type="checkbox" className="mr-2 accent-gray-800" />
              <label className="cursor-pointer">Under $2,500.00</label>
            </li>
            <li className="flex items-center hover:text-gray-300">
              <input type="checkbox" className="mr-2 accent-gray-800" />
              <label className="cursor-pointer">$2,501.00 - $</label>
            </li>
          </ul>
        </div>
      </aside>

      {/* Product List */}
      <main className="flex-1 bg-gray-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((product: ProductLog) => (
              <div key={product._id} className="bg-white shadow-md rounded-lg p-4">
                <Link href={`/${product.productUrl}`}>
                  {product.imageUrl ? (
                    <Image
                      src={product.imageUrl}
                      alt={product.productName}
                      width={400}
                      height={400}
                      className="rounded"
                    />
                  ) : (
                    <div className="bg-gray-200 w-full h-96 flex items-center justify-center rounded">
                      <p>No Image Available</p>
                    </div>
                  )}
                </Link>
                <h2 className="text-red-600">Just In</h2>
                <h1 className="text-black font-bold">{product.productName}</h1>
                <h2 className="text-gray-600">{product.category}</h2>
                <h1 className="text-black font-bold">MPR: {product.price}</h1>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </main>
    </div>
  );

        <Footer/>
    </div>
)

}