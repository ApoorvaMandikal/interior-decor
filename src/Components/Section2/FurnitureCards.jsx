import React, { useEffect, useState, useRef } from "react";
import sofa from "./../../assets/Images/sofa1.png";
import lamp1 from "./../../assets/Images/lamp1.png";
import chair1 from "./../../assets/Images/chair1.png";
import chair2 from "./../../assets/Images/chair2.png";
import chair3 from "./../../assets/Images/chair3.png";
import cabinet1 from "./../../assets/Images/cabinet1.png";


const FurnitureCards = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null); // Ref for the container element
  const itemRef = useRef(null); // Ref for one of the carousel items
  let itemWidth = 0;

  useEffect(() => {
    // Calculate the width of one carousel item after component has mounted
    if (itemRef.current) {
      itemWidth = itemRef.current.clientWidth;
    }
  }, []);

  const handleScroll = () => {
    // Set the scroll position when the container is scrolled
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      setScrollPosition(scrollLeft);
    }
  };

  const calculateTranslation = (index) => {
    // Calculate the translation for each carousel item
    return `translateX(${index * itemWidth - scrollPosition}px)`;
  };

  const bgColor = "#FAF4EF";
  const items = [
    { image: chair1, text: "Chaise Molle", price: "$18" },
    { image: chair2, text: "Chaise Molle", price: "$18" },
    { image: lamp1, text: "Chaise Molle", price: "$18" },
    { image: chair3, text: "Chaise Molle", price: "$18" },
    { image: cabinet1, text: "Chaise Molle", price: "$48" },
    { image: sofa, text: "Chaise Molle", price: "$78" },
  ];

  return (
    <div className="container mx-auto md:ml-0 ml-[7%] lg:px-0">
      {/* Grid layout for larger screens */}
      <div className="hidden md:grid lg:grid-cols-3 md:grid-cols-2 lg:gap-4">
      {items.map((item, index) => (
            <div
              ref={index === 0 ? itemRef : null}
              key={index}
              className={`grid-item w-[90%] inline-block my-10 `}
              style={{ transform: calculateTranslation(index) }}
            >
              <div className="bg-[#FAF4EF] py-6 px-6 h-full rounded-bl-[4rem]">
                <div className="flex flex-col justify-between h-[120%] ">
                  <div className="flex flex-col px-5 py-5 text-start" style={{fontFamily: 'DM Serif Display'}}>
                    <p className="text-3xl font-bold">{item.text}</p>
                    <p className="text-xl">{item.price}</p>
                  </div>
                  <img
                    src={item.image}
                    alt={`Item ${index}`}
                    className=" w-72 h-72 mb-2"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Carousel layout for smaller screens */}
      <div className="md:hidden">
        <div
          ref={containerRef}
          className="carousel-container relative overflow-x-auto whitespace-nowrap w-full scroll-smooth"
          onScroll={handleScroll}
          style={{ scrollBehavior: "smooth" }}
        >
          {items.map((item, index) => (
            <div
              ref={index === 0 ? itemRef : null}
              key={index}
              className={`carousel-item w-[70%] sm:w-[50%] inline-block mr-10 scroll-ml-6 mt-10 h-[100vw] sm:[65vw]`}
              style={{ transform: calculateTranslation(index) }}
            >
              <div className="bg-[#FAF4EF] py-6 px-6 h-[90%] sm:h-[60%] rounded-bl-[4rem]">
                <div className="flex flex-col justify-between h-[125%] sm:h-[120%]">
                  <div className="flex flex-col text-start" style={{fontFamily: 'DM Serif Display'}}>
                    <p className="text-3xl font-bold">{item.text}</p>
                    <p className="text-xl">{item.price}</p>
                  </div>
                  <img
                    src={item.image}
                    alt={`Item ${index}`}
                    className=" w-72 h-72 sm:h-[22rem] mb-2"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FurnitureCards;
