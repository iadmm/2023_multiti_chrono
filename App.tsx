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
import ErrorPage from "./src/pages/error/ErrorPage";
import { supabase } from "./src/pages/auth/supabaseClient";
import Account from "./src/pages/auth/Account";
import { getProfile, loadSession } from "./src/lib/loaders";

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
    ],
  },
  {
    path: "/account",
    loader: async () => {
      const { session } = await loadSession();
      if (!session) {
        return redirect("/login");
      }
      return { session, profile: await getProfile(session) };
    },
    element: <Account />,
  },
    
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
