import React from "react";
import {
  createBrowserRouter,
  Outlet,
  redirect,
  RouterProvider,
  useRouteLoaderData,
} from "react-router-dom";
import Home from "./src/pages/home/Home";
import Login from "./src/pages/login/Login";
import User from "./src/pages/user/User";
import Player from "./src/pages/player/Player"
import ErrorPage from "./src/pages/error/ErrorPage";

const Root = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "player",
        element: <Player />,
      },
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
