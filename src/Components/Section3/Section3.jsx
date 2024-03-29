import React, { useState } from "react";
import showcase1 from "./../../assets/Images/showcase1.png";

const Section3 = () => {
  const [scrollX, setScrollX] = useState(0);

  const handlePrevClick = () => {
    const newX = scrollX + 100;
    setScrollX(newX > 0 ? 0 : newX);
  };

  const handleNextClick = () => {
    const containerWidth = document.querySelector(
      ".carousel-container"
    ).clientWidth;
    const itemWidth = document.querySelector(".carousel-item").clientWidth;

    const newX = scrollX - containerWidth;
    const maxScrollX = -1 * (items.length - 1) * itemWidth;
    setScrollX(newX < maxScrollX ? maxScrollX : newX);
  };

  const bgColor = "#FAF4EF";
  const items = [
    { image: showcase1, text: "Item 1" },
    { image: showcase1, text: "Item 2" }
  ];

  return (
    <>
        <div className="my-7 flex flex-col items-center mx-auto md:w-[85%] w-full">
      {/* Carousel layout for smaller screens */}
      <div className="carousel-container relative overflow-hidden w-full">
        <div
          className="carousel-track flex transition-transform duration-300"
          style={{ transform: `translateX(${scrollX}px)` }}
        >
          {items.map((item, index) => (
            <div key={index} className={`carousel-item ${bgColor} w-[50%] `}>
              <p className="text-lg font-bold">{item.text}</p>
              <img
                src={item.image}
                alt={`Item ${index}`}
                className="w-full mb-2"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-between top-[50%] absolute align-center w-[100%]">
          <button
            className="relative px-2 py-4 text-black"
            onClick={handlePrevClick}
          >
            Prev
          </button>
          <button
            className="relative px-2 py-4 text-black"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Section3;
