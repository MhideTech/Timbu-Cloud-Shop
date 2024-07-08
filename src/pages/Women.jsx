/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";
import FilterIconsContainer from "../components/FilterIconsContainer";
import ClothCard from "../components/ClothCard";
import Footer from "../components/Footer";
import FooterBanner from "../components/FooterBanner";

function Women({ clothesData }) {
  const womenClothes = clothesData.filter((cloth) => cloth.category === "Women");

  return (
    <div>
      <Navbar />
      <section className="w-11/12 mx-auto">
        <FilterIconsContainer />
        <section className="bg-custom-wheat py-7 px-4 sm:p-10 mt-14">
          <h2 className="font-semibold text-2xl text-custom-deep-browm mb-8 sm:mb-11">
            Top Selling For Men
          </h2>
          <div className=" grid grid-cols-2 sm:grid-cols-4 sm:gap-y-10 sm:gap-x-4 gap-x-3 gap-y-5">
            {womenClothes.map((cloth, i) => (
              <ClothCard key={i} cloth={cloth} />
            ))}
          </div>
        </section>
      </section>
      <FooterBanner />
      <Footer />
    </div>
  );
}

export default Women;
