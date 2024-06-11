import { useContext, useState } from "react";
import { PostConstruct } from "../store/Postprovider";

export const Welcomemsg = ({ addInitialPosts,gotoCreatePost }) => {
  // const hadleGotoCreatePost = () => {
  //   console.log("create post fired");
  //   setSelectedTab("Create Post");
  // };

  return (
    <div className="Welcomemsg">
      <h1 className="fetchpost-btn-text">Create New Post or Fetch Post</h1>
      <div className="msgbtn">
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={addInitialPosts}
        >
          Fetch post from Server
        </button>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={gotoCreatePost}
        >
          Create Post
        </button>
      </div>
    </div>
  );
};
