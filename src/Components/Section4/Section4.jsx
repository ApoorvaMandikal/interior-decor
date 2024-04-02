import React from "react";

const Section4 = () => {
  return (
    <>
      <div className="my-7 items-center mx-auto w-[85%]">
        <div className="bg-[#FAF4EF] rounded-tr-[4rem] md:p-10 py-20 p-10">
          <p
            className="text-4xl/[45px] md:text-[3.5rem]/[90px] font-bold w-[16rem] md:w-full text-left"
            style={{ fontFamily: "DM Serif Display" }}
          >
            Get your quotation today
          </p>
          <div className="flex flex-col md:flex-row w-[50%] md:w-full gap-5 mt-5">
            <button className="px-8 py-2 bg-[#4B4B4B] text-white shadow-md hover:bg-[#4B4B4B] focus:outline-none focus:ring focus:ring-grey">
              Quote me
            </button>
            <button className="px-8 py-2 bg-white text-black shadow-md focus:outline-none focus:ring focus:ring-grey">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
