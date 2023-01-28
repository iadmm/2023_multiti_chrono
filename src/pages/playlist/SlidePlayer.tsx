import React from "react";
import usePlaylist from "./usePlaylist";
import Player from "../player/Player";
import {useParams} from "react-router";

const SlidePlayer = () => {
  const { playlistId } = useParams();
  const { playlist, goToNextSlide } = usePlaylist({playlistId});
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
