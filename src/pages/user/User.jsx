import React,{useState} from 'react';

const User = () => {
const [title, setTitle] = useState("");
const [url, setUrl] = useState("");
    return (
        <div className='divcontainer l-container l-container--copy'>
            <form className='formflex'>
                <TextInput titre={"Titre de votre envoi :"} name={"titre"} label={title} onChange={setTitle} value={title}/>
                <TextInput titre={"Ici collez l'URL (gif, youtube, img) :"} name={"URL"} label={url} onChange={setUrl}  value={url}/>
                <div>{title}</div>
                <div>{url}</div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

const TextInput = ({titre, label, name, value, onChange}) => {
    const onInputChange = (evt) => {
        onChange(evt.target.value);
    };
    return(
        <div className='labelContainer'>
            
            <label htmlFor={name}>{titre}</label> 
            <input id={name} type="text" name={name} value={value} onChange={onInputChange}/>
            
        </div>);

};

export default User;