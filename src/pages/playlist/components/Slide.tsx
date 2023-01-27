import React from "react";
import SlideDoc = Multiti.Slide;
interface SlideProps {
  slide: Multiti.Slide;
  onSlideDelete: (slide: SlideDoc) => void;
  onSlideClick: (slide: SlideDoc) => void;
}
export function Slide(props: SlideProps) {
  return (
    <div className="py-2 px-4 rounded-md bg-slate-800 flex items-start gap-2 relative">
      <div>
        {props.slide.image && (
          <img src={props.slide.image.url} className="aspect-square w-20" />
        )}
      </div>
      <div>
        <p className="text-sm text-slate-500">{props.slide.type}</p>
        <h5 className="text-md mb-2">
          {props.slide.title || props.slide.value}
        </h5>
      </div>
      <div className="absolute hover:opacity-90 inset-0 bg-slate-800 opacity-0 flex items-center justify-center gap-4">
        <button onClick={() => props.onSlideClick(props.slide)}>Play</button>
        <button onClick={() => props.onSlideDelete(props.slide)}>Delete</button>
      </div>
    </div>
  );
}
