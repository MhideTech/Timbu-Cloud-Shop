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
export default Menwears;
