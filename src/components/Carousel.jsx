/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";
import React from "react";

const cards = [
  <div className="bg-red-300 h-64">Card 1</div>,
  <div className="bg-blue-300 h-64">Card 2</div>,
  <div className="bg-green-300 h-64">Card 3</div>,
  <div className="bg-yellow-300 h-64">Card 4</div>,
  <div className="bg-purple-300 h-64">Card 5</div>,
  <div className="bg-pink-300 h-64">Card 6</div>,
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * (100 / 3.5)}%)` }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-1/3 flex-shrink-0 mx-2"
            style={{ minWidth: "calc((100% / 3.5) - 16px)" }}
          >
            {card}
          </div>
        ))}
      </div>
      {currentIndex < cards.length - 0 && (
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={handleNext}
        >
          &gt;
        </button>
      )}
      {currentIndex > 0 && (
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={handlePrev}
        >
          &lt;
        </button>
      )}
    </div>
  );
};

export default Carousel;
