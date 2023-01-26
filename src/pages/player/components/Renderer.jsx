// Renderer callback with condition
import React from "react";

// Random component
const Completion = () => <span>Jam Is Over ! Congrats</span>;
const NotStarted = () => <span>La Jam n'a pas encore commencé.</span>;
const Soon = () => <span>La jam va commencer dans </span>

const Renderer = ({days, hours, minutes, seconds, completed}) => {
    if (completed) {
        // Render a completed state
        return <Completion/>;
    } else {
        // Render a countdown
        return (
            <span>
        {days} jours {hours}h : {minutes}m : {seconds}s
      </span>
        );
    }
};

export default Renderer;