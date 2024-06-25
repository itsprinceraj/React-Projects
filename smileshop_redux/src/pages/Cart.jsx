import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../components/CartItem";
import { NavLink } from "react-router-dom";
export const Cart = () => {
  // we are managing the state of cart by usin cartSlice
  const cart = useSelector((state) => state.cart.value);
  let amountVar = cart.reduce((accumulator, currVal) => {
    return accumulator + currVal.price;
  }, 0);
  const [totalAmount, setTotalAmount] = useState(0);
  console.log(cart);
  useEffect(() => {
    setTotalAmount(amountVar);
  }, [cart]);
  return (
    <div>
      {cart.length !== 0 ? (
        <div className=" my-8 flex justify-around max-w-7xl m-auto"> 
          <div>
            {cart.map((item, index) => (
              <CartItem item={item} key={index} />
            ))}
          </div>

          {/* summary layout */}

          <div className=" flex flex-col h-auto justify-stretch ">
            <p className=" text-green-500 uppercase font-semibold text-xl ">Your Cart</p>
            <p className=" text-green-500 uppercase text-5xl mb-4 font-bold ">Summary</p>
            <p className=" font-semibold mt-4 mb-2 ">
              Total Items: <span>{cart.length}</span>
            </p>

            <div className=" flex flex-col  ">
              <p>
                Total Amount: <span>${totalAmount}</span>
              </p>
              <button className=" w-full p-2 text-2xl rounded-md bg-green-500  mt-2 ">Checkout Now!</button>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col justify-center items-center h-screen gap-6 ">
          <h2 className=" text-xl ">Your Cart is empty!</h2>
          <NavLink to="/">
            <button className=" py-2 px-6 bg-yellow-400 text-black text-xl rounded  hover:bg-green-700 hover:text-white transition-all  duration-100 ">
              Shop Now : )
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};
