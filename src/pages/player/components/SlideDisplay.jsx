import React from "react";
import VideoPlayer from "./VideoPlayer.jsx";
import ImagePlayer from "./ImagePlayer.jsx";

const defaultSlides = [{
    value: "https://www.youtube.com/watch?v=HpiE45VVlf8",
    title: "fireplace"
},
    {
    value: "https://www.youtube.com/watch?v=G1IbRujko-A&t=110s",
    title: "fireplace"
},
    {
    value: "https://www.youtube.com/watch?v=ggDbDRUauzo&t=1s",
    title: "duck"
},
    {
    value: "https://www.youtube.com/watch?v=t6isux5XWH0",
    title: "rat"
},
    {
    value: "https://www.youtube.com/watch?v=hCC6ZhRS7sY",
    title: "cowboy"
},
    {
    value: "https://www.youtube.com/watch?v=hCC6ZhRS7sY",
    title: "cowboy"
},
    {
    value: "https://www.youtube.com/watch?v=L_6Q28__BCI&t=2s",
    title: "boom"
},
    {
    value: "https://www.youtube.com/watch?v=CEXAvpACHf0",
    title: "hello there"
},

];

const SlideDisplay = ({slide, goToNextSlide}) => {
    if (!slide) {
        const fakeSlideIndex = Math.floor(Math.random() * defaultSlides.length);
        console.log({fakeSlideIndex})
        const fakeSlide = defaultSlides[fakeSlideIndex];
        return <div className="c-slide_display">
            <VideoPlayer slide={fakeSlide} goToNextSlide={goToNextSlide} loop={true} maxLength={60 * 60 * 24}/>
        </div>
    }
    if (slide.type === "video") {
        return <div className="c-slide_display">
            <VideoPlayer slide={slide} goToNextSlide={goToNextSlide} maxLength={60 * 4}/>
        </div>;
    }
    return <div className="c-slide_display">
        <ImagePlayer slide={slide} goToNextSlide={goToNextSlide}/>
    </div>;

}

export default SlideDisplay