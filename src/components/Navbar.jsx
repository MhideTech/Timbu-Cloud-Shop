import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-11/12 mx-auto flex justify-between items-center h-20 sm:mb-12">
      <div className="">
        <Link to='/'>
          <img src="img/nav-logo.png" alt="" />
        </Link>
      </div>
      <ul className="flex gap-16">
        <Link to="women">Women</Link>
        <Link to="men">Men</Link>
        <Link to="cart">
          <i className="fa-solid fa-cart-shopping"></i> Cart
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
