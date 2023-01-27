import { useEffect, useState } from "react";
import { differenceInHours } from "date-fns";

const synth = window.speechSynthesis;
let voices = [];
voices = synth.getVoices();
const voice = voices.find((voice) =>
  voice.lang.toLocaleLowerCase().includes("fr")
);
const bypass = false;
const FinalCountdown = ({ startTime, endTime }) => {
  const [lastHour, setLastHour] = useState(new Date().getHours());
  useEffect(() => {
    setInterval(callback, 5000);

    function callback() {
      const nowHour = new Date().getHours();
      // console.log(nowHour, lastHour)
      // if(lastHour < nowHour){

      if (nowHour < lastHour || bypass) {
        let value = `Il reste ${differenceInHours(endTime, startTime)} heure`;
        const speakUp = new SpeechSynthesisUtterance(value);
        speakUp.voice = voice;
        speakUp.pitch = 10;
        speakUp.rate = 0.1;

        synth.speak(speakUp);
        setLastHour(nowHour);
      }
    }
  });
  return null;
};

export default FinalCountdown;
