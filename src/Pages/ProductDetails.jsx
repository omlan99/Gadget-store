import { useLoaderData, useParams } from "react-router-dom";
import Banner from "../Component/Banner/Banner";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import {
  addToCartStorage,
  addToWishlistStorage,
  getWishlistData,
} from "../Component/utilities/addStorage";
import ReactStars from "react-rating-stars-component";
import { FaStarHalf } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {

  const products = useLoaderData();
  const { productsId } = useParams();
  console.log(productsId);
  const foundProduct = products.find((product) => product.id === productsId);
  const { image, title, price, description, rating, specification } =
    foundProduct;


  const [isWishlisted, setIsWishlisted] = useState(false);
  const handleAddToCart = (product) => {
    addToCartStorage(product);
  };
  const handleAddToWishlist = (product) => {
    addToWishlistStorage(product);
    setIsWishlisted(true);
  };

  return (
    <div className="">
        <Helmet>
    <title>{title}</title>
  </Helmet>
      <Banner
        title={"Product Details"}
        subtitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      ></Banner>
      <div>
        <div className="hero bg-white min-h-screen gap-7 relative -top-40 w-9/12 left-[14%] rounded-3xl p-8 border border-r-emerald-50">
          <div className=" flex flex-col lg:flex-row ">
            <img src={image} className="max-w-lg rounded-lg " />
            <div className="px-20 space-y-3 ">
              <h1 className="text-3xl font-semibold">{title}</h1>
              <p className=" font-semibold text-xl">Price : $ {price}</p>
              <p className="text-xl">{description}</p>
              <p className="font-bold text-xl ">Specification:</p>
              <ol className="list-decimal ">
                {specification.map((data, index) => (
                  <li key={index} className="ml-5 ">
                    {data}
                  </li>
                ))}
              </ol>
              <ReactStars
                count={5}
                value={rating}
                size={24}
                isHalf={true}
                filledIcon={<FaStar />}
                halfIcon={<FaStarHalf />}
                emptyIcon={<FaRegStar />}
                activeColor="#ffd700"
              />

              <div className="flex  items-center gap-5">
                <button
                  onClick={() => handleAddToCart(foundProduct)}
                  className="btn btn-primary font-bold rounded-full"
                >
                  Add To Cart <IoCartOutline className="text-2xl" />
                </button>
                <button onClick={() => handleAddToWishlist(foundProduct)}>
                  {isWishlisted ? (
                    <FaHeart className="text-2xl text-red-500" />
                  ) : (
                    <FaRegHeart className="text-2xl text-gray-500" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
