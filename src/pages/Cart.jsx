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
function NewCart() {
  return (
    <section className="w-11/12 mx-auto h-fit mt-16 flex justify-between">
      <div className="bg-custom-wheat p-10 w-[68%] rounded-lg">
        <h3 className="font-bold text-4xl text-custom-deep-browm">Cart</h3>

        <section className="flex flex-col gap-y-3">
          <div className="flex pt-10 gap-x-7">
            <div className="bg-white border border-custom-deep-browm rounded-xl w-[250px]">
              <img
                src="img/women/turquoise-shirt.png"
                alt="T-Shirt"
                className="h-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-y-8 w-full">
              <div className="text-custom-deep-browm flex justify-between items-center w-full">
                <h3 className="font-[450] text-2xl">
                  Nike turquoise plain shirt
                </h3>
                <p className="font-bold">₦80,000</p>
              </div>

              <div className="flex justify-between items-center font-[450] text-sm text-custom-deep-browm w-full">
                <p>Manufacturer: Nike</p>
                <p className="line-through">₦88,000</p>
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
                  <span>2</span>
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

          <hr className="border-b-1 border-custom-deep-browm my-5" />

          {/* lacoste gold shirt */}
          <div className="flex pt-4 gap-x-7">
            <div className="bg-white border border-custom-deep-browm rounded-xl w-[250px]">
              <img
                src="img/men/yellow-shirt.png"
                alt="lacoste shirt"
                className="h-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-y-8 w-full">
              <div className="text-custom-deep-browm flex justify-between items-center w-full">
                <h3 className="font-[450] text-2xl">
                  Lacoste gold yellow shirt
                </h3>
                <p className="font-[900]">₦35,000</p>
              </div>

              <div className="flex justify-between items-center font-[450] text-sm text-custom-deep-browm w-full">
                <p>Manufacturer: Lacoste</p>
                <p className="line-through">₦40,000</p>
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
                  <span>4</span>
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

          {/* border */}
          <hr className="border-b-1 border-custom-deep-browm my-5" />

          {/* nike white shirt */}
          <div className="flex pt-4 gap-x-7">
            <div className="bg-white border border-custom-deep-browm rounded-xl w-[250px]">
              <img
                src="img/men/white-shirt.png"
                alt="lacoste shirt"
                className="h-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-y-8 w-full">
              <div className="text-custom-deep-browm flex justify-between items-center w-full">
                <h3 className="font-[450] text-2xl">Nike white plain shirt</h3>
                <p className="font-[900]">₦58,000</p>
              </div>

              <div className="flex justify-between items-center font-[450] text-sm text-custom-deep-browm w-full">
                <p>Manufacturer: Nike</p>
                <p className="line-through">₦68,000</p>
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

          {/* border */}
          <hr className="border-b-1 border-custom-deep-browm my-5" />

          <div className="flex pt-4 gap-x-7">
            <div className="bg-white border border-custom-deep-browm rounded-xl w-[250px]">
              <img
                src="img/women/red-shirt.png"
                alt="lacoste shirt"
                className="h-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-y-8 w-full">
              <div className="text-custom-deep-browm flex justify-between items-center w-full">
                <h3 className="font-[450] text-2xl">Lacoste hot red shirt</h3>
                <p className="font-[900]">₦58,000</p>
              </div>

              <div className="flex justify-between items-center font-[450] text-sm text-custom-deep-browm w-full">
                <p>Manufacturer: Nike</p>
                <p className="line-through">₦68,000</p>
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

          <Link
            to="/checkout"
            className="bg-custom-deep-browm py-3 rounded-md text-center"
          >
            <button className="font-[450] text-xl text-custom-wheat">
              Checkout (<span className="font-[700]">₦</span>288,000)
            </button>
          </Link>
        </section>
      </div>

      <div className="w-[30%] flex flex-col gap-y-4 h-fit">
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
