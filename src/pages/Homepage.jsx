/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Category from "../components/Category";
import FooterBanner from "../components/FooterBanner";
import Header from "../components/Header";
import Loader from "../components/Loader";

function Homepage({ isLoading, clothesData }) {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mx-auto">
      <Navbar />
      <Header />
      <Category clothesData={clothesData} />
      <FooterBanner />
      <Footer />
    </div>
  );
}

export default Homepage;
