import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// take instance of createContext ---
// name must be in capital letters
export const AppContext = createContext();

// create a function of contextProvider and export it ----
// ******context provider name must start with capital letters;
export const ContextProvider = ({ children }) => {
  // list all the states and hooks you want to use and wrap app component iside it
  const [loader, setLoader] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState([]);
  const navigate = useNavigate();

  // add dat to this centralised data center aka context;
  const fetchData = async (page = 1, tag = null, category) => {
    // took a default value in case of any error while fetching pages
    let url = `${baseUrl}?page=${page}`;
    if (tag) {
      url += `&tag=${tag}`;
    }
    if (category) {
      url += `&category=${category}`;
    }
    try {
      setLoader(true);
      const { data } = await axios.get(url);
      console.log(data);
      setPages(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
      setLoader(false);
    } catch (err) {
      console.log("Error While fetching the data form api", err);
      setPages(1);
      setPosts([]);
      setTotalPages(null);
    }
  };

  // create function to hadle the pages
  const handlePages = (page) => {
    navigate({ search: `?page=${page}` });
    setPages(page);
    console.log(`fetching data of particular ${page}:`, fetchData(page));
  };

  // create a value object
  const value = {
    loader,
    setLoader,
    posts,
    setPosts,
    page,
    setPages,
    totalPages,
    setTotalPages,
    fetchData,
    handlePages,
  };

  // return context with Porvider Object and pass  {value} as props and also write {children} for children access;
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// setup is completed. Now you can add whatever data into it and use it insid any component whi the help of useContext hook
