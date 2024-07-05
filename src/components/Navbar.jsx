function Navbar() {
  return (
    <nav className="flex justify-between items-center h-20">
      <div className="">
        <img src="img/nav-logo.png" alt="" />
      </div>
      <ul className="flex gap-16">
        <li>Women</li>
        <li>Men</li>
        <li>Unisex</li>
        <li>
          <i class="fa-solid fa-cart-shopping"></i> Cart
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
