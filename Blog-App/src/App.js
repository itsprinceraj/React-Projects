import React, { useContext, useEffect } from "react";
import { Header } from "./components/Header";
import { Blogs } from "./components/Blogs";
import { Pagination } from "./components/Pagination";
import { AppContext } from "./context/AppContext";

export const App = () => {
  const { fetchData, loader, setLoader } = useContext(AppContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" w-full h-full flex flex-col justify-center items-center  ">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
};

export default App;
