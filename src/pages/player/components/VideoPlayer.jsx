import ReactPlayer from "react-player";
import React from "react";

const VideoPlayer = ({slide}) => {
    return <ReactPlayer url={slide.value} width="100%" height="100%" playing/>
}

export default VideoPlayer;