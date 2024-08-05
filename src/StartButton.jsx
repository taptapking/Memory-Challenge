import React from "react";
import "./style.css"

function StartButton(props) {
    return (
        <button type="button" onClick={props.observe}
            className="start-button">Start</button>
    )
}

export default StartButton