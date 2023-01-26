import React, {useEffect, useRef, useState} from 'react';
import Countdown from "react-countdown";
import ReactPlayer from "react-player";
import * as Console from "console";

let currentTime = new Date();
let startTime = new Date('2023-01-27T20:00:00');
let endTime = new Date('2023-01-29T18:00:00');

const Player = () => {
    return (
        <div className="l-container">
            <div className="c-pagesection">
                <div className="c-player">
                    <SlideDisplay/>
                    <h1>
                        <Countdown
                            daysInHours={true}
                            zeroPadTime={2}
                            date={endTime}
                            renderer={Renderer}
                        /></h1>
                </div>
            </div>
        </div>
    );
};

let slideUrl;

const SlidePicker = () => {
    switch (slideInput.type) {
        case "video" :
            slideUrl = slideInput.url + '.mp4'
            break;
        case "image" :
            slideUrl = slideInput.url + '.png'
            break;
        case "gif" :
            slideUrl = slideInput.url + '.gif'
            break;
        default :
            console.log("format error")
    }
}

const SlideDisplay = () => <div className="c-slide_display"><ImagePlayer/></div>;

const VideoPlayer = () => <ReactPlayer url='https://youtube.com/shorts/hx3mskrUHlY?feature=share' width="100%" height="100%"/>
const ImagePlayer = () => {
    const [format, setFormat] = useState(null)
    const inputEl = useRef(null);
    let imgUrl ="https://cdn.fbsbx.com/v/t59.2708-21/277118244_959883808062901_1854334059177509334_n.gif?_nc_cat=103&ccb=1-7&_nc_sid=041f46&_nc_ohc=4o-UcV7W5FsAX-d84NG&_nc_ht=cdn.fbsbx.com&oh=03_AdT4Lewv5J5iWuxf-IdGllVFSDW2mTg-3dtVWan1vl2gdg&oe=63D423AB"
    useEffect(()=> {
        const img = inputEl.current;
        const onImageLoad = ()=>{
            // console.log(img.clientWidth,img.clientHeight)
            if (img.clientWidth < img.clientHeight){
                console.log("c'est vertical maggle")
                setFormat('vertical')
            }
            else if(img.clientWidth > img.clientHeight){
                console.log("c'est horizontal maggle")
                setFormat('horizontal')
            }
            else {
                console.log("c'est une image parfaitement carrée, bravo")
                setFormat('square')
            }
        };
        img.addEventListener('load', onImageLoad);
        return ()=> {
            img.removeEventListener('load', onImageLoad)
        }
    });
    return <img ref={inputEl} className={`o-fluidimage c-player__image c-player_image--${format}`} src={imgUrl} alt=""/>


}

// Random component
const Completion = () => <span>Jam Is Over ! Congrats</span>;
const NotStarted = () => <span>La Jam n'a pas encore commencée.</span>;

// Renderer callback with condition
const Renderer = ({days, hours, minutes, seconds, completed}) => {
    if (completed) {
        // Render a completed state
        return <Completion/>;
    }
        else if(currentTime < startTime){
            return <NotStarted/>
    }
    else {
        // Render a countdown
        return <span>{days} jours {hours}h : {minutes}m : {seconds}s</span>;
    }
};


export default Player;