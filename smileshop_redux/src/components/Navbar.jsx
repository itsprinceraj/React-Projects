import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useState } from "react";

export const Navbar = () => {
  const cart = useSelector((state) => state.cart.value);
  const [lightMode, setLightMode] = useState(false);
  const toggleFunc = () => {
    setLightMode(!lightMode);
  };
  return (
    <div className="bg-blue-950 text-xl  ">
      <div className=" flex justify-between items-center m-auto  max-w-6xl  ">
        <NavLink to="/">
          <div className=" py-3 px-4 ">
            <img
              src="/assets/logo.png"
              alt=" shopping logo"
              style={{ width: 150, objectFit: "contain" }}
            />
          </div>
        </NavLink>

        <div className=" relative flex gap-8 justify-center items-center px-4  ">
          <div className=" text-2xl cursor-pointer " onClick={toggleFunc}>
            {lightMode ? <MdOutlineDarkMode /> : <MdLightMode />}
          </div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            {cart.length > 0 && (
              <div className=" cart-val flex items-center justify-center text-xs text-white font-semibold text-center rounded-[50%]  h-4 w-4 bg-green-600 absolute -top-1  right-3.5  animate-bounce ">
                {cart.length}
              </div>
            )}
            <FaShoppingCart />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
