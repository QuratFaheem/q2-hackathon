// pages/product/[slug].tsx (or productPage.tsx)
import ProductClient from "../components/ProductClient";  // Import ProductClient
import sanityClient from "@/sanity/sanity.client";


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
// Function to fetch product data
async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    productName,
    description,
    price,
    category,
    "imageUrl": image.asset->url,
    "productUrl": slug.current
  }`;
  const data = await sanityClient.fetch(query, { slug });
  return data;
}

// Main server component for fetching and passing data to ProductClient
export default async function ProductPage({ params }: { params: { slug: string } }) {
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

  // Pass product data to the client component
  return <ProductClient data={data} />;
}
