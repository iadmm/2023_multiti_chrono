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
import Player from "./src/pages/player/Player"
import ErrorPage from "./src/pages/error/ErrorPage";
import Account from "./src/pages/auth/Account";
import { getProfile, loadSession } from "./src/lib/loaders";
import Admin from "./src/pages/admin/Admin";
import VroumAdmin from "./src/pages/vroum/vroumAdmin";

const Root = () => {
  return (
    <div>
      <h1>Multiti Jam 2023</h1>
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
    loader: loadSession,
    id: "root",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "player",
        element: <Player />,
      }
    ],
  },
  {
    id: "auth",
    loader: async () => {
      const { session } = await loadSession();
      if (!session) {
        return redirect("/login");
      }
      return { session, profile: await getProfile(session) };
    },
    children: [
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/admin",
        element: <Admin />
      },
      {
        path: "/vroum",
        element: <VroumAdmin />
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
