import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";
export const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex justify-evenly items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="" height={32} width={160} loading="lazy" />
      </Link>

      <nav>
        <ul className="text-richblack-100 flex gap-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* show 4 buttons on UI with condition */}

      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Login
            </button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/Signup">
            <button className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Sign Up
            </button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/">
            <button
              className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out successfully");
              }}
            >
              Logout
            </button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
