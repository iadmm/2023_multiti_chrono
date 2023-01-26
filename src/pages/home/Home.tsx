import React from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

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
