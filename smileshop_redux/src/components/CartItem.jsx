import React from "react";
import { toast } from "react-toastify";
import { AiOutlineDelete } from "react-icons/ai";
import { removeFromCart } from "../redux/slice/cartSlice";
import { useDispatch } from "react-redux";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeFromCart(item.id));
    toast.warning("Item Removed from Cart");
  };

  const newDescription = `${item.description.substring(0, 75)}...`;

  return (
    <div>
      <div className="   flex gap-12 w-[90%]  m-auto  px-8  p-2  items-center  ">
        <div>
          <img
            className=" w-[200px] "
            src={item.image}
            alt="car-product-image"
          />
        </div>
        <div>
          <p className=" font-semibold text-lg   w-[350px]">{item.title}</p>
          <p className=" text-sm text-gray-300 mt-6 w-[350px] ">
            {newDescription}
          </p>
          <div className=" flex justify-between items-center ">
            <p className=" mt-6 font-semibold text-2xl text-green-500 ">
              ${item.price}
            </p>

            <button
              className=" mt-8 text-xl rounded-full w-[30px] h-[30px] bg-pink-500 text-center flex justify-center items-center "
              onClick={removeItem}
            >
              <AiOutlineDelete />
            </button>
          </div>
        </div>
      </div>
      <div className=" h-[2px] w-[82%] mt-2 flex justify-center ml-16 bg-gray-400 "></div>
    </div>
  );
};
