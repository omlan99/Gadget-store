import React from "react";
import Banner from "../Component/Banner/Banner";
import Products from "../Component/Products";
import Product from "../Component/Product";
import visionImg from '../assets/banner.jpg'
import { Outlet, useLoaderData } from "react-router-dom";
import { ImOpt } from "react-icons/im";
import Categories from "../Component/Categories";
import { Helmet } from "react-helmet-async";
const Home = () => {
  const categories = useLoaderData()
  return (
    <div>
      <div>
        <Helmet >
            <title>Home</title>
        </Helmet>
        <Banner
          title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
          btn={"Shop Now"}
        ></Banner>
        <div className="flex justify-center relative -top-40 lg:left-[11%] w-[398px]  lg:w-[1024px]  ">
          <img
            className="  outline outline-white outline-offset-black outline-offset-[24px]  rounded-xl h-[500px]"
            src={visionImg}
            alt=""
          />
        </div>
        <div>
          <h3 className="font-bold text-center text-4xl p-3">Explore the cutting edge technology</h3>
          <div className="lg:flex">
              <Categories categories={categories}></Categories>
              <Outlet></Outlet>
          </div>
        
        </div>
      </div>
      
    </div>
  );
};

export default Home;
