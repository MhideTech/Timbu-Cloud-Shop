import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsopen() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="flex justify-between items-center h-20">
      <div className="flex items-center gap-5">
        <i
          className="fa-solid fa-bars text-xl block md:hidden text-custom-brown"
          onClick={handleIsopen}
        ></i>
        <Link to="/">
          <img src="img/nav-logo.png" alt="nav-logo" />
        </Link>
      </div>
      <ul className="flex md:gap-16 text-custom-brown">
        <Link to="/women">
          <li className="hidden md:block">Women</li>
        </Link>
        <Link to="/men">
          <li className="hidden md:block">Men</li>
        </Link>
        <Link to="/newarrival">
          <li className="hidden md:block">New Arrival</li>
        </Link>
        <li>
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i> Cart
          </Link>
        </li>
      </ul>

      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-20"
            onClick={handleIsopen}
          ></div>

          {/* Mobile View */}
          <nav className="fixed top-0 left-0 bg-custom-wheat z-30 w-[229px] py-7 ps-6 pe-3">
            <div className="mb-5 flex justify-between items-center">
              <Link to="/">
                <img src="img/nav-logo.png" alt="logo" />
              </Link>
              <i
                className="fa-solid fa-xmark cursor-pointer w-[10px] h-[10px]"
                onClick={handleIsopen}
              ></i>
            </div>
            <ul className="flex flex-col gap-9 font-[500] text-custom-deep-browm">
              <li>All</li>
              <li>
                <Link to="/men">Men</Link>
              </li>
              <li>
                <Link to="/women">Women</Link>
              </li>
              <li>
                <Link to="/newarrival">New Arrivals</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </nav>
  );
}

export default Navbar;
