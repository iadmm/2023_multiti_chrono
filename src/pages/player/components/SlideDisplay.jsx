import React from "react";
import VideoPlayer from "./VideoPlayer.jsx";
import ImagePlayer from "./ImagePlayer.jsx";

const SlideDisplay = ({slide, goToNextSlide}) =>{
    if (!slide){
        return <div>Prout il n'y a rien</div>
    }
    if (slide.type == "video"){
        return <div className="c-slide_display">
            <VideoPlayer slide={slide} goToNextSlide={goToNextSlide}/>
        </div>;
    }
    return <div className="c-slide_display">
        <ImagePlayer slide={slide} goToNextSlide={goToNextSlide} />
    </div>;

}

export default SlideDisplay