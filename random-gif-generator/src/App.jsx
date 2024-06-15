import { Random } from "./component/Random";
import { Tag } from "./component/Tag";

export default function App() {
  return (
    <div className="background w-screen h-full flex flex-col relative items-center pb-5">
      <h1 className="absolute bg-white rounded-xl w-11/12 text-center mt-[40px] mx-auto p-3 font-semibold text-[30px]">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full mx-auto items-center gap-y-5 mt-[30px] overflow-x-hidden">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
