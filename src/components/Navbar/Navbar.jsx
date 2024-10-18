import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#home",
  },
  {
    id: 2,
    title: "Services",
    link: "#services",
  },
  {
    id: 3,
    title: "About",
    link: "#about",
  },
  {
    id: 4,
    title: "Booking",
    link: "#booking",
  },
  {
    id: 5,
    title: "Contact",
    link: "#contact",
  },
  {
    id: 6,
    title: "Testimonial",
    link: "#reviews",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-brandDark text-white py-2 font-varela fixed w-full z-50">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="container mx-auto flex justify-between items-center px-4"
        >
          <div>
            <a
              href="#"
              className="text-md font-semibold uppercase"
            >
              New Arrival <span className="font-extralight text-white/70">Gsm World</span>
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-2">
              {NavbarMenu.map((item) => (
                <li key={item.id} className="inline-block text-sm py-2 px-2">
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 999,
                      followSpeed: 1.5,
                      mixBlendMode: "difference",
                      scale: 3,
                    }}
                  >
                    <a
                      href={item.link}
                      className="inline-block text-sm py-2 px-3 uppercase"
                    >
                      {item.title}
                    </a>
                  </UpdateFollower>
                </li>
              ))}
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 1.5,
                  scale: 3,
                  mixBlendMode: "difference",
                }}
              >
                <a
                  href="http://localhost/project/index.php"
                  className="ml-8 text-primary hover:text-white"
                >
                  Logout
                </a>
              </UpdateFollower>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              id="menu-btn"
              className="text-4xl focus:outline-none"
              onClick={toggleMenu}
            >
              <MdMenu className="text-4xl" />
            </button>
          </div>
        </motion.nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-brandDark transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen" : "max-h-0"
          } overflow-hidden`}
        >
          <ul className="flex flex-col items-center py-4">
            {NavbarMenu.map((item) => (
              <li key={item.id} className="w-full text-center py-2">
                <a
                  href={item.link}
                  className="block text-sm py-2 uppercase hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)} // Close the menu when an item is clicked
                >
                  {item.title}
                </a>
              </li>
            ))}
            <li className="w-full text-center py-2">
              <a
                href="http://localhost/project/index.php"
                className="text-primary hover:text-white block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
