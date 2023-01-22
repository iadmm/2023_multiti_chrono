import React, {useEffect, useState} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/components/pages/home/Home.jsx";
import Admin from "@/components/pages/admin/Admin.jsx";
import Status from "@/components/pages/status/Status.jsx";
import Login from "@/components/pages/auth/Login.jsx";
import Account from "@/components/pages/auth/Account.jsx";
import {supabase} from "@/components/pages/auth/supabaseClient.js";

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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/account",
    element: <Account />,
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

// const App = () => {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// };


function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
      <div className="container" style={{ padding: '50px 0 100px 0' }}>
        {!session ? <Login /> : <Account key={session.user.id} session={session} />}
      </div>
  )
}

export default App;
