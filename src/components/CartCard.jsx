/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function CartCard({ cloth }) {
  const [noOfItem, setNoOfItems] = useState(1);
  const { cart, removeFromCart } = useContext(CartContext);

  function getFullImage(url) {
    const baseUrl = "https://api.timbu.cloud/images/";
    return `${baseUrl}${url}`;
  }

  function handleAddProduct() {
    setNoOfItems((no) => (no += 1));
  }

  function handleRemoveProduct() {
    if (noOfItem == 1) return;
    setNoOfItems((no) => (no -= 1));
  }

  return (
    <>
      <div className="flex pt-6 lg:pt-7 lg:gap-x-7 gap-x-5">
        <div className="bg-white border border-custom-deep-browm rounded-xl h-[145px] md:h-full lg:w-[250px]">
          <img
            src={getFullImage(cloth.photos[0].url)}
            alt="T-Shirt"
            className="h-full object-contain"
          />
        </div>

        <div className="flex flex-col gap-y-5 lg:gap-y-8 w-full">
          <div className="text-custom-deep-browm flex justify-between items-center w-full">
            <h3 className="font-[450] lg:text-2xl text-sm">{cloth.name}</h3>
            <p className="font-bold text-xl lg:block hidden">
              {new Intl.NumberFormat().format(
                cloth.current_price[0].NGN[0] * noOfItem
              )}
            </p>
          </div>

          <div className="flex justify-between items-center font-[450] text-sm text-custom-deep-browm w-full">
            <p>Manufacturer: {cloth.name.split(" ")[0]}</p>
            <div className="flex gap-1 text-[10px] lg:hidden">
              <i className="fa-solid fa-star text-custom-brown"></i>
              <i className="fa-solid fa-star text-custom-brown"></i>
              <i className="fa-solid fa-star text-custom-brown"></i>
              <i className="fa-solid fa-star text-custom-brown"></i>
              <i className="fa-solid fa-star text-custom-brown"></i>
            </div>
            <p className="line-through lg:block hidden">
              {new Intl.NumberFormat().format(
                cloth.current_price[0].NGN[0] * 0.15 +
                  cloth.current_price[0].NGN[0]
              )}
            </p>
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
              <p className="text-[17px] font-bold text-custom-deep-browm ">
                {new Intl.NumberFormat().format(
                  cloth.current_price[0].NGN[0] * noOfItem
                )}
              </p>
              <p className="text-[12px] font-[450] text-custom-deep-browm line-through">
                {new Intl.NumberFormat().format(
                  cloth.current_price[0].NGN[0] * 0.15 +
                    cloth.current_price[0].NGN[0]
                )}
              </p>
            </div>
            {/*End of Mobile */}
            <div className="flex lg:gap-5 gap-3">
              <button
                className="w-6 h-6 rounded-full bg-custom-deep-browm text-custom-wheat"
                onClick={handleAddProduct}
              >
                +
              </button>
              <span>{noOfItem}</span>
              <button
                className="w-6 h-6 rounded-full bg-custom-deep-browm text-custom-wheat"
                onClick={handleRemoveProduct}
              >
                -
              </button>
            </div>
          </div>

          {/* Mobile */}
          <div className="text-[10px] font-[450] text-custom-deep-browm lg:hidden">
            <p>in stock</p>
            <p>+ shipping from ₦ 250 to ISOLO</p>
          </div>
          {/*End of Mobile */}

          <div className="flex justify-between">
            <button
              className="w-[49%] border-custom-deep-browm border py-2 text-custom-deep-browm font-[450] flex justify-center items-center gap-x-4 text-[14px]"
              onClick={() => removeFromCart(cloth.unique_id)}
            >
              <img src="img/delete.png" alt="delete icon" className="w-3" />
              Remove
            </button>
            <button className="w-[48%] bg-custom-deep-browm text-custom-wheat rounded-sm text-[14px]">
              Checkout
            </button>
          </div>
        </div>
      </div>
      <hr className="border-b-1 border-custom-deep-browm my-5" />
    </>
  );
}

export default CartCard;
