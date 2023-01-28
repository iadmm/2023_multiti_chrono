import React, { useEffect, useState } from "react";
import SlideDoc = Multiti.Slide;
import { updateSlide } from "../../../lib/queries";
interface SlideProps {
  slide: Multiti.Slide;
  updateSlide: (slide: SlideDoc, payload:any) => void;

  onSlideDelete: (slide: SlideDoc) => void;
  onSlideClick: (slide: SlideDoc) => void;
}
export function Slide(props: SlideProps) {
  const [submitting, setSubmitting] = useState(false);
  const { slide } = props;

  async function setMuted() {
    setSubmitting(true);
    await props.updateSlide(slide, { muted: !slide.muted });
    setSubmitting(false);
  }

  return (
    <div className="py-2 px-4 rounded-md bg-slate-800 flex items-start gap-2 relative">
      <div className="flex-shrink-0 w-8 h-8">
        {props.slide.image && (
          <img src={props.slide.image.url} className="aspect-square w-8" />
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
        <span>
          <button onClick={setMuted}>
            {props.slide.muted ? "Muted" : "Not muted"}
          </button>
        </span>
      </div>
    </div>
  );
}
