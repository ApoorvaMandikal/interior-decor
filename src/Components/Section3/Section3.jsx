import React, { useState } from "react";
import showcase1 from "./../../assets/Images/showcase1.png";
import arrowleft from "./../../assets/Images/Arrowleft.png";
import arrowright from "./../../assets/Images/Arrowright.png";

const Section3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const bgColor = "#FAF4EF";
  const items = [
    { image: showcase1, text: "Showcase" },
    { image: showcase1, text: "Item 2" },
  ];

  return (
    <>
      <div className="my-7 items-center mx-auto md:w-[85%] w-full ml-[7%]">
        <div className="carousel-container relative overflow-hidden w-full">
          <div
            className="carousel-track flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className="carousel-item flex-shrink-0 w-full">
                <div className="flex flex-col md:flex-row items-center">
                  <div
                    className="absolute w-6/12 left-[-10%] top-[10%] lg:h-52 md:h-44 h-28"
                    style={{ backgroundColor: "#FAF4EF" }}
                  ></div>
                  <img
                    src={item.image}
                    alt={`Item ${index}`}
                    className="w-full md:w-[60%] z-10"
                  />
                  <div className="w-[85%] flex flex-col justify-between text-left mr-auto md:mx-10 md:h-96 h-full">
                    <p
                      className="text-3xl lg:text-6xl font-bold my-10"
                      style={{ fontFamily: "DM Serif Display" }}
                    >
                      {item.text}
                    </p>
                    <div className="my-5 w-[21rem] text-[#737373]">
                      <span className="text-xl/[30px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        A, eleifend viverra nam libero tellus. Luctus ornare ac,
                        dolor tempor pellentesque nec.{" "}
                      </span>
                    </div>
                    <div className="flex my-10 w-full -translate-y-1/2 opacity-50 focus:opacity-100 gap-2 ">
                      <button
                        className="px-2 py-4 text-black bg-[#FAF4EF]"
                        onClick={handlePrevClick}
                      >
                        <img src={arrowleft} alt="prev"></img>
                      </button>
                      <button
                        className="px-2 py-4 text-black bg-[#FAF4EF]"
                        onClick={handleNextClick}
                      >
                        <img src={arrowright} alt="next"></img>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
