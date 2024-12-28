import { useState } from "react";

const Banner = ({title, subtitle, btn1, btn2}) => {

  return (
    <div className="hero bg-[#9538E2] text-white  pt-12 pb-[268px] ">
      <div className="hero-content text-center ">
        <div className="">
          <h1 className="text-5xl font-bold ">{title}</h1>
          <p className="pt-6 pb-8 max-[169px]">
          {subtitle}
          </p>
          {
            // Use `&&` for conditional rendering
            btn1 && (
              <button className="px-7 py-4 bg-white font-bold text-xl text-[#9538E2] rounded-3xl mr-5">
                {btn1}
              </button>
            )
            
          }
          {
            btn2 && (
              <button className="px-7 py-4 bg-white font-bold text-xl text-[#9538E2] rounded-3xl">
                {btn2}
              </button>
            )
          }
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
