import { useDispatch, useSelector } from "react-redux";
import { addTocart, removeFromCart } from "../redux/slice/cartSlice";
import { toast } from "react-toastify";
export const Products = ({ post }) => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  // button functionality
  const addItem = () => {
    dispatch(addTocart(post)); // here we have passed an argument to reducer function , if we want to access thin in our slice , then we need to use action.payload
    toast.success("Item Added to Cart");
    console.log("item added");
  };

  const removeItem = () => {
    dispatch(removeFromCart(post.id));
    toast.warning("Item Removed from Cart");
  };

  // slicing the descripiton
  const newDescription = `${post.description.substring(0, 52)}...`;
  const newTitle = `${post.title.substring(0, 18)}...`;
  return (
    <div className=" product flex flex-col justify-between items-center hover:scale-110 transition duration-200 ease-in  gap-3  px-2 py-4 mt-6 rounded-xl  outline-slate-400 ">
      <div>
        <p className=" font-bold text-xl text-left ">{newTitle}</p>
      </div>
      <div>
        <p className=" text-sm mb-2 w-40 text-left text-gray-300 ">{newDescription}</p>
      </div>
      <div className=" h-[200px] ">
        <img src={post.image} alt="product-image" className=" h-full w-full "/>
      </div>
      <div className=" flex justify-between gap-8  px-1 mt-3 w-full  items-center ">
        <p className=" text-green-500 font-semibold text-lg  text-start">
          ${post.price}
        </p>
        {cart.some((p) => p.id == post.id) ? (
          <buton
            className=" cursor-pointer border border-gray-100 rounded-2xl px-2 py-1 "
            onClick={removeItem}
          >
            Remove Item
          </buton>
        ) : (
          <buton
            className=" cursor-pointer border border-gray-100 rounded rounded-2xl px-2 py-1 "
            onClick={addItem}
          >
            Add to cart
          </buton>
        )}
      </div>
    </div>
  );
};
