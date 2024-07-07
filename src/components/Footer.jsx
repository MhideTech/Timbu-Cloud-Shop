import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-14 sm:w-11/12 mx-auto">
      <section className="flex items-start">
        <div className="sm:w-1/4 w-6/12">
          <img src="/img/nav-logo.png" alt="logo" />
        </div>
        <div className="sm:flex justify-between w-6/12 sm:w-3/4">
          <div className="justify-between flex sm:w-2/3">
            <ul className="sm:w-1/2 w-1/2">
              <h4 className="sm:text-xl font-bold text-custom-deep-browm text-sm mb-4 uppercase">
                Need Help?
              </h4>
              <li className="mb-2 text-custom-deep-browm text-sm font-normal">
                <Link to="/">Chat with us</Link>
              </li>
              <li className="mb-2 text-custom-deep-browm text-sm font-normal">
                <Link to="/">Help center</Link>
              </li>
              <li className="mb-2 text-custom-deep-browm text-sm font-normal">
                <Link to="/">Contact us</Link>
              </li>
            </ul>
            <ul className="sm:w-1/2 w-1/2">
              <h4 className="sm:text-xl font-bold text-custom-deep-browm text-sm mb-4 uppercase">
                About timbu
              </h4>
              <li className="mb-2 text-custom-deep-browm text-sm font-normal">
                <Link to="/">About us</Link>
              </li>
              <li className="mb-2 text-custom-deep-browm text-sm font-normal">
                <Link to="/">Timbu express</Link>
              </li>
              <li className="mb-2 text-custom-deep-browm text-sm font-normal">
                <Link to="/">Contact us</Link>
              </li>
            </ul>
          </div>
          <form className="sm:w-1/3 mt-5 sm:mt-0">
            <h4 className="sm:text-xl mb-4 font-bold text-custom-deep-browm text-sm uppercase">
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
        </div>
      </section>
      <section>
        <div>
          <p className="text-sm text-custom-deep-browm font-[450] mt-10">
            All rights reserved Timbu Cloud shop
          </p>
        </div>
        <div className="flex justify-between mt-8 font-[450] text-sm text-custom-deep-browm">
          <p>
            Designed by <Link to="">@Olawale</Link> | Developed by{" "}
            <Link to="">@console.log(Wurld)</Link> and{" "}
            <Link to="https://hng11.slack.com/team/U07A0HSLGNA">@Orlaaah</Link>
          </p>
          <p>HNG 11 | 2024</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
