import React from "react";
import { useState } from "react";
import { Spinner } from "./Spinner";
import { useGif } from "../customHook/useGif";

export const Tag = () => {


  // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  // // for for managingh the state of input tag
  const [tag, setTag] = useState("Cat");

    //  all the logic is replaced by a custom hook
    const { gif, loader, fetchData } = useGif(tag);

  // // for maintaining loader state
  // const [loader, setLoader] = useState(false);

  // // for gif
  // const [gif, setGif] = useState("");

  // make an api call
  // const fetchData = async () => {
  //   setLoader(true);
  //   let url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   let { data } = await axios.get(url);
  //   let gifSource = data.data.images.downsized_large.url;
  //   setGif(gifSource);
  //   setLoader(false);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className=" bg-blue-500 w-1/2 h-full flex flex-col items-center gap-y-5  mt-[100px]  rounded-lg border-2 border-gray-600 ">
      <h1 className="uppercase  mt-2 text-xl underline font-semibold ">
        Generate {tag} Gif
      </h1>

      {loader ? <Spinner /> : <img src={gif} widthd="450" alt="" />}

      <input
        type="text"
        placeholder="Enter your tag..."
        name="tag"
        value={tag}
        className=" w-10/12  text-lg py-2 rounded-lg mb-[3px] text-center "
        onChange={(event) => setTag(event.target.value)}
      />
      <button
        onClick={() => fetchData(tag)}
        className=" w-10/12 bg-white text-lg  p-1 mb-5 rounded-lg "
      >
        {" "}
        Generate
      </button>
    </div>
  );
};
