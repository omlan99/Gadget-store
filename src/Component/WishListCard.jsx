import { useEffect, useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import {  getWishlistData, removeFromWishlist } from "./utilities/addStorage";
import { Helmet } from "react-helmet-async";

const WishListCard = () => {
    const [wishlistItem, setWishlistItem] = useState([]);

  useEffect(() => {
    const wishlistData = localStorage.getItem("wishlist");
    if (wishlistData) {
        setWishlistItem(JSON.parse(wishlistData));
    }
  }, []);
  const handleDelete = (id) =>{
    removeFromWishlist(id)
    const postDelete = getWishlistData()
    setWishlistItem(postDelete)

  }
  return (

      <div className=" bg-[#D9D9D9] pt-12 px-3 pb-[304px]">
        <Helmet>
          <title>Wishlist</title>
        </Helmet>
        <div className="flex items-center justify-between mb-8 ">
          <h2 className="text-2xl font-bold">Wishlist</h2>
          
        </div>
        {wishlistItem.length === 0 ? (
          <div className="flex justify-center items-center h-52">
            <p className="font-bold text-4xl">No items in your Wishlist.</p>
          </div>
        ) : (
            wishlistItem.map((item) => (
            <div className="mb-4">
              <div
                key={item.id}
                className="flex justify-between  bg-white  p-8 rounded-xl  "
              >
                <div className="flex gap-3">
                  <div className="max-w-[200px] max-h-[124px] overflow-hidden ">
                    <img
                      className="object-contain h-full w-full"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-2xl">{item.title}</p>

                    <p className="pt-3 pb-4 ">{item.description}</p>
                    <p className="font-semibold text-xl">
                      Price : $ {item.price}
                    </p>
                  </div>
                </div>
                <div>
                  <FaRegCircleXmark
                    className="text-2xl text-[#ff0000] cursor-pointer"
                    onClick={() => handleDelete(item.id)}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    
  );
};

export default WishListCard;
