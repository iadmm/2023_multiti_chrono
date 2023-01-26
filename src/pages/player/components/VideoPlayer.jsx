import ReactPlayer from "react-player";
import React from "react";

<<<<<<< HEAD
const VideoPlayer = ({ slide, goToNextSlide }) => {
  return (
    <ReactPlayer
      url={slide.value}
      width="100%"
      height="100%"
      playing
      onEnded={goToNextSlide}
    />
  );
};
=======
const VideoPlayer = ({slide, goToNextSlide, maxLength, loop = false}) => {

    function onProgress({playedSeconds}) {
        console.log(playedSeconds)
        if (playedSeconds > maxLength) {
            goToNextSlide();
        }

    }

    return <ReactPlayer url={slide.value} width="100%" height="100%" playing onEnded={goToNextSlide}
                        onProgress={onProgress} loop={loop}/>
}
>>>>>>> 90eefb247d8fee167a591404942e6a0fc95ab87e

export default VideoPlayer;
