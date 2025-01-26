// ProductClient.tsx (Client Component)

'use client'; // Mark this as a client-side component

import Swal from "sweetalert2";
import { addToCart } from "../actions/actions";
import Image from "next/image";
import Nikebar from "../components/nikebar";

interface ProductLog {
  _id: string;
  productName: string;
  description: string;
  price: number;
  category: string;
  inventory: number;
  productUrl: string;
  imageUrl: string;
}

interface ProductProps {
  data: ProductLog;
}

const ProductClient = ({ data }: ProductProps) => {
  const handleAddToCart = () => {
    addToCart(data);
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${data.productName} added to cart`,
      showConfirmButton: false,
      timer: 6000,
    });
    alert(`${data.productName} added to cart!`);
  };
console.log(data)
  return (
    <div className="font-sans">
      <div className="p-4 max-w-6xl mx-auto">
        <Nikebar />
        <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="w-full flex justify-center">
            <Image
              src={data.imageUrl || '/default-image.jpg'}
              alt={data.productName}
              width={500}
              height={500}
              className="w-full h-auto max-w-[400px] object-cover rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div>
            <p className="text-2xl md:text-3xl font-bold text-gray-800">
              {data.productName}
            </p>
            <p className="mt-4 text-sm md:text-base text-gray-600">
              {data.description}
            </p>
            <div className="mt-8">
              <h3 className="text-gray-800 text-3xl md:text-4xl font-bold">
                ${data.price}
              </h3>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {/* Client-side button for adding to cart */}
              <button
                onClick={handleAddToCart}
                className="mt-4 px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-purple-950"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductClient;
