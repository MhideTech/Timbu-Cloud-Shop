function Cart() {
  return <div>
    <Addeditem />
  </div>;
}


function Addeditem() {
  return (
    <section className="h-[600px] flex justify-between w-full">
      <div className="w-[70%] bg-custom-wheat h-full rounded-xl p-12">
        <div className="flex justify-between">
          <div className="bg-white border-custom-brown border-2 rounded-xl p-2">
            <img src="img/yellow-shirt 1.png" alt="" />
          </div>
          <div>
            <h4 className="font-[900] text-4xl text-custom-deep-browm">
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
              <h2 className="font-[900] text-4xl text-custom-deep-browm">
                ₦35,000
              </h2>
              <p className="text-xl line-through text-custom-deep-browm">
                ₦40,000
              </p>
            </div>
            <p className="text-sm text-custom-deep-browm">In stock</p>
            <p className="text-sm text-custom-deep-browm">
              + shipping from ₦ 250 to ISOLO
            </p>
            <button className="w-full bg-custom-deep-browm p-4 font-[450] text-custom-wheat text-xl rounded-md my-4">
              Buy now
            </button>
            <button className="w-full p-4 font-[450] text-custom-deep-browm border border-custom-deep-browm text-xl rounded-sm">
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
      <div className="w-[28%]">
        <img
          src="img/cart-lmage.png"
          alt="cart image"
          className="w-full h-full"
        />{" "}
      </div>
    </section>
  );
}
export default Cart;
