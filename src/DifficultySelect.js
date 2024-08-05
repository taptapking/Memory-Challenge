import React from "react";
import "./style.css"

function DifficultySelect(props) {
    function setDiff(width, height, observeTime, time, lives) {
        props.handleChange("width", width)
        props.handleChange("height", height)
        props.handleChange("time", time)
        props.handleChange("observeTime", observeTime)
        props.handleChange("lives", lives)
    }
    return (
        <div>
            <button type="button" id="tutorial" onClick={() => setDiff(2, 2, 15, 45, 3)}
                style={{ 'font-size': '2em', 'background-color': 'aqua', 'border-color': 'aqua', 'border-radius': '20px', 'padding': '5px' }}>Tutorial</button>
            <button type="button" id="easy" onClick={() => setDiff(2, 3, 15, 45, 3)}
                style={{ 'font-size': '2em', 'background-color': 'greenyellow', 'border-color': 'greenyellow', 'border-radius': '20px', 'padding': '5px' }}>Easy</button>
            <button type="button" id="normal" onClick={() => setDiff(3, 3, 15, 45, 2)}
                style={{ 'font-size': '2em', 'background-color': 'yellowgreen', 'border-color': 'yellowgreen', 'border-radius': '20px', 'padding': '5px' }}>Normal</button>
            <button type="button" id="hard" onClick={() => setDiff(4, 4, 10, 30, 2)}
                style={{ 'font-size': '2em', 'background-color': 'yellow', 'border-color': 'yellow', 'border-radius': '20px', 'padding': '5px' }}>Hard</button>
            <button type="button" id="veryhard" onClick={() => setDiff(5, 5, 10, 30, 1)}
                style={{ 'font-size': '2em', 'background-color': 'crimson', 'border-color': 'crimson', 'border-radius': '20px', 'padding': '5px' }}>Very
                Hard</button>
            <button type="button" id="wtf" onClick={() => setDiff(6, 6, 7, 30, 1)}
                style={{ 'font-size': '2em', 'background-color': 'purple', 'border-color': 'purple', 'border-radius': '20px', 'padding': '5px' }}>WTF</button>
        </div>
    )
}

export default DifficultySelect