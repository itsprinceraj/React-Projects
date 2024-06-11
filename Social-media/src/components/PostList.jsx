import { Post } from "./Post";
import { PostConstruct } from "../store/Postprovider";
import { useContext, useEffect, useState } from "react";
import { Welcomemsg } from "./Welcomemsg";
import { Loader } from "./Loader";

export const PostList = ({ setSelectedTab }) => {
  const { postItems, addInitialPosts } = useContext(PostConstruct);

  const [loader, setLoader] = useState(false);

  // useEffect(() => {
  //   const controller = new AbortController(); // As a Advance coder use this one
  //   const signal = controller.signal;
  //   setLoader(true);
  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //       setLoader(false);
  //     });
  //   return () => {
  //     // To CleanUp the useEffect Hook or To dead or cancel Request
  //     controller.abort();
  //     console.log("Code Cleanup");
  //   };
  // }, []);


  // let arr = [8,912,87,35,2,29,2]
  // const arr2 = useMemo(()=> arr.sort(), [arr]) // whenever arr will be change , then only repaint willl be done .
  // useMemo is used to memoize the calculations and returns value

  const hadleOnFetchClick = () => {
    setLoader(true)
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setLoader(false)
      });
  };

  const hadleGotoCreatePost = () => {
    setSelectedTab("Create Post");
  };

  return (
    <>
      {loader && <Loader></Loader>}
      {!loader && postItems.length === 0 && (
        <Welcomemsg
          addInitialPosts={hadleOnFetchClick}
          gotoCreatePost={hadleGotoCreatePost}
        />
      )}
      {postItems.map((template) => (
        <Post key={template.id} post={template} />
      ))}
    </>
  );
};
