import React from 'react';
import WaitingList from './components/WaitingList';
import items from "../../../data/data.json";


//react sortable
//sortable js
//anything sortable

const Admin = () => {
    return (
        <div className='l-container'>
            <div className="c-pagesection c-admin">
                <div className="c-admin__video-section">
                    <img className='o-fluidimage' src="https://imgs.smoothradio.com/images/191589?width=1200&crop=16_9&signature=GRazrMVlAISqkcXrrNA6ku356R0=" alt="Video" />
                    <form className="c-admin__form">
                        <label htmlFor="url">Collez l’URL de l’image, du GIF ou de la vidéo Youtube ici :</label>
                        <input className='c-admin__url' type="text" id="url" name="url" />
                        <input className='c-admin__cta' type="submit" value="Submit" />
                    </form>
                </div>
                <div className="c-admin__list-section">
                    <h2 className="c-admin__list-title">Liste d’attente</h2>
                    <WaitingList items={items} />
                </div>
                
            </div>
        </div>
    );
};

export default Admin;