import React from "react";
import { SlideForm } from "../playlist/components/SlideForm";
import usePlaylist from "../playlist/usePlaylist";

const Home = () => {
  const { playlist } = usePlaylist({ playlistId: "current" });
  if (!playlist) {
    return null;
  }
  return (
    <div className="h-full w-full flex items-center justify-center multiti">
      <div className="w-96">
        <h1 className="mb-6 text-xl">Multiti Jam</h1>
        <SlideForm playlist={playlist} />
      </div>
    </div>
  );
};

export default Home;
