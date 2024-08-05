import React from "react";
import "./style.css"

function DifficultyAdjust(props) {
    //console.log(props)
    return (
        <div>
            <table style={{ 'width': '100%' }}>
                <tr>
                    <td style={{ 'text-align': 'right', 'width': '40%' }}>
                        <p id="textWidth">
                            Width
                        </p>
                        <input type="number" onchange="limiter(this,1,1);" id="width" value={props.width}
                            style={{ 'font-size': '2em', 'width': '2.5em' }} onChange={(e) => props.handleChange(Object.keys(props).at(0), e.target.value)} />
                    </td>
                    <td style={{ 'width': '20%' }}>

                    </td>
                    <td style={{ 'text-align': 'left', 'width': '40%' }}>
                        <p id="textHeight">
                            Height
                        </p>
                        <input type="number" onchange="limiter(this,1,1);" id="height" value={props.height}
                            style={{ 'font-size': '2em', 'width': '2.5em' }} onChange={(e) => props.handleChange(Object.keys(props).at(1), e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td style={{ 'text-align': 'right', 'width': '40%' }}>
                        <p id="textTime">
                            Observe time
                        </p>
                        <input type="number" onchange="limiter(this,0,0);" id="time" value={props.observeTime}
                            style={{ 'font-size': '2em', 'width': '3em' }} onChange={(e) => props.handleChange(Object.keys(props).at(3), e.target.value)} />
                    </td>
                    <td style={{ 'width': '20%' }}>
                    </td>
                    <td style={{ 'text-align': 'left', 'width': '40%' }}>
                        <p id="textLimit">
                            Time limit
                        </p>
                        <input type="number" onchange="limiter(this,0,0);" id="limit" value={props.time}
                            style={{ 'font-size': '2em', 'width': '3em' }} onChange={(e) => props.handleChange(Object.keys(props).at(2), e.target.value)} />
                    </td>
                </tr>
            </table>
            <p id="livesLimit">
                Lives:
            </p>
            <input type="number" onchange="limiter(this,1,1);" id="lives" value={props.lives} style={{ 'font-size': '2em', 'width': '2.5em' }} onChange={(e) => props.handleChange(Object.keys(props).at(4), e.target.value)}></input>
        </div>
    )
}

export default DifficultyAdjust