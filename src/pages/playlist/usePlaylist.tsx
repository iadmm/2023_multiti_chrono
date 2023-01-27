import React, { useContext, useEffect, useState } from "react";
import Slide = Multiti.Slide;
import { Socket } from "../../lib/socket";
import { useParams } from "react-router";
import { useQuery, useQueryClient } from "react-query";
import { deleteSlide, getPlaylist } from "../../lib/queries";
import Playlist = Multiti.Playlist;

const usePlaylist = () => {
  const { playlistId } = useParams();
  const { isLoading, data: playlist } = useQuery<Playlist>(
    ["playlists", playlistId],
    () => getPlaylist(playlistId!)
  );
  const socket = useContext(Socket);
  async function onSlideClick(slide: Slide) {
    socket.emit("play_slide", { playlistId, slideId: slide._id });
  }

  const [isConnected, setIsConnected] = useState(socket.connected);
  const queryClient = useQueryClient();
  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("slide_playing", () => {
      queryClient.invalidateQueries(["playlists", playlistId]);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);
  //

  function goToNextSlide() {
    console.log("go to next slide");
    socket.emit("play_next_slide", { playlistId });
  }

  async function onSlideDelete(slideId: Slide) {
    playlistId && await deleteSlide(playlistId, slideId._id);
    queryClient.invalidateQueries(["playlists", playlistId]);
  }
  return {
    onSlideClick,
    isLoading,
    playlist,
    goToNextSlide,
    onSlideDelete,
  };
};

export default usePlaylist;
