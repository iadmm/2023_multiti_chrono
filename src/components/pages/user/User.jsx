import React from 'react';

const User = () => {
    return (
        <div>
            <button>Log in</button>
            <form>
                <label>
                    Collez l'URL de l'image, du GIF ou de la vidéo Youtube ici : 
                    <input type="text" name="URL" />
                </label>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default User;