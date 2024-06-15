import { useState, useEffect } from "react";

import axios from "axios";
export const useGif = (tag) => {
  // why we need custom Hook
  // when we write a component, their is no limit of the length of jsx code . but the logic code that must be very less so that it is optimised

  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  const [loader, setLoader] = useState(false);

  const [gif, setGif] = useState("");

  const fetchData = async () => {
    setLoader(true);
    let url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    let { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    let gifSource = data.data.images.downsized_large.url;
    setGif(gifSource);
    setLoader(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loader, fetchData };
};
