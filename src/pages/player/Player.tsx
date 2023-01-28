import React, { useState } from "react";
import SlideDisplay from "./components/SlideDisplay.jsx";
import FinalCountdown from "./components/FinalCoutdown.js";
import Countdown from "react-countdown";
import Renderer from "./components/Renderer.jsx";
import Slide = Multiti.Slide;
import "../../sass/main.scss";

let currentTime = new Date();
let startTime = new Date("2023-01-27T20:00:00");
let endTime = new Date("2023-01-29T18:00:00");

interface PlayerProps {
  currentSlide: Slide;
  goToNextSlide: any;
}

const Player = ({ currentSlide, goToNextSlide }: PlayerProps) => {
  const [hasInteracted, setInteraction] = useState(false);

  if (!hasInteracted) {
    return <button onClick={() => setInteraction(true)}>Unmute</button>;
  }

  return (
    <div className="h-full w-full p-10 flex items-stretch flex-col">
      <div className="c-player flex-grow">
        <SlideDisplay goToNextSlide={goToNextSlide} slide={currentSlide} />
      </div>
      <div>
        <FinalCountdown startTime={startTime} endTime={endTime} />
        <h1 className="c-timer_title text-center">
          <Countdown
            daysInHours={true}
            zeroPadTime={2}
            date={endTime}
            renderer={Renderer}
          />
        </h1>
      </div>
    </div>
  );
};

export default Player;
