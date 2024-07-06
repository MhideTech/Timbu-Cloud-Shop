import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Category from "../components/Category";
import FooterBanner from "../components/FooterBanner";
import Header from "../components/Header";

function Homepage() {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar />
      <Header />
      <Category />
      <FooterBanner />
      <Footer />
    </div>
  );
}

export default Homepage;
