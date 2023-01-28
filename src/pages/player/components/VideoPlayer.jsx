import ReactPlayer from "react-player";
import React from "react";

const VideoPlayer = ({ slide, goToNextSlide, maxLength, loop = false }) => {
  function onProgress({ playedSeconds }) {
    if (playedSeconds > maxLength) {
      console.log("too long");
      goToNextSlide();
    }
  }

  return (
    <ReactPlayer
      url={slide.value}
      width="100%"
      height="100%"
      playing
      onEnded={goToNextSlide}
      onProgress={onProgress}
      loop={loop}
      muted={slide.muted}
    />
  );
};

export default VideoPlayer;
