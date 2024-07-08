import { useState } from "react";
import ClothCard from "../components/ClothCard";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

/* eslint-disable react/prop-types */
function Menwears({ clothesData }) {
  return (
    <div>
      {/* add nav here */}
      <Mensection clothesData={clothesData} />
    </div>
  );
}

function Mensection({ clothesData }) {
  const [sort, setSort] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");

  const menClothes = clothesData.filter((cloth) => cloth.category === "Men");

  return (
    <div className="mx-auto">
      <Navbar />
      <section className="w-11/12 m-auto">


           <div className="sm:flex sm:justify-between sm:items-center">
          <div className="mb-3">
            <Link to="/">
              <i className="fa-solid fa-arrow-left-long text-lg"></i>
            </Link>
          </div>
          <form className="flex gap-2 sm:gap-8">
            <select
              name="Sort by"
              id="sort"
              className="border-0 focus:rounded-none py-3 outline-none sm:p-4 sm:w-44 bg-custom-wheat"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="sort" className="text-sm">
                Sort by
              </option>
              <option value="popularity" className="text-sm">
                Popularity
              </option>
              <option value="New Arrival" className="text-sm">
                New Arrival
              </option>
              <option value="Low to High" className="text-sm">
                Low to High
              </option>
              <option value="High to Low" className="text-sm">
                High to Low
              </option>
              <option value="Product Rating" className="text-sm">
                Product Rating
              </option>
            </select>
            <select
              name="Brand"
              id="brand"
              className="border-0 focus:rounded-none py-3 outline-none sm:p-4 sm:w-44 bg-custom-wheat"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              <option value="brand" className="text-sm">
                Brand
              </option>
              <option value="lacoste" className="text-sm">
                Lacoste
              </option>
              <option value="adidas" className="text-sm">
                Adidas
              </option>
              <option value="nike" className="text-sm">
                Nike
              </option>
              <option value="gucci" className="text-sm">
                Gucci
              </option>
              <option value="zara" className="text-sm">
                Zara
              </option>
              <option value="reebok" className="text-sm">
                Reebok
              </option>
            </select>
            <select
              name="Size"
              id="size"
              className="border-0 focus:rounded-none py-3 outline-none sm:p-4 sm:w-44 bg-custom-wheat"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="size" className="text-sm">
                Size
              </option>
              <option value="small" className="text-sm">
                Small (s)
              </option>
              <option value="medium" className="text-sm">
                Medium (M)
              </option>
              <option value="large" className="text-sm">
                Large (L)
              </option>
            </select>

            {/* <div className="relative">
            <div className="bg-custom-wheat w-44 p-3 text-center shadow font-normal cursor-pointer text-custom-deep-browm">
              Brand <i className="fa-solid fa-chevron-down ps-3"></i>
            </div>
            <ul className="w-48 bg-custom-wheat shadow-md flex-col p-2 items-center z-10 gap-2 font-medium absolute top-10 left-10 text-custom-deep-browm">
              <li className="hover:bg-brown hover:text-white text-sm cursor-pointer py-2 px-3">Adidas</li>
              <li className="hover:bg-brown hover:text-white text-sm cursor-pointer py-2 px-3">Nike</li>
              <li className="hover:bg-brown hover:text-white text-sm cursor-pointer py-2 px-3">Gucci</li>
              <li className="hover:bg-brown hover:text-white text-sm cursor-pointer py-2 px-3">Zara</li>
              <li className="hover:bg-brown hover:text-white text-sm cursor-pointer py-2 px-3">Lacoste</li>
              <li className="hover:bg-brown hover:text-white text-sm cursor-pointer py-2 px-3">Reebok</li>
            </ul>
          </div>
          <div className="relative">
            <div className="bg-custom-wheat w-44 p-3 text-center shadow font-normal cursor-pointer text-custom-deep-browm">
              Size <i className="fa-solid fa-chevron-down ps-3"></i>
            </div>
            <ul className="w-48 bg-custom-wheat shadow-md flex-col p-2 items-center z-10 gap-2 font-medium absolute top-10 left-10 text-custom-deep-browm">
              <li className="hover:bg-brown hover:text-white text-sm cursor-pointer py-2 px-3">Small (S)</li>
              <li className="hover:bg-brown hover:text-white text-sm cursor-pointer py-2 px-3">Medium (M)</li>
              <li className="hover:bg-brown hover:text-white text-sm cursor-pointer py-2 px-3">Large (L)</li>
            </ul>
          </div> */}
          </form>
           </div>

        <section className="bg-custom-wheat py-7 px-4 sm:p-10 mt-14">
          <h2 className="font-semibold text-2xl text-custom-deep-browm mb-8 sm:mb-11">
            Top Selling For Men
          </h2>
          <div className=" grid grid-cols-2 sm:grid-cols-4 sm:gap-y-10 sm:gap-x-4 gap-x-3 gap-y-5">
            {menClothes.map((cloth, i) => (
              <ClothCard key={i} cloth={cloth} />
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}



//the whole filter stuff dey here
function Filteritem() {
  const [isOpen, setIsOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);

  function toggleSortBy() {
    setIsOpen(!isOpen);
    setBrandOpen(false);
    setSizeOpen(false);
  }

  function toggleBrand() {
    setBrandOpen(!brandOpen);
    setIsOpen(false);
    setSizeOpen(false);
  }
  function toggleSize() {
    setSizeOpen(!sizeOpen);
    setIsOpen(false);
    setBrandOpen(false);
  }
  return (
    <div className="flex md:justify-between justify-end items-center">
      <div className="md:block hidden">
        <Link to="/">
          <img src="Back.svg" alt="back" />
        </Link>
      </div>
      <section className="flex md:gap-12 gap-6">
        <div className="relative">
          <div
            className="bg-custom-wheat py-3 px-2 flex items-center gap-x-4 text-center text-[10px] md:text-sm shadow font-normal cursor-pointer text-custom-deep-browm"
            onClick={toggleSortBy}
          >
            Sort By: Popularity <i className="fa-solid fa-chevron-down"></i>
          </div>
          {isOpen && (
            <ul className="md:w-[173px] w-32 bg-custom-wheat flex flex-col items-center gap-y-5 p-3 font-medium absolute md:top-full left-12 text-custom-deep-browm text-[10px] md:text-[14px] shadow-md">
              <li className="hover:underline cursor-pointer">Popularity</li>
              <li className="hover:underline cursor-pointer">New Arrival</li>
              <li className="hover:underline cursor-pointer">
                Price: Low to High
              </li>
              <li className="hover:underline cursor-pointer">
                Price: High to Low
              </li>
              <li className="hover:underline cursor-pointer">Product Rating</li>
            </ul>
          )}
        </div>

        <div className="relative">
          <div
            className="bg-custom-wheat py-3 px-2 flex items-center gap-x-4 text-[10px] md:text-sm text-center shadow font-normal cursor-pointer text-custom-deep-browm"
            onClick={toggleBrand}
          >
            Brand <i className="fa-solid fa-chevron-down"></i>
          </div>
          {brandOpen && (
            <ul className="md:w-[173px] w-32 bg-custom-wheat flex flex-col items-center gap-y-5 p-3 font-medium absolute md:top-full right-0 text-custom-deep-browm text-[10px] md:text-[14px] shadow-md">
              <li className="hover:underline cursor-pointer">Nike</li>
              <li className="hover:underline cursor-pointer">Adidas</li>
              <li className="hover:underline cursor-pointer">Reebok</li>
              <li className="hover:underline cursor-pointer">Zara</li>
              <li className="hover:underline cursor-pointer">Gucci</li>
              <li className="hover:underline cursor-pointer">Lacoste</li>
            </ul>
          )}
        </div>

        <div className="relative">
          <div
            className="bg-custom-wheat py-3 px-2 flex items-center gap-x-4 text-[10px] md:text-sm text-center shadow font-normal cursor-pointer text-custom-deep-browm"
            onClick={toggleSize}
          >
            Size <i className="fa-solid fa-chevron-down"></i>
          </div>
          {sizeOpen && (
            <ul className="md:w-[173px] w-32 bg-custom-wheat flex flex-col items-center gap-y-5 p-3 font-medium absolute md:top-full right-0 text-custom-deep-browm text-[10px] md:text-[14px] shadow-md">
              <li className="hover:underline cursor-pointer">Small</li>
              <li className="hover:underline cursor-pointer">Medium</li>
              <li className="hover:underline cursor-pointer">Large</li>
              <li className="hover:underline cursor-pointer">XLarge</li>
              <li className="hover:underline cursor-pointer">XXLarge</li>
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}



// the whole logo component dey here
function Logo() {
  return (
    <section className="mt-5 md:px-24 py-6 bg-custom-white rounded-lg">
      <div className="flex justify-center items-center gap-7">
        <p className="text-[7px] font-[450] md:text-xl">
          All time trusted seller
        </p>
        <div className="flex gap-2 text-[10px] md:text-xl">
          <i className="fa-solid fa-star text-custom-brown"></i>
          <i className="fa-solid fa-star text-custom-brown"></i>
          <i className="fa-solid fa-star text-custom-brown"></i>
          <i className="fa-solid fa-star text-custom-brown"></i>
          <i className="fa-solid fa-star text-custom-brown"></i>
        </div>
      </div>
      <div className="flex justify-between items-center pt-8 w-full">
        <img src="img/Nike.png" alt="nike logo" className="md:w-16 w-6" />
        <img src="img/Adidas.png" alt="adidas logo" className="md:w-16 w-6" />
        <img src="img/Reebok.png" alt="reebok logo" className="md:w-16 w-6" />
        <img src="img/Zara.png" alt="zara logo" className="md:w-16 w-6" />
        <img src="img/Gucci.png" alt="gucci logo" className="md:w-16 w-6" />
        <img src="img/Lacoste.png" alt="lacoste logo" className="md:w-16 w-6" />
      </div>
    </section>
  );
}

export default Menwears;
