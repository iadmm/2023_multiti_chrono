import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1 className="u-margin-bottom-none">Multiti Jam</h1>
            <h2>2023</h2>
            <p>Creation de projets en 48h</p>
            <Link to={'/login'}>Login</Link>
        </div>
    );
};

export default Home;