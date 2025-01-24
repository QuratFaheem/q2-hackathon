
import { groq } from "next-sanity";
import sanityClient from "./sanity.client";

export const GetAllProducts = async () => {
  const query = `*[_type == "product"]{
    _id,
    productName,
    description,
    price,
    category,
    inventory,
    productUrl,
    "imageUrl": image.asset->url,
    "productUrl":slug.current,
  }`;
  const products = await sanityClient.fetch(query);
  return products; // This should return an array of objects
};

export const GetSingleProduct = async (slug: string | undefined) => {
  if (!slug) {
    throw new Error("Slug is undefined or empty");
  }

  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    productName,
    description,
    price,
    category,
    "pimage": image.asset->url,
    "productUrl": slug.current,
  }`;

  const product = await sanityClient.fetch(query, { slug }); // Pass slug as parameter
  return product;
};


export const GetMenShoes = async () => {
  const query = groq`*[_type == "product" && category == "Men's Shoes"]{
  _id,
  productName,
  description,
  price,
  inventory,
  "imageUrl": image.asset->url,
  "productUrl": slug.current
}`;

  const product = await sanityClient.fetch(query); // Pass slug as parameter
  return product;
};

export const GetEssentials = async () => {
  const query = groq`*[_type == "product" && category == "Essentials"]{
  _id,
  productName,
  description,
  price,
  inventory,
  "imageUrl": image.asset->url,
  "productUrl": slug.current
}`;

  const productt = await sanityClient.fetch(query); // Pass slug as parameter
  return productt;
};


