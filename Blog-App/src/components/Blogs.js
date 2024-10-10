import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Card } from "./Card";
import { Spinner } from "./Spinner";

export const Blogs = () => {
  const { posts, loader } = useContext(AppContext);
  return (
    <div className=" w-11/12 max-w-[630px] mt-14 m-20 ">
      {loader ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>No Posts Found</div>
      ) : (
        posts.map((post) => <Card key={post.id} post={post} />)
      )}
    </div>
  );
};
