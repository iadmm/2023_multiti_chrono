import React from "react";
import usePlaylist from "./usePlaylist";
import Player from "../player/Player";

const SlidePlayer = () => {
  const { playlist, goToNextSlide } = usePlaylist();
  if (!playlist) {
    return null;
  }
  return (
    <Player
      currentSlide={playlist.currentlyPlaying}
      goToNextSlide={goToNextSlide}
    />
  );
};

export default SlidePlayer;
