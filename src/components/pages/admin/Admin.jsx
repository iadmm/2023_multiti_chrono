import React from 'react';

//react sortable

const Admin = () => {
    return (
        <div className='l-container'>
            <div className="c-pagesection c-admin">
                <div className="c-admin__video-section">
                    <img className='o-fluidimage' src="https://imgs.smoothradio.com/images/191589?width=1200&crop=16_9&signature=GRazrMVlAISqkcXrrNA6ku356R0=" alt="Video" />
                    <form className="c-admin__form">
                        <label htmlFor="url">Collez l’URL de l’image, du GIF ou de la vidéo Youtube ici :</label>
                        <input type="text" id="url" name="url" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="c-admin__list-section">
                    <h2 className="c-admin__list-title">Liste des vidéos</h2>
                    <ul className="c-waiting-list o-list-bare">
                        <li className="c-waiting-list__item">
                            <button id='js-list-dragger' className="c-waiting-list__btn">=</button>
                            <p className="c-waiting-list__title">Rick Roll</p>
                            <a href='youtube.com/1212121' className="c-waiting-list__url">youtube.com/1212121</a>
                            <button id='js-list-delete' className="c-waiting-list__btn">X</button>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Admin;