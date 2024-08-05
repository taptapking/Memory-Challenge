import React from "react";
import "./style.css"

function TimeSkipButton(props) {
    return (
        <button type="button" onClick={props.skipCountdown} style={{ display: ((props.gameStarted === 0) || (props.countdownSkipped !== 0)) && "none" }}
            className="time-skip-button">Skip countdown</button>
    )
}

export default TimeSkipButton