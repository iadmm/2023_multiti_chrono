import React from 'react';

const Login = () => {
    return (
        <div>
            <form>
              <label>
                Prenom
                <input
                  name="prenom"
                  type="text"
                />
              </label>
              <label>
                Nom
                <input
                  name="nom"
                  type="text"
                />
              </label>
              <label>
                Équipe
                <input
                  name="equipe"
                  type="text"
                />
              </label>
              <label>
                Password
                <input
                  name="password"
                  type="password"
                />
              </label>
              <button type="submit">Log in</button>
            </form>
        </div>
    );
};

export default Login;