import React from "react";
import VideoPlayer from "./VideoPlayer.jsx";
import ImagePlayer from "./ImagePlayer.jsx";

const SlideDisplay = ({ slide, goToNextSlide }) => {
  if (slide.type === "video") {
    return (
      <div className="c-slide_display h-full">
        <VideoPlayer
          slide={slide}
          goToNextSlide={goToNextSlide}
          maxLength={60*4}
        />
      </div>
    );
  }
  return (
    <div className="c-slide_display h-full">
      <ImagePlayer slide={slide} goToNextSlide={goToNextSlide} />
    </div>
  );
};

export default SlideDisplay;
