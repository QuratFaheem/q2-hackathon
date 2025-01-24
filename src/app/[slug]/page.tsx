"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Nikebar from "../components/nikebar";
import { GetSingleProduct } from "@/sanity/sanity.query";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  pimage: string;
  slug: string;
}

export default function Shoeview({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<Product | null>(null); // Product state
  const [quantity, setQuantity] = useState(1); // Quantity state
  const [selectedSize, setSelectedSize] = useState<string>("M"); // Default size

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await GetSingleProduct(params.slug);
      setProduct(fetchedProduct);
    };

    fetchProduct();
  }, [params.slug]);

  // If product is still loading, show a loader
  if (!product) {
    return <div>Loading...</div>;
  }

  // Calculate total price based on quantity
  const totalPrice = product.price * quantity;

  // Handlers for quantity changes
  const handleQuantityChange = (action: "increase" | "decrease") => {
    setQuantity((prevQuantity) => {
      if (action === "increase") return prevQuantity + 1;
      if (action === "decrease" && prevQuantity > 1) return prevQuantity - 1;
      return prevQuantity;
    });
  };

  // Handler for size selection
  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="font-sans">
      <div className="p-4 max-w-6xl max-md:max-w-xl mx-auto">
        <Nikebar />
        <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="w-full top-0 flex gap-3">
            <Image
              src={product.pimage}
              alt="Product"
              width={400}
              height={400}
              className="w-3/4 rounded-lg object-cover bg-gray-400"
            />
          </div>

          {/* Product Details */}
          <div>
            <p className="text-2xl max-sm:text-2xl font-bold text-gray-800">{product.name}</p>
            <p className="text-lg text-gray-600">{product.category}</p>
            <p className="mt-4 text-gray-700">{product.description}</p>

            <div className="mt-8">
              <h3 className="text-gray-800 text-4xl max-sm:text-3xl font-bold">
                $. {totalPrice}
              </h3>
            </div>

            {/* Quantity and Size Controls */}
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center gap-6">
                {/* Quantity Controls */}
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => handleQuantityChange("decrease")}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full"
                    disabled={quantity === 1}
                  >
                    -
                  </button>
                  <span className="text-xl font-bold">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => handleQuantityChange("increase")}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full"
                  >
                    +
                  </button>
                </div>

                {/* Size Selector */}
                <div className="flex items-center gap-4">
                  <label className="text-gray-700 font-bold">Size:</label>
                  <div className="flex items-center gap-2">
                    {["S", "M", "L"].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => handleSizeChange(size)}
                        className={`px-4 py-2 rounded-full ${
                          selectedSize === size
                            ? "bg-black text-white"
                            : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mt-10 flex flex-wrap gap-4 mb-96">
              <button
                type="button"
                className="flex items-center justify-center px-8 py-4 bg-black text-white border text-base rounded-full snipcart-add-item"
                data-item-id={product.id}
                data-item-price={product.price}
                data-item-url={`/${product.slug}`}
                data-item-image={product.pimage}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
