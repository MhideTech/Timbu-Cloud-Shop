import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TrustedSeller from "../components/TrustedSeller";
import FooterBanner from "../components/FooterBanner";

function Cart() {
  return (
    <div>
      <Navbar />
      <NewCart />
      <TrustedSeller />
      <FooterBanner />
      <Footer />
    </div>
  );
}

// for Checkout
function Addeditem() {
  return (
    <section className="w-11/12 mx-auto h-fit flex flex-wrap justify-between">
      <div className="sm:w-[70%] bg-custom-wheat h-full rounded-xl sm:p-12 py-12 px-6">
        <div className="flex flex-wrap justify-between">
          <div className="sm:w-[35%] mx-auto w-auto flex justify-center items-center bg-white border-custom-brown border-2 rounded-xl p-2">
            <img src="img/men/yellow-shirt.png" alt="" />
          </div>
           <div className="sm:w-[62%] mt-8 sm:mt-0">
            <h4 className="font-bold text-3xl text-custom-deep-browm">
              Lacoste gold yellow shirt
            </h4>
            <div className="flex justify-between items-center mt-2">
              <p className="font-[450] text-sm text-custom-deep-browm">
                Available in <span className="font-[900]">M L XL</span>
              </p>
              <div className="flex gap-2">
                <i className="fa-solid fa-star text-custom-brown"></i>
                <i className="fa-solid fa-star text-custom-brown"></i>
                <i className="fa-solid fa-star text-custom-brown"></i>
                <i className="fa-solid fa-star text-custom-brown"></i>
                <i className="fa-solid fa-star text-custom-brown"></i>
              </div>
            </div>

            <div className="flex justify-between items-center my-5">
              <h2 className="font-bold text-xl sm:text-4xl text-custom-deep-browm">
                ₦35,000
              </h2>
              <p className="text-xl line-through text-custom-deep-browm">
                ₦40,000
              </p>
            </div>
            <p className="text-md text-custom-deep-browm">In stock</p>
            <p className="text-md text-custom-deep-browm">
              + shipping from ₦250 to ISOLO
            </p>
            <button className="w-full bg-custom-deep-browm p-4 font-[450] text-custom-wheat text-xl rounded-md my-4">
              Buy now
            </button>
            <button className="w-full p-4 font-[450] text-custom-deep-browm border border-custom-deep-browm text-xl rounded-md">
              Add to cart
            </button>
          </div>
        </div>

        <div className="bg-white w-full mt-7 p-6">
          <p className="font-[450] text-sm text-custom-deep-browm">
            Elevate your wardrobe with our Premium Lacoste Gold Yellow Round
            Neck Shirt. Crafted from the finest materials, it offers
            unparalleled comfort and a sleek, modern fit. Perfect for any
            occasion, this shirt blends timeless style with contemporary flair,
            ensuring you look and feel your best all day long. Available in a
            variety of sophisticated colors to suit every preference.
          </p>
        </div>
      </div>
      <div className="w-[28%] hidden sm:block">
        <img
          src="img/cart-image.png"
          alt="cart image"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}

//Cart
<<<<<<< HEAD
function NewCart() {
  return (
    <section className="w-11/12 mx-auto h-fit mt-16 flex justify-between">
      <div className="bg-custom-wheat p-10 w-[68%] rounded-lg">
        <h3 className="font-bold text-4xl text-custom-deep-browm">Cart</h3>
=======
function Cartitem() {
  return (
    <section className="h-fit mt-10 md:mt-16 flex justify-between">
      <div className="bg-custom-wheat p-3 lg:p-10 lg:w-[68%] rounded-lg w-full">
        <h3 className="font-[900] text-2xl text-custom-deep-browm">Cart</h3>
>>>>>>> aa8824c67b4a42c305142766374b2e621f6b1f1b

        <section className="flex flex-col gap-y-3">
<<<<<<< HEAD
          <div className="flex pt-10 gap-x-7">
            <div className="bg-white border border-custom-deep-browm rounded-xl w-[250px]">
=======
          {/* nike blue shirt here */}
          <div className="flex pt-6 lg:pt-10 lg:gap-x-7 gap-x-5">
            <div className="bg-white border border-custom-deep-browm rounded-xl h-[145px] md:h-full lg:w-[250px]">
>>>>>>> aa8824c67b4a42c305142766374b2e621f6b1f1b
              <img
                src="img/women/turquoise-shirt.png"
                alt="T-Shirt"
                className="h-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-y-5 lg:gap-y-8 w-full">
              <div className="text-custom-deep-browm flex justify-between items-center w-full">
                <h3 className="font-[450] lg:text-2xl text-sm">
                  Nike blue plain shirt
                </h3>
<<<<<<< HEAD
                <p className="font-bold">₦80,000</p>
=======
                <p className="font-[900] text-xl lg:block hidden">₦80,000</p>
>>>>>>> aa8824c67b4a42c305142766374b2e621f6b1f1b
              </div>

              <div className="flex justify-between items-center font-[450] text-sm text-custom-deep-browm w-full">
                <p>Manufacturer: Nike</p>
                <div className="flex gap-1 text-[10px] lg:hidden">
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                </div>
                <p className="line-through lg:block hidden">₦88,000</p>
              </div>
              <div className="flex justify-between ">
                <div className="lg:flex gap-2 hidden">
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                </div>
                {/* Mobile */}
                <div className="lg:hidden">
                  <p className="text-[17px] font-[900] text-custom-deep-browm ">
                    ₦80,000
                  </p>
                  <p className="text-[12px] font-[450] text-custom-deep-browm">
                    ₦78,000
                  </p>
                </div>
                {/*End of Mobile */}
                <div className="flex lg:gap-5 gap-3">
                  <button className="w-6 h-6 rounded-full bg-custom-deep-browm text-custom-wheat">
                    +
                  </button>
                  <span>2</span>
                  <button className="w-6 h-6 rounded-full bg-custom-deep-browm text-custom-wheat">
                    -
                  </button>
                </div>
              </div>

              {/* Mobile */}
              <div className="text-[10px] font-[450] text-custom-deep-browm lg:hidden">
                <p>in stock</p>
                <p>+ shipping from ₦ 250 to ISOLO</p>
              </div>
              {/*End of Mobile */}

              <div className="flex justify-between">
<<<<<<< HEAD
                <button className="w-[49%] border-custom-deep-browm border py-2 text-custom-deep-browm font-[450] flex justify-center items-center gap-x-4">
                  <img src="img/delete.png" alt="delete icon" />
=======
                <button className="w-[49%] border-custom-deep-browm border py-2 text-custom-deep-browm font-[450] flex justify-center items-center gap-x-4 text-[14px]">
                  <img src="delete.svg" alt="delete icon" className="w-3" />
>>>>>>> aa8824c67b4a42c305142766374b2e621f6b1f1b
                  Remove
                </button>
                <button className="w-[48%] bg-custom-deep-browm text-custom-wheat rounded-sm text-[14px]">
                  Checkout
                </button>
              </div>
            </div>
          </div>

          <hr className="border-b-1 border-custom-deep-browm my-5" />

          {/* lacoste gold shirt */}
          <div className="flex pt-6 lg:pt-10 lg:gap-x-7 gap-x-5">
            <div className="bg-white border border-custom-deep-browm rounded-xl h-[145px] md:h-full lg:w-[250px]">
              <img
<<<<<<< HEAD
                src="img/men/yellow-shirt.png"
                alt="lacoste shirt"
=======
                src="img/black-shirt.png"
                alt="T-Shirt"
>>>>>>> aa8824c67b4a42c305142766374b2e621f6b1f1b
                className="h-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-y-5 lg:gap-y-8 w-full">
              <div className="text-custom-deep-browm flex justify-between items-center w-full">
                <h3 className="font-[450] lg:text-2xl text-sm">
                  Lacoste black plain shirt
                </h3>
                <p className="font-[900] text-xl lg:block hidden">₦58,000</p>
              </div>

              <div className="flex justify-between items-center font-[450] text-sm text-custom-deep-browm w-full">
                <p>Manufacturer: Lacoste</p>
                <div className="flex gap-1 text-[10px] lg:hidden">
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                </div>
                <p className="line-through lg:block hidden">₦88,000</p>
              </div>
              <div className="flex justify-between ">
                <div className="lg:flex gap-2 hidden">
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                </div>
                {/* Mobile */}
                <div className="lg:hidden">
                  <p className="text-[17px] font-[900] text-custom-deep-browm ">
                    ₦58,000
                  </p>
                  <p className="text-[12px] font-[450] text-custom-deep-browm">
                    ₦88,000
                  </p>
                </div>
                {/*End of Mobile */}
                <div className="flex lg:gap-5 gap-3">
                  <button className="w-6 h-6 rounded-full bg-custom-deep-browm text-custom-wheat">
                    +
                  </button>
                  <span>2</span>
                  <button className="w-6 h-6 rounded-full bg-custom-deep-browm text-custom-wheat">
                    -
                  </button>
                </div>
              </div>

              {/* Mobile */}
              <div className="text-[10px] font-[450] text-custom-deep-browm lg:hidden">
                <p>in stock</p>
                <p>+ shipping from ₦ 250 to ISOLO</p>
              </div>
              {/*End of Mobile */}

              <div className="flex justify-between">
<<<<<<< HEAD
                <button className="w-[49%] border-custom-deep-browm border py-2 text-custom-deep-browm font-[450] flex justify-center items-center gap-x-4">
                  <img src="img/delete.png" alt="delete icon" />
=======
                <button className="w-[49%] border-custom-deep-browm border py-2 text-custom-deep-browm font-[450] flex justify-center items-center gap-x-4 text-[14px]">
                  <img src="delete.svg" alt="delete icon" className="w-3" />
>>>>>>> aa8824c67b4a42c305142766374b2e621f6b1f1b
                  Remove
                </button>
                <button className="w-[48%] bg-custom-deep-browm text-custom-wheat rounded-sm text-[14px]">
                  Checkout
                </button>
              </div>
            </div>
          </div>

          {/* border */}
          <hr className="border-b-1 border-custom-deep-browm my-5" />

          {/* nike white shirt */}
          <div className="flex pt-6 lg:pt-10 lg:gap-x-7 gap-x-5">
            <div className="bg-white border border-custom-deep-browm rounded-xl h-[145px] md:h-full lg:w-[250px]">
              <img
<<<<<<< HEAD
                src="img/men/white-shirt.png"
                alt="lacoste shirt"
=======
                src="img/white-men.png"
                alt="white-shirt"
>>>>>>> aa8824c67b4a42c305142766374b2e621f6b1f1b
                className="h-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-y-5 lg:gap-y-8 w-full">
              <div className="text-custom-deep-browm flex justify-between items-center w-full">
<<<<<<< HEAD
                <h3 className="font-[450] text-2xl">Nike white plain shirt</h3>
                <p className="font-[900]">₦58,000</p>
=======
                <h3 className="font-[450] lg:text-2xl text-sm">
                  Nike white plain shirt
                </h3>
                <p className="font-[900] text-xl lg:block hidden">₦78,000</p>
>>>>>>> aa8824c67b4a42c305142766374b2e621f6b1f1b
              </div>

              <div className="flex justify-between items-center font-[450] text-sm text-custom-deep-browm w-full">
                <p>Manufacturer: Nike</p>
                <div className="flex gap-1 text-[10px] lg:hidden">
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                </div>
                <p className="line-through lg:block hidden">₦88,000</p>
              </div>
              <div className="flex justify-between ">
                <div className="lg:flex gap-2 hidden">
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                </div>
                {/* Mobile */}
                <div className="lg:hidden">
                  <p className="text-[17px] font-[900] text-custom-deep-browm ">
                    ₦78,000
                  </p>
                  <p className="text-[12px] font-[450] text-custom-deep-browm">
                    ₦88,000
                  </p>
                </div>
                {/*End of Mobile */}
                <div className="flex lg:gap-5 gap-3">
                  <button className="w-6 h-6 rounded-full bg-custom-deep-browm text-custom-wheat">
                    +
                  </button>
                  <span>2</span>
                  <button className="w-6 h-6 rounded-full bg-custom-deep-browm text-custom-wheat">
                    -
                  </button>
                </div>
              </div>

              {/* Mobile */}
              <div className="text-[10px] font-[450] text-custom-deep-browm lg:hidden">
                <p>in stock</p>
                <p>+ shipping from ₦ 250 to ISOLO</p>
              </div>
              {/*End of Mobile */}

              <div className="flex justify-between">
<<<<<<< HEAD
                <button className="w-[49%] border-custom-deep-browm border py-2 text-custom-deep-browm font-[450] flex justify-center items-center gap-x-4">
                  <img src="img/delete.png" alt="delete icon" />
=======
                <button className="w-[49%] border-custom-deep-browm border py-2 text-custom-deep-browm font-[450] flex justify-center items-center gap-x-4 text-[14px]">
                  <img src="delete.svg" alt="delete icon" className="w-3" />
>>>>>>> aa8824c67b4a42c305142766374b2e621f6b1f1b
                  Remove
                </button>
                <button className="w-[48%] bg-custom-deep-browm text-custom-wheat rounded-sm text-[14px]">
                  Checkout
                </button>
              </div>
            </div>
          </div>

          {/* border */}
          <hr className="border-b-1 border-custom-deep-browm my-5 hidden lg:block" />

          <div className="lg:flex pt-4 gap-x-7 hidden">
            <div className="bg-white border border-custom-deep-browm rounded-xl w-[250px]">
              <img
<<<<<<< HEAD
                src="img/women/red-shirt.png"
                alt="lacoste shirt"
=======
                src="img/black-shirt.png"
                alt="nike shirt"
>>>>>>> aa8824c67b4a42c305142766374b2e621f6b1f1b
                className="h-full object-contain"
              />
            </div>

            <div className="lg:flex flex-col gap-y-8 w-full hidden">
              <div className="text-custom-deep-browm flex justify-between items-center w-full">
<<<<<<< HEAD
                <h3 className="font-[450] text-2xl">Lacoste hot red shirt</h3>
                <p className="font-[900]">₦58,000</p>
=======
                <h3 className="font-[450] text-2xl">
                  Reebok black plain shirt
                </h3>
                <p className="font-[900] text-xl">₦48,000</p>
>>>>>>> aa8824c67b4a42c305142766374b2e621f6b1f1b
              </div>

              <div className="flex justify-between items-center font-[450] text-sm text-custom-deep-browm w-full">
                <p>Manufacturer: Reebok</p>
                <p className="line-through ">₦58,000</p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                  <i className="fa-solid fa-star text-custom-brown"></i>
                </div>
                <div className="flex gap-5">
                  <button className="w-6 h-6 rounded-full bg-custom-deep-browm text-custom-wheat">
                    +
                  </button>
                  <span>1</span>
                  <button className="w-6 h-6 rounded-full bg-custom-deep-browm text-custom-wheat">
                    -
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <button className="w-[49%] border-custom-deep-browm border py-2 text-custom-deep-browm font-[450] flex justify-center items-center gap-x-4">
                  <img src="img/delete.png" alt="delete icon" />
                  Remove
                </button>
                <button className="w-[48%] bg-custom-deep-browm text-custom-wheat rounded-sm">
                  Checkout
                </button>
              </div>
            </div>
          </div>

          <button className="font-[450] text-xl text-custom-wheat bg-custom-deep-browm py-3 rounded-md text-center mt-5 ">
            Checkout (<span className="font-[700]">₦</span>264,000)
          </button>
        </section>
      </div>

      <div className="w-[30%] hidden lg:flex flex-col gap-y-4 h-fit">
        <img
          src="img/cart-1.png"
          alt="cart image"
          className="w-full object-contain"
        />
        <img
          src="img/cart-2.png"
          alt="cart image"
          className="w-full object-contain"
        />
      </div>
    </section>
  );
}
export default Cart;
