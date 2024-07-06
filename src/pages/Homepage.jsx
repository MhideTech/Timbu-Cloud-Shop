import Navbar from '../components/Navbar'

function Homepage() {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar />
      <header className="h-[542px] bg-custom-gradient rounded-[10px] relative">
        <div className=" text-center pt-10 text-white">
          <h2 className="text-4xl font-normal">
            Elevate Your Wardrobe with Timeless Essentials
          </h2>
          <p className="text-sm py-10">
            Discover the Perfect Plain Shirt for Every Occasion. Quality,
            Comfort, and Style in Every Stitch.
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
      <Category />
      <Freshseason />
      <Footer />
    </div>
  );
}

function Category() {
  return (
    <section className="mt-10">
      <div className="relative">
        <div className="bg-custom-wheat w-44 p-3 text-center shadow font-normal cursor-pointer text-custom-deep-browm">
          Category <i className="fa-solid fa-chevron-down ps-3"></i>
        </div>
        <ul className="w-48 bg-custom-wheat  flex-col items-center gap-2 p-3 font-medium absolute top-8 left-36 text-custom-deep-browm hidden">
          <li className="hover:underline cursor-pointer">All</li>
          <li className="hover:underline cursor-pointer">Men</li>
          <li className="hover:underline cursor-pointer">Women</li>
          <li className="hover:underline cursor-pointer">Unisex</li>
        </ul>
      </div>

      {/* for All */}
      <section className="py-8 ps-12 bg-custom-wheat mt-8">
        <div className="flex justify-between pe-12">
          <h2 className="text-2xl font-extrabold text-custom-deep-browm">
            New Arrivals
          </h2>
          <a href="#" className="text-sm font-bold flex items-center gap-3">
            See All <i className="fa-solid fa-chevron-right text-sm"></i>
          </a>
        </div>
        <div className="w-full mt-7 overflow-x-scroll flex">
          <div
            className="max-w-[303px] bg-white rounded-md p-2"
            aria-label="card"
          >
            <div className="border-custom-brown border rounded-lg p-4">
              <img src="img/white-men.png" alt="" className="h-full" />
            </div>
            <p className="text-xl font-medium text-custom-deep-browm mt-2">
              Nike Premium plain white
            </p>
            <div className="flex items-end justify-between text-custom-deep-browm my-3">
              <p className="font-[900] text-2xl">₦80,000</p>
              <p className="font-normal line-through text-lg">₦88,000</p>
            </div>
            <button className="w-full bg-custom-deep-browm p-2 font-normal text-white text-sm rounded-sm">
              Add to cart
            </button>
          </div>
        </div>
      </section>

      {/* for Women */}
      <section className="py-8 ps-12 bg-custom-wheat mt-8">
        <div className="flex justify-between pe-12">
          <h2 className="text-2xl font-extrabold text-custom-deep-browm">
            Top selling for Women
          </h2>
          <a href="#" className="text-sm font-bold flex items-center gap-3">
            See All <i className="fa-solid fa-chevron-right text-sm"></i>
          </a>
        </div>
        <div className="w-full mt-7 overflow-x-scroll flex">
          <div
            className="max-w-[303px] bg-white rounded-md p-2"
            aria-label="card"
          >
            <div className="border-custom-brown border rounded-lg p-4">
              <img src="img/white-men.png" alt="" className="h-auto" />
            </div>
            <p className="text-xl font-medium text-custom-deep-browm mt-2">
              Nike Premium plain white
            </p>
            <div className="flex items-end justify-between text-custom-deep-browm my-3">
              <p className="font-[900] text-2xl">₦80,000</p>
              <p className="font-normal line-through text-lg">₦88,000</p>
            </div>
            <button className="w-full bg-custom-deep-browm p-2 font-normal text-white text-sm rounded-sm">
              Add to cart
            </button>
          </div>
        </div>
      </section>

      {/* for Men */}
      <section className="py-8 ps-12 bg-custom-wheat mt-8">
        <div className="flex justify-between pe-12">
          <h2 className="text-2xl font-extrabold text-custom-deep-browm">
            Top selling for men
          </h2>
          <a href="#" className="text-sm font-bold flex items-center gap-3">
            See All <i className="fa-solid fa-chevron-right text-sm"></i>
          </a>
        </div>
        <div className="w-full mt-7 overflow-x-scroll flex">
          <div
            className="max-w-[303px] bg-white rounded-md p-2"
            aria-label="card"
          >
            <div className="border-custom-brown border rounded-lg p-4">
              <img src="img/white-men.png" alt="" className="h-auto" />
            </div>
            <p className="text-xl font-medium text-custom-deep-browm mt-2">
              Nike Premium plain white
            </p>
            <div className="flex items-end justify-between text-custom-deep-browm my-3">
              <p className="font-[900] text-2xl">₦80,000</p>
              <p className="font-normal line-through text-lg">₦88,000</p>
            </div>
            <button className="w-full bg-custom-deep-browm p-2 font-normal text-white text-sm rounded-sm">
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

function Freshseason() {
  return (
    <section className="bg-[url('/img/freshSeason.png')] bg-no-repeat bg-cover h-[411px] rounded-lg flex justify-between my-20">
      <div className="ms-10">
        <div className="w-96 bg-orange h-36 border-[6px] flex justify-center items-center mt-14">
          <h2>
            <span className="text-3xl text-brown">Fresh for the Season:</span>
            <br />
            <span className="text-3xl font-bold text-brown">
              New Arrivals Just In!
            </span>
          </h2>
        </div>
        <p className="text-white font-normal text-lg mt-6">
          Discover our premium plain shirts, from classic whites to bold colors.
        </p>
        <p className="text-white font-normal text-lg mt-2">
          Find your new favorite today.
        </p>
        <button className="w-44 bg-white font-[900] text-sm py-2 mt-10 text-custom-brown rounded-sm">
          Shop New Arrivals
        </button>
      </div>
      <div className="w-[50%]">
        <img src="img/season-shirt.png" alt="" className="h-full w-full" />
      </div>
    </section>
  );
}

function Footer() {
    return (
      <footer className="py-14">
        <section className="flex justify-between items-start">
          <div>
            <img src="/img/nav-logo.png" alt="logo" />
          </div>
          <ul>
            <h4 className="font-bold text-custom-deep-browm text-sm mb-4 uppercase">
              Need Help?
            </h4>
            <li className="text-custom-deep-browm text-sm font-normal">
              <a href="#">Chat with us</a>
            </li>
            <li className="text-custom-deep-browm text-sm font-normal">
              <a href="#">Help center</a>
            </li>
            <li className="text-custom-deep-browm text-sm font-normal">
              <a href="#">Contact us</a>
            </li>
          </ul>
          <ul>
            <h4 className="font-bold text-custom-deep-browm text-sm mb-4 uppercase">
              About timbu
            </h4>
            <li className="text-custom-deep-browm text-sm font-normal">
              <a href="#">About us</a>
            </li>
            <li className="text-custom-deep-browm text-sm font-normal">
              <a href="#">Timbu express</a>
            </li>
            <li className="text-custom-deep-browm text-sm font-normal">
              <a href="#">Contact us</a>
            </li>
          </ul>
          <form>
            <h4 className="font-bold text-custom-deep-browm text-sm uppercase">
              new to timbu
            </h4>
            <p className="text-xs text-custom-deep-browm font-normal">
              Subscribe to our newsletter to get updates on our latest offers!
            </p>

            <button className="w-full bg-custom-wheat my-4 text-custom-deep-browm border-custom-deep-browm border p-2 text-sm font-[450] rounded-[4px]">
              Iamonowu@gmail.com <i className="fa-solid fa-envelope ps-4"></i>
            </button>

            <button className="w-full bg-custom-deep-browm p-2 rounded-[4px] text-custom-wheat">
              Submit
            </button>
          </form>
        </section>
        <section>
          <div>
            <p className="text-sm text-custom-deep-browm font-[450] mt-10">
              All rights reserved Timbu Cloud shop
            </p>
          </div>
          <div className="flex justify-between mt-8 font-[450] text-sm text-custom-deep-browm">
            <p>
              Designed by @Olawale | Developed by @console.log(Wurld) and
              @Orlaaah
            </p>
            <p>HNG 11 | 2024</p>
          </div>
        </section>
      </footer>
    );
}
export default Homepage;
