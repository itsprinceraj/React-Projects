import React, { useEffect, useState } from "react";
import { Products } from "../components/Products";
import { Spinner } from "../components/Spinner";

export const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loader, setLoader] = useState(false);
  const [posts, setPost] = useState([]); // cause our data is comming in array of objects form

  const fetchData = async () => {
    setLoader(true);
    try {
      const result = await fetch(API_URL);
      const data = await result.json();
      console.log(data);
      setPost(data);
    } catch (err) {
      console.log(err);
      setPost([]);
    }
    setLoader(false);
  };

  // invoke every api call in useEffect hook
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="   my-16">
      {loader ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className=" grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gri max-w-6xl m-auto  px-8  p-2 space-y-10 space-x-8 gap-2">
          {posts.map((post) => (
            <Products key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div> No Products Found</div>
      )}
    </div>
  );
};
