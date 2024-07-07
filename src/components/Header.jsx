function Header() {
  return (
    <header className="w-11/12 mx-auto h-[542px] bg-custom-gradient rounded-[10px] relative">
      <div className=" text-center pt-10 text-white">
        <h2 className="text-4xl font-normal">
          Elevate Your Wardrobe with Timeless Essentials
        </h2>
        <p className="text-sm py-10">
          Discover the Perfect Plain Shirt for Every Occasion. Quality, Comfort,
          and Style in Every Stitch.
        </p>
        <button className="px-9 py-2 bg-white text-custom-brown font-bold text-sm rounded-md">
          Shop Now
        </button>
      </div>

      <div className=" absolute left-64 bottom-0">
        <img src="img/color-shirt 1.png" alt="" />
      </div>
      <div className="absolute left-[430px] bottom-0 z-10">
        <img src="img/white-shirt.png" alt="" />
      </div>
      <div className="absolute right-60 bottom-0">
        <img src="img/black-shirts.png" alt="" />
      </div>

      <div className=" absolute bottom-10 right-32">
        <img src="img/white-logo.png" alt="" />
      </div>
    </header>
  );
}

export default Header;
