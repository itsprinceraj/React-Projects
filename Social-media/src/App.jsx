import { useContext, useState } from "react";

import "./App.css";
import { CreatePost } from "./components/CreatePost";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Sidebar from "./components/Sidebar";
import { PostList } from "./components/PostList";
import { Dashboard } from "./components/Dashboard";
import { PostContext } from "./store/Postprovider";

function App() {
  const [currentTab, setCurrentTab] = useState("Home");

  // const { postItems } = useContext(PostConstruct);

  const hadleGotoCreatePost = (tabname) => {
    setCurrentTab(tabname);
  };

  const handleOnClick = (tabname) => {
    setCurrentTab(tabname);
  };

  // if(currentTab === "Home"){
  //   return <PostList/>
  // }
  //  if(currentTab === "Dashboard"){
  //   return <Dashboard/>
  // }
  // if(currentTab === "Create Post"){
  //   return <CreatePost/>
  // }

  return (
    <PostContext>
      <div className="app-container">
        <Sidebar
          selectedTab={currentTab}
          setSelectedTab={handleOnClick}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          <div className="post-box">
            {currentTab === "Home" && (
              <PostList setSelectedTab={hadleGotoCreatePost} />
            )}
            {currentTab === "Create Post" && <CreatePost />}
            {currentTab === "Dashboard" && <Dashboard />}
          </div>
          <Footer></Footer>
        </div>
      </div>
    </PostContext>
  );
}

export default App;
