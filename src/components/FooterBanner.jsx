function FooterBanner() {
  return (
    <section className="bg-[url('/public//img/footer-banner.png')] bg-no-repeat bg-cover h-[411px] rounded-lg flex justify-between my-20">
      <div className="flex items-center sm:ms-8">
        <div>
          <div className="w-6/12 bg-orange h-36 border-[6px] flex justify-center items-center">
            <h2>
              <span className="text-3xl text-brown">Fresh for the Season:</span>
              <br />
              <span className="text-3xl font-bold text-brown">
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
          <button className="w-44 bg-white font-[900] text-sm py-2 mt-10 text-custom-brown rounded-sm">
            Shop New Arrivals
          </button>
        </div>
      </div>
      <div className="w-[50%]">
        <img src="img/season-shirt.png" alt="" className="h-full w-full" />
      </div>
    </section>
  );
}

export default FooterBanner;
