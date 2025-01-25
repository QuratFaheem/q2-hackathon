import Image from "next/image";
import Nikebar from "../components/nikebar";
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
    return(
<div className="font-sans">
            <div className="p-4 max-w-6xl max-md:max-w-xl mx-auto">
                <Nikebar/>
                <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="w-full top-0 flex gap-3">
                       <Image
            src={data.imageUrl || "/placeholder-image.jpg"}
            alt={data.productName}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />

                    </div>

                    <div>
                        <p className="text-2xl max-sm:text-2xl font-bold text-gray-800">{data.productName}</p>
               
                        <p>{data.description}
                        </p>

                        <div className="mt-8">
                            <h3 className="text-gray-800 text-4xl max-sm:text-3xl font-bold">${data.price}</h3>
                        </div>


                        <div className="mt-10 flex flex-wrap gap-4 mb-96">
                            <button type="button" className="flex items-center justify-center px-8 py-4 bg-black text-white border text-base rounded-full">
                                <svg xmlns="" className="w-5 h-5 cursor-pointer fill-current inline mr-3" viewBox="0 0 512 512">
                                    <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0" data-original="#000000"></path>
                                </svg>
                                Add to cart
                            </button>

                            </div>

                        </div>
                </div>
            </div>
        </div>)}