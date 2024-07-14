/* eslint-disable react/prop-types */
import React from "react";
import ClothCard from "../components/ClothCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterIconsContainer from "../components/FilterIconsContainer";
import FooterBanner from "../components/FooterBanner";
import TrustedSeller from "../components/TrustedSeller";

function Menwears({ clothesData }) {
  return (
    <div>
      <Navbar />
      <Mensection clothesData={clothesData} />
    </div>
  );
}

function Mensection({ clothesData }) {
  const menClothes = clothesData.filter(
    (cloth) => cloth.description === "men"
  );

  return (
    <div className="mx-auto">
      <section className="w-11/12 m-auto">
        <FilterIconsContainer />

        <section className="bg-custom-wheat py-7 px-4 sm:p-10 mt-14">
          <h2 className="font-semibold text-2xl text-custom-deep-browm mb-8 sm:mb-11">
            Top Selling For Men
          </h2>
          <div className=" grid grid-cols-1 sm:grid-cols-4 sm:gap-y-10 sm:gap-x-4 gap-x-3 gap-y-5">
            {menClothes.map((cloth, i) => (
              <ClothCard key={i} cloth={cloth} />
            ))}
          </div>
        </section>
      </section>
      <TrustedSeller />
      <FooterBanner />
      <Footer />
    </div>
  );
}



export default Menwears;
