/* eslint-disable react/prop-types */
import React from "react";
import ClothCard from "../components/ClothCard";
import FilterIconsContainer from "../components/FilterIconsContainer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function NewArrival({ clothesData }) {
  const newArrival = clothesData.slice(0, 20);
  return (
    <div>
      <Navbar />
      <section className="w-11/12 mx-auto">
        <FilterIconsContainer />
        <section className="bg-custom-wheat py-7 px-4 sm:p-10 mt-14">
          <h2 className="font-semibold text-2xl text-custom-deep-browm mb-8 sm:mb-11">
            New Arrivals
          </h2>
          <div className=" grid grid-cols-2 sm:grid-cols-4 sm:gap-y-10 sm:gap-x-4 gap-x-3 gap-y-5">
            {newArrival?.map((cloth, i) => (
              <ClothCard key={i} cloth={cloth} />
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default NewArrival;
