/* eslint-disable react/prop-types */

function ClothCard({ cloth }) {

  return (
    <div className="bg-white rounded-md p-3" aria-label="card">
      <div className="border-custom-brown border h-40 sm:h-60 rounded-lg p-4 flex justify-center items-center">
        <img src={cloth.img} alt="" className="h-fit" />
      </div>
      <h1 className="text-base font-medium text-custom-deep-browm mt-2">
        {cloth.name}
      </h1>
      <div className="flex items-end justify-between text-custom-deep-browm my-3">
        <p className="font-semibold sm:text-xl">#{cloth.price}</p>
        <p className="font-light line-through sm:text-lg">
          #{cloth.discountedPrice}
        </p>
      </div>
      <button className="w-full bg-custom-deep-browm p-2 font-normal text-white text-sm rounded-sm">
        Add to cart
      </button>
    </div>
  );
}

export default ClothCard;
