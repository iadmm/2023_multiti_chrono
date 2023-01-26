import React, { useState } from "react";
import SlideDisplay from "./components/SlideDisplay.jsx";
import FinalCountdown from "./components/FinalCoutdown.jsx";
import Countdown from "react-countdown";
import Renderer from "./components/Renderer.jsx";

let currentTime = new Date();
let startTime = new Date("2023-01-27T20:00:00");
let endTime = new Date("2023-01-29T18:00:00");

import items from "../../../data/data.json";

const Player = () => {

  const [hasInteracted, setInteraction] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  if (!hasInteracted) {
    return <button onClick={() => setInteraction(true)}>Unmute</button>;
  }

  const goToNextSlide = ()=>{
      setCurrentSlideIndex((value)=>{
          if(items[value+1]){
              return value+1
          }
          return items.length;
      })
  }

  const currentSlide = items[currentSlideIndex] ? items[currentSlideIndex] : null;
  return (
    <div className="l-container">
      <button
        onClick={goToNextSlide}
      >
        Play next slide
      </button>
      <div className="c-pagesection">
        <div className="c-player">
          <SlideDisplay goToNextSlide={goToNextSlide} slide={currentSlide} />
          <FinalCountdown startTime={startTime} endTime={endTime}/>
          <h1 className="c-timer_title">
            <Countdown
              daysInHours={true}
              zeroPadTime={2}
              date={endTime}
              renderer={Renderer}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Player;
