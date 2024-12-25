import { useState, useEffect } from "react";
import { links, assets } from "../constants";
import Button from "./Button";
import { motion } from "framer-motion";

const Navbar = () => {
  const { menu_icon, cross_icon } = assets;
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
  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: { type: "spring", stiffness: 50 },
    },
  };
  return (
    <nav>
      <div className="absolute top-0 left-0 w-full z-10">
        {/* Menu */}
        <div className="container flex items-center justify-between mx-auto py-4 px-6 md:px-20 lg:px-32">
          <p className="text-white font font-semibold text-2xl">PrimeHomes</p>
          <ul className="hidden md:flex gap-7 text-white">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.link}
                  className="cursor-pointer hover:text-yummyYellow"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button
            title="Sign up"
            href="#"
            className="hidden md:block text-bitBlack border-yummyYellow"
          />
          <img
            onClick={() => setShowMenu(true)}
            src={menu_icon}
            className="md:hidden w-7 cursor-pointer"
            alt="Open menu"
            role="button"
            aria-expanded={showMenu}
            aria-controls="mobile-menu"
          />
        </div>
        {/* Mobile Menu */}
        <motion.div
          className="w-full md:hidden fixed top-0 right-0 bottom-0 bg-white z-20"
          initial="closed"
          animate={showMenu ? "open" : "closed"}
          variants={menuVariants}
        >
          <div className="flex justify-end p-6">
            <img
              onClick={() => setShowMenu(false)}
              src={cross_icon}
              className="w-7 cursor-pointer"
              alt="Close menu"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            {links.map((link, index) => (
              <li key={index} role="menuitem">
                <a
                  onClick={() => setShowMenu(false)}
                  href={link.link}
                  className="px-4 py-2 rounded-full inline-block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
