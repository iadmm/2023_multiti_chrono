import {useEffect, useState} from "react";
import {differenceInHours} from "date-fns";




const synth = window.speechSynthesis;
let voices = [];
voices = synth.getVoices();
const voice = voices.find((voice) => voice.lang === "fr-FR" && voice.name === "Microsoft Paul - French (France)");

console.log(voices)

const FinalCountdown = ({startTime, endTime}) => {
    const [lastHour, setLastHour] = useState(new Date().getHours());
    useEffect(() => {
        setInterval(callback, 1000)

        function callback() {
            const nowHour = new Date().getHours();
            // console.log(nowHour, lastHour)
            // if(lastHour < nowHour){

            if (nowHour < lastHour) {
                let value = `Il reste ${differenceInHours(endTime, startTime)} heure`;
                const speakUp = new SpeechSynthesisUtterance(value)
                speakUp.voice = voice;
                speakUp.pitch = 4;
                speakUp.rate = 0.02;

                synth.speak(speakUp);
                setLastHour(nowHour);
            }
        }
    })
    return null;
}

export default FinalCountdown;