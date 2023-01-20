import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import "./index.css";
import Admin from "./components/pages/admin/Admin.jsx";
import Home from "./components/pages/home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/user",
    element: <div>User!</div>,
  },
  {
    path: "/player",
    element: <div>Player!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
