import React from "react";

function Header() {
  return (
    <header className="w-11/12 mx-auto h-[320px] md:h-[542px]  bg-[url('/img/Hero.png')] bg-no-repeat bg-cover  rounded-[10px] flex flex-col justify-between items-center relative">
      <div className=" text-center md:pt-10 text-white">
        <h2 className="text-xl sm:text-[16px] font-[450] lg:text-4xl md:text-2xl md:pt-6 pt-6 sm:w-[70%] mx-auto">
          Elevate Your Wardrobe with{" "}
          <span className="font-[700]"> Timeless Essentials</span>
        </h2>
        <p className="text-xs sm:text-[16px] font-[450] md:py-5 py-3 sm:w-[70%] w-[85%] mx-auto">
          Discover the Perfect Plain Shirt for Every Occasion. Quality, Comfort,
          and Style in Every Stitch.
        </p>
        <button className="px-9 py-2 bg-white text-custom-brown font-bold text-sm rounded-md ">
          Shop Now
        </button>
      </div>

      <div className="absolute bottom-0">
        <img src="img/Group 1.png" alt="header image" />
      </div>

      <div className=" absolute md:bottom-10 md:right-36 right-3 bottom-4">
        <img src="img/white-logo.png" alt="header logo" className="w-16" />
      </div>
    </header>
  );
}

export default Header;
