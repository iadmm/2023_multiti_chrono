import React,{useState} from 'react';

const User = () => {
    
const [title, setTitle] = useState("");
const [url, setUrl] = useState("");
const onSubmit = (evt) => {
    evt.preventDefault();
    console.log(url.indexOf("www.youtube.com/watch"));
    let urlType
    if(url.indexOf("www.youtube.com/watch")>=0){
        urlType="video"
    }else if(url.indexOf("giphy.com")>=0||url.indexOf(".gif")>=0){
        urlType="gif"
    }else if(url.indexOf(".jpg")>=0||url.indexOf(".png")>=0||url.indexOf(".webp")>=0||url.indexOf(".tif")>=0||url.indexOf(".tiff")>=0){
        urlType="img"
    }else{
        urlType="pascompris"
    }
    
    

};
    return (
        <div className='divcontainer l-container l-container--copy'>
            <form className='formflex' onSubmit={onSubmit}>
                <TextInput titre={"Titre de votre envoi :"} name={"titre"} label={title} onChange={setTitle} value={title}/>
                <TextInput titre={"Ici collez l'URL (gif, youtube, img) :"} name={"URL"} label={url} onChange={setUrl}  value={url}/>
                <div>{title}</div>
                <div>{url}</div>
                <button value="Submit" type="submit">Envoyer</button>
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



//chopper le onsubmit et faire une fonction pour voir le type de lien

export default User;