import React, { useState } from "react";
import dropdown from "./../../assets/Images/gridicons_dropdown.png";

const Section2 = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="my-7 flex items-center mx-auto md:w-[85%] w-full">
      <div className="flex lg:flex-row w-[85%] md:w-[100%] justify-between items-center mx-auto ">
        <span
          className="md:text-[4vw] text-[7vw] font-black"
          style={{
            fontFamily: "'DM Serif Display', serif",
            lineHeight: "1",
          }}
        >
          Products
        </span>
        <div className="flex items-center lg:hidden">
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center text-sm"
            aria-controls="mobile-menu-2"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="text-[5vw] md:text-[3vw] font-bold">All</span>
            <img src={dropdown} className="h-6 w-6" alt="Menu" />
          </button>
        </div>
      </div>
      <div
        className={`lg:flex lg:w-auto  ${isMobileMenuOpen ? "flex" : "hidden"}`}
        id="mobile-menu"
      >
      </div>
    </div>
  );
};

export default Section2;
