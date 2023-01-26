import ReactPlayer from "react-player";
import React from "react";

const VideoPlayer = ({ slide, goToNextSlide, maxLength, loop = false }) => {
  function onProgress({ playedSeconds }) {
    console.log(playedSeconds);
    if (playedSeconds > maxLength) {
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
    />
  );
};

export default VideoPlayer;
