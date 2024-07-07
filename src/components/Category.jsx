import { Link } from "react-router-dom";

function Category() {
  return (
    <section className="w-11/12 mx-auto mt-10">
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
          <Link
            to="new-arrival"
            className="text-sm font-bold flex items-center gap-3"
          >
            See All <i className="fa-solid fa-chevron-right text-sm"></i>
          </Link>
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
          <Link
            to="women"
            className="text-sm font-bold flex items-center gap-3"
          >
            See All <i className="fa-solid fa-chevron-right text-sm"></i>
          </Link>
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
          <Link
            to="men"
            className="text-sm font-bold flex items-center gap-3"
          >
            See All <i className="fa-solid fa-chevron-right text-sm"></i>
          </Link>
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

export default Category;
