import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
// import { Toaster } from "react-hot-toast";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ToastContainer 
      position="bottom-right"
      autoClose={1000}
      theme= "dark"/>
    </Provider>
  </BrowserRouter>
);
