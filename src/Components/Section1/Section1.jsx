import React from "react";
import image1 from "./../../assets/Images/image1.png";

const Section1 = () => {
  return (
    <>
      <div className="my-6 items-center mx-auto" style={{ width: "85%" }}>
        <div
          className="lg:w-6/12 right-0 absolute h-52"
          style={{ backgroundColor: "#FAF4EF" }}
        ></div>
        <div className="w-full">
          <img
            src={image1}
            alt="First image"
            className="float-end"
            style={{ width: "80%" }}
          ></img>
        </div>
        <div
          className="bg-white box-border z-10 relative opacity-90"
          style={{ top: "23rem", width: "35%", height: "28rem" }}
        >
          <div className="w-full flex flex-col absolute mt-12 text-start ">
            <span
              className="block font-black py-12"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "4rem",
                lineHeight: "1",
              }}
            >
              Modern Interior for your Dream House
            </span>
            <span className="text-2xl pt-2 w-9/12" style={{ color: "#737373" }}>
              We custom make designs to suit your needs.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
