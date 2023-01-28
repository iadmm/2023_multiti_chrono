import { useEffect, useState } from "react";
import { differenceInHours, differenceInMinutes } from "date-fns";
import { useInterval } from "usehooks-ts";

const synth = window.speechSynthesis;
let voices = [];
voices = synth.getVoices();
const voice = voices.find((voice) =>
  voice.lang.toLocaleLowerCase().includes("fr")
);
const bypass = false;

interface FinalCountDownProps {
  startTime: Date;
  endTime: Date;
}

const FinalCountdown = ({ startTime, endTime }: FinalCountDownProps) => {
  const [lastHour, setLastHour] = useState(0);
  useInterval(() => {
    const nowHour = new Date().getHours();
    console.log(lastHour, nowHour);
    if (
      differenceInMinutes(endTime, startTime) % 60 === 0 &&
      lastHour !== nowHour
    ) {
      let value = `Il reste ${differenceInHours(new Date(), endTime)} heures`;
      const speakUp = new SpeechSynthesisUtterance(value);
      if (voice) {
        speakUp.voice = voice;
        speakUp.pitch = 4;
        speakUp.rate = 0.02;
      }
      synth.speak(speakUp);
      setLastHour(nowHour);
    }
  }, 5000);

  return null;
};

export default FinalCountdown;
