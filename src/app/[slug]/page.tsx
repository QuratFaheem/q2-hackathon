import Image from "next/image";
import sanityClient from "@/sanity/sanity.client";



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

async function getData(slug: string) {
  const query = `
    *[_type == "product" && slug.current == $slug][0]{
      _id,
      productName,
      description,
      price,
      category,
      "imageUrl": image.asset->url,
      "productUrl": slug.current,
    }
  `;
  const data = await sanityClient.fetch(query, { slug });
  return data;
}

export default async function Product({ params }: { params: { slug: string } }) {
  console.log("Params:", params);

  const { slug } = params;

  if (!slug) {
    return (
      
      <div className="text-center py-20">
        <h1 className="text-4xl">404 - Not Found</h1>
      </div>
    );
  }

  const data: ProductLog | null = await getData(slug);

  if (!data) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl">404 - Product Not Found</h1>
      </div>
    );
  }

  return (
    
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        {/* Left: Image */}
        <div className="w-1/2">
          <Image
            src={data.imageUrl || "/placeholder-image.jpg"}
            alt={data.productName}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Details */}
        <div className="w-1/2 p-6">
          <h1 className="text-2xl font-semibold text-gray-800">{data.productName}</h1>
          <p className="text-gray-600 mt-4">{data.description}</p>
          <p className="text-lg font-bold text-gray-900 mt-6">${data.price}</p>
          <p className="text-sm text-gray-500 mt-2">Category: {data.category}</p>
          <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
