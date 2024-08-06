import React from "react";
import "./style.css"

function msToTime(duration1) {
    if (duration1 <= -1) return 0;
    var duration = duration1 * 10
    var milliseconds = Math.floor((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
function ScoreBoard(props) {
    return (
        <table id="menu" style={{
            width: '100%',
            'border-radius': '20px',
            padding: '5px',
            border: '2px solid blue',
            borderColor: ((parseInt(props.info.time) <= 1000)) && "#DC143C",
            display: (props.info.gameStarted === 0) && "none"
        }}>
            <tr>
                <td style={{
                    'text-align': 'left', width: '33%',
                    color: (!((parseInt(props.info.flash) <= 1000) && (parseInt(props.info.flash) % 2 === 0)) && 'black') || (((parseInt(props.info.flash) <= 1000) && (parseInt(props.info.flash) % 2 === 0)) && 'white'),
                    backgroundColor: (!((parseInt(props.info.flash) <= 1000) && (parseInt(props.info.flash) % 2 === 0)) && 'white') || (((parseInt(props.info.flash) <= 1000) && (parseInt(props.info.flash) % 2 === 0)) && 'crimson')
                }}>
                    <p id="p4">Lives left: {props.info.lives}</p>
                </td>
                <td style={{
                    'text-align': 'center', width: '33%', display: (props.info.observeTime >= 0) && "none",
                    color: (!((parseInt(props.info.time) <= 1100) && (parseInt(props.info.time) % 100 <= 50)) && 'black') || (((parseInt(props.info.time) <= 1100) && (parseInt(props.info.time) % 100 <= 50)) && 'white'),
                    backgroundColor: (!((parseInt(props.info.time) <= 1100) && (parseInt(props.info.time) % 100 <= 50)) && 'white') || (((parseInt(props.info.time) <= 1100) && (parseInt(props.info.time) % 100 <= 50)) && 'crimson'),
                }}>
                    <p id="p3">Time: {msToTime(props.info.time)}</p>
                </td>
                <td style={{ 'text-align': 'center', width: '33%', display: (props.info.observeTime < 0) && "none" }}>
                    <p id="p2">Observe time: {msToTime(props.info.observeTime)}</p>
                </td>
                <td style={{ 'text-align': 'right', width: '33%' }}>
                    <p id="p1">Current number: {props.info.current}</p>
                </td>
            </tr>
        </table>
    )
}

export default ScoreBoard