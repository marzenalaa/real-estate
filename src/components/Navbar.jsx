import { useState } from "react";
import { assets } from "../assets/assets";
import { useEffect } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);
  return (
    <navbar>
      <div className="absolute top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
          <img src={assets.logo} alt="logo" />
          <ul className="hidden md:flex gap-7 text-white">
            <a href="#Header" className="cursor-pointer hover:text-gray-400">
              Home
            </a>
            <a href="#About" className="cursor-pointer hover:text-gray-400">
              About
            </a>
            <a href="#Projects" className="cursor-pointer hover:text-gray-400">
              Projects
            </a>
            <a
              href="#Testimonials"
              className="cursor-pointer hover:text-gray-400"
            >
              Testimonials
            </a>
          </ul>
          <button className="hidden md:block bg-white px-8 py-2 rounded-full font-medium text-black">
            Sign up
          </button>
          <img
            onClick={() => setShowMenu(true)}
            src={assets.menu_icon}
            className="md:hidden w-7 cursor-pointer"
            alt=""
          />
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
        >
          <div className="flex justify-end p-6">
            <img
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              className="w-6 cursor-pointer"
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap2 mt-5 px-5 text-lg font-medium">
            <a
              onClick={() => setShowMenu(false)}
              href="#Header"
              className="px-4 py-2 rounded-full inline-block"
            >
              Home
            </a>
            <a
              onClick={() => setShowMenu(false)}
              href="#About"
              className="px-4 py-2 rounded-full inline-block"
            >
              About
            </a>
            <a
              onClick={() => setShowMenu(false)}
              href="#Products"
              className="px-4 py-2 rounded-full inline-block"
            >
              Products
            </a>
            <a
              onClick={() => setShowMenu(false)}
              href="#Testimonials"
              className="px-4 py-2 rounded-full inline-block"
            >
              Testimonials
            </a>
          </ul>
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;