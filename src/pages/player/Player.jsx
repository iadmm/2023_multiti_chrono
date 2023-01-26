import React, { useState } from "react";
import SlideDisplay from "./components/SlideDisplay.jsx";
import FinalCountdown from "./components/FinalCoutdown.jsx";
import Countdown from "react-countdown";
import Renderer from "./components/Renderer.jsx";

let currentTime = new Date();
let startTime = new Date("2023-01-27T20:00:00");
let endTime = new Date("2023-01-29T18:00:00");

const Player = () => {
  const [hasInteracted, setInteraction] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(null);
  if (!hasInteracted) {
    return <button onClick={() => setInteraction(true)}>Unmute</button>;
  }
  return (
    <div className="l-container">
      <button
        onClick={() =>
          setCurrentSlide({
            title: "coucou la vid",
              type:"video",
            value: "https://www.youtube.com/watch?v=QBBLxrvOmqw",
          })
        }
      >
        Play video
      </button>
      <button
        onClick={() =>
          setCurrentSlide({
            title: "coucou l'image",
              type:"image",
            value: "https://www.voxygen.fr/fr/img/portraits/grid-c-2.jpg",
          })
        }
      >
        Play image
      </button>

      <div className="c-pagesection">
        <div className="c-player">
          {currentSlide && <SlideDisplay slide={currentSlide} />}
          <FinalCountdown />
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
