import React, { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TrustedSeller from "../components/TrustedSeller";
import FooterBanner from "../components/FooterBanner";
import { CartContext } from "../context/CartContext";
import CartCard from "../components/CartCard";

function Cart() {
  return (
    <div>
      <Navbar />
      <CartItem />
      <TrustedSeller />
      <FooterBanner />
      <Footer />
    </div>
  );
}

//Cart
function CartItem() {
  const { cart } = useContext(CartContext);

  return (
    <section className="w-11/12 mx-auto h-fit mt-10 md:mt-16 flex justify-between">
      <div className="bg-custom-wheat p-3 lg:p-10 lg:w-[68%] rounded-lg w-full">
        <h3 className="font-bold text-3xl text-custom-deep-browm">Cart</h3>

        <section className="flex flex-col gap-y-3">
          {cart.map((cloth, i) => (
            <CartCard key={i} cloth={cloth} />
          ))}

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
          className="w-full object-contain mt-9"
        />
      </div>
    </section>
  );
}
export default Cart;
