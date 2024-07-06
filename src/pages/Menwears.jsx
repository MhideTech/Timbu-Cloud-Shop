function Menwears() {
  return <div>
    {/* add nav here */}
    <Mensection />
  </div>;
}

function Mensection() {
  return (
    <section>
      <div className="flex justify-between items-center">
        <div>
          <i className="fa-solid fa-left-long"></i>
        </div>
        <section className="flex gap-8">
          <div className="relative">
            <div className="bg-custom-wheat w-44 p-3 text-center shadow font-normal cursor-pointer text-custom-deep-browm">
              Sort by <i className="fa-solid fa-chevron-down ps-3"></i>
            </div>
            <ul className="w-48 bg-custom-wheat  flex-col items-center gap-2 p-3 font-medium absolute top-8 left-36 text-custom-deep-browm hidden">
              <li className="hover:underline cursor-pointer">Popularity</li>
              <li className="hover:underline cursor-pointer">New Arrivals</li>
              <li className="hover:underline cursor-pointer">
                Price Low to Hign
              </li>
              <li className="hover:underline cursor-pointer">Product Rating</li>
            </ul>
          </div>
          <div className="relative">
            <div className="bg-custom-wheat w-44 p-3 text-center shadow font-normal cursor-pointer text-custom-deep-browm">
              Brand <i className="fa-solid fa-chevron-down ps-3"></i>
            </div>
            <ul className="w-48 bg-custom-wheat  flex-col items-center gap-2 p-3 font-medium absolute top-8 left-36 text-custom-deep-browm hidden">
              <li className="hover:underline cursor-pointer">Nike</li>
              <li className="hover:underline cursor-pointer">Addidas</li>
            </ul>
          </div>
          <div className="relative">
            <div className="bg-custom-wheat w-44 p-3 text-center shadow font-normal cursor-pointer text-custom-deep-browm">
              Size <i className="fa-solid fa-chevron-down ps-3"></i>
            </div>
            <ul className="w-48 bg-custom-wheat  flex-col items-center gap-2 p-3 font-medium absolute top-8 left-36 text-custom-deep-browm hidden">
              <li className="hover:underline cursor-pointer">Popularity</li>
              <li className="hover:underline cursor-pointer">New Arrivals</li>
            </ul>
          </div>
        </section>
      </div>

      <section className="bg-custom-wheat p-10 mt-14">
        <h2 className="font-[900] text-2xl text-custom-deep-browm">
          Top Selling For Men
        </h2>
        <div className=" grid grid-cols-4 gap-y-10 mt-20">
          <div
            className="max-w-[303px] bg-white rounded-md p-2"
            aria-label="card"
          >
            <div className="border-custom-brown border rounded-lg p-4">
              <img src="img/white-men.png" alt="" className="h-full" />
            </div>
            <p className="text-sm font-[450] text-custom-deep-browm mt-2">
              Nike Premium plain white
            </p>
            <div className="flex items-end justify-between text-custom-deep-browm my-3">
              <p className="font-[900] text-xl">₦80,000</p>
              <p className="font-normal line-through text-lg">₦88,000</p>
            </div>
            <button className="w-full bg-custom-deep-browm p-2 font-normal text-white text-sm rounded-sm">
              Add to cart
            </button>
          </div>
          <div
            className="max-w-[303px] bg-white rounded-md p-2"
            aria-label="card"
          >
            <div className="border-custom-brown border rounded-lg p-4">
              <img src="img/white-men.png" alt="" className="h-full" />
            </div>
            <p className="text-sm font-[450] text-custom-deep-browm mt-2">
              Nike Premium plain white
            </p>
            <div className="flex items-end justify-between text-custom-deep-browm my-3">
              <p className="font-[900] text-xl">₦80,000</p>
              <p className="font-normal line-through text-lg">₦88,000</p>
            </div>
            <button className="w-full bg-custom-deep-browm p-2 font-normal text-white text-sm rounded-sm">
              Add to cart
            </button>
          </div>
          <div
            className="max-w-[303px] bg-white rounded-md p-2"
            aria-label="card"
          >
            <div className="border-custom-brown border rounded-lg p-4">
              <img src="img/white-men.png" alt="" className="h-full" />
            </div>
            <p className="text-sm font-[450] text-custom-deep-browm mt-2">
              Nike Premium plain white
            </p>
            <div className="flex items-end justify-between text-custom-deep-browm my-3">
              <p className="font-[900] text-xl">₦80,000</p>
              <p className="font-normal line-through text-lg">₦88,000</p>
            </div>
            <button className="w-full bg-custom-deep-browm p-2 font-normal text-white text-sm rounded-sm">
              Add to cart
            </button>
          </div>
          <div
            className="max-w-[303px] bg-white rounded-md p-2"
            aria-label="card"
          >
            <div className="border-custom-brown border rounded-lg p-4">
              <img src="img/white-men.png" alt="" className="h-full" />
            </div>
            <p className="text-sm font-[450] text-custom-deep-browm mt-2">
              Nike Premium plain white
            </p>
            <div className="flex items-end justify-between text-custom-deep-browm my-3">
              <p className="font-[900] text-xl">₦80,000</p>
              <p className="font-normal line-through text-lg">₦88,000</p>
            </div>
            <button className="w-full bg-custom-deep-browm p-2 font-normal text-white text-sm rounded-sm">
              Add to cart
            </button>
          </div>
          <div
            className="max-w-[303px] bg-white rounded-md p-2"
            aria-label="card"
          >
            <div className="border-custom-brown border rounded-lg p-4">
              <img src="img/white-men.png" alt="" className="h-full" />
            </div>
            <p className="text-sm font-[450] text-custom-deep-browm mt-2">
              Nike Premium plain white
            </p>
            <div className="flex items-end justify-between text-custom-deep-browm my-3">
              <p className="font-[900] text-xl">₦80,000</p>
              <p className="font-normal line-through text-lg">₦88,000</p>
            </div>
            <button className="w-full bg-custom-deep-browm p-2 font-normal text-white text-sm rounded-sm">
              Add to cart
            </button>
          </div>
          <div
            className="max-w-[303px] bg-white rounded-md p-2"
            aria-label="card"
          >
            <div className="border-custom-brown border rounded-lg p-4">
              <img src="img/white-men.png" alt="" className="h-full" />
            </div>
            <p className="text-sm font-[450] text-custom-deep-browm mt-2">
              Nike Premium plain white
            </p>
            <div className="flex items-end justify-between text-custom-deep-browm my-3">
              <p className="font-[900] text-xl">₦80,000</p>
              <p className="font-normal line-through text-lg">₦88,000</p>
            </div>
            <button className="w-full bg-custom-deep-browm p-2 font-normal text-white text-sm rounded-sm">
              Add to cart
            </button>
          </div>
          <div
            className="max-w-[303px] bg-white rounded-md p-2"
            aria-label="card"
          >
            <div className="border-custom-brown border rounded-lg p-4">
              <img src="img/white-men.png" alt="" className="h-full" />
            </div>
            <p className="text-sm font-[450] text-custom-deep-browm mt-2">
              Nike Premium plain white
            </p>
            <div className="flex items-end justify-between text-custom-deep-browm my-3">
              <p className="font-[900] text-xl">₦80,000</p>
              <p className="font-normal line-through text-lg">₦88,000</p>
            </div>
            <button className="w-full bg-custom-deep-browm p-2 font-normal text-white text-sm rounded-sm">
              Add to cart
            </button>
          </div>
          <div
            className="max-w-[303px] bg-white rounded-md p-2"
            aria-label="card"
          >
            <div className="border-custom-brown border rounded-lg p-4">
              <img src="img/white-men.png" alt="" className="h-full" />
            </div>
            <p className="text-sm font-[450] text-custom-deep-browm mt-2">
              Nike Premium plain white
            </p>
            <div className="flex items-end justify-between text-custom-deep-browm my-3">
              <p className="font-[900] text-xl">₦80,000</p>
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
export default Menwears;
