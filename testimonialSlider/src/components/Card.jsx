import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export const Card = (props) => {
  const data = props.reviews;
  // console.log(data);

  // light mode config
  let isDarkMode = props.isDarkMode;
  let setDarkMode = props.setDarkMode;
  return (
    <div className="wrapper">
      <img className="profile-pic" src={data.image} alt="" />
      <div className="image-background"></div>
      <div className={`card ${isDarkMode ? "" : "light-mode"}`}>
        <div className="ui-mode" onClick={() => setDarkMode(!isDarkMode)}>
          {isDarkMode ? (
            <MdOutlineLightMode />
          ) : (
            <MdDarkMode style={{ color: "black" }} />
          )}
          <div className="ui-mode-underline"></div>
        </div>
        <div className="name-heading">
          <h1 className="name">{data.name}</h1>
          <p className="job">{data.job}</p>
        </div>

        <div className="text-field">
          <FaQuoteLeft />
          <p className="description">{data.text}</p>
          <FaQuoteRight />
        </div>
      </div>
    </div>
  );
};
