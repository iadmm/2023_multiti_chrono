import React from 'react';
import List from '../../../data/data.js';

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
                    <ul className="c-waiting-list o-list-bare">
                        <li className="c-waiting-list__item">
                            <button id='js-list-dragger' className="c-waiting-list__btn">=</button>
                            <p className="c-waiting-list__title">Rick Roll</p>
                            <a href='youtube.com/1212121' className="c-waiting-list__url">youtube.com/1212121</a>
                            <button id='js-list-delete' className="c-waiting-list__btn">X</button>
                        </li>

                        <li className="c-waiting-list__item">
                            <button id='js-list-dragger' className="c-waiting-list__btn">=</button>
                            <p className="c-waiting-list__title">Rick Roll 1</p>
                            <a href='youtube.com/1212121' className="c-waiting-list__url">youtube.com/1212121</a>
                            <button id='js-list-delete' className="c-waiting-list__btn">X</button>
                        </li>
                        <li className="c-waiting-list__item">
                            <button id='js-list-dragger' className="c-waiting-list__btn">=</button>
                            <p className="c-waiting-list__title">Rick Roll 2</p>
                            <a href='youtube.com/1212121' className="c-waiting-list__url">youtube.com/1212121</a>
                            <button id='js-list-delete' className="c-waiting-list__btn">X</button>
                        </li>
                        <li className="c-waiting-list__item">
                            <button id='js-list-dragger' className="c-waiting-list__btn">=</button>
                            <p className="c-waiting-list__title">Rick Roll 3</p>
                            <a href='youtube.com/1212121' className="c-waiting-list__url">youtube.com/1212121</a>
                            <button id='js-list-delete' className="c-waiting-list__btn">X</button>
                        </li>
                        <li className="c-waiting-list__item">
                            <button id='js-list-dragger' className="c-waiting-list__btn">=</button>
                            <p className="c-waiting-list__title">Rick Roll 4</p>
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