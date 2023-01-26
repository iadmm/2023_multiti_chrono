import React from 'react';

const User = () => {
    return (
        <div className='divcontainer l-container l-container--copy'>
            <form className='formflex'>
                <TextInput titre={"Titre de votre envoi :"} contenu={"titre"} />
                <TextInput titre={"Ici collez l'URL :"} contenu={"URL"} />
                
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

const TextInput = ({titre, contenu}) => {
    return(
        <div className='labelContainer'>
            <p className='text-label'>{titre}</p>
            <label> 
                <input type="text" name={contenu} />
            </label>
            </div>);

};

export default User;