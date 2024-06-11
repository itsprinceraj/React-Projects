import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PostList } from "./components/PostList.jsx";
import { CreatePost } from "./components/CreatePost.jsx";
import { Dashboard } from "./components/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PostList />,
      },
      { path: "/create-post", element: <CreatePost /> },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
