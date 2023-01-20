import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import "./index.css";
import Admin from "./components/pages/admin/Admin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Admin />,
  },
  {
    path: "/admin",
    element: <div>Admin!</div>,
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
