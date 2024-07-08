import { Link } from "react-router-dom";

function FooterBanner() {
  return (
    <section className="w-11/12 mx-auto bg-[url('/img/footer-banner.png')] bg-no-repeat bg-cover h-[411px] rounded-lg flex justify-between my-20">
      <div className="flex items-center ms-5 sm:ms-8">
        <div>
          <div className="w-fit bg-orange px-3 py-6 sm:px-10  border-[6px] flex justify-center items-center">
            <h2>
              <span className="text-xl sm:text-3xl text-brown">Fresh for the Season:</span>
              <br />
              <span className="text-2xl sm:text-3xl font-bold text-brown">
                New Arrivals Just In!
              </span>
            </h2>
          </div>
          <p className="text-white font-normal text-lg mt-6">
            Discover our premium plain shirts, from classic whites to bold
            colors.
          </p>
          <p className="text-white font-normal text-lg mt-2">
            Find your new favorite today.
          </p>
          <Link
            to="/new-arrival"
            className="bg-white font-bold text-sm py-3 px-3 inline-block mt-5 text-custom-brown rounded-sm"
          >
            Shop New Arrivals
          </Link>
        </div>
      </div>
      <div className="sm:w-[50%] w:[70%] sm:block hidden">
        <img src="img/season-shirt.png" alt="" className="h-full w-full" />
      </div>
    </section>
  );
}

export default FooterBanner;
