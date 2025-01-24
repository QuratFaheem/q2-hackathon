import Header from "./components/header";
import Footer from "./components/footer";
import Nikebar from "./components/nikebar";
import Hellobar from "./components/Hellobar";
import FirstLook from "./components/FirstLook";
import Image from "next/image";
import { GetAllProducts } from "@/sanity/sanity.query";
import Link from "next/link";
import { GetMenShoes } from "@/sanity/sanity.query";
import { GetEssentials } from "@/sanity/sanity.query";


export default async function Home() {
  const productsData: ProductLog[] = await GetAllProducts();
    const menproduct = await GetMenShoes();
    const Mproduct = menproduct || [];
    const products = productsData || [];
   /* console.log("Fetched products:", products);*/
   const EssproductData = await GetEssentials();
     const Essproducts = EssproductData || [];
     console.log('Essentials products:', Essproducts);
  
    interface ProductLog {
      _id: string;
      productName: string;
      description: string;
      price: number;
      category: string;
      inventory: number;
      productUrl: string;
      imageUrl?: string;
    }
  return (
    <div>
          <Header />
        <Nikebar/>
        <Hellobar/>
        <FirstLook/>
        <div className="mb-5">
      {/* Best of Air Max Section */}
      <b>Best of Air Max</b>

      {/* Product List */}
      <main className="flex-1 bg-gray-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Mproduct.length > 0 ? (
            Mproduct.slice(0, 3).map((menproduct: ProductLog) => (
              <div
                key={menproduct._id}
                className="bg-white shadow-md rounded-lg p-4"
              >
                <Link href={`/${menproduct.productUrl}`}>
                  {menproduct.imageUrl ? (
                    <Image
                      src={menproduct.imageUrl}
                      alt={menproduct.productName}
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

                <div className="flex justify-between">
                  <h2 className="text-black font-bold">
                    {menproduct.productName}
                  </h2>
                  <h2 className="text-black font-bold">
                    MPR: {menproduct.price}
                  </h2>
                </div>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </main>

      {/* Featured Section */}
      <div className="mt-6">
        <b>Featured</b>
        <div className="relative w-full h-auto">
          <Image
            className="z-0"
            src="/man.png"
            alt="Landing Background"
            objectFit="cover"
            layout="responsive"
            width={1344}
            height={700}
          />
        </div>
      </div>

      {/* Gear Up Section */}
      <b>Gear Up</b>
      <main className="flex-1 bg-gray-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.slice(0, 4).map((product: ProductLog) => (
              <div
                key={product._id}
                className="bg-white shadow-md rounded-lg p-4"
              >
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

                <div className="flex justify-between">
                  <h2 className="text-black font-bold">{product.productName}</h2>
                  <h2 className="text-black font-bold">MPR: {product.price}</h2>
                </div>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </main>

      {/* Don't Miss Section */}
      <div className="mt-6 bg-gray-100">
        <b>Don&apos;t Miss</b>
        <div className="relative w-full h-auto">
          <Image
            className="z-0"
            src="/badman.png"
            alt="Landing Background"
            objectFit="cover"
            layout="responsive"
            width={1344}
            height={700}
          />
        </div>
      </div>
    </div>
  );
  <div className="justify-center w-full text-center mt-8 mb-10">
      <p className="justify-center font-extrabold text-4xl text-center">
        FLIGHT ESSENTIALS
      </p>
      <p>Your built-to-last, all week wears -- but with style only Jordan Brand can deliver</p>
      
      <p className="flex justify-center space-x-4">
        <button className="bg-black text-white py-2 px-10 rounded-full mt-6">
          Shop
        </button>
      </p>
    
      <div>
        <b className="text-left">The Essentials</b>
        <div className="flex justify-between space-x-2 p-4 w-full">
        <main className="flex-1 bg-gray-100 p-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {Essproducts.length > 0 ? (
      Essproducts.map((Essproduct: ProductLog) => (
        <div key={Essproduct._id} className="bg-white shadow-md rounded-lg p-4">
          <Link href={`/${Essproduct.productUrl}`}>
            {Essproduct.imageUrl ? (
              <Image
                src={Essproduct.imageUrl}
                alt={Essproduct.productName}
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

          <div className="flex justify-between">
            <h2 className="text-black font-bold">{Essproduct.productName}</h2>
            <h2 className="text-black font-bold">$: {Essproduct.price}</h2>
          </div>
        </div>
      ))
    ) : (
      <p>No products foundd.</p>
    )}
  </div>
</main>
        </div>
      </div>
    
     {/* Responsive ICONS & SHOES Section */}
<div className="w-full bg-white px-4 text-black pt-4 flex flex-wrap md:flex-row md:justify-between max-w-[1440px] mx-40 pl-8">
  
  {/* Icons */}
  <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 text-left">
    <h4 className="text-lg font-bold mb-2">ICONS</h4>
    <ul className="space-y-2 text-sm text-gray-600 text-left">
      <li>Air Force 1</li>
      <li>Huarache</li>
      <li>Air Max 90</li>
      <li>Air Max 50</li>
    </ul>
  </div>

  {/* Icons List 2 */}
  <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 text-left">
    <h4 className="text-lg font-bold mb-2">SHOES</h4>
    <ul className="space-y-2 text-sm text-gray-600 text-left">
      <li>Air Force 1</li>
      <li>Huarache</li>
      <li>Air Max 90</li>
      <li>Air Max 50</li>
    </ul>
  </div>

  {/* Clothing */}
  <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 text-left">
    <h4 className="text-lg font-bold mb-2">CLOTHING</h4>
    <ul className="space-y-2 text-sm text-gray-600 text-left">
      <li>Air Force 1</li>
      <li>Huarache</li>
      <li>Air Max 90</li>
      <li>Air Max 50</li>
    </ul>
  </div>

  {/* Kids */}
  <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 text-left">
    <h4 className="text-lg font-bold mb-2">KIDS</h4>
    <ul className="space-y-2 text-sm text-gray-600 text-left">
      <li>Air Force 1</li>
      <li>Huarache</li>
      <li>Air Max 90</li>
      <li>Air Max 50</li>
    </ul>
  </div>
  
</div>

    </div>
        <Footer />
    </div>
  );
}
