import { useState } from 'react';
import logo from '../image/logo.png';
import { Link } from 'react-scroll';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="m-0 mt-2">
      <div className="bg-white-800 h-16 flex items-center justify-between px-4">
        {/* Left side of the navbar */}
        <div className="flex items-center ">
          <img
            src={logo}
            alt="Logo"
            className="w-100 md:h-48 h-24 mt-2 md:mt-24"
          />
          <span className="ml-2 text-orange-500">Classy tech</span>
        </div>

        {/* Navigation links (visible on PC-sized screens) */}
        <div className="hidden md:flex flex-grow justify-center space-x-20">
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="text-#171717 hover:text-amber-400 text-base font-normal font-montserrat transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="centerline"
            spy={true}
            smooth={true}
            duration={500}
            className="text-black hover:text-amber-400 text-base font-normal font-montserrat transition-all cursor-pointer"
          >
            Our Service
          </Link>
          <Link
            to="footer"
            spy={true}
            smooth={true}
            duration={500}
            className="text-black hover:text-amber-400 text-base font-normal font-montserrat transition-all cursor-pointer"
          >
            Contact Us
          </Link>
        </div>

        {/* Right side of the navbar (PC-sized screens) */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Sign In button */}
          <button className="bg-white-500 hover:bg-orange-500 text-black px-4 py-2 rounded-md">
            Sign In
          </button>
          {/* Sign Up button */}
          <button className="bg-white-500 hover:bg-orange-500 text-black px-4 py-2 rounded-md">
            Register
          </button>
        </div>

        {/* Mobile Menu Toggle Button (visible only on small screens) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-amber-500 hover:text-amber-400 text-xl font-semibold"
          >
            &#9776;
          </button>
        </div>

        {/* Mobile Menu Dropdown (visible only on small screens) */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="absolute top-16 right-4 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              <Link
                to="/"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Home
              </Link>

              <Link
                to="centerline"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Our Services
              </Link>
              <Link
                to="footer"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Contact Us
              </Link>
              <a
                href=""
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign Up
              </a>
              <a
                href=""
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
