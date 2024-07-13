/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ClothCard({ cloth }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(cloth);
  };

  function getFullImage(url) {
    const baseUrl = "https://api.timbu.cloud/images/";
    return `${baseUrl}${url}`;
  }

  return (
    <div
      className="bg-white rounded-md p-3 w-[85%] sm:w-auto mx-auto"
      aria-label="card"
    >
      <div className="border-custom-brown border h-60 sm:h-60 rounded-lg p-4 flex justify-center items-center">
        <img src={getFullImage(cloth.photos[0].url)} alt="" className="h-fit" />
      </div>
      <h1 className="text-base font-medium text-custom-deep-browm mt-2">
        {cloth.name}
      </h1>
      <div className="flex items-end justify-between text-custom-deep-browm my-3">
        <p className="font-semibold sm:text-xl">
          #{cloth.current_price[0].NGN[0]}
        </p>
        <p className="font-light line-through sm:text-lg">
          #
          {cloth.current_price[0].NGN[0] * 0.15 + cloth.current_price[0].NGN[0]}
        </p>
      </div>
      <button
        className="w-full bg-custom-deep-browm p-2 font-normal text-white text-sm rounded-sm"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ClothCard;
