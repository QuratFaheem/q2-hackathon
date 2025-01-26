// actions.ts
import Swal from "sweetalert2";
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

// Function to add the product to cart
export const addToCart = (product: ProductLog) => {
  const cart: ProductLog[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const existingIndex = cart.findIndex((item) => item._id === product._id);

  if (existingIndex > -1) {
    cart[existingIndex].inventory += 1;
  } else {
    cart.push({ ...product, inventory: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

// Function to handle the action and show success alert
export const handleAddToCart = (product: ProductLog) => {
  addToCart(product);
  Swal.fire({
    position: "top-right",
    icon: "success",
    title: `${product.productName} added to cart`,
    showConfirmButton: false,
    timer: 6000,
  });
};
