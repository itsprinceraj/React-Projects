import React from "react";
import framImage from "../assets/frame.png";
import { SignupForm } from "./SignupForm";
import { LoginForm } from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

export const Template = ({ data, image, setIsLoggedIn }) => {
  return (
    <div className="flex w-11/12 justify-between max-w-[830px] py-12 mx-auto gap-x-12 gap-y-0">
      <div className="w-11/12 max-w-[420px]">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
          {data.title}
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-4 ">
          <span className="text-richblack-100">{data.desc1}</span>
          <br />
          <span className="text-blue-100 italic">{data.desc2}</span>
        </p>

        {/* Render form component based on formType */}

        {data.formType === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex w-full items-center my-5 gap-x-2">
          <div className=" w-full h-[1px] bg-richblack-700  "></div>
          <p className="text-richblack-700 font-medium leading-[1.375rem] ">
            OR
          </p>
          <div className="w-full h-[1px] bg-richblack-700 "></div>
        </div>

        <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 ">
          <FcGoogle /> <p>Sign in with Google</p>
        </button>
      </div>

      {/* Render Image */}

      <div className="relative w-[340px]">
        <img
          src={framImage}
          alt="Pattern"
          height={304}
          width={358}
          loading="lazy"
        />

        <img
        className="absolute -top-4 -left-4"
          src={image}
          alt="Students"
          height={304}
          width={358}
          loading="lazy"
        />
      </div>
    </div>
  );
};
