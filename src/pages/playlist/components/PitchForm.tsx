import React, { useEffect, useState } from "react";

const PitchForm = () => {
  const [pitch, setPitchValue] = useState(0);
  const [rate, setRateValue] = useState(0);

  useEffect(() => {
    const localPitch = Number(localStorage.getItem("pitch"));
    setPitchValue(localPitch);
    const localRate = Number(localStorage.getItem("rate"));
    setRateValue(localRate);
  });

  function setPitch(number: number) {
    localStorage.setItem("pitch", number.toString());
    setPitchValue(number);
  }

  function setRate(number: number) {
    localStorage.setItem("rate", number.toString());
    setRateValue(number);
  }

  return (
    <div>
      <div className={"flex items-center gap-4"}>
        <span>Pitch</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={pitch}
          onChange={(e) => setPitch(Number(e.target.value))}
        />
        <span>{pitch}</span>
      </div>
      <div className={"flex items-center gap-4"}>
        <span>Rate</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={pitch}
          onChange={(e) => setRate(Number(e.target.value))}
        />
        <span>{rate}</span>
      </div>
    </div>
  );
};

export default PitchForm;
