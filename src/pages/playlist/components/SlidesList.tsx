import React, { useContext } from "react";
import { Slide } from "./Slide";
import Playlist = Multiti.Playlist;
import SlideDoc = Multiti.Slide;
export function SlidesList({
  playlist,
  onSlideClick,
  onSlideDelete,
}: {
  playlist: Playlist;
  onSlideClick: (slide: SlideDoc) => void;
  onSlideDelete: (slide: SlideDoc) => void;
}) {
  return (
    <ul>
      {playlist.slides.map((slide) => (
        <li key={slide._id} className="mb-3">
          <Slide
            slide={slide}
            onSlideClick={onSlideClick}
            onSlideDelete={onSlideDelete}
          />
        </li>
      ))}
    </ul>
  );
}
