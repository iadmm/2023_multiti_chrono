import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import { SlidesList } from "./components/SlidesList";
import { SlideForm } from "./components/SlideForm";
import { Slide } from "./components/Slide";
import Player from "../player/Player";
import usePlaylist from "./usePlaylist";
import PitchForm from "./components/PitchForm";
import { useParams } from "react-router";

const Playlist = () => {
  const { playlistId } = useParams();
  const { isLoading, playlist, onSlideClick, goToNextSlide, onSlideDelete } =
    usePlaylist({ playlistId });
  if (isLoading || !playlist) {
    return <div>Loading</div>;
  }
  //
  return (
    <div className="flex h-full">
      <div className="flex flex-col border-r border-r-slate-800 h-full w-64">
        <div className="mb-6">
          <div className="mb-8 mt-4 px-4">
            <Link
              to="/admin"
              className="flex items-center gap-2 text-slate-600 text-sm"
            >
              <ArrowLeftCircle />
              Back to playlists
            </Link>
          </div>
          <h1 className="text-2xl mb-4 px-4">Playlist</h1>
          <div className="px-4 mb-4">
            <h3 className="text-slate-600 text-sm">Name</h3>
            <h2 className="text-white text-xl">{playlist.name}</h2>
            <Link
              to={`/player/${playlist._id}`}
              className="flex items-center gap-2 text-blue-600 text-sm"
            >
              <span>View player</span>
              <ArrowRightCircle />
            </Link>
          </div>
          <div className="px-4 mb-4">
            <h3 className="text-slate-600 text-sm mb-4">Current slide</h3>
            {playlist.currentlyPlaying && (
              <Slide
                onSlideClick={onSlideClick}
                onSlideDelete={onSlideDelete}
                slide={playlist.currentlyPlaying}
              />
            )}
            {!playlist.currentlyPlaying && (
              <div className="text-red-700">Nothing is playing</div>
            )}
            <button onClick={goToNextSlide}>Play next slide</button>
          </div>
          <div className="px-4">
            <SlideForm playlist={playlist} />
          </div>
        </div>
      </div>
      <div className="border-r border-r-slate-800 h-full w-96 flex flex-col">
        <h3 className="text-xl mb-4">Slides</h3>
        <div className="rounded-md h-full overflow-y-auto flex-grow">
          {playlist.slides && !!playlist.slides.length && (
            <SlidesList
              onSlideClick={onSlideClick}
              playlist={playlist}
              onSlideDelete={onSlideDelete}
            />
          )}
          {playlist.slides && !playlist.slides.length && (
            <div className="text-red-500">This playlist is empty</div>
          )}
          {!playlist.slides && (
            <div className="text-red-500">
              This playlist doesn't have slides
            </div>
          )}
        </div>
      </div>
      <div className="flex-grow">
        <Player
          currentSlide={playlist.currentlyPlaying}
          goToNextSlide={() => console.log("go to next slide")}
        />
      </div>
    </div>
  );
};

export default Playlist;
