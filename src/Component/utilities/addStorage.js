import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const getData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const addData = (key, product) => {
  const existingData = getData(key);

  const foundProduct = existingData.find(item => item.id === product.id);
  console.log(foundProduct)
  if (foundProduct) {
 
    toast.error(`${foundProduct.title} is already in your ${key}.`, {position: "top-center",});
    return false; 
  }

  
  existingData.push(product);
  localStorage.setItem(key, JSON.stringify(existingData));
  toast.success(`${existingData[0].title} is added to your ${key}`, {position: "top-center",})
};

const removeData = (key, id) => {
  const existingData = getData(key);
  const filteredData = existingData.filter(item => item.id !== id);
  localStorage.setItem(key, JSON.stringify(filteredData));
};

// Cart-specific functions
const getCartData = () => getData('cart');
const addToCartStorage = (product) => addData('cart', product);
const removeFromCart = (id) => removeData('cart', id);

// Wishlist-specific functions
const getWishlistData = () => getData('wishlist');
const addToWishlistStorage = (product) => addData('wishlist', product);
const removeFromWishlist = (id) => removeData('wishlist', id);

export {
  getCartData,
  addToCartStorage,
  removeFromCart,
  getWishlistData,
  addToWishlistStorage,
  removeFromWishlist
};

