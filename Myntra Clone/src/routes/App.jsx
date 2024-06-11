// import "./App.css";
import { FetchItems } from "../Components/FetchItems";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Loader } from "../Components/Loader";

function App() {
  const fetchStatus = useSelector((state) => state.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <Loader /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
