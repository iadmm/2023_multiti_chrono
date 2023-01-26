import React from 'react';

const User = () => {
    return (
        <div className='divcontainer l-container l-container--copy'>
            <form className='formflex'>
                <p className='text-label'>Titre de votre contenu :</p>
                <label> 
                    <input type="text" name="URL" />
                </label>
                <p className='text-label'>Collez l'URL de l'image, du GIF ou de la vidéo Youtube ici :</p>
                <label> 
                    <input type="text" name="URL" />
                </label>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default User;