import React, { useState } from "react";
import { Card } from "./Card";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export const Testimonial = (props) => {
  const reviews = props.reviews;

  // dark mode config
  let isDarkMode = props.isDarkMode;
  let setDarkMode = props.setDarkMode;

  const [index, setIndex] = useState(0);

  function leftShiftHandler(index) {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    let newIndex = Math.floor(Math.random() * reviews.length); // we have to find random index
    setIndex(newIndex);
  }

  return (
    <div className="testimonial-container">
      <Card
        reviews={reviews[index]}
        index={index}
        setIndex={setIndex}
        isDarkMode={isDarkMode}
        setDarkMode={setDarkMode}
      />

      <div className={`button-card ${isDarkMode ? "" : "light-mode"}`}>
        <div className="buttons">
          <div className="button-left" onClick={leftShiftHandler}>
            <FaChevronLeft />
          </div>
          <div className="button-right" onClick={rightShiftHandler}>
            <FaChevronRight />
          </div>
        </div>

        <button className={`surprise-button ${isDarkMode ? "" : "light-mode"}`} onClick={surpriseHandler}>
          Surprise me!
        </button>
      </div>
    </div>
  );
};
