import React from "react";
import VideoPlayer from "./VideoPlayer.jsx";
import ImagePlayer from "./ImagePlayer.jsx";

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

const SlideDisplay = ({slide}) =>{
    if (slide.type == "video"){
        return <div className="c-slide_display">
            <VideoPlayer slide={slide}/>
        </div>;
    }
    return <div className="c-slide_display">
        <ImagePlayer slide={slide} />
    </div>;

}




export default SlideDisplay