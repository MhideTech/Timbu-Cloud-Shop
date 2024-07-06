function Footer() {
  return (
    <footer className="py-14">
      <section className="flex justify-between items-start">
        <div>
          <img src="/img/nav-logo.png" alt="logo" />
        </div>
        <ul>
          <h4 className="font-bold text-custom-deep-browm text-sm mb-4 uppercase">
            Need Help?
          </h4>
          <li className="text-custom-deep-browm text-sm font-normal">
            <a href="#">Chat with us</a>
          </li>
          <li className="text-custom-deep-browm text-sm font-normal">
            <a href="#">Help center</a>
          </li>
          <li className="text-custom-deep-browm text-sm font-normal">
            <a href="#">Contact us</a>
          </li>
        </ul>
        <ul>
          <h4 className="font-bold text-custom-deep-browm text-sm mb-4 uppercase">
            About timbu
          </h4>
          <li className="text-custom-deep-browm text-sm font-normal">
            <a href="#">About us</a>
          </li>
          <li className="text-custom-deep-browm text-sm font-normal">
            <a href="#">Timbu express</a>
          </li>
          <li className="text-custom-deep-browm text-sm font-normal">
            <a href="#">Contact us</a>
          </li>
        </ul>
        <form>
          <h4 className="font-bold text-custom-deep-browm text-sm uppercase">
            new to timbu
          </h4>
          <p className="text-xs text-custom-deep-browm font-normal">
            Subscribe to our newsletter to get updates on our latest offers!
          </p>

          <button className="w-full bg-custom-wheat my-4 text-custom-deep-browm border-custom-deep-browm border p-2 text-sm font-[450] rounded-[4px]">
            Iamonowu@gmail.com <i className="fa-solid fa-envelope ps-4"></i>
          </button>

          <button className="w-full bg-custom-deep-browm p-2 rounded-[4px] text-custom-wheat">
            Submit
          </button>
        </form>
      </section>
      <section>
        <div>
          <p className="text-sm text-custom-deep-browm font-[450] mt-10">
            All rights reserved Timbu Cloud shop
          </p>
        </div>
        <div className="flex justify-between mt-8 font-[450] text-sm text-custom-deep-browm">
          <p>
            Designed by @Olawale | Developed by @console.log(Wurld) and @Orlaaah
          </p>
          <p>HNG 11 | 2024</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
