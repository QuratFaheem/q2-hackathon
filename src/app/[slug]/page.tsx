import { useEffect, useState } from "react";
import Image from "next/image";
import sanityClient from "@/sanity/sanity.client";

// Revalidate every 30 seconds
export const revalidate = 30;

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
    <div className="product-page">
      <h1>{data.productName}</h1>
      <p>{data.description}</p>
      <Image
        src={data.imageUrl || "/placeholder-image.jpg"}
        alt={data.productName}
        width={400}
        height={400}
        className="rounded"
      />
    </div>
  );
}
