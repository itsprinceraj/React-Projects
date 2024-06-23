import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/CounterSlice";

export const Counter = () => {
  // if you want to fetch the value of slices , then you will use useSeletor hook ;
  const count = useSelector((state) => state.counter.value);

  // useDispatch hook is used to fetch or access the value from action creators
  const dispatch = useDispatch();

  return (
    // if you want to use the reducer functions , then you will use useReducer hook
    <div
      className=" flex gap-10 justify-center items-center h-screen
      text-xl text-white "
    >
      <button
        className=" py-2 px-2 border-black rounded bg-blue-500 w-[50px] "
        onClick={() => dispatch(decrement())}
      >
        {" "}
        -{" "}
      </button>
      <span className=" w-[60px] flex justify-center items-center ">
        {count}
      </span>
      <button
        className=" py-2 px-2 border-black rounded bg-blue-500 w-[50px] "
        onClick={() => dispatch(increment())}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};
