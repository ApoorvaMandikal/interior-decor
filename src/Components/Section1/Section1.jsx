import React from "react";
import image1 from "./../../assets/Images/image1.png";

const Section1 = () => {
  return (
    <>
      <div className="my-6 items-center mx-auto md:w-[85%] w-full">
        <div
          className="lg:w-6/12 right-0 lg:top-56 absolute h-52"
          style={{ backgroundColor: "#FAF4EF" }}
        ></div>
        <div className="w-full md:block overflow-x-hidden whitespace-nowrap relative md:ml-0 ">
          <img
            src={image1}
            alt="First image"
            className="relative right-[-25%] float-end md:w-[80%] w-full"
          ></img>
        </div>
        <div className=" box-border md:relative absolute h-auto md:ml-0 ml-[7%] md:w-[35%] w-[55%]">
          <div className="bg-white z-10 opacity-90 w-full flex flex-col absolute md:mt-[70%] mt-[-100%] text-start">
            <span
              className="block font-black lg:py-12 md:py-6 py-2 md:text-[4vw] text-[7vw]"
              style={{
                fontFamily: "'DM Serif Display', serif",
                lineHeight: "1",
              }}
            >
              Modern Interior for your Dream House
            </span>
            <span
              className="md:text-[1.5vw] text-[2.5vw] my-8 w-9/12"
              style={{ color: "#737373" }}
            >
              We custom make designs to suit your needs.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
