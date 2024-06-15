import React from "react";
import { useGif } from "../customHook/useGif";
import { useState } from "react";
import { Spinner } from "./Spinner";
export const Random = () => {
  //  all the logic is replaced by a custom hook
  const { gif, loader, fetchData } = useGif();

  // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  // //   console.log(API_KEY);

  // const [gif, setGif] = useState("");

  // // add loader state
  // const [loader, setLoader] = useState(false);

  // // add cool down period to limit api call
  // //   const [cooldown, setCooldown] = useState(false);

  // // always make an api call with async function only and use try catch block also

  // const fetchData = async () => {
  //   setLoader(true);
  //   let url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   let { data } = await axios.get(url); // http request is made using axios
  //   // when making a request with axios , there is no need to convert the output in json format . it does it automatically
  //   let gifSource = data.data.images.downsized_large.url;
  //   setLoader(false);
  //   setGif(gifSource);
  //   //   setCooldown(true);
  //   //   setTimeout(() => setCooldown(false), 3000); // setCooldown period false after  5 seconds;
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className=" bg-green-500 w-1/2 h-full  flex flex-col items-center gap-y-5  mt-[100px] rounded-lg border-2  border-gray-600  ">
      <h1 className=" mt-2 text-xl underline font-semibold "> A RANDOM GIF</h1>

      {loader ? <Spinner /> : <img src={gif} widthd="450" alt="" />}
      <button
        onClick={() => fetchData()}
        className=" w-10/12 bg-white text-lg  p-1 mb-5 rounded-lg "
      >
        {" "}
        Generate
      </button>
    </div>
  );
};
