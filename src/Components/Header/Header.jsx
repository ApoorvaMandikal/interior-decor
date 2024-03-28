import React, { useState } from "react";
import group from "./../../assets/Images/Group.png";
import MenuItems from "./MenuItems";
import magnifying from "./../../assets/Images/ph_magnifying-glass.png";
import cart from "./../../assets/Images/Vector.png";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="flex items-center mx-auto" style={{ width: "85%" }}>
        <div className="w-full lg:flex-row flex-col flex flex-wrap justify-between items-center">
          <div
            className="w-full lg:w-max flex flex-wrap justify-between items-center lg:h-32 h-24"
            // style={{ width: "85%" }}
          >
            <a href="#" className="flex items-center">
              <span
                className="self-center font-semibold whitespace-nowrap text-4xl/[34.42px]"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                SHPX
              </span>
            </a>
            <div className="flex items-center lg:hidden">
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-2 dark:text-gray-400 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <img src={group} className="h-5 w-7 sm:h-7 sm:w-9" alt="Menu" />
              </button>
            </div>
          </div>
          <div
            className={`lg:flex lg:w-auto  ${
              isMobileMenuOpen ? "flex" : "hidden"
            }`}
            id="mobile-menu"
          >
            <MenuItems />
          </div>
          <div
            className="hidden justify-between items-center w-full lg:space-x-3 lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <img src={magnifying} className="h-8" alt="Logo" />
            <img src={cart} className="h-8" alt="Logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
