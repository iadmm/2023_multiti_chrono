import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./src/pages/home/Home";
import ErrorPage from "./src/pages/error/ErrorPage";
import Admin from "./src/pages/admin/Admin";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Playlist from "./src/pages/playlist/Playlist";
import SocketProvider from "./src/lib/socket";
import SlidePlayer from "./src/pages/playlist/SlidePlayer";

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
    errorElement: <ErrorPage />,
    element: <Home />,
  },

  {
    path: "/admin",
    children: [
      { path: "", element: <Admin />, index: true },
      {
        path: ":playlistId",
        element: <Playlist />,
      },
    ],
  },
  {
    path: "/player/:playlistId",
    element: <SlidePlayer />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SocketProvider>
        <RouterProvider router={router} />
      </SocketProvider>
    </QueryClientProvider>
  );
}

export default App;
