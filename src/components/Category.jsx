import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

// function Category() {
//   return (
//     <section className="w-11/12 mx-auto mt-10">
//       <div className="relative">
//         <div className="bg-custom-wheat w-44 p-3 text-center shadow font-normal cursor-pointer text-custom-deep-browm">
//           Category <i className="fa-solid fa-chevron-down ps-3"></i>
//         </div>
//         <ul className="w-48 bg-custom-wheat  flex-col items-center gap-2 p-3 font-medium absolute top-8 left-36 text-custom-deep-browm hidden">
//           <li className="hover:underline cursor-pointer">All</li>
//           <li className="hover:underline cursor-pointer">Men</li>
//           <li className="hover:underline cursor-pointer">Women</li>
//           <li className="hover:underline cursor-pointer">Unisex</li>
//         </ul>
//       </div>

//       {/* for All */}
//       <section className="py-8 ps-12 bg-custom-wheat mt-8">
//         <div className="flex justify-between pe-12">
//           <h2 className="text-2xl font-extrabold text-custom-deep-browm">
//             New Arrivals
//           </h2>
//           <Link
//             to="new-arrival"
//             className="text-sm font-bold flex items-center gap-3"
//           >
//             See All <i className="fa-solid fa-chevron-right text-sm"></i>
//           </Link>
//         </div>
//         <div className="w-full mt-7 overflow-x-scroll flex">
//           <div
//             className="max-w-[303px] bg-white rounded-md p-2"
//             aria-label="card"
//           >
//             <div className="border-custom-brown border rounded-lg p-4">
//               <img src="img/white-men.png" alt="" className="h-full" />
//             </div>
//             <p className="text-xl font-medium text-custom-deep-browm mt-2">
//               Nike Premium plain white
//             </p>
//             <div className="flex items-end justify-between text-custom-deep-browm my-3">
//               <p className="font-[900] text-2xl">₦80,000</p>
//               <p className="font-normal line-through text-lg">₦88,000</p>
//             </div>
//             <button className="w-full bg-custom-deep-browm p-2 font-normal text-white text-sm rounded-sm">
//               Add to cart
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* for Women */}
//       <section className="py-8 ps-12 bg-custom-wheat mt-8">
//         <div className="flex justify-between pe-12">
//           <h2 className="text-2xl font-extrabold text-custom-deep-browm">
//             Top selling for Women
//           </h2>
//           <Link
//             to="women"
//             className="text-sm font-bold flex items-center gap-3"
//           >
//             See All <i className="fa-solid fa-chevron-right text-sm"></i>
//           </Link>
//         </div>
//         <div className="w-full mt-7 overflow-x-scroll flex">
//           <div
//             className="max-w-[303px] bg-white rounded-md p-2"
//             aria-label="card"
//           >
//             <div className="border-custom-brown border rounded-lg p-4">
//               <img src="img/white-men.png" alt="" className="h-auto" />
//             </div>
//             <p className="text-xl font-medium text-custom-deep-browm mt-2">
//               Nike Premium plain white
//             </p>
//             <div className="flex items-end justify-between text-custom-deep-browm my-3">
//               <p className="font-[900] text-2xl">₦80,000</p>
//               <p className="font-normal line-through text-lg">₦88,000</p>
//             </div>
//             <button className="w-full bg-custom-deep-browm p-2 font-normal text-white text-sm rounded-sm">
//               Add to cart
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* for Men */}
//       <section className="py-8 ps-12 bg-custom-wheat mt-8">
//         <div className="flex justify-between pe-12">
//           <h2 className="text-2xl font-extrabold text-custom-deep-browm">
//             Top selling for men
//           </h2>
//           <Link
//             to="men"
//             className="text-sm font-bold flex items-center gap-3"
//           >
//             See All <i className="fa-solid fa-chevron-right text-sm"></i>
//           </Link>
//         </div>
//         <div className="w-full mt-7 overflow-x-scroll flex">
//           <div
//             className="max-w-[303px] bg-white rounded-md p-2"
//             aria-label="card"
//           >
//             <div className="border-custom-brown border rounded-lg p-4">
//               <img src="img/white-men.png" alt="" className="h-auto" />
//             </div>
//             <p className="text-xl font-medium text-custom-deep-browm mt-2">
//               Nike Premium plain white
//             </p>
//             <div className="flex items-end justify-between text-custom-deep-browm my-3">
//               <p className="font-[900] text-2xl">₦80,000</p>
//               <p className="font-normal line-through text-lg">₦88,000</p>
//             </div>
//             <button className="w-full bg-custom-deep-browm p-2 font-normal text-white text-sm rounded-sm">
//               Add to cart
//             </button>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }

function Category() {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <section className="w-11/12 mt-10 mx-auto">
      <div className="relative">
        <div
          className="bg-custom-wheat w-44 p-3 text-center shadow font-normal cursor-pointer text-custom-deep-browm"
          onClick={handleIsOpen}
        >
          Category <i className="fa-solid fa-chevron-down ps-3"></i>
        </div>
        {isOpen && (
          <ul className="w-48 bg-custom-wheat flex  flex-col items-center gap-y-5 p-3 font-medium absolute top-8 left-36 text-custom-deep-browm">
            <li className="hover:underline cursor-pointer">All</li>
            <Link to="/men">
              <li className="hover:underline cursor-pointer">Men</li>
            </Link>
            <Link to="/women">
              <li className="hover:underline cursor-pointer">Women</li>
            </Link>
            <Link to="/newarrival">
              <li className="hover:underline cursor-pointer">New Arrivals</li>
            </Link>
          </ul>
        )}
      </div>

      {/* for All */}
      <section className="py-8 bg-custom-wheat mt-8 flex justify-center">
        <div>
          <div className="flex justify-between px-3 items-center">
            <h2 className="md:text-2xl text-[12px] font-[900] text-custom-deep-browm">
              New Arrivals
            </h2>
            <Link to={"/new-arrival"}>
              <span className="text-[8px] md:text-sm font-bold flex items-center gap-3">
                {" "}
                See All{" "}
                <img src="img/Icon.png" alt="icon" className="w-[6px]" />
              </span>
            </Link>
          </div>

          <div className="mt-7 h-fit grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-20">
            {/* white shirt */}
            <div
              className="bg-white rounded-md p-2 h-[428px] w-[303px]"
              aria-label="card"
            >
              <Link to={"/checkout"}>
                <div>
                  <div className="border-custom-brown border rounded-lg p-4 h-[285px]">
                    <img
                      src="img/men/white-shirt.png"
                      alt=""
                      className="h-full object-contain mx-auto"
                    />
                  </div>
                  <p className="text-xl font-medium text-custom-deep-browm mt-2">
                    Nike Premium Plain White
                  </p>
                  <div className="flex items-end justify-between text-custom-deep-browm my-4">
                    <p className="font-bold text-xl">₦80,000</p>
                    <p className="font-normal line-through text-lg">₦88,000</p>
                  </div>
                </div>
              </Link>

              <button className="w-full bg-custom-deep-browm p-3 font-normal text-white text-sm rounded-sm">
                Add to cart
              </button>
            </div>
            {/* black shirt */}
            <div
              className="bg-white rounded-md p-2 h-[428px] w-[303px]"
              aria-label="card"
            >
              <div className="border-custom-brown border rounded-lg p-4 h-[285px]">
                <img
                  src="img/women/black-shirt.png"
                  alt="black shirt"
                  className="h-full object-contain mx-auto"
                />
              </div>
              <p className="text-xl font-medium text-custom-deep-browm mt-2">
                Reebook Plain Black
              </p>
              <div className="flex items-end justify-between text-custom-deep-browm my-4">
                <p className="font-bold text-xl">₦80,000</p>
                <p className="font-normal line-through text-lg">₦88,000</p>
              </div>
              <button className="w-full bg-custom-deep-browm p-3 font-normal text-white text-sm rounded-sm">
                Add to cart
              </button>
            </div>
            {/* faded shirt */}
            <div
              className="bg-white rounded-md p-2 h-[428px] w-[303px]"
              aria-label="card"
            >
              <div className="border-custom-brown border rounded-lg p-4 h-[285px]">
                <img
                  src="img/men/3-in-1.png"
                  alt="plain shirts"
                  className="h-full object-contain"
                />
              </div>
              <p className="text-xl font-medium text-custom-deep-browm mt-2">
                3-in-1 Lacoste Plain Shirts
              </p>
              <div className="flex items-end justify-between text-custom-deep-browm my-4">
                <p className="font-bold text-xl">₦58,000</p>
                <p className="font-normal line-through text-lg">₦78,000</p>
              </div>
              <button className="w-full bg-custom-deep-browm p-3 font-normal text-white text-sm rounded-sm">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* for Women */}
      <section className="py-8 px-5 bg-custom-wheat mt-8 flex justify-center">
        <div>
          <div className="flex justify-between items-center px-3">
            <h2 className="text-[12px] md:text-2xl font-extrabold text-custom-deep-browm">
              Top selling for Women
            </h2>

            <Link to={"/women"}>
              <span className="text-[8px] md:text-sm font-bold flex items-center gap-3">
                {" "}
                See All{" "}
                <img src="img/Icon.png" alt="icon" className="w-[6px]" />
              </span>
            </Link>
          </div>

          <div className="mt-7 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-20">
            {/* reebok card  */}
            <div
              className="bg-white rounded-md p-2 w-[303px]"
              aria-label="card"
            >
              <div className="border-custom-brown border rounded-lg p-4 h-[285px]">
                <img
                  src="img/women/turquoise-shirt.png"
                  alt="plain shirts"
                  className="h-full object-contain mx-auto"
                />
              </div>
              <p className="text-xl font-medium text-custom-deep-browm mt-2">
                Reebok Turqouise Shirts
              </p>
              <div className="flex items-end justify-between text-custom-deep-browm my-4">
                <p className="font-bold text-xl">₦58,000</p>
                <p className="font-normal line-through text-lg">₦78,000</p>
              </div>
              <button className="w-full bg-custom-deep-browm p-3 font-normal text-white text-sm rounded-sm">
                Add to cart
              </button>
            </div>
            {/* nike card  */}
            <div
              className="bg-white rounded-md p-2 w-[303px]"
              aria-label="card"
            >
              <div className="border-custom-brown border rounded-lg p-4 h-[285px]">
                <img
                  src="img/women/red-shirt.png"
                  alt="plain shirts"
                  className="h-full object-contain mx-auto"
                />
              </div>
              <p className="text-xl font-medium text-custom-deep-browm mt-2">
                Nike red plain shirts
              </p>
              <div className="flex items-end justify-between text-custom-deep-browm my-4">
                <p className="font-bold text-xl">₦20,000</p>
                <p className="font-normal line-through text-lg">₦28,000</p>
              </div>
              <button className="w-full bg-custom-deep-browm p-3 font-normal text-white text-sm rounded-sm">
                Add to cart
              </button>
            </div>
            {/* zara card  */}
            <div
              className="bg-white rounded-md p-2 w-[303px]"
              aria-label="card"
            >
              <div className="border-custom-brown border rounded-lg p-4 h-[285px]">
                <img
                  src="img/women/pink-shirt.png"
                  alt="plain shirts"
                  className="h-full object-contain mx-auto"
                />
              </div>
              <p className="text-xl font-medium text-custom-deep-browm mt-2">
                Zara pink plain shirts
              </p>
              <div className="flex items-end justify-between text-custom-deep-browm my-4">
                <p className="font-bold text-xl">₦25,000</p>
                <p className="font-normal line-through text-lg">₦30,000</p>
              </div>
              <button className="w-full bg-custom-deep-browm p-3 font-normal text-white text-sm rounded-sm">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* for Men */}
      <section className="py-8 px-5 bg-custom-wheat mt-8 flex justify-center">
        <div>
          <div className="flex justify-between items-center px-3">
            <h2 className="text-[12px] md:text-2xl font-extrabold text-custom-deep-browm">
              Top selling for men
            </h2>
            <Link to={"/men"}>
              <span className="text-[8px] md:text-sm font-bold flex items-center gap-3">
                {" "}
                See All{" "}
                <img src="img/Icon.png" alt="icon" className="w-[6px]" />
              </span>
            </Link>
          </div>
          <div className="mt-7 h-fit grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-20">
            {/* white Shirt */}
            <div
              className="bg-white rounded-md p-2 h-[428px] w-[303px]"
              aria-label="card"
            >
              <div className="border-custom-brown border rounded-lg p-4 h-[285px]">
                <img
                  src="img/men/white-shirt.png"
                  alt="white shirt"
                  className="h-full object-contain"
                />
              </div>
              <p className="text-xl font-medium text-custom-deep-browm mt-2">
                Nike plain white shirt
              </p>
              <div className="flex items-end justify-between text-custom-deep-browm my-4">
                <p className="font-bold text-xl">₦20,000</p>
                <p className="font-normal line-through text-lg">₦28,000</p>
              </div>
              <button className="w-full bg-custom-deep-browm p-3 font-normal text-white text-sm rounded-sm">
                Add to cart
              </button>
            </div>

            {/* gold shirt */}
            <div
              className=" bg-white rounded-md p-2 w-[303px] h-[428px]"
              aria-label="card"
            >
              <div className="border-custom-brown border rounded-lg p-4 h-[285px]">
                <img
                  src="img/men/yellow-shirt.png"
                  alt="gold shirt"
                  className="h-full object-contain"
                />
              </div>
              <p className="text-xl font-medium text-custom-deep-browm mt-2">
                Lacoste gold yellow shirt
              </p>
              <div className="flex items-end justify-between text-custom-deep-browm my-4">
                <p className="font-bold text-xl">₦25,000</p>
                <p className="font-normal line-through text-lg">₦30,000</p>
              </div>
              <button className="w-full bg-custom-deep-browm p-3 font-normal text-white text-sm rounded-sm">
                Add to cart
              </button>
            </div>

            <div
              className="bg-white rounded-md p-2 h-[428px]"
              aria-label="card"
            >
              <div className="border-custom-brown border rounded-lg p-4 h-[285px]">
                <img
                  src="img/men/black-shirt.png"
                  alt="black shirt"
                  className="h-full object-contain"
                />
              </div>
              <p className="text-xl font-medium text-custom-deep-browm mt-2">
                Adidas black plain shirt
              </p>
              <div className="flex items-end justify-between text-custom-deep-browm my-4">
                <p className="font-bold text-xl">₦80,000</p>
                <p className="font-normal line-through text-lg">₦88,000</p>
              </div>
              <button className="w-full bg-custom-deep-browm p-3 font-normal text-white text-sm rounded-sm">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Category;
