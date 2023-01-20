import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./src/components/pages/home/Home.jsx";
import Admin from "./src/components/pages/admin/Admin.jsx";
import Status from "./src/components/pages/status/Status.jsx";

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
  {
    path: "/status",
    element: <Status />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
