import React, { useState } from "react";
import sofa from "./../../assets/Images/sofa1.png";
import lamp1 from "./../../assets/Images/lamp1.png";

const FurnitureCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

   const goToPreviousSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };


  const images = [sofa,lamp1];

  return (
    <div className="container mx-auto px-4 lg:px-0">
      {/* Grid layout for larger screens */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="w-full"
          />
        ))}
      </div>

      {/* Carousel layout for smaller screens */}
      <div className="lg:hidden">
        <div className="carousel relative">

          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={image} alt={`Slide ${index}`} className="w-full" />
            </div>
          ))}
          <button className="absolute top-0 bottom-0 left-0 px-2 py-4 m-auto text-black transition-opacity duration-500 opacity-50 hover:opacity-100" onClick={goToPreviousSlide}>
            Prev
          </button>
          <button className="absolute top-0 bottom-0 right-0 px-2 py-4 m-auto text-black transition-opacity duration-500 opacity-50 hover:opacity-100" onClick={goToNextSlide}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FurnitureCards;
