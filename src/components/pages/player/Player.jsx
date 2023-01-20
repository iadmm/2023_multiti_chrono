import React from 'react';
import Countdown from "react-countdown";

let currentTime = new Date ()
let startTime = new Date(2023, 1, 27, 20, 0, 0 );
let endTime = new Date(2023, 1, 29, 18, 0, 0 );

let fullTime = endTime - startTime;
let remainingTime = endTime - currentTime;

console.log(remainingTime)
const Player = () => {
    return (
        <div>
            <img src="/assets/img/Capture.PNG" alt="#"/>
            <SlideDisplay/>
            <h1>
                <Countdown
                date={Date.now() + remainingTime}
                renderer={Renderer}
            /></h1>
        </div>
    );
};

setInterval(() => {
    currentTime = new Date();
    console.log(currentTime)
}, 1000);

let slideUrl;

const SlidePicker = () => {
    switch (slideInput.type){
        case "video" : slideUrl = slideInput.url + '.mp4'
            break;
        case "image" : slideUrl = slideInput.url + '.png'
            break;
        case "gif" : slideUrl = slideInput.url + '.gif'
            break;
        default : console.log("format error")
    }
}

const SlideDisplay = () => <h2>HH</h2>


// Random component
const Completion = () => <span>Jam Is Over ! Congrats</span>;
const NotStarted = () => <span>La Jam n'a pas encore commencée.</span>;

// Renderer callback with condition
const Renderer = ({hours, minutes, seconds, completed}) => {
    if (completed)
    {
        // Render a completed state
        return <Completion/>;
    }
    // else if(currentTime < startTime){
    //     return <NotStarted/>
    // }
    else
    {
        // Render a countdown
        return <span>La Jam se termine dans : {hours}:{minutes}:{seconds}</span>;
    }
};


export default Player;