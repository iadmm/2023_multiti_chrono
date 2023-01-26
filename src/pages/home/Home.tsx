import React from "react";
import {
  Link,
  Navigate,
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";
import { Session } from "@supabase/gotrue-js";

const Home = () => {
  const navigate = useNavigate();
  const { session } = useRouteLoaderData("root") as { session: Session | null };
  if (session) {
    return <Navigate to={"/account"} />;
  }
  return (
    <div>
      <h1 className="u-margin-bottom-none">Multiti Jam</h1>
      <h2>2023</h2>
      <p>Creation de projets en 48h</p>
      <Link to={"/player"}>Player</Link>
    </div>
  );
};

export default Home;
