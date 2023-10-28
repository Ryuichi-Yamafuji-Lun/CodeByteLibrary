import { useState } from "react";
import { Link } from "react-router-dom";
// Logo
import Logo from "../assets/logo/CodeByteLogo.png";
// Icons
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { TiHome } from "react-icons/ti";

const Header = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="sticky top-0 px-6 h-20 w-screen flex justify-between items-center bg-header-color text-black shadow-lg ">
      <div>
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link to="/" className="flex items-center hover:text-secondary-color">
            <p className="pl-1">Home</p>
          </Link>
        </li>
        <li className="flex items-center hover:text-secondary-color">
          <Link to="/About" className="flex items-center">
            <p className="pl-1">About</p>
          </Link>
        </li>
        <li>
          <Link to="/OrderDetail" className="flex items-center p-1 hover:text-secondary-color">
            <FaShoppingCart/>
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden">
        {!nav ? <FaBars className="text-3xl" /> : <FaTimes className="text-3xl"/>}
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-1/2 w-full ${!nav ? "hidden" : ""} flex flex-col items-center text-xl`}>
        <ul className="flex flex-col items-center justify-center p-10 bg-background-white border-2 border-line-white">
          <li>
            <Link to="/" className="flex flex-col items-center p-1">
              <TiHome />
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/About" className="flex flex-col items-center p-1">
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link to="/OrderDetail" className="flex flex-col items-center p-1">
              <FaShoppingCart />
              <p>Order</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header